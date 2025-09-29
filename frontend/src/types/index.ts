export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'eggs' | 'pastries' | 'cheese_cakes' | 'chiffon_cakes';
  inStock: boolean;
  rating: number;
  reviews: number;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface SearchFilters {
  query: string;
  category: 'all' | 'eggs' | 'pastries';
  priceRange: [number, number];
  inStockOnly: boolean;
}