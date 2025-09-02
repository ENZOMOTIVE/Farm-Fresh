import React, { useState, useEffect } from 'react';
import { Product, SearchFilters } from '../types';
import { Header } from '../components/layout/Header';
import { Filters } from '../components/layout/Filters';
import { ProductCard } from '../components/common/ProductCard';
import { Cart } from '../components/features/Cart';
import { AIRecommendations } from '../components/features/AIRecommendations';
import { ProductStats } from '../components/features/ProductStats';
import { FeaturedCategories } from '../components/features/FeaturedCategories';
import { TrustBadges } from '../components/features/TrustBadges';
import { Footer } from '../components/layout/Footer';
import { getProducts, searchProducts, getAIRecommendations } from '../services/products';
import { useAuth } from '../hooks/useAuth';

export const Dashboard = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);
  
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    category: 'all',
    priceRange: [0, 100],
    inStockOnly: false
  });

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [productsData, recommendationsData] = await Promise.all([
          getProducts(),
          getAIRecommendations(user?.id || '')
        ]);
        
        setProducts(productsData);
        setFilteredProducts(productsData);
        setRecommendations(recommendationsData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [user?.id]);

  useEffect(() => {
    const filtered = searchProducts(products, filters);
    setFilteredProducts(filtered);
  }, [products, filters]);

  const handleSearchChange = (query: string) => {
    setFilters(prev => ({ ...prev, query }));
  };

  const handleCategorySelect = (category: 'eggs' | 'pastries') => {
    setFilters(prev => ({ ...prev, category }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onSearchChange={handleSearchChange}
        searchQuery={filters.query}
      />
      
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Welcome Section */}

            
           

            

            {/* Featured Categories */}
            <FeaturedCategories onCategorySelect={handleCategorySelect} />

            {/* AI Recommendations */}
            <AIRecommendations recommendations={recommendations} />

            {/* Filters */}
            <Filters filters={filters} onFiltersChange={setFilters} />

            {/* Products Grid */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Products ({filteredProducts.length})
                </h3>
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="lg:hidden bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  View Cart
                </button>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-2">No products found</p>
                  <p className="text-sm text-gray-500">Try adjusting your search or filters</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
            {/* Trust Badges */}
            <TrustBadges />

            {/* Product Stats */}
            <ProductStats />
          </div>

          {/* Cart Sidebar */}
          <div className={`lg:block ${showCart ? 'block' : 'hidden'} lg:col-span-1`}>
            <div className="sticky top-24">
              <Cart />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};