
import { Star, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { Button } from './Button';
import { useCart } from '../../hooks/useCart';
import { categoryStyles } from '@/utils/constants'

import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const {t} = useTranslation();

  const handleAddToCart = () => {
    if (product.inStock) {
      addToCart(product);
    }
  };

  const SPECIFIC_CATEGORIES = {
  all: t("allproducts"),
 
  cheese_cakes: t("cheese_cakes"),
  chiffon_cakes: t("chiffon_cakes"),
  french_tarts: t("french_tarts"),
  cream_puffs: t("cream_puffs")
} as const;

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
            <span className="text-white font-semibold text-lg">{t("outOfStock")}</span>
          </div>
        )}
        <div className="absolute top-2 right-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${categoryStyles[product.category] || "bg-gray-100 text-gray-800"
              }`}
          >
            {SPECIFIC_CATEGORIES[product.category as keyof typeof SPECIFIC_CATEGORIES] || "Other"}
          </span>
        </div>


      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {t(product.name)}
        </h3>


        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700 ml-1">
              {product.rating}
            </span>
          </div>
          <span className="text-sm text-gray-500">
            ({product.reviews} {t("reviews")})
          </span>
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
            {product.inStock ? t('addToBag') : t('outOfStock')}
          </Button>
        </div>
      </div>
    </div>
  );
};