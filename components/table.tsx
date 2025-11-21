"use client"

import { useEffect } from "react"
import * as THREE from "three"
import { useThree } from "@react-three/fiber"

export default function Table() {
  const { scene } = useThree()

  useEffect(() => {
    // Ground plane
    const groundGeometry = new THREE.PlaneGeometry(12, 8)
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: "#8b7355",
      roughness: 0.95,
    })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = 0
    ground.receiveShadow = true
    scene.add(ground)

    // Table top
    const topGeometry = new THREE.BoxGeometry(4, 0.15, 2.5)
    const tableMaterial = new THREE.MeshStandardMaterial({
      color: "#6b4423",
      roughness: 0.7,
    })
    const top = new THREE.Mesh(topGeometry, tableMaterial)
    top.position.y = 0.75
    top.castShadow = true
    top.receiveShadow = true
    scene.add(top)

    // Table legs
    const legGeometry = new THREE.BoxGeometry(0.1, 0.75, 0.1)
    const legs = []
    const positions = [
      [-1.8, 0.375, -1.0],
      [1.8, 0.375, -1.0],
      [-1.8, 0.375, 1.0],
      [1.8, 0.375, 1.0],
    ]

    positions.forEach((pos) => {
      const leg = new THREE.Mesh(legGeometry, tableMaterial)
      leg.position.set(pos[0], pos[1], pos[2])
      leg.castShadow = true
      leg.receiveShadow = true
      scene.add(leg)
      legs.push(leg)
    })

    return () => {
      scene.remove(ground, top, ...legs)
      groundGeometry.dispose()
      topGeometry.dispose()
      legGeometry.dispose()
      groundMaterial.dispose()
      tableMaterial.dispose()
    }
  }, [scene])

  return null
}
