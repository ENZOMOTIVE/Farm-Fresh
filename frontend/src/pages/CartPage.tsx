"use client"

import DefaultNavbar from "../components/layout/DefaultNavbar"
import { useState } from "react"
import { Cart } from "@/components/features/Cart"
import { SearchFilters } from "@/types"
import { Header } from "@/components/layout/Header"

export default function CartPage() {
  const [showCart, setShowCart] = useState(false)

    const [filters, setFilters] = useState<SearchFilters>({
        query: "",
        category: "all",
        priceRange: [0, 100],
        inStockOnly: false,
      })
  
      const handleSearchChange = (query: string) => {
      setFilters((prev) => ({ ...prev, query }))
    }
  


    return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
            <Header onSearchChange={handleSearchChange} searchQuery={filters.query} />
      

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
