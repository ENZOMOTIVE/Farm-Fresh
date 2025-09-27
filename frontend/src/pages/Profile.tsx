"use client"

import DefaultNavbar from "../components/layout/DefaultNavbar"
import { useState } from "react"
import { Button } from "../components/common/Button"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit, Mail, Phone, MapPin, Calendar, User} from "lucide-react"
import { Cart } from "../components/features/Cart"

export default function Profile() {
  const [showCart, setShowCart] = useState(false)

  const userData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "January 15, 1990",
    memberSince: "March 2022",
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <DefaultNavbar />

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
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl sm:text-2xl">
                      {userData.firstName[0]}
                      {userData.lastName[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-green-700 text-xl sm:text-2xl font-bold">
                      {userData.firstName} {userData.lastName}
                    </CardTitle>
                    <CardDescription className="text-green-600/70 mt-1">
                      Member since {userData.memberSince}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center text-lg sm:text-xl">
                  <User className="w-5 h-5 mr-2" />
                  Contact Information
                </CardTitle>
                <CardDescription>Your contact details and personal information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50/50 hover:bg-green-50 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-green-800 text-sm">Email Address</h4>
                      <p className="text-green-700 text-sm break-all">{userData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50/50 hover:bg-green-50 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-green-800 text-sm">Phone Number</h4>
                      <p className="text-green-700 text-sm">{userData.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50/50 hover:bg-green-50 transition-colors sm:col-span-2 lg:col-span-1">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-green-800 text-sm">Date of Birth</h4>
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

          <div className={`xl:block ${showCart ? "block" : "hidden"} xl:col-span-1`}>
            <div className="sticky top-6">
              <div className="xl:hidden mb-4">
                <Button
                  onClick={() => setShowCart(false)}
                  variant="outline"
                  className="w-full border-green-200 text-green-700 hover:bg-green-50"
                >
                  Hide Cart
                </Button>
              </div>
              <Cart />
            </div>
          </div>
        </div>

        <div className="xl:hidden fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setShowCart(!showCart)}
            className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-full w-14 h-14 p-0"
          >
            <span className="text-lg">🛒</span>
          </Button>
        </div>
      </main>
    </div>
  )
}
