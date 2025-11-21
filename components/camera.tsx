"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { useThree } from "@react-three/fiber"

interface CameraProps {
  onCameraClick: () => void
}

export default function Camera({ onCameraClick }: CameraProps) {
  const { scene, raycaster, mouse, camera } = useThree()
  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    // Camera body
    const bodyGeometry = new THREE.BoxGeometry(0.2, 0.15, 0.08)
    const cameraMaterial = new THREE.MeshStandardMaterial({
      color: "#333333",
      roughness: 0.5,
    })
    const body = new THREE.Mesh(bodyGeometry, cameraMaterial)
    body.position.set(-1.2, 0.92, -0.4)
    body.rotation.z = -0.3
    body.castShadow = true
    body.receiveShadow = true
    scene.add(body)
    meshRef.current = body

    // Camera lens
    const lensGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.03, 32)
    const lensMaterial = new THREE.MeshStandardMaterial({
      color: "#1a1a1a",
      metalness: 0.8,
      roughness: 0.2,
    })
    const lens = new THREE.Mesh(lensGeometry, lensMaterial)
    lens.position.set(-1.2, 0.92, -0.32)
    lens.rotation.x = Math.PI / 2
    lens.castShadow = true
    scene.add(lens)

    return () => {
      scene.remove(body, lens)
      bodyGeometry.dispose()
      lensGeometry.dispose()
      cameraMaterial.dispose()
      lensMaterial.dispose()
    }
  }, [scene])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!meshRef.current) return

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObject(meshRef.current)

      if (intersects.length > 0) {
        onCameraClick()
      }
    }

    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [camera, raycaster, mouse, onCameraClick])

  return null
}
