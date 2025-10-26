"use client"

import { Facebook, Instagram, Twitter, ArrowRight, Store } from "lucide-react"
import { FaCcVisa, FaCcPaypal, FaCcStripe, FaCcMastercard } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

export const Footer = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-green-600">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">{t("newsletter")}</h3>
              <p className="text-green-100">{t("weeklyUpdates")}</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button className="bg-green-800 hover:bg-green-900 px-6 py-2 rounded-r-lg font-semibold transition-colors">
                {t("subscribe")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center">
                <img src="/brand-logo.png" className="w-14 h-14 rounded-full border-2 border-green-200" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t("FarmFresh")}</h3>
                <p className="text-sm text-green-400">{t("EggsnPastries")}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">{t("tagline")}</p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-300 hover:text-green-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Store className="w-5 h-5 text-green-400" />
              For Sellers
            </h4>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Join our platform and start selling your fresh products to thousands of customers.
            </p>
            <button
              onClick={() => navigate("/seller")}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-green-500/50 hover:scale-[1.02] border border-green-500/30"
            >
              Join as Seller
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <p>&copy; 2025 Farm Fresh. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <FaCcVisa
                size={35}
                className="  cursor-pointer transition-colors duration-200 hover:scale-110 hover:text-green-400 "
              />
              <FaCcPaypal
                size={35}
                className="  cursor-pointer transition-colors duration-200 hover:scale-110 hover:text-green-400 "
              />
              <FaCcStripe
                size={35}
                className="  cursor-pointer transition-colors duration-200 hover:scale-110 hover:text-green-400 "
              />
              <FaCcMastercard
                size={35}
                className="  cursor-pointer transition-colors duration-200 hover:scale-110 hover:text-green-400 "
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
