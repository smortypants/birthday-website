"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { useThree } from "@react-three/fiber"

interface EnvelopeProps {
  onEnvelopeClick: () => void
}

export default function Envelope({ onEnvelopeClick }: EnvelopeProps) {
  const { scene, raycaster, mouse, camera } = useThree()
  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    const envelopeGeometry = new THREE.BoxGeometry(0.3, 0.2, 0.01)
    const envelopeMaterial = new THREE.MeshStandardMaterial({
      color: "#f5f5dc",
      roughness: 0.8,
    })
    const envelopeMesh = new THREE.Mesh(envelopeGeometry, envelopeMaterial)
    envelopeMesh.position.set(-1.2, 0.92, 0.7)
    envelopeMesh.rotation.z = 0.3
    envelopeMesh.castShadow = true
    envelopeMesh.receiveShadow = true
    scene.add(envelopeMesh)
    meshRef.current = envelopeMesh

    return () => {
      scene.remove(envelopeMesh)
      envelopeGeometry.dispose()
      envelopeMaterial.dispose()
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
        onEnvelopeClick()
      }
    }

    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [camera, raycaster, mouse, onEnvelopeClick])

  return null
}
