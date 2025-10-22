"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/common/Button"
import { Input } from "@/components/common/Input"
import { Label } from "@radix-ui/react-label"
import { Textarea } from "@/components/common/TextArea"
import { Card } from "@/components/ui/card"
import { Upload, Store, User, Mail, Phone, FileText, CheckCircle2 } from "lucide-react"

export default function Seller() {
    const [formData, setFormData] = useState({
        shopName: "",
        sellerName: "",
        email: "",
        phone: "",
        description: "",
    })
    const [imagePreview, setImagePreview] = useState<string | null>(null)

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => setImagePreview(reader.result as string)
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <section className="h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-6 px-4 flex items-center justify-center">
            <div className="w-full max-w-6xl">
                <Card className="overflow-hidden shadow-2xl border-0 max-h-[90vh]">
                    <div className="grid lg:grid-cols-5 min-h-[600px]">
                        {/* Left Side - Branding */}
                        <div className="lg:col-span-2 bg-gradient-to-br from-emerald-600 to-green-700 p-12 flex flex-col justify-between text-white">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                                    <Store className="w-5 h-5" />
                                    <span className="font-semibold">Seller Portal</span>
                                </div>

                                <h1 className="text-4xl font-bold mb-4 leading-tight">Start Your Journey as a Seller</h1>
                                <p className="text-emerald-50 text-lg leading-relaxed mb-12">
                                    Join thousands of successful sellers and reach customers worldwide with our platform.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        "Reach millions of customers",
                                        "Easy-to-use seller dashboard",
                                        "Secure payment processing",
                                        "24/7 seller support",
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-200 flex-shrink-0" />
                                            <span className="text-emerald-50">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="text-emerald-100 text-sm">
                                Already have an account?{" "}
                                <a href="#" className="text-white font-semibold underline hover:no-underline">
                                    Sign in
                                </a>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="lg:col-span-3 p-12 bg-white overflow-y-auto max-h-[90vh]">
                            <div className="max-w-xl">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h2>
                                <p className="text-gray-600 mb-8">Fill in your details to get started</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Photo Upload */}
                                    <div className="flex items-center gap-6 pb-6 border-b border-gray-100">
                                        <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center flex-shrink-0">
                                            {imagePreview ? (
                                                <img
                                                    src={imagePreview || "/placeholder.svg"}
                                                    alt="preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <Store className="w-10 h-10 text-emerald-400" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <Label htmlFor="photo" className="text-sm font-semibold text-gray-900 block mb-2">
                                                Shop Logo
                                            </Label>
                                            <Label
                                                htmlFor="photo"
                                                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm font-medium"
                                            >
                                                <Upload className="w-4 h-4" />
                                                Upload Photo
                                            </Label>
                                            <Input id="photo" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                                            <p className="text-xs text-gray-500 mt-2">JPG, PNG or GIF (max. 2MB)</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Shop Name */}
                                        <div className="space-y-2">
                                            <Label htmlFor="shopName" className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                                                <Store className="w-4 h-4 text-emerald-600" /> Shop Name
                                            </Label>
                                            <Input
                                                id="shopName"
                                                placeholder="My Amazing Shop"
                                                value={formData.shopName}
                                                onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                                                className="h-11"
                                                required
                                            />
                                        </div>

                                        {/* Seller Name */}
                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="sellerName"
                                                className="text-sm font-semibold text-gray-900 flex items-center gap-2"
                                            >
                                                <User className="w-4 h-4 text-emerald-600" /> Your Name
                                            </Label>
                                            <Input
                                                id="sellerName"
                                                placeholder="John Doe"
                                                value={formData.sellerName}
                                                onChange={(e) => setFormData({ ...formData, sellerName: e.target.value })}
                                                className="h-11"
                                                required
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-emerald-600" /> Email Address
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="h-11"
                                                required
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-emerald-600" /> Phone Number
                                            </Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="+1 (555) 000-0000"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="h-11"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="description"
                                            className="text-sm font-semibold text-gray-900 flex items-center gap-2"
                                        >
                                            <FileText className="w-4 h-4 text-emerald-600" /> Business Description
                                        </Label>
                                        <Textarea
                                            id="description"
                                            placeholder="Tell us about your business, products, and what makes you unique..."
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            rows={4}
                                            className="resize-none"
                                            required
                                        />
                                    </div>

                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 text-base font-semibold rounded-lg shadow-lg shadow-emerald-200 transition-all"
                                    >
                                        Create Seller Account
                                    </Button>

                                    <p className="text-center text-gray-500 text-xs leading-relaxed">
                                        By creating an account, you agree to our{" "}
                                        <a href="#" className="text-emerald-600 hover:underline">
                                            Terms of Service
                                        </a>{" "}
                                        and{" "}
                                        <a href="#" className="text-emerald-600 hover:underline">
                                            Privacy Policy
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
