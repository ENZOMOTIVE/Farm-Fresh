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
import { Footer } from "../components/layout/Footer"
import { getProducts, searchProducts, getAIRecommendations } from "../services/products"
import { useAuth } from "../hooks/useAuth"
import { ChatbotWidget } from "@/components/features/chatbot"
import { Button } from "@/components/common/Button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { Loader } from "@/components/common/loader"

export const Dashboard = () => {
  const { user } = useAuth()
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [recommendations, setRecommendations] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showCart, setShowCart] = useState(false)

  const navigate = useNavigate();

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
    return <Loader />
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
                  onClick={() => navigate('/products')}
                >
                  {t('ExploreProducts')}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
                  onClick={() => { navigate('/about') }}
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
            <FeaturedCategories  />






          </div>


        </div>
      </main>

      <Footer />
      <ChatbotWidget />
    </div>
  )
}
