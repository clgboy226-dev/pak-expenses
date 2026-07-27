import ProductCard from './ProductCard';

const bestSellers = [
  {
    id: '9',
    name: 'Classic White Sneakers',
    price: 54.99,
    originalPrice: 99.99,
    discount: 45,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop',
    store: 'Amazon',
    rating: 4.9,
    reviews: 1234,
    isHot: true,
  },
  {
    id: '10',
    name: 'Silk Scarf Collection',
    price: 28.99,
    originalPrice: 59.99,
    discount: 52,
    image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4faae?w=400&h=500&fit=crop',
    store: 'AliExpress',
    rating: 4.7,
    reviews: 567,
  },
  {
    id: '11',
    name: 'Leather Belt Premium',
    price: 35.99,
    originalPrice: 69.99,
    discount: 49,
    image: 'https://images.unsplash.com/photo-1624378439575-d8aa138f48ea?w=400&h=500&fit=crop',
    store: 'Daraz',
    rating: 4.8,
    reviews: 345,
  },
  {
    id: '12',
    name: 'Statement Necklace Gold',
    price: 42.99,
    originalPrice: 89.99,
    discount: 52,
    image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=400&h=500&fit=crop',
    store: 'Temu',
    rating: 4.6,
    reviews: 289,
    isHot: true,
  },
];

export default function BestSellers() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary-600 dark:text-primary-400 font-medium text-sm uppercase tracking-wider">
            Customer Favorites
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Best Sellers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto">
            Our most popular products based on sales and customer reviews
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
