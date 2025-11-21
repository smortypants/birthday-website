"use client"

import dynamic from "next/dynamic"
import { Suspense, useState } from "react"
import Modal from "@/components/modal"

const Scene = dynamic(() => import("@/components/scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-black flex items-center justify-center text-white">
      Loading birthday scene...
    </div>
  ),
})

export default function Home() {
  const [modalContent, setModalContent] = useState<{
    type: "polaroid" | "message" | "video"
    data?: any
  } | null>(null)

  const polaroids = [
    {
      id: 1,
      image: "/birthday-photo-1.jpg",
      caption: "Best Birthday Ever!",
    },
    {
      id: 2,
      image: "/birthday-celebration-2.jpg",
      caption: "Making Wishes Come True",
    },
    {
      id: 3,
      image: "/birthday-fun-3.jpg",
      caption: "A Day to Remember",
    },
  ]

  const handlePolaroidClick = (polaroid: (typeof polaroids)[0]) => {
    setModalContent({
      type: "polaroid",
      data: polaroid,
    })
  }

  const handleEnvelopeClick = () => {
    setModalContent({
      type: "message",
      data: null,
    })
  }

  const handleCameraClick = () => {
    setModalContent({
      type: "video",
      data: null,
    })
  }

  return (
    <main className="w-full h-screen bg-black">
      <Suspense fallback={<div>Loading...</div>}>
        <Scene
          onPolaroidClick={handlePolaroidClick}
          onEnvelopeClick={handleEnvelopeClick}
          onCameraClick={handleCameraClick}
          polaroids={polaroids}
        />
      </Suspense>
      {modalContent && (
        <Modal type={modalContent.type} data={modalContent.data} onClose={() => setModalContent(null)} />
      )}
    </main>
  )
}
