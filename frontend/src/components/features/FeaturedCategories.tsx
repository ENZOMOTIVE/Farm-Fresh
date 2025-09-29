import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface FeaturedCategoriesProps {
  onCategorySelect?: (category: 'cheese_cakes' | 'chiffon_cakes' | 'french_tarts' | 'cream_puffs') => void;
}

export const FeaturedCategories = ({ onCategorySelect }: FeaturedCategoriesProps) => {

    const { t } = useTranslation();

    
  
  const categories = [
    {
      id: 'cheese_cakes' as const,
      name: 'Cheese Cakes',
      description: t("farmFreshEggs"),
      image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'chiffon_cakes' as const,
      name: "Chiffon Cakes",
      description: t("handcraftedPastries"),
      image: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-pink-400 to-red-500'
    },
     {
    id: 'french_tarts' as const,
    name: "French Tarts",
    description: t("frenchTartsDesc"),
    image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-purple-400 to-indigo-500'
  },
  {
    id: 'cream_puffs' as const,
    name: "Cream Puffs",
    description: t("creamPuffsDesc"),
    image: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-green-400 to-teal-500'
  }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{t( "shopByCategory")}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map(category => (
          <div 
            key={category.id}
            onClick={() => onCategorySelect?.(category.id)}
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