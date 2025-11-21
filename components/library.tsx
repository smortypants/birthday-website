"use client"

import { useEffect } from "react"
import * as THREE from "three"
import { useThree } from "@react-three/fiber"

export default function Library() {
  const { scene } = useThree()

  useEffect(() => {
    // Central wall
    const wallGeometry = new THREE.BoxGeometry(8, 6, 0.5)
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: "#8b6f47",
      roughness: 0.8,
    })
    const wall = new THREE.Mesh(wallGeometry, wallMaterial)
    wall.position.z = -2.4
    wall.castShadow = true
    wall.receiveShadow = true
    scene.add(wall)

    // Left bookshelf
    const leftShelfGeometry = new THREE.BoxGeometry(1.5, 5, 1)
    const shelfMaterial = new THREE.MeshStandardMaterial({
      color: "#5c4a3d",
      roughness: 0.9,
    })
    const leftShelf = new THREE.Mesh(leftShelfGeometry, shelfMaterial)
    leftShelf.position.set(-3.5, 1, -1.7)
    leftShelf.castShadow = true
    leftShelf.receiveShadow = true
    scene.add(leftShelf)

    // Right bookshelf
    const rightShelf = new THREE.Mesh(leftShelfGeometry, shelfMaterial)
    rightShelf.position.set(3.5, 1, -1.7)
    rightShelf.castShadow = true
    rightShelf.receiveShadow = true
    scene.add(rightShelf)

    const bookColors = [
      "#e8a6d0",
      "#d4534f",
      "#c41e3a",
      "#4b7bec",
      "#a29bfe",
      "#00b894",
      "#fdcb6e",
      "#fab1a0",
      "#ff7675",
      "#74b9ff",
      "#55efc4",
      "#ffeaa7",
      "#dfe6e9",
      "#2d3436",
    ]
    const meshesToRemove = [wall, leftShelf, rightShelf]

    // Books on left shelf - multiple horizontal stacks
    for (let stack = 0; stack < 3; stack++) {
      for (let col = 0; col < 5; col++) {
        const bookGeometry = new THREE.BoxGeometry(0.3, 0.6, 0.15)
        const bookMaterial = new THREE.MeshStandardMaterial({
          color: bookColors[(stack * 5 + col) % bookColors.length],
          roughness: 0.7,
        })
        const book = new THREE.Mesh(bookGeometry, bookMaterial)
        book.position.set(-3.5 + (col - 2) * 0.35, 0.4 + stack * 1.3, -1)
        book.rotation.z = (Math.random() - 0.5) * 0.1
        book.castShadow = true
        book.receiveShadow = true
        scene.add(book)
        meshesToRemove.push(book)
      }
    }

    // Books on right shelf - multiple horizontal stacks
    for (let stack = 0; stack < 3; stack++) {
      for (let col = 0; col < 5; col++) {
        const bookGeometry = new THREE.BoxGeometry(0.3, 0.6, 0.15)
        const bookMaterial = new THREE.MeshStandardMaterial({
          color: bookColors[(stack * 5 + col + 7) % bookColors.length],
          roughness: 0.7,
        })
        const book = new THREE.Mesh(bookGeometry, bookMaterial)
        book.position.set(3.5 + (col - 2) * 0.35, 0.4 + stack * 1.3, -1)
        book.rotation.z = (Math.random() - 0.5) * 0.1
        book.castShadow = true
        book.receiveShadow = true
        scene.add(book)
        meshesToRemove.push(book)
      }
    }

    // Birthday text - "Happy Birthday Riddhi" in golden cursive
    const canvas = document.createElement("canvas")
    canvas.width = 1024
    canvas.height = 256
    const ctx = canvas.getContext("2d")!
    ctx.fillStyle = "#ffffff"
    ctx.font = 'italic 100px "Brush Script MT", cursive'
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("Happy Birthday Riddhi", 512, 128)

    const texture = new THREE.CanvasTexture(canvas)
    const textGeometry = new THREE.PlaneGeometry(6, 1.5)
    const textMaterial = new THREE.MeshStandardMaterial({
      map: texture,
      emissive: "#d4af37",
      emissiveIntensity: 0.5,
      metalness: 0.3,
      roughness: 0.4,
    })
    const textMesh = new THREE.Mesh(textGeometry, textMaterial)
    textMesh.position.set(0, 2.5, -1.75)
    scene.add(textMesh)
    meshesToRemove.push(textMesh)

    return () => {
      meshesToRemove.forEach((mesh) => scene.remove(mesh))
      wallGeometry.dispose()
      leftShelfGeometry.dispose()
      textGeometry.dispose()
      wallMaterial.dispose()
      shelfMaterial.dispose()
      textMaterial.dispose()
      texture.dispose()
    }
  }, [scene])

  return null
}
