"use client"

import DefaultNavbar from "../components/layout/DefaultNavbar"
import { useState } from "react"
import { Cart } from "@/components/features/Cart"

export default function CartPage() {
  const [showCart, setShowCart] = useState(false)


    return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <DefaultNavbar />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
      

        <div className={`xl:block ${showCart ? "block" : "hidden"} xl:col-span-1`}>
                    <div className="sticky top-6">
                     
                      <Cart />
                    </div>
                  </div>

      </main>
    </div>
  )
}
