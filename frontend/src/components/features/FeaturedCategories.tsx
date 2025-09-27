import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface FeaturedCategoriesProps {
  onCategorySelect: (category: 'eggs' | 'pastries') => void;
}

export const FeaturedCategories = ({ onCategorySelect }: FeaturedCategoriesProps) => {

    const { t } = useTranslation();

    
  
  const categories = [
    {
      id: 'eggs' as const,
      name: t("freshEggs"),
      description: t("farmFreshEggs"),
      image: 'https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'pastries' as const,
      name: t("artisanPastries"),
      description: t("handcraftedPastries"),
      image: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-pink-400 to-red-500'
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Shop by Category</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map(category => (
          <div 
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className="relative overflow-hidden rounded-xl cursor-pointer group"
          >
            <div className="aspect-[16/9] relative">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-80`}></div>
              <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                <div className="text-white">
                  <h4 className="text-2xl font-bold mb-2">{category.name}</h4>
                  <p className="text-white/90 mb-4">{category.description}</p>
                  <Link to="/products">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 group-hover:bg-white/30 transition-colors">
                    <span className="font-semibold">{t("shopNow")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};