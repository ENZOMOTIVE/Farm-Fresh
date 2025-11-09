import { Header } from "@/components/layout/Header"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { SearchFilters } from "@/types"

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

  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
        <Header onSearchChange={handleSearchChange} searchQuery={filters.query} />
      </div>

      {/* Hero / Banner Section */}
      <section className="relative w-full h-[80vh] md:h-[90vh] mt-16">
        <img
          src="/bg-picdrchang.png"
          alt="Farm Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Dr. Chang Healthy Farm
            </h1>
            <p className="text-lg md:text-2xl leading-relaxed opacity-90">
              {t("farmStory")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      {/* Our Story Section */}
<section className="py-24 px-6 bg-white/70 backdrop-blur-sm">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    {/* Text */}
    <div className="space-y-6 order-2 md:order-1">
      <h3 className="text-3xl font-bold text-green-600">{t("bakedFresh")}</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        {t("bakedFreshDescription1")}
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        {t("bakedFreshDescription2")}
      </p>
    </div>

    {/* QR Code Image */}
    <div className="order-1 md:order-2 flex justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <img
          src="/QR code.png"
          alt="Farm QR Code"
          className="w-64 h-64 object-contain"
        />
      </div>
    </div>
  </div>
</section>


      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-emerald-50 to-green-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {t("meetThe")} <span className="text-green-600">{t("team")}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 justify-center">
            {/* Team Member 1 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-md">
                <img
                  src="/Prof.jpeg"
                  alt="Prof. Chung Ming Chang"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Prof. Chung Ming Chang
              </h3>
              <p className="text-green-600 font-semibold mb-4">
                {t("headOfOperations")}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm max-w-sm mx-auto">
                {t("headOfOperationsDescription")}
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-md">
                <img
                  src="/Pic.jpg"
                  alt="Aayushman Bhaba"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Aayushman Bhaba Padhy
              </h3>
              <p className="text-green-600 font-semibold mb-4">
                {t("technicalLead")}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm max-w-sm mx-auto">
                {t("technicalLeadDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
