"use client"

import { useEffect, useState } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Calendar, User } from "lucide-react"
import { Header } from "@/components/layout/Header"
import type { SearchFilters } from "../types"
import { useAuth } from "@/hooks/useAuth"
import { Loader } from "@/components/common/loader"

export default function Profile() {

  const { user } = useAuth()

  




  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    category: "all",
    priceRange: [0, 100],
    inStockOnly: false,
  })

  const handleSearchChange = (query: string) => {
    setFilters((prev) => ({ ...prev, query }))
  }

  const userData = {
    firstName: user?.name,

    email: user?.email,

    shippingAddress: {
      street: "123 Main Street",
      apartment: "Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },

    preferences: {
      emailNotifications: true,
      promotionalEmails: false,
      smsNotifications: true,
    },
  }

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
                Account Details
              </h1>
              <p className="text-green-600/80 text-sm sm:text-base">View and manage your personal information</p>
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
                    <CardTitle className="text-green-700 text-xl sm:text-2xl font-bold">
                      {userData.firstName}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <CardTitle className="text-green-700 flex items-center text-lg sm:text-xl mb-2">
                  <User className="w-5 h-5 mr-2" />
                  Contact Information
                </CardTitle>
                <CardDescription className="mb-4">
                  Your contact details and personal information
                </CardDescription>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Email */}
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50/50 hover:bg-green-50 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-green-800 text-sm">Email Address</h4>
                      <p className="text-green-700 text-sm break-all">{userData.email}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50/50 hover:bg-green-50 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-green-800 text-sm">Phone Number</h4>
                      <p className="text-green-700 text-sm break-all">Phone number</p>
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50/50 hover:bg-green-50 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-green-800 text-sm">Date of Birth</h4>
                      <p className="text-green-700 text-sm">03/05/2003</p>
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
                </CardContent>
              </Card>


            </div>


          </div>


        </div>


      </main>
    </div>
  )
}
