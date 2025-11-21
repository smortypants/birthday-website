"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ModalProps {
  type: "polaroid" | "message" | "video"
  data?: any
  onClose: () => void
}

export default function Modal({ type, data, onClose }: ModalProps) {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(onClose, 300)
  }

  return (
    <div
      className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-white rounded-lg shadow-2xl transition-transform duration-300 ${
          isAnimating ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center font-bold z-10 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {type === "polaroid" && data && (
          <div className="w-70 p-4">
            <div className="relative w-60 h-96 bg-white border-8 border-white shadow-lg">
              <Image src={data.image || "/placeholder.svg"} alt={data.caption} fill className="object-cover" />
            </div>
            <p className="mt-4 text-center text-gray-700 font-handwriting text-sm italic">{data.caption}</p>
          </div>
        )}

        {type === "message" && (
          <div className="w-96 p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600">
              A Special Birthday Message
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: "cursive" }}>
              Dear Riddhi,
            </p>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Today is a celebration of you - your kindness, your laughter, and all the joy you bring to those around
              you. May this year be filled with wonderful adventures, amazing moments, and dreams come true. You deserve
              all the happiness in the world!
            </p>
            <p className="text-lg text-gray-700" style={{ fontFamily: "cursive" }}>
              Happy Birthday! 🎉✨
            </p>
          </div>
        )}

        {type === "video" && (
          <div className="w-96 p-4">
            <video
              width={240}
              height={467}
              controls
              autoPlay
              className="w-full rounded"
              style={{ aspectRatio: "240/467" }}
            >
              <source src="/birthday-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  )
}
