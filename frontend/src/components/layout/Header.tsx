import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Bell } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import { Button } from '../common/Button';
import { Navigate, useNavigate } from 'react-router-dom';

interface HeaderProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

export const Header = ({ onSearchChange, searchQuery }: HeaderProps) => {

  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalItems = getTotalItems();

  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
              <img
                    src='/brand-logo.png'
                    
                    className="w-14 h-14 rounded-full border-2 border-green-200"
                  />
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-500">Farm Fresh</h1>
              <p className="text-xs text-green-600">Eggs & Pastries</p>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search fresh eggs, pastries..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>


            {user ? (
              <>


                <button
                  onClick={() => navigate("/profile")}
                  className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-9 h-9 rounded-full border-2 border-green-200"
                  />
                  <span className="text-sm font-semibold text-gray-700">{user.name}</span>
                </button>

                <Button variant="outline" onClick={logout} size="sm">
                  Logout
                </Button>
              </>
            ) : (
              <Button variant='outline' onClick={() => navigate('/login')} size='sm'>
                Log in
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                
                <div className="flex items-center space-x-2">

                  <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                  </button>
                  {user ? (
                    <>
                      <button onClick={() => navigate('/profile')}

                        className="flex items-center space-x-2">
                        <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-9 h-9 rounded-full border-2 border-green-200"
                  />
                        <span className="text-sm font-medium text-gray-700">{user.name}</span>
                      </button>
                      <Button variant="outline" onClick={logout} size="sm">
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Button variant='outline' onClick={() => navigate('/login')} size='sm'>
                      Log in
                    </Button>
                  )}


                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};