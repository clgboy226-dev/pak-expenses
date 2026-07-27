import ProductCard from './ProductCard';

// Sample product data - will be replaced with real data from database
const trendingProducts = [
  {
    id: '1',
    name: 'Elegant Summer Maxi Dress',
    price: 45.99,
    originalPrice: 89.99,
    discount: 49,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop',
    store: 'Amazon',
    rating: 4.8,
    reviews: 234,
    isHot: true,
  },
  {
    id: '2',
    name: 'Luxury Leather Handbag',
    price: 129.99,
    originalPrice: 249.99,
    discount: 48,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop',
    store: 'AliExpress',
    rating: 4.9,
    reviews: 567,
    isHot: true,
  },
  {
    id: '3',
    name: 'Classic Gold Watch',
    price: 89.99,
    originalPrice: 199.99,
    discount: 55,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=500&fit=crop',
    store: 'Daraz',
    rating: 4.7,
    reviews: 189,
    isNew: true,
  },
  {
    id: '4',
    name: 'Designer Sunglasses',
    price: 34.99,
    originalPrice: 79.99,
    discount: 56,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop',
    store: 'Temu',
    rating: 4.6,
    reviews: 423,
  },
];

export default function TrendingProducts() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-primary-600 dark:text-primary-400 font-medium text-sm uppercase tracking-wider">
              Hot Picks
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
              Trending Now
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl">
              The most clicked and loved products this week
            </p>
          </div>
          <a
            href="/trending"
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center gap-2"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
