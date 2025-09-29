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
  {
    id: '1',
    name: 'Classic New York Cheesecake',
    description: 'Rich and creamy baked cheesecake with a classic New York taste.',
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
    description: 'Creamy cheesecake topped with fresh strawberries and glaze.',
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
    description: 'Caramelized top with a creamy, custard-like center.',
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
    description: 'Smooth cheesecake layered with fresh blueberries.',
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
    description: 'A rich Japanese-style cheesecake made with five premium cheeses.',
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
    description: 'Classic Italian dessert with coffee-soaked layers and mascarpone cream.',
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
    name: 'Baked Honey Cheesecake',
    description: 'Cheesecake infused with natural honey and baked to perfection.',
    price: 24.99,
    image: '/Honey-Baked.jpg',
    category: 'chiffon_cakes',
    inStock: true,
    rating: 4.9,
    reviews: 28,
    tags: ['quail', 'gourmet', 'delicate']
  },
  {
    id: '8',
    name: 'White Chiffon Base',
    description: 'Light and fluffy chiffon cake with a delicate vanilla flavor.',
    price: 8.99,
    image: '/white-chiffon.jpeg',
    category: 'chiffon_cakes',
    inStock: true,
    rating: 4.7,
    reviews: 156,
    tags: ['sourdough', 'artisan', 'bread']
  },
  {
    id: '9',
    name: 'Chocolate Chiffon Base',
    description: 'Airy and moist chiffon cake with rich chocolate flavor.',
    price: 8.99,
    image: '/Chocolate-Chiffon-Cake.jpg',
    category: 'chiffon_cakes',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'free-range', 'local']
  },
  {
    id: '10',
    name: 'Yuzu Matcha Cheesecake',
    description: 'A refreshing cheesecake blending earthy matcha with citrusy yuzu.',
    price: 8.99,
    image: '/yuzu-matcha.jpg',
    category: 'chiffon_cakes',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'free-range', 'local']
  },
  {
    id: '11',
    name: 'Lemon Tart',
    description: 'Crisp tart shell filled with tangy and smooth lemon curd.',
    price: 8.99,
    image: '/lemon-tarte.webp',
    category: 'french_tarts',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'free-range', 'local']
  },
  {
    id: '12',
    name: 'Chocolate Tart',
    description: 'Decadent tart filled with silky dark chocolate ganache.',
    price: 8.99,
    image: '/chocolate-tart.webp',
    category: 'french_tarts',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'free-range', 'local']
  },
  {
    id: '13',
    name: 'Taro Tart',
    description: 'Buttery tart filled with smooth, subtly sweet taro cream.',
    price: 8.99,
    image: '/taro-tarts.jpg',
    category: 'french_tarts',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'free-range', 'local']
  },
  {
    id: '14',
    name: 'French Flower Tart - Lemon',
    description: 'Delicate flower-shaped tart with zesty lemon filling.',
    price: 8.99,
    image: '/French-Lemon-Tart.jpg',
    category: 'french_tarts',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'free-range', 'local']
  },
  {
    id: '15',
    name: 'French Flower Tart – Chocolate',
    description: 'Flower-shaped tart filled with smooth chocolate cream.',
    price: 8.99,
    image: '/tarte-au-chocolat.jpg',
    category: 'french_tarts',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'free-range', 'local']
  },
  {
    id: '16',
    name: 'Handmade Pineapple Puff – Vanilla',
    description: 'Flaky puff pastry filled with sweet pineapple and vanilla cream.',
    price: 8.99,
    image: '/Pineapple_Puffs.jpeg',
    category: 'cream_puffs',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'free-range', 'local']
  },
  {
    id: '17',
    name: 'Donut – Strawberry',
    description: 'Soft donut topped with strawberry glaze and sprinkles.',
    price: 8.99,
    image: '/donuts.webp',
    category: 'cream_puffs',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'free-range', 'local']
  },
  {
    id: '18',
    name: 'Donut – Chocolate',
    description: 'Classic donut coated in rich chocolate glaze.',
    price: 8.99,
    image: '/donut-choco.jpg',
    category: 'cream_puffs',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'free-range', 'local']
  },
  {
    id: '19',
    name: 'Canelé – Original',
    description: 'Traditional French pastry with a caramelized crust and custardy center.',
    price: 8.99,
    image: '/Canele.jpg',
    category: 'cream_puffs',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'free-range', 'local']
  },
  {
    id: '20',
    name: 'French Madeleine – Original',
    description: 'Light, buttery sponge cakes with a delicate shell shape.',
    price: 8.99,
    image: '/French-Madeleines-Cookies.jpg',
    category: 'cream_puffs',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'free-range', 'local']
  },
];


import { Product } from '../types';