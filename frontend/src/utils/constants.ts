// constants.ts (or wherever you keep them)
export const CATEGORIES = {
  all: "All Products",
  eggs: "Fresh Eggs",
  pastries: "Artisan Pastries",
  cheese_cakes: "Cheese Cakes",
  chiffon_cakes: "Chiffon Cakes",
} as const;

export const categoryStyles: Record<string, string> = {
  eggs: "bg-yellow-100 text-yellow-800",
  cheese_cakes: "bg-purple-100 text-purple-800",
  chiffon_cakes: "bg-green-100 text-green-800",
  pastries: "bg-pink-100 text-pink-800",
};


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
    name: 'Classic New York Cheesecake',
    description: 'Premium quality ',
    price: 8.99,
    image: '/new-york-cheesecake.jpg',
    category: 'cheese_cakes',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'free-range', 'local']
  },
  {
    id: '2',
    name: 'Strawberry Cheesecake',
    description: 'Nice Cake',
    price: 12.99,
    image: '/strawberry-cheesecake.jpg',
    category: 'cheese_cakes',
    inStock: true,
    rating: 4.9,
    reviews: 89,
    tags: ['french', 'butter', 'artisan']
  },
  {
    id: '3',
    name: 'Basque Burnt Cheesecake',
    description: 'cheesecake',
    price: 10.99,
    image: '/BurntBasque.jpg',
    category: 'cheese_cakes',
    inStock: true,
    rating: 4.7,
    reviews: 156,
    tags: ['organic', 'brown', 'pasture-raised']
  },
  {
    id: '4',
    name: 'Blueberry Cheesecake',
    description: 'Blueberry tasty',
    price: 15.99,
    image: '/blueberry-cheesecake.avif',
    category: 'cheese_cakes',
    inStock: false,
    rating: 4.6,
    reviews: 67,
    tags: ['chocolate', 'danish', 'sweet']
  },
  {
    id: '5',
    name: 'Tokyo Five-Cheese ',
    description: 'Rich and creamy duck eggs from heritage breeds. Perfect for baking and gourmet cooking.',
    price: 18.99,
    image: '/tokyocheese.jpg',
    category: 'cheese_cakes',
    inStock: true,
    rating: 4.9,
    reviews: 43,
    tags: ['duck', 'heritage', 'gourmet']
  },
  {
    id: '6',
    name: 'Tiramisu (classic, with a hint of liqueur)',
    description: 'Light and airy cream puffs filled with rich almond pastry cream.',
    price: 22.99,
    image: '/tiramisu.jpg',
    category: 'chiffon_cakes',
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
  },
   {
    id: '9',
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
    id: '10',
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
    id: '11',
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
    id: '12',
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
    id: '13',
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
    id: '14',
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
    id: '15',
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
];

import { Product } from '../types';