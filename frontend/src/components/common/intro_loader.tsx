"use client"

import { useEffect, useState } from "react"
import {  HashLoader } from 'react-spinners';

export default function PastryLoader() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 text-emerald-200/30 text-6xl animate-[float_3s_ease-in-out_infinite]">🧁</div>
        <div className="absolute top-40 right-32 text-emerald-200/30 text-5xl animate-[float_4s_ease-in-out_infinite_0.5s]">🍰</div>
        <div className="absolute bottom-32 left-40 text-emerald-200/30 text-7xl animate-[float_3.5s_ease-in-out_infinite_1s]">🎂</div>
        <div className="absolute bottom-20 right-20 text-emerald-200/30 text-5xl animate-[float_4.5s_ease-in-out_infinite_1.5s]">🍪</div>
        <div className="absolute top-1/2 left-10 text-emerald-200/30 text-4xl animate-[float_3.8s_ease-in-out_infinite_0.8s]">🥐</div>
        <div className="absolute top-1/3 right-16 text-emerald-200/30 text-6xl animate-[float_4.2s_ease-in-out_infinite_1.2s]">🧁</div>
      </div>

      {/* Main loader container */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Center image container with shadow */}
        <div className="relative z-10">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 bg-emerald-300/20 rounded-full blur-xl" />
            <HashLoader color="#1bad0e" size={200} />
          </div>
        </div>

        {/* Loading text */}
        <div className="relative z-10 mt-12 text-center">
          <h2 className="text-2xl font-bold text-emerald-600 mb-2">Preparing Something Sweet</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-100" />
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-200" />
          </div>
        </div>
      </div>
    </div>
  )
}
