"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense } from "react"
import Library from "./library"
import Table from "./table"
import Cake from "./cake"
import Polaroids from "./polaroids"
import Envelope from "./envelope"
import Camera from "./camera"

interface SceneProps {
  onPolaroidClick: (polaroid: any) => void
  onEnvelopeClick: () => void
  onCameraClick: () => void
  polaroids: any[]
}

export default function Scene({ onPolaroidClick, onEnvelopeClick, onCameraClick, polaroids }: SceneProps) {
  return (
    <Canvas
      shadows
      gl={{
        antialias: true,
      }}
      dpr={typeof window !== "undefined" ? window.devicePixelRatio : 1}
    >
      <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={50} />
      <OrbitControls
        target={[0, 1, 0]}
        minDistance={3}
        maxDistance={15}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(3 * Math.PI) / 4}
      />

      {/* Lighting */}
      <ambientLight intensity={0.5} color="#fff5e6" />
      <directionalLight
        position={[5, 8, 5]}
        intensity={0.4}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-5, 5, 3]} intensity={0.2} color="#ffcc99" />

      <Suspense fallback={null}>
        <Library />
        <Table />
        <Cake />
        <Polaroids polaroids={polaroids} onPolaroidClick={onPolaroidClick} />
        <Envelope onEnvelopeClick={onEnvelopeClick} />
        <Camera onCameraClick={onCameraClick} />
      </Suspense>
    </Canvas>
  )
}
