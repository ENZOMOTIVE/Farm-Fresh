import { Product, SearchFilters } from '../types';
import { SAMPLE_PRODUCTS } from '../utils/constants';

export const getProducts = async (): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return SAMPLE_PRODUCTS;
};

export const searchProducts = (products: Product[], filters: SearchFilters): Product[] => {
  return products.filter(product => {
    // Query filter
    const matchesQuery = filters.query === '' || 
      product.name.toLowerCase().includes(filters.query.toLowerCase()) ||
      product.description.toLowerCase().includes(filters.query.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(filters.query.toLowerCase()));

    // Category filter
    const matchesCategory = filters.category === 'all' || product.category === filters.category;

    // Price range filter
    const matchesPrice = product.price >= filters.priceRange[0] && 
                        product.price <= filters.priceRange[1];

    // Stock filter
    const matchesStock = !filters.inStockOnly || product.inStock;

    return matchesQuery && matchesCategory && matchesPrice && matchesStock;
  });
};

export const getAIRecommendations = async (userId: string): Promise<Product[]> => {
  // Simulate AI recommendation API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // For demo, return a mix of highly rated products
  const recommended = SAMPLE_PRODUCTS
    .filter(p => p.rating >= 4.7 && p.inStock)
    .slice(0, 3);
    
  return recommended;
};