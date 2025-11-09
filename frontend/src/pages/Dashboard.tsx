"use client"

import { useState } from "react"
import type {  SearchFilters } from "../types"
import { Header } from "../components/layout/Header"



import { Footer } from "../components/layout/Footer"



import { Button } from "@/components/common/Button"

import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"






export const Dashboard = () => {




  
  
 


  const navigate = useNavigate();

  const { t } = useTranslation();


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
    <div className="min-h-screen bg-background relative overflow-x-hidden bg-gradient-to-br from-green-50 to-emerald-50">
  {/* Fixed Header */}
  <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
    <Header onSearchChange={handleSearchChange} searchQuery={filters.query} />
  </div>

  {/* Hero Section */}
  <section className="relative w-full h-screen flex items-center">
    <img
      src="/heroImage.jpg"
      alt="Premium organic farm with modern technology"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              張博士健康農場
          </Badge>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white text-balance leading-tight">
          {t('PremiumFarm')}
          <span className="block text-green-500">{t('Products')}</span>
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
  </section>

  {/* Footer */}
  <Footer />
</div>

  )
}
