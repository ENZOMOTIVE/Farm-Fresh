
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
              FARM FRESH
              <br />
              <span className="text-green-500">FARM</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A legacy of sustainable farming practices where tradition meets innovation, producing the finest organic
              ingredients with respect for the land and our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Farmer working in field"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold  text-green-500">Three Generations of Excellence</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 1952 by our grandfather, Heritage Farm began as a small family operation with a simple
                mission: to provide the community with the freshest, highest-quality farm products while caring for the
                land that sustains us.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue that legacy with modern sustainable practices, ensuring every egg is laid by
                free-range hens and every pastry is crafted with organic ingredients grown right here on our 200-acre
                farm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            OUR COMMITMENT TO
            <br />
            <span className="text-green-500">SUSTAINABILITY</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-green-500 mb-4">Organic Practices</h3>
                <p className="text-gray-600 leading-relaxed">
                  100% organic feed for our hens, no pesticides or chemicals, and regenerative farming techniques that
                  enrich our soil.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🐓</span>
                </div>
                <h3 className="text-2xl font-bold text-green-500 mb-4">Animal Welfare</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our hens roam freely across pastures, living in natural conditions that ensure their health and
                  happiness.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-green-500 mb-4">Local Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  Supporting local businesses, providing fresh ingredients to nearby restaurants, and educating the next
                  generation about sustainable farming.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            FROM FARM TO
            <br />
            <span className="text-green-500">TABLE</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Fresh organic eggs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-500 mb-4">Premium Organic Eggs</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our free-range hens produce eggs with rich, golden yolks and exceptional flavor. Fed exclusively
                  organic grains and allowed to forage naturally, these eggs represent the pinnacle of quality and
                  nutrition.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Artisanal pastries"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-500 mb-4">Artisanal Pastries</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Handcrafted daily using our farm-fresh eggs, organic flour, and seasonal ingredients grown on our
                  property. Each pastry is a testament to traditional baking methods and the finest natural ingredients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            MEET THE
            <br />
            <span className="text-green-500">FARMERS</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="John Heritage"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">John Heritage</h3>
              <p className="text-green-500 font-semibold mb-4">Farm Owner & Head of Operations</p>
              <p className="text-gray-600 leading-relaxed">
                Third-generation farmer passionate about sustainable agriculture and maintaining the family tradition of
                excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616c6f30e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Maria Heritage"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Maria Heritage</h3>
              <p className="text-green-500 font-semibold mb-4">Master Baker & Co-Owner</p>
              <p className="text-gray-600 leading-relaxed">
                Artisan baker with 25 years of experience, creating exceptional pastries using traditional techniques
                and farm-fresh ingredients.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Sarah Heritage"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Heritage</h3>
              <p className="text-green-500 font-semibold mb-4">Sustainability Coordinator</p>
              <p className="text-gray-600 leading-relaxed">
                Environmental scientist ensuring our farming practices protect and enhance the land for future
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}