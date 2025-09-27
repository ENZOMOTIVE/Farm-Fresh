"use client"

import { useState } from "react"
import { SearchFilters } from "@/types"
import { Header } from "@/components/layout/Header"
import { Filters } from "@/components/layout/Filters"
import { Card } from "@/components/ui/card"
import { useTranslation } from "react-i18next"
import { Product } from "@/types"
import { Button } from "@/components/common/Button"
import { ProductCard } from "@/components/common/ProductCard"




export default function ProductPage() {
  const [showCart, setShowCart] = useState(false)
  const {t} = useTranslation();
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  

   const handleCategorySelect = (category: "eggs" | "pastries") => {
    setFilters((prev) => ({ ...prev, category }))
  }

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
  <div className="min-h-screen bg-background relative overflow-x-hidden pt-16 bg-gradient-to-br from-green-50 to-emerald-50">

      <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
        <Header onSearchChange={handleSearchChange} searchQuery={filters.query} />
      </div>
      <main className="container mx-auto px-4 py-8 max-w-7xl">
      
            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:col-span-3 space-y-6 sm:space-y-8 min-w-0">
            


            <Filters filters={filters} onFiltersChange={setFilters} />

            <Card className="border-border/50 shadow-sm">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">Premium Products</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t("DiscoverSelection")} {filteredProducts.length} {t("PremiumItems")}
                    </p>
                  </div>
                  <Button
                    onClick={() => setShowCart(!showCart)}
                    variant="outline"
                    className="lg:hidden w-full sm:w-auto flex-shrink-0"
                  >{t("ViewCart")}
                  </Button>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12 sm:py-16">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">{t("NoProductsFound")}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground px-4">
                      {t("SearchHint")}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            </Card>

            

          </div>

         
        </div>
      </main>

      </main>
    </div>
  )
}
