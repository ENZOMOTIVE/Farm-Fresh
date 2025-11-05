"use client"

import { useState, useEffect } from "react"
import { SearchFilters } from "@/types"
import { Header } from "@/components/layout/Header"
import { Filters } from "@/components/layout/Filters"
import { Card } from "@/components/ui/card"
import { useTranslation } from "react-i18next"
import { Product } from "@/types"
import { Button } from "@/components/common/Button"
import { ProductCard } from "@/components/common/ProductCard"
import { getProducts, searchProducts } from "../services/products"

import { ChatbotWidget } from "@/components/features/chatbot"
import { Cart } from "@/components/features/Cart"
import PastryLoader from "@/components/common/intro_loader"
import { MiniCart } from "@/components/features/miniCart"

export default function ProductPage() {
  const [showCart, setShowCart] = useState(false)
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    category: "all",
    priceRange: [0, 100],
    inStockOnly: false,
  })

  // Fetch products on mount
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true)
      try {
        const productsData = await getProducts()
        setProducts(productsData)
        setFilteredProducts(productsData)
      } catch (error) {
        console.error("Error loading products:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  // Filter products whenever filters or products change
  useEffect(() => {
    const filtered = searchProducts(products, filters)
    setFilteredProducts(filtered)
  }, [products, filters])

  const handleCategorySelect = (category: 'cheese_cakes' | 'chiffon_cakes' | 'french_tarts' | 'cream_puffs') => {
    setFilters((prev) => ({ ...prev, category }))
  }

  const handleSearchChange = (query: string) => {
    setFilters((prev) => ({ ...prev, query }))
  }

  if (isLoading) {
    return <PastryLoader />
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden pt-16 bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
        <Header onSearchChange={handleSearchChange} searchQuery={filters.query} />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl flex gap-6">
        {/* Products and Filters */}
        <div className="flex-1">
<div className="mt-20 sm:mt-0">
    <Filters filters={filters} onFiltersChange={setFilters} />
  </div>
          <Card className="border-border/50 shadow-sm mt-4">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">{t("premiumproducts")}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {t("DiscoverSelection")} {filteredProducts.length} {t("PremiumItems")}
                  </p>
                </div>
                {/* Small Screen View Cart Button */}
                <Button
                  onClick={() => setShowCart(!showCart)}
                  variant="outline"
                  className="lg:hidden w-full sm:w-auto flex-shrink-0"
                >
                  {t("ViewCart")}
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

        {/* Large Screen Mini Cart Sidebar */}
        <div className="hidden lg:block w-80 sticky top-20 self-start">
          <MiniCart />
        </div>
      </main>

      {/* Small Screen Slide-Over Cart */}

{showCart && (
  <div className="fixed inset-0 z-50 bg-black/60 flex flex-col pt-16 sm:pt-0">
    {/* Close Button */}
    <div className="flex justify-end p-4">
      <button
        onClick={() => setShowCart(false)}
        className="text-white hover:text-red-500 text-2xl font-bold"
      >
        &times;
      </button>
    </div>

    {/* Cart Content */}
    <div className="flex-1 overflow-y-auto px-4">
      <MiniCart />
    </div>
  </div>
)}




      <ChatbotWidget />
    </div>
  )
}
