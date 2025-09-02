import React from 'react';
import { Sparkles } from 'lucide-react';
import { Product } from '../../types';
import { ProductCard } from '../common/ProductCard';

interface AIRecommendationsProps {
  recommendations: Product[];
}

export const AIRecommendations = ({ recommendations }: AIRecommendationsProps) => {
  if (recommendations.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Recommended for You</h2>
          <p className="text-gray-600 text-sm">Curated selections based on your preferences</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};