"use client"

import DefaultNavbar from "../components/layout/DefaultNavbar"
import { useState } from "react"
import { Button } from "../components/common/Button"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, Mail, Phone, MapPin, Calendar, Shield, Bell } from "lucide-react"
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
    billingAddress: {
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
    <div className="min-h-screen bg-white">
      <DefaultNavbar />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-green-600 mb-2">Account Details</h1>
                  <p className="text-gray-600">View and manage your personal information</p>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>

              {/* Personal Information */}
              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold text-lg">
                        {userData.firstName[0]}
                        {userData.lastName[0]}
                      </span>
                    </div>
                    Personal Information
                  </CardTitle>
                  <CardDescription>Your basic account information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Full Name</h4>
                      <p className="text-gray-900">
                        {userData.firstName} {userData.lastName}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Member Since</h4>
                      <p className="text-gray-900">{userData.memberSince}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-700">Email Address</h4>
                        <p className="text-gray-900">{userData.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-700">Phone Number</h4>
                        <p className="text-gray-900">{userData.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-700">Date of Birth</h4>
                        <p className="text-gray-900">{userData.dateOfBirth}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Addresses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Shipping Address */}
                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="text-green-600 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Shipping Address
                    </CardTitle>
                    <CardDescription>Default delivery address</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-gray-900">
                      <p>{userData.shippingAddress.street}</p>
                      {userData.shippingAddress.apartment && <p>{userData.shippingAddress.apartment}</p>}
                      <p>
                        {userData.shippingAddress.city}, {userData.shippingAddress.state} {userData.shippingAddress.zip}
                      </p>
                      <p>{userData.shippingAddress.country}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Billing Address */}
                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="text-green-600 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Billing Address
                    </CardTitle>
                    <CardDescription>Address for billing and invoices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-gray-900">
                      <p>{userData.billingAddress.street}</p>
                      {userData.billingAddress.apartment && <p>{userData.billingAddress.apartment}</p>}
                      <p>
                        {userData.billingAddress.city}, {userData.billingAddress.state} {userData.billingAddress.zip}
                      </p>
                      <p>{userData.billingAddress.country}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Account Preferences */}
              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center">
                    <Bell className="w-5 h-5 mr-2" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>Your communication preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Email Notifications</span>
                      <Badge
                        variant={userData.preferences.emailNotifications ? "default" : "secondary"}
                        className={userData.preferences.emailNotifications ? "bg-green-600" : ""}
                      >
                        {userData.preferences.emailNotifications ? "Enabled" : "Disabled"}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Promotional Emails</span>
                      <Badge
                        variant={userData.preferences.promotionalEmails ? "default" : "secondary"}
                        className={userData.preferences.promotionalEmails ? "bg-green-600" : ""}
                      >
                        {userData.preferences.promotionalEmails ? "Enabled" : "Disabled"}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">SMS Notifications</span>
                      <Badge
                        variant={userData.preferences.smsNotifications ? "default" : "secondary"}
                        className={userData.preferences.smsNotifications ? "bg-green-600" : ""}
                      >
                        {userData.preferences.smsNotifications ? "Enabled" : "Disabled"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Info */}
              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Security & Privacy
                  </CardTitle>
                  <CardDescription>Account security information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-700">Password</h4>
                        <p className="text-sm text-gray-500">Last updated 2 months ago</p>
                      </div>
                      <Button
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                      >
                        Change Password
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-700">Two-Factor Authentication</h4>
                        <p className="text-sm text-gray-500">Add an extra layer of security</p>
                      </div>
                      <Badge variant="secondary">Not Enabled</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className={`lg:block ${showCart ? "block" : "hidden"} lg:col-span-1`}>
            <div className="sticky top-24">
              <Cart />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
