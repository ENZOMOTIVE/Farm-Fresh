"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/common/Button"
import { Mail, Phone, MapPin, Calendar, User, Edit, Save, X } from "lucide-react"
import { Header } from "@/components/layout/Header"
import type { SearchFilters } from "../types"
import { useAuth } from "@/hooks/useAuth"
import { useTranslation } from "react-i18next"

export default function Profile() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)

  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    category: "all",
    priceRange: [0, 100],
    inStockOnly: false,
  })

  // Original data
  const [userData, setUserData] = useState({
    firstName: user?.name,
    email: user?.email,
    phone: "",
    dateOfBirth: "03/05/2003",
    shippingAddress: {
      street: "",
      apartment: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  })

  // Temporary edit data
  const [editData, setEditData] = useState(userData)

  const handleSearchChange = (query: string) => {
    setFilters((prev) => ({ ...prev, query }))
  }

  const handleEdit = () => {
    setEditData(userData)
    setIsEditing(true)
  }

  const hasAddress = userData.shippingAddress.street || userData.shippingAddress.city

  const handleSave = () => {
    setUserData(editData)
    setIsEditing(false)
    // Here you would typically make an API call to save the data
    console.log("Saved data:", editData)
  }

  const handleCancel = () => {
    setEditData(userData)
    setIsEditing(false)
  }

  const handleAddressChange = (field: string, value: string) => {
    setEditData((prev) => ({
      ...prev,
      shippingAddress: {
        ...prev.shippingAddress,
        [field]: value,
      },
    }))
  }

  const {t} = useTranslation();

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden pt-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
        <Header onSearchChange={handleSearchChange} searchQuery={filters.query} />
      </div>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700 text-balance">
                {t("accountDetails")}
              </h1>
              <p className="text-green-600/80 text-sm sm:text-base">{t("accountDetailsSubtitle")}</p>
            </div>
            <div className="flex gap-2">
              {!isEditing ? (
                <Button onClick={handleEdit} className="bg-green-600 hover:bg-green-700 text-white">
                  <Edit className="w-4 h-4 mr-2" />
                  {t("editProfile")}
                </Button>
              ) : (
                <>
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    <X className="w-4 h-4 mr-2" />
                    {t("cancel")}
                  </Button>
                  <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white">
                    <Save className="w-4 h-4 mr-2" />
                    {t("saveChanges")}
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="xl:col-span-3 space-y-6 lg:space-y-8">
            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                    <img
                      src={user?.avatar || "/default-avatar.png"}
                      alt={user?.name || "User Avatar"}
                      className="w-full h-full object-cover rounded-full border-2 border-green-200"
                    />
                  </div>
                  {/* Name */}
                  <div className="flex-1">
                    <CardTitle className="text-green-700 text-xl sm:text-2xl font-bold">{userData.firstName}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-green-700 flex items-center text-lg sm:text-xl mb-2">
                  <User className="w-5 h-5 mr-2" />
                  {t("contactInformation")}
                </CardTitle>
                <CardDescription className="mb-4">{t("contactInformationSubtitle")}</CardDescription>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Email */}
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50/50 hover:bg-green-50 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-green-800 text-sm">{t("emailAddress")}</h4>
                      <p className="text-green-700 text-sm break-all">{userData.email}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50/50 hover:bg-green-50 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-green-800 text-sm">{t("phoneNumber")}</h4>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={editData.phone}
                          onChange={(e) => setEditData((prev) => ({ ...prev, phone: e.target.value }))}
                          placeholder= {t("enterPhoneNumber")}
                          className="mt-1 w-full rounded-md border border-green-300 bg-white px-3 py-2 text-sm text-green-700 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      ) : (
                        <p className="text-green-700 text-sm mt-1">{userData.phone || t("dateOfBirth")}</p>
                      )}
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50/50 hover:bg-green-50 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-green-800 text-sm">{t("dateOfBirth")}</h4>
                      <p className="text-green-700 text-sm">{userData.dateOfBirth}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center text-lg">
                    <MapPin className="w-5 h-5 mr-2" />
                    Shipping Address
                  </CardTitle>
                  <CardDescription>Default delivery address</CardDescription>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-green-700">Street Address</label>
                        <input
                          type="text"
                          value={editData.shippingAddress.street}
                          onChange={(e) => handleAddressChange("street", e.target.value)}
                          placeholder="Enter street address"
                          className="mt-1 w-full rounded-md border border-green-300 bg-white px-3 py-2 text-sm text-green-700 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-green-700">Apartment/Suite</label>
                        <input
                          type="text"
                          value={editData.shippingAddress.apartment}
                          onChange={(e) => handleAddressChange("apartment", e.target.value)}
                          placeholder="Optional"
                          className="mt-1 w-full rounded-md border border-green-300 bg-white px-3 py-2 text-sm text-green-700 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-sm font-medium text-green-700">City</label>
                          <input
                            type="text"
                            value={editData.shippingAddress.city}
                            onChange={(e) => handleAddressChange("city", e.target.value)}
                            placeholder="Enter city"
                            className="mt-1 w-full rounded-md border border-green-300 bg-white px-3 py-2 text-sm text-green-700 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-green-700">State</label>
                          <input
                            type="text"
                            value={editData.shippingAddress.state}
                            onChange={(e) => handleAddressChange("state", e.target.value)}
                            placeholder="Enter state"
                            className="mt-1 w-full rounded-md border border-green-300 bg-white px-3 py-2 text-sm text-green-700 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-sm font-medium text-green-700">ZIP Code</label>
                          <input
                            type="text"
                            value={editData.shippingAddress.zip}
                            onChange={(e) => handleAddressChange("zip", e.target.value)}
                            placeholder="Enter ZIP"
                            className="mt-1 w-full rounded-md border border-green-300 bg-white px-3 py-2 text-sm text-green-700 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-green-700">Country</label>
                          <input
                            type="text"
                            value={editData.shippingAddress.country}
                            onChange={(e) => handleAddressChange("country", e.target.value)}
                            placeholder="Enter country"
                            className="mt-1 w-full rounded-md border border-green-300 bg-white px-3 py-2 text-sm text-green-700 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                      </div>
                    </div>
                  ) : hasAddress ? (
                    <div className="space-y-2 text-green-800 bg-green-50/50 p-4 rounded-lg">
                      <p className="font-medium">{userData.shippingAddress.street}</p>
                      {userData.shippingAddress.apartment && (
                        <p className="text-green-700">{userData.shippingAddress.apartment}</p>
                      )}
                      <p className="text-green-700">
                        {userData.shippingAddress.city}, {userData.shippingAddress.state} {userData.shippingAddress.zip}
                      </p>
                      <p className="text-green-700">{userData.shippingAddress.country}</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                        <MapPin className="w-8 h-8 text-green-600" />
                      </div>
                      <p className="text-green-700 font-medium mb-1">No address added</p>
                      <p className="text-green-600 text-sm mb-4">Add your shipping address to get started</p>
                      <Button
                        onClick={handleEdit}
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                      >
                        Add Address
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
