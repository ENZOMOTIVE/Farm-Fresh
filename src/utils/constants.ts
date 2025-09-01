export const CATEGORIES = {
  all: 'All Products',
  eggs: 'Fresh Eggs',
  pastries: 'Artisan Pastries'
} as const;

export const PRICE_RANGES = [
  { label: 'All Prices', value: [0, 100] as [number, number] },
  { label: 'Under $10', value: [0, 10] as [number, number] },
  { label: '$10 - $25', value: [10, 25] as [number, number] },
  { label: '$25 - $50', value: [25, 50] as [number, number] },
  { label: 'Over $50', value: [50, 100] as [number, number] }
];

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Farm Fresh Free-Range Eggs',
    description: 'Premium free-range eggs from happy hens. Rich, golden yolks perfect for any recipe.',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'eggs',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'free-range', 'local']
  },
  {
    id: '2',
    name: 'Artisan Croissants',
    description: 'Buttery, flaky croissants baked fresh daily with premium French butter.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'pastries',
    inStock: true,
    rating: 4.9,
    reviews: 89,
    tags: ['french', 'butter', 'artisan']
  },
  {
    id: '3',
    name: 'Organic Brown Eggs',
    description: 'Nutrient-rich brown eggs from pasture-raised hens. Perfect for healthy cooking.',
    price: 10.99,
    image: 'https://images.pexels.com/photos/4110456/pexels-photo-4110456.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'eggs',
    inStock: true,
    rating: 4.7,
    reviews: 156,
    tags: ['organic', 'brown', 'pasture-raised']
  },
  {
    id: '4',
    name: 'Chocolate Danish Pastries',
    description: 'Decadent chocolate-filled Danish pastries with a crispy, golden exterior.',
    price: 15.99,
    image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'pastries',
    inStock: false,
    rating: 4.6,
    reviews: 67,
    tags: ['chocolate', 'danish', 'sweet']
  },
  {
    id: '5',
    name: 'Heritage Breed Duck Eggs',
    description: 'Rich and creamy duck eggs from heritage breeds. Perfect for baking and gourmet cooking.',
    price: 18.99,
    image: 'https://images.pexels.com/photos/7937481/pexels-photo-7937481.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'eggs',
    inStock: true,
    rating: 4.9,
    reviews: 43,
    tags: ['duck', 'heritage', 'gourmet']
  },
  {
    id: '6',
    name: 'Almond Cream Puffs',
    description: 'Light and airy cream puffs filled with rich almond pastry cream.',
    price: 22.99,
    image: 'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'pastries',
    inStock: true,
    rating: 4.8,
    reviews: 92,
    tags: ['almond', 'cream', 'light']
  },
  {
    id: '7',
    name: 'Quail Eggs (Dozen)',
    description: 'Delicate quail eggs perfect for gourmet dishes and appetizers.',
    price: 24.99,
    image: 'https://images.pexels.com/photos/7937481/pexels-photo-7937481.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'eggs',
    inStock: true,
    rating: 4.9,
    reviews: 28,
    tags: ['quail', 'gourmet', 'delicate']
  },
  {
    id: '8',
    name: 'Sourdough Bread',
    description: 'Artisan sourdough bread with a perfect crust and tangy flavor.',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'pastries',
    inStock: true,
    rating: 4.7,
    reviews: 156,
    tags: ['sourdough', 'artisan', 'bread']
  }
];

import { Product } from '../types';