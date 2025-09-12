import React, { useState } from 'react';
import {  Menu, X,  } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function DefaultNavbar() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const {t} = useTranslation();

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
              <h1 className="text-xl font-bold text-green-500">{t('FarmFresh')}</h1>
              <p className="text-xs text-green-600">Eggs & Pastries</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2">
                  <button
                  
                  className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-9 h-9 rounded-full border-2 border-green-200"
                  />
                  <span className="text-sm font-semibold text-gray-700">{user.name}</span>
                </button>
                
                </div>
                <Button variant="outline" onClick={logout} size="sm">
                {t('Logout')}
                </Button>
              </>
            ) : (
              <Button variant="outline" onClick={() => navigate('/login')} size="sm">
                {t('Login')}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {user && (
                    <>
                      <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-9 h-9 rounded-full border-2 border-green-200"
                  />
                      <span className="text-sm font-medium text-gray-700">{user.name}</span>
                    </>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {user ? (
                    <Button variant="outline" onClick={logout} size="sm">
                      Logout
                    </Button>
                  ) : (
                    <Button variant="outline" onClick={() => navigate('/login')} size="sm">
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
}
