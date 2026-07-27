import Link from 'next/link';
import { Shirt, Watch, ShoppingBag, Gem, Heart, Home, Smartphone, Baby } from 'lucide-react';

const categories = [
  { name: "Women's Fashion", href: '/category/womens-fashion', icon: Shirt, color: 'bg-pink-500' },
  { name: "Men's Fashion", href: '/category/mens-fashion', icon: Shirt, color: 'bg-blue-500' },
  { name: 'Shoes', href: '/category/shoes', icon: ShoppingBag, color: 'bg-purple-500' },
  { name: 'Bags', href: '/category/bags', icon: ShoppingBag, color: 'bg-green-500' },
  { name: 'Jewelry', href: '/category/jewelry', icon: Gem, color: 'bg-yellow-500' },
  { name: 'Beauty', href: '/category/beauty', icon: Heart, color: 'bg-red-500' },
  { name: 'Watches', href: '/category/watches', icon: Watch, color: 'bg-indigo-500' },
  { name: 'Accessories', href: '/category/accessories', icon: Heart, color: 'bg-teal-500' },
  { name: 'Home Decor', href: '/category/home-decor', icon: Home, color: 'bg-orange-500' },
  { name: 'Electronics', href: '/category/electronics', icon: Smartphone, color: 'bg-cyan-500' },
  { name: 'Kids', href: '/category/kids', icon: Baby, color: 'bg-rose-500' },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our curated collections across all fashion categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex flex-col items-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gradient-to-br hover:from-primary-50 hover:to-luxury-gold/10 dark:hover:from-gray-800 dark:hover:to-gray-800 transition-all duration-300 card-hover"
            >
              <div className={`${category.color} p-4 rounded-full mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={24} />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white text-center">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline"
          >
            View All Categories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
