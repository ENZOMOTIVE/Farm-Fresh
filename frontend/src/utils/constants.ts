

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
  { id: '1', name: 'classicNewYorkCheesecake', description: "Rich and creamy baked cheesecake with a classic New York taste. Made with cream cheese, eggs, sugar, and a buttery graham cracker crust. Best served chilled, pairs well with fresh berries or a drizzle of fruit sauce.", price: 8.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/new-york-cheesecake.jpg', category: 'cheese_cakes', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '2', name: 'strawberryCheesecake', description: "Creamy cheesecake topped with fresh strawberries and a glossy glaze. Made with premium cream cheese and fresh fruit. Ideal as a dessert for celebrations or afternoon treats.", price: 12.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/strawberry-cheesecake.jpg', category: 'cheese_cakes', inStock: true, rating: 4.9, reviews: 89, tags: ['french', 'butter', 'artisan'] },
  { id: '3', name: 'basqueBurntCheesecake', description: "Caramelized top with a creamy, custard-like center. Slightly tangy with a delicate sweetness. Perfect for those who enjoy a richer, velvety texture.", price: 10.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/BurntBasque.jpg', category: 'cheese_cakes', inStock: true, rating: 4.7, reviews: 156, tags: ['organic', 'brown', 'pasture-raised'] },
  { id: '4', name: 'blueberryCheesecake', description: "Smooth cheesecake layered with fresh blueberries. Balanced sweetness with fruity freshness. Great for brunch or light dessert lovers.", price: 15.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/blueberry-cheesecake.avif', category: 'cheese_cakes', inStock: false, rating: 4.6, reviews: 67, tags: ['chocolate', 'danish', 'sweet'] },
  { id: '5', name: 'tokyoFiveCheese', description: "A rich Japanese-style cheesecake made with five premium cheeses. Soft, airy, and creamy texture. Pairs well with tea or as a sophisticated dessert gift.", price: 18.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/tokyocheese.jpg', category: 'cheese_cakes', inStock: true, rating: 4.9, reviews: 43, tags: ['duck', 'heritage', 'gourmet'] },
  { id: '6', name: 'tiramisuClassic', description: "Classic Italian dessert with coffee-soaked layers and mascarpone cream. Lightly dusted with cocoa powder. Ideal for coffee enthusiasts and festive occasions.", price: 22.99, image: '/tiramisu.jpg', category: 'chiffon_cakes', inStock: true, rating: 4.8, reviews: 92, tags: ['almond', 'cream', 'light'] },
  { id: '7', name: 'bakedHoneyCheesecake', description: "Cheesecake infused with natural honey and baked to perfection. Subtle sweetness with a creamy consistency. Excellent for a refined dessert experience.", price: 24.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/Honey-Baked.jpg', category: 'chiffon_cakes', inStock: true, rating: 4.9, reviews: 28, tags: ['quail', 'gourmet', 'delicate'] },
  { id: '8', name: 'whiteChiffonBase', description: "Light and fluffy chiffon cake with a delicate vanilla flavor. Soft, airy texture perfect for layered cakes or standalone treats.", price: 8.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/white-chiffon.jpeg', category: 'chiffon_cakes', inStock: true, rating: 4.7, reviews: 156, tags: ['sourdough', 'artisan', 'bread'] },
  { id: '9', name: 'chocolateChiffonBase', description: "Airy and moist chiffon cake with rich chocolate flavor. Perfect for layered desserts or pairing with chocolate ganache.", price: 8.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/Chocolate-Chiffon-Cake.jpg', category: 'chiffon_cakes', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '10', name: 'yuzuMatchaCheesecake', description: "A refreshing cheesecake blending earthy matcha with citrusy yuzu. Subtle sweetness, lightly tangy, and vibrant green color. Ideal for special occasions or tea time.", price: 8.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/yuzu-matcha.jpg', category: 'chiffon_cakes', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '11', name: 'lemonTart', description: "Crisp tart shell filled with tangy and smooth lemon curd. Sweet and zesty, perfect for dessert lovers who enjoy bright citrus flavors.", price: 8.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/lemon-tarte.webp', category: 'french_tarts', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '12', name: 'chocolateTart', description: "Decadent tart filled with silky dark chocolate ganache. Rich, smooth, and indulgent. Great for chocolate enthusiasts or gifting.", price: 8.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/chocolate-tart.webp', category: 'french_tarts', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '13', name: 'taroTart', description: "Buttery tart filled with smooth, subtly sweet taro cream. Lightly earthy flavor and creamy texture. Perfect for afternoon tea or unique dessert options.", price: 8.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/taro-tarts.jpg', category: 'french_tarts', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '14', name: 'frenchFlowerTartLemon', description: "Delicate flower-shaped tart with zesty lemon filling. Buttery crust and tangy lemon curd. Ideal for festive occasions or as a centerpiece dessert.", price: 8.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/French-Lemon-Tart.jpg', category: 'french_tarts', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '15', name: 'frenchFlowerTartChocolate', description: "Flower-shaped tart filled with smooth chocolate cream. Rich, decadent, and visually appealing. Perfect for chocolate lovers and celebrations.", price: 8.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/tarte-au-chocolat.jpg', category: 'french_tarts', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '16', name: 'pineapplePuffVanilla', description: "Flaky puff pastry filled with sweet pineapple and vanilla cream. Light, buttery, and tropical flavor. Excellent for breakfast or afternoon tea.", price: 8.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/Pineapple_Puffs.jpeg', category: 'cream_puffs', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '17', name: 'donutStrawberry', description: "Soft donut topped with strawberry glaze and sprinkles. Sweet, fluffy, and visually fun. Perfect for kids or casual treats.", price: 8.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/donuts.webp', category: 'cream_puffs', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '18', name: 'donutChocolate', description: "Classic donut coated in rich chocolate glaze. Soft and moist with a satisfying chocolate flavor. Great for coffee breaks or dessert.", price: 8.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/donut-choco.jpg', category: 'cream_puffs', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '19', name: 'caneleOriginal', description: "Traditional French pastry with a caramelized crust and custardy center. Slightly chewy exterior with soft, aromatic inside. Ideal as a gourmet snack or dessert.", price: 8.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/Canele.jpg', category: 'cream_puffs', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] },
  { id: '20', name: 'frenchMadeleineOriginal', description: "Light, buttery sponge cakes with a delicate shell shape. Soft, airy, and subtly sweet. Perfect for tea time or gifting.", price: 8.99, image: 'https://umanjtaxxtkqywmgliuu.supabase.co/storage/v1/object/public/cakes/French-Madeleines-Cookies.jpg', category: 'cream_puffs', inStock: true, rating: 4.8, reviews: 124, tags: ['organic', 'free-range', 'local'] }
];







import { Product } from '../types';