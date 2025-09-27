"use client"

import { useState, useEffect } from "react"
import type { Product, SearchFilters } from "../types"
import { Header } from "../components/layout/Header"
import { Filters } from "../components/layout/Filters"
import { ProductCard } from "../components/common/ProductCard"
//import { Cart } from "../components/features/Cart"
//import { AIRecommendations } from "../components/features/AIRecommendations"
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
import { useTranslation } from "react-i18next"

export const Dashboard = () => {
  const { user } = useAuth()
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [recommendations, setRecommendations] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showCart, setShowCart] = useState(false)

  const { t } = useTranslation();


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
          <p className="text-muted-foreground font-medium">{t("LoadingPremium")}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden pt-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
        <Header onSearchChange={handleSearchChange} searchQuery={filters.query} />
      </div>



      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden">
        <img
          src="/heroImage.jpg"
          alt="Premium organic farm with modern technology"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Badge
                  variant="secondary"
                  className="bg-primary/20 text-green-500 border-primary/30 backdrop-blur-sm text-xs sm:text-sm"
                >
                  {t('PremiumQuality')}

                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-accent/20 text-accent border-accent/30 backdrop-blur-sm text-xs sm:text-sm"
                >
                  {t('FarmFresh')}
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white text-balance leading-tight">
                {t('PremiumFarm')}
                <span className="block text-green-500 ">{t('Products')}</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 text-balance max-w-2xl leading-relaxed">
                {t("FarmDescription")}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  {t('ExploreProducts')}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
                >
                  {t('LearnOurStory')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:col-span-3 space-y-6 sm:space-y-8 min-w-0">
            <FeaturedCategories onCategorySelect={handleCategorySelect} />


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

            <TrustBadges />

            <ProductStats />
          </div>

         
        </div>
      </main>

      <Footer />
      <ChatbotWidget />
    </div>
  )
}
