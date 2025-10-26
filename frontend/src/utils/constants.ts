// constants.ts (or wherever you keep them)
export const CATEGORIES = {
  all: "All Products",
 
  cheese_cakes: "Cheese Cakes",
  chiffon_cakes: "Chiffon Cakes",
  french_tarts: " French Tarts",
  cream_puffs: "Cream Puffs"
} as const;

export const categoryStyles: Record<string, string> = {
  
  cheese_cakes: "bg-purple-100 text-purple-800",
  chiffon_cakes: "bg-green-100 text-green-800",
  
  french_tarts: "bg-orange-100 text-orange-800",
  cream_puffs: "bg-blue-100 text-blue-800"
};


export const PRICE_RANGES = [
  { label: 'All Prices', value: [0, 100] as [number, number] },
  { label: 'Under $10', value: [0, 10] as [number, number] },
  { label: '$10 - $25', value: [10, 25] as [number, number] },
  { label: '$25 - $50', value: [25, 50] as [number, number] },
  { label: 'Over $50', value: [50, 100] as [number, number] }
];

export const SAMPLE_PRODUCTS: Product[] = [
  { id: '1', name: 'classicNewYorkCheesecake', description: 'desc.classicNewYorkCheesecake', price: 8.99, image: '/new-york-cheesecake.jpg', category: 'cheese_cakes', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '2', name: 'strawberryCheesecake', description: 'desc.strawberryCheesecake', price: 12.99, image: '/strawberry-cheesecake.jpg', category: 'cheese_cakes', inStock: true, rating: 4.9, reviews: 89, tags: ['french', 'butter', 'artisan'] },
  { id: '3', name: 'basqueBurntCheesecake', description: 'desc.basqueBurntCheesecake', price: 10.99, image: '/BurntBasque.jpg', category: 'cheese_cakes', inStock: true, rating: 4.7, reviews: 156, tags: ['organic', 'brown', 'pasture-raised'] },
  { id: '4', name: 'blueberryCheesecake', description: 'desc.blueberryCheesecake', price: 15.99, image: '/blueberry-cheesecake.avif', category: 'cheese_cakes', inStock: false, rating: 4.6, reviews: 67, tags: ['chocolate', 'danish', 'sweet'] },
  { id: '5', name: 'tokyoFiveCheese', description: 'desc.tokyoFiveCheese', price: 18.99, image: '/tokyocheese.jpg', category: 'cheese_cakes', inStock: true, rating: 4.9, reviews: 43, tags: ['duck', 'heritage', 'gourmet'] },
  { id: '6', name: 'tiramisuClassic', description: 'desc.tiramisuClassic', price: 22.99, image: '/tiramisu.jpg', category: 'chiffon_cakes', inStock: true, rating: 4.8, reviews: 92, tags: ['almond', 'cream', 'light'] },
  { id: '7', name: 'bakedHoneyCheesecake', description: 'desc.bakedHoneyCheesecake', price: 24.99, image: '/Honey-Baked.jpg', category: 'chiffon_cakes', inStock: true, rating: 4.9, reviews: 28, tags: ['quail', 'gourmet', 'delicate'] },
  { id: '8', name: 'whiteChiffonBase', description: 'desc.whiteChiffonBase', price: 8.99, image: '/white-chiffon.jpeg', category: 'chiffon_cakes', inStock: true, rating: 4.7, reviews: 156, tags: ['sourdough', 'artisan', 'bread'] },
  { id: '9', name: 'chocolateChiffonBase', description: 'desc.chocolateChiffonBase', price: 8.99, image: '/Chocolate-Chiffon-Cake.jpg', category: 'chiffon_cakes', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '10', name: 'yuzuMatchaCheesecake', description: 'desc.yuzuMatchaCheesecake', price: 8.99, image: '/yuzu-matcha.jpg', category: 'chiffon_cakes', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '11', name: 'lemonTart', description: 'desc.lemonTart', price: 8.99, image: '/lemon-tarte.webp', category: 'french_tarts', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '12', name: 'chocolateTart', description: 'desc.chocolateTart', price: 8.99, image: '/chocolate-tart.webp', category: 'french_tarts', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '13', name: 'taroTart', description: 'desc.taroTart', price: 8.99, image: '/taro-tarts.jpg', category: 'french_tarts', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '14', name: 'frenchFlowerTartLemon', description: 'desc.frenchFlowerTartLemon', price: 8.99, image: '/French-Lemon-Tart.jpg', category: 'french_tarts', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '15', name: 'frenchFlowerTartChocolate', description: 'desc.frenchFlowerTartChocolate', price: 8.99, image: '/tarte-au-chocolat.jpg', category: 'french_tarts', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '16', name: 'pineapplePuffVanilla', description: 'desc.pineapplePuffVanilla', price: 8.99, image: '/Pineapple_Puffs.jpeg', category: 'cream_puffs', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '17', name: 'donutStrawberry', description: 'desc.donutStrawberry', price: 8.99, image: '/donuts.webp', category: 'cream_puffs', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '18', name: 'donutChocolate', description: 'desc.donutChocolate', price: 8.99, image: '/donut-choco.jpg', category: 'cream_puffs', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '19', name: 'caneleOriginal', description: 'desc.caneleOriginal', price: 8.99, image: '/Canele.jpg', category: 'cream_puffs', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '20', name: 'frenchMadeleineOriginal', description: 'desc.frenchMadeleineOriginal', price: 8.99, image: '/French-Madeleines-Cookies.jpg', category: 'cream_puffs', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] }
];



import { Product } from '../types';