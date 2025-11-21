"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { useThree } from "@react-three/fiber"

interface Candle {
  position: [number, number, number]
  isLit: boolean
}

export default function Cake() {
  const { scene, raycaster, mouse } = useThree()
  const candlesRef = useRef<Candle[]>([
    { position: [-0.3, 1.65, -0.15], isLit: true },
    { position: [0.3, 1.65, -0.15], isLit: true },
    { position: [-0.3, 1.65, 0.15], isLit: true },
    { position: [0.3, 1.65, 0.15], isLit: true },
  ])
  const [, setUpdate] = useState({})
  const meshesRef = useRef<Map<number, THREE.Object3D>>(new Map())
  const flamesRef = useRef<Map<number, THREE.Object3D>>(new Map())

  useEffect(() => {
    // Layer materials: white and pink frosting
    const whiteFrosting = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      roughness: 0.6,
      metalness: 0.1,
    })
    const pinkFrosting = new THREE.MeshStandardMaterial({
      color: "#ff69b4",
      roughness: 0.6,
      metalness: 0.1,
    })

    // Layer 1 (bottom) - white
    const layer1Geometry = new THREE.CylinderGeometry(1.2, 1.2, 0.3, 32)
    const layer1 = new THREE.Mesh(layer1Geometry, whiteFrosting)
    layer1.position.y = 0.85
    layer1.castShadow = true
    layer1.receiveShadow = true
    scene.add(layer1)
    meshesRef.current.set(0, layer1)

    // Layer 2 (middle) - pink
    const layer2Geometry = new THREE.CylinderGeometry(0.85, 0.85, 0.3, 32)
    const layer2 = new THREE.Mesh(layer2Geometry, pinkFrosting)
    layer2.position.y = 1.15
    layer2.castShadow = true
    layer2.receiveShadow = true
    scene.add(layer2)
    meshesRef.current.set(1, layer2)

    // Layer 3 (top) - white
    const layer3Geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.3, 32)
    const layer3 = new THREE.Mesh(layer3Geometry, whiteFrosting)
    layer3.position.y = 1.45
    layer3.castShadow = true
    layer3.receiveShadow = true
    scene.add(layer3)
    meshesRef.current.set(2, layer3)

    // Candles and flames
    const candleMaterial = new THREE.MeshStandardMaterial({
      color: "#fff8dc",
      roughness: 0.3,
    })

    candlesRef.current.forEach((candle, idx) => {
      // Candle body
      const candleGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.25, 16)
      const candleMesh = new THREE.Mesh(candleGeometry, candleMaterial)
      candleMesh.position.set(...candle.position)
      candleMesh.castShadow = true
      candleMesh.receiveShadow = true
      scene.add(candleMesh)
      meshesRef.current.set(100 + idx, candleMesh)

      if (candle.isLit) {
        // Flame as cone geometry (visible)
        const flameGeometry = new THREE.ConeGeometry(0.03, 0.15, 8)
        const flameMaterial = new THREE.MeshStandardMaterial({
          color: "#ffaa00",
          emissive: "#ff6600",
          emissiveIntensity: 2,
          roughness: 0.8,
        })
        const flameMesh = new THREE.Mesh(flameGeometry, flameMaterial)
        flameMesh.position.set(candle.position[0], candle.position[1] + 0.15, candle.position[2])
        flameMesh.castShadow = true
        scene.add(flameMesh)
        flamesRef.current.set(idx, flameMesh)

        // Light for the flame - reduced intensity
        const flameLight = new THREE.PointLight("#ffa500", 0.8, 2, 2)
        flameLight.position.set(candle.position[0], candle.position[1] + 0.15, candle.position[2])
        scene.add(flameLight)
        flamesRef.current.set(1000 + idx, flameLight)
      }
    })

    return () => {
      meshesRef.current.forEach((mesh) => scene.remove(mesh))
      flamesRef.current.forEach((flame) => scene.remove(flame))
      layer1Geometry.dispose()
      layer2Geometry.dispose()
      layer3Geometry.dispose()
      whiteFrosting.dispose()
      pinkFrosting.dispose()
      candleMaterial.dispose()
    }
  }, [scene])

  // small helper to animate extinguish and dispose properly
  const animateExtinguish = (flameMesh?: THREE.Object3D, flameLight?: THREE.Object3D) => {
    if (!flameMesh) return
    const duration = 220
    const start = performance.now()
    const initialScale = (flameMesh as any).scale ? (flameMesh as any).scale.clone() : new THREE.Vector3(1, 1, 1)
    const initialLightIntensity =
      flameLight && "intensity" in (flameLight as any) ? (flameLight as any).intensity : 0.8

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const s = 1 - t
      if ((flameMesh as any).scale) (flameMesh as any).scale.set(initialScale.x * s, initialScale.y * s, initialScale.z * s)
      if (flameLight && "intensity" in (flameLight as any)) {
        ;(flameLight as any).intensity = initialLightIntensity * (1 - t)
      }
      if (t < 1) requestAnimationFrame(step)
      else {
        // final remove and dispose
        if (flameMesh.parent) scene.remove(flameMesh)
        if (flameLight && flameLight.parent) scene.remove(flameLight)

        // dispose geometry/material of flame mesh if mesh
        if (flameMesh instanceof THREE.Mesh) {
          try {
            flameMesh.geometry.dispose()
          } catch {}
          try {
            ;(flameMesh.material as THREE.Material)?.dispose()
          } catch {}
        }
      }
    }

    requestAnimationFrame(step)
  }

  // Handle candle/flame clicks (click flame to blow it out)
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      const camera = scene.children.find((c) => c instanceof THREE.Camera) as THREE.Camera
      if (!camera) return

      raycaster.setFromCamera(mouse, camera)

      // collect candle bodies (keys 100..199) and flame meshes (keys 0..n in flamesRef)
      const candleEntries = Array.from(meshesRef.current.entries()).filter(([key]) => key >= 100)
      const flameEntries = Array.from(flamesRef.current.entries()).filter(([key]) => key >= 0 && key < 1000)
      const objectsToTest: THREE.Object3D[] = [
        ...candleEntries.map(([, mesh]) => mesh),
        ...flameEntries.map(([, mesh]) => mesh),
      ]

      const intersects = raycaster.intersectObjects(objectsToTest, true)

      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object

        // Check if clicked a flame mesh first
        const flameEntry = Array.from(flamesRef.current.entries()).find(([key, mesh]) => mesh === clickedMesh)
        if (flameEntry) {
          const flameKey = flameEntry[0] // this is the flame mesh key (0..n)
          const idx = flameKey
          // mark candle as unlit
          if (candlesRef.current[idx]) candlesRef.current[idx].isLit = false

          // get flame mesh and light
          const flameMesh = flamesRef.current.get(idx)
          const flameLight = flamesRef.current.get(1000 + idx)

          // animate and remove
          animateExtinguish(flameMesh, flameLight)

          flamesRef.current.delete(idx)
          if (flameLight) flamesRef.current.delete(1000 + idx)

          setUpdate({})
          return
        }

        // otherwise check if clicked the candle body
        const candleEntry = Array.from(meshesRef.current.entries()).find(
          ([key, mesh]) => mesh === clickedMesh && key >= 100,
        )
        if (candleEntry) {
          const candleKey = candleEntry[0]
          const idx = candleKey - 100
          if (candlesRef.current[idx]) candlesRef.current[idx].isLit = false

          // remove associated flame and light if present
          const flameMesh = flamesRef.current.get(idx)
          const flameLight = flamesRef.current.get(1000 + idx)
          animateExtinguish(flameMesh, flameLight)

          flamesRef.current.delete(idx)
          if (flameLight) flamesRef.current.delete(1000 + idx)

          setUpdate({})
        }
      }
    }

    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [scene, raycaster, mouse])

  return null
}
