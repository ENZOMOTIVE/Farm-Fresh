
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { SearchFilters } from "@/types"
import { useState } from "react"


export default function AboutPage() {

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
      <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
              <Header onSearchChange={handleSearchChange} searchQuery={filters.query} />
            </div>
      

      {/* Our Story Section */}
     <section className="pt-32 pb-24 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-6">
        FARM Formosa
        
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Crafted with premium organic ingredients and baked daily, our cakes and pastries 
        are made to bring joy, freshness, and unforgettable flavor to your table.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
      <div className="relative h-96 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
          alt="Freshly baked pastries"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-green-500">Baked Fresh. Every Day.</h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          From cupcakes and croissants to artisanal cakes and pastries, we focus on freshness,
          flavor, and quality. Every batch is handcrafted in small quantities to ensure
          the perfect taste and texture.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether it's a celebration, a cozy evening, or a sweet craving — we deliver 
          treats that make every moment special. No preservatives, no shortcuts — just pure goodness.
        </p>
      </div>
    </div>
  </div>
</section>


  

   

      {/* Team Section */}
      <section className="py-24 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            MEET THE  <span className="text-green-500">TEAM</span>
            
           
          </h2>

          <div className="grid md:grid-cols-2 gap-12 justify-center">
  {/* Team Member 1 */}
  <div className="text-center">
    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
      <img
        src="/Prof.jpeg"
        alt="Prof. Chung Ming Chang"
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Prof. Chung Ming Chang</h3>
    <p className="text-green-500 font-semibold mb-4">Head of Operations</p>
    <p className="text-gray-600 leading-relaxed text-sm max-w-sm mx-auto">
Supervisor and Business lead   </p>
  </div>

  {/* Team Member 2 */}
  <div className="text-center">
    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
      <img
        src="/Pic.jpg"
        alt="Aayushman Bhaba"
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Aayushman Bhaba Padhy</h3>
    <p className="text-green-500 font-semibold mb-4">Technical Lead & Developer</p>
    <p className="text-gray-600 leading-relaxed text-sm max-w-sm mx-auto">
      In charge of all technical development.
    </p>
  </div>
</div>

        </div>
      </section>
    </div>
  )
}