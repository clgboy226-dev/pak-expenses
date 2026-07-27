import ProductCard from './ProductCard';

const newArrivals = [
  {
    id: '5',
    name: 'Bohemian Print Blouse',
    price: 32.99,
    originalPrice: 59.99,
    discount: 45,
    image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400&h=500&fit=crop',
    store: 'Amazon',
    rating: 4.5,
    reviews: 89,
    isNew: true,
  },
  {
    id: '6',
    name: 'Minimalist Crossbody Bag',
    price: 45.99,
    originalPrice: 89.99,
    discount: 49,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
    store: 'AliExpress',
    rating: 4.7,
    reviews: 156,
    isNew: true,
  },
  {
    id: '7',
    name: 'Vintage Denim Jacket',
    price: 67.99,
    originalPrice: 129.99,
    discount: 48,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop',
    store: 'Daraz',
    rating: 4.8,
    reviews: 234,
    isNew: true,
  },
  {
    id: '8',
    name: 'Pearl Drop Earrings',
    price: 24.99,
    originalPrice: 49.99,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop',
    store: 'Temu',
    rating: 4.6,
    reviews: 178,
    isNew: true,
  },
];

export default function NewArrivals() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary-600 dark:text-primary-400 font-medium text-sm uppercase tracking-wider">
            Fresh Styles
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            New Arrivals
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto">
            Be the first to shop the latest fashion trends
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
