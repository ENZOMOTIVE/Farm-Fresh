import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import { FaCcVisa, FaCcPaypal, FaCcStripe, FaCcMastercard } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-green-600">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Fresh with Our Newsletter</h3>
              <p className="text-green-100">Get weekly updates on fresh arrivals and exclusive offers</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button className="bg-green-800 hover:bg-green-900 px-6 py-2 rounded-r-lg font-semibold transition-colors">
                Subscribe
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
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🥚</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Farm Fresh</h3>
                <p className="text-sm text-green-400">Eggs & Pastries</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Bringing you the finest farm-fresh eggs and artisan pastries since 1985.
              Quality, freshness, and taste in every bite.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Our Farm</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Fresh Eggs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Artisan Pastries</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Farm Road, Green Valley, CA 95945
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">(555) 123-FARM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">hello@farmfresh.com</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold text-green-400 mb-2">Store Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mon - Fri: 6:00 AM - 8:00 PM</p>
                <p>Saturday: 7:00 AM - 9:00 PM</p>
                <p>Sunday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
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
                <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a>
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
  );
};