"use client"

import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

export const Loader = () => {
  const t = useTranslation()
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 4000) // minimum 4 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  // --- KEEP YOUR EXACT DESIGN BELOW ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Floating pastries with different animations */}
        <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-20">🧁</div>
        <div className="absolute top-20 right-20 text-5xl animate-pulse opacity-15" style={{ animationDelay: "0.5s" }}>
          🍰
        </div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce opacity-20" style={{ animationDelay: "1s" }}>
          🥐
        </div>
        <div
          className="absolute bottom-10 right-10 text-6xl animate-pulse opacity-15"
          style={{ animationDelay: "1.5s" }}
        >
          🍪
        </div>
        <div className="absolute top-1/2 left-1/4 text-4xl animate-bounce opacity-10" style={{ animationDelay: "2s" }}>
          🧁
        </div>
        <div
          className="absolute top-1/3 right-1/3 text-4xl animate-pulse opacity-15"
          style={{ animationDelay: "0.8s" }}
        >
          🍰
        </div>
        <div
          className="absolute top-3/4 left-1/2 text-5xl animate-bounce opacity-20"
          style={{ animationDelay: "1.2s" }}
        >
          🎂
        </div>
        <div className="absolute top-1/4 left-1/2 text-4xl animate-pulse opacity-10" style={{ animationDelay: "1.8s" }}>
          🍩
        </div>

        {/* Additional scattered pastries */}
        <div
          className="absolute top-1/3 left-1/6 text-3xl animate-bounce opacity-15"
          style={{ animationDelay: "2.5s" }}
        >
          🥧
        </div>
        <div
          className="absolute bottom-1/3 right-1/6 text-3xl animate-pulse opacity-10"
          style={{ animationDelay: "0.3s" }}
        >
          🧁
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100">
        {/* Multi-layered spinner */}
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-200 border-t-emerald-500"></div>
          <div
            className="absolute inset-2 animate-spin rounded-full h-12 w-12 border-3 border-emerald-100 border-r-emerald-400"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
          <div
            className="absolute inset-4 animate-spin rounded-full h-8 w-8 border-2 border-emerald-50 border-b-emerald-300"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>

        {/* Enhanced loading text with animated dots */}
        <div className="flex items-center gap-2">
          <p className="text-emerald-700 font-semibold text-lg">Loading</p>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
            <div
              className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>

        {/* Subtle tagline */}
        <p className="text-emerald-600/70 text-sm font-medium">Preparing something sweet...</p>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-1/2 w-32 h-32 bg-emerald-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-emerald-200/20 rounded-full blur-2xl"></div>
      </div>
    </div>
  )
}
