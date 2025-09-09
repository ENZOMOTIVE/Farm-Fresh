"use client"

import { useState, useEffect } from "react"
import type { Product, SearchFilters } from "../types"
import { Header } from "../components/layout/Header"
import { Filters } from "../components/layout/Filters"
import { ProductCard } from "../components/common/ProductCard"
import { Cart } from "../components/features/Cart"
import { AIRecommendations } from "../components/features/AIRecommendations"
import { ProductStats } from "../components/features/ProductStats"
import { FeaturedCategories } from "../components/features/FeaturedCategories"
import { TrustBadges } from "../components/features/TrustBadges"
import { Footer } from "../components/layout/Footer"
import { getProducts, searchProducts, getAIRecommendations } from "../services/products"
import { useAuth } from "../hooks/useAuth"
import { ChatbotWidget } from "@/components/features/chatbot"
import { Button } from "@/components/common/Button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const Dashboard = () => {
  const { user } = useAuth()
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [recommendations, setRecommendations] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showCart, setShowCart] = useState(false)

  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    category: "all",
    priceRange: [0, 100],
    inStockOnly: false,
  })

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      try {
        const [productsData, recommendationsData] = await Promise.all([
          getProducts(),
          getAIRecommendations(user?.id || ""),
        ])

        setProducts(productsData)
        setFilteredProducts(productsData)
        setRecommendations(recommendationsData)
      } catch (error) {
        console.error("Error loading data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [user?.id])

  useEffect(() => {
    const filtered = searchProducts(products, filters)
    setFilteredProducts(filtered)
  }, [products, filters])

  const handleSearchChange = (query: string) => {
    setFilters((prev) => ({ ...prev, query }))
  }

  const handleCategorySelect = (category: "eggs" | "pastries") => {
    setFilters((prev) => ({ ...prev, category }))
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent"></div>
          <p className="text-muted-foreground font-medium">Loading premium experience...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background relative">
      <Header onSearchChange={handleSearchChange} searchQuery={filters.query} />

      <div className="relative h-[600px] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source
            src="/placeholder.mp4?height=720&width=1280&query=premium organic farm with modern technology and fresh produce"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Enhanced gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>

        {/* Premium hero content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                  Premium Quality
                </Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 backdrop-blur-sm">
                  Farm Fresh
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-balance leading-tight">
                Premium Farm
                <span className="block text-primary">Products</span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance max-w-2xl leading-relaxed">
                Experience the finest selection of organic eggs and artisanal pastries, delivered fresh from our
                sustainable farms to your doorstep.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Products
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  Learn Our Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Categories */}
            <FeaturedCategories onCategorySelect={handleCategorySelect} />

            {/* AI Recommendations */}
            <AIRecommendations recommendations={recommendations} />

            {/* Filters */}
            <Filters filters={filters} onFiltersChange={setFilters} />

            {/* Products Grid */}
            <Card className="border-border/50 shadow-sm">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Premium Products</h3>
                    <p className="text-muted-foreground">
                      Discover our curated selection of {filteredProducts.length} premium items
                    </p>
                  </div>
                  <Button onClick={() => setShowCart(!showCart)} variant="outline" className="lg:hidden">
                    View Cart
                  </Button>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-muted-foreground"
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
                    <h4 className="text-lg font-semibold text-foreground mb-2">No products found</h4>
                    <p className="text-muted-foreground">
                      Try adjusting your search criteria or browse our featured categories
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            </Card>

            {/* Trust Badges */}
            <TrustBadges />

            {/* Product Stats */}
            <ProductStats />
          </div>

          {/* Cart Sidebar */}
          <div className={`lg:block ${showCart ? "block" : "hidden"} lg:col-span-1`}>
            <div className="sticky top-32">
              <Cart />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatbotWidget />
    </div>
  )
}
