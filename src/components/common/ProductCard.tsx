import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { Button } from './Button';
import { useCart } from '../../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product.inStock) {
      addToCart(product);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Out of Stock</span>
          </div>
        )}
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            product.category === 'eggs' ? 'bg-yellow-100 text-yellow-800' : 'bg-pink-100 text-pink-800'
          }`}>
            {product.category === 'eggs' ? 'Fresh Eggs' : 'Pastries'}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700 ml-1">
              {product.rating}
            </span>
          </div>
          <span className="text-sm text-gray-500">
            ({product.reviews} reviews)
          </span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          {product.tags.slice(0, 2).map(tag => (
            <span key={tag} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price.toFixed(2)}
          </span>
          
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            size="sm"
            className="flex items-center gap-2 transform hover:scale-105 transition-transform"
          >
            <ShoppingBag className="w-4 h-4" />
            {product.inStock ? 'Add to Bag' : 'Out of Stock'}
          </Button>
        </div>
      </div>
    </div>
  );
};