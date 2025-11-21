"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { useThree } from "@react-three/fiber"

interface Polaroid {
  id: number
  image: string
  caption: string
}

interface PolaroidsProps {
  polaroids: Polaroid[]
  onPolaroidClick: (polaroid: Polaroid) => void
}

export default function Polaroids({ polaroids, onPolaroidClick }: PolaroidsProps) {
  const { scene, raycaster, mouse, camera } = useThree()
  const meshesRef = useRef<Map<number, THREE.Mesh>>(new Map())

  useEffect(() => {
    const polaroidMaterial = new THREE.MeshStandardMaterial({
      color: "#fffdf7",
      roughness: 0.9,
    })

    // Right front corner - two polaroids
    const rightPositions = [
      { x: 1.2, z: 0.4 },
      { x: 1.8, z: 0.3 },
    ]

    // Left front corner - one polaroid (third one)
    const leftPosition = { x: -1.5, z: 0.5 }

    polaroids.forEach((polaroid, idx) => {
      const geometry = new THREE.PlaneGeometry(0.4, 0.78)
      const mesh = new THREE.Mesh(geometry, polaroidMaterial)

      let xPos, zPos
      if (idx < 2) {
        // Two polaroids on right front
        xPos = rightPositions[idx].x
        zPos = rightPositions[idx].z
      } else {
        // Third polaroid on left front
        xPos = leftPosition.x
        zPos = leftPosition.z
      }

      mesh.position.set(xPos, 0.92, zPos)
      mesh.rotation.z = (Math.random() - 0.5) * 0.2
      mesh.castShadow = true
      mesh.receiveShadow = true

      scene.add(mesh)
      meshesRef.current.set(polaroid.id, mesh)
    })

    return () => {
      meshesRef.current.forEach((mesh) => scene.remove(mesh))
      polaroidMaterial.dispose()
    }
  }, [scene, polaroids])

  // Handle polaroid clicks
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      raycaster.setFromCamera(mouse, camera)

      const meshes = Array.from(meshesRef.current.values())
      const intersects = raycaster.intersectObjects(meshes)

      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object as THREE.Mesh
        const polaroidId = Array.from(meshesRef.current.entries()).find(([, mesh]) => mesh === clickedMesh)?.[0]

        if (polaroidId) {
          const polaroid = polaroids.find((p) => p.id === polaroidId)
          if (polaroid) {
            onPolaroidClick(polaroid)
          }
        }
      }
    }

    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [camera, raycaster, mouse, polaroids, onPolaroidClick])

  return null
}
