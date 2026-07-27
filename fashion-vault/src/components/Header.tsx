'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { 
  Menu, X, Search, ShoppingCart, Heart, User, Sun, Moon,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { name: "Women's Fashion", href: '/category/womens-fashion' },
  { name: "Men's Fashion", href: '/category/mens-fashion' },
  { name: 'Shoes', href: '/category/shoes' },
  { name: 'Bags', href: '/category/bags' },
  { name: 'Jewelry', href: '/category/jewelry' },
  { name: 'Beauty', href: '/category/beauty' },
  { name: 'Watches', href: '/category/watches' },
  { name: 'Accessories', href: '/category/accessories' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-luxury-charcoal/95 backdrop-blur-md shadow-sm">
      {/* Top Bar */}
      <div className="bg-luxury-black text-white py-2 px-4 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>Free shipping on orders over $50 | Use code: LUXURY20 for 20% off</p>
          <div className="flex gap-4">
            <Link href="/blog" className="hover:text-luxury-gold transition-colors">Blog</Link>
            <Link href="/deals" className="hover:text-luxury-gold transition-colors">Deals</Link>
            <Link href="/contact" className="hover:text-luxury-gold transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-gradient">
              Fashion Vault
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">by Sami</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {categories.slice(0, 5).map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-1"
              >
                {category.name}
              </Link>
            ))}
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              More <ChevronDown size={16} />
            </button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="text-gray-700 dark:text-gray-200" />
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="hidden md:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
              aria-label="Wishlist"
            >
              <Heart size={20} className="text-gray-700 dark:text-gray-200" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary-600 rounded-full"></span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="hidden md:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart size={20} className="text-gray-700 dark:text-gray-200" />
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </Link>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun size={20} className="text-gray-200" />
                ) : (
                  <Moon size={20} className="text-gray-700" />
                )}
              </button>
            )}

            {/* User */}
            <Link
              href="/dashboard"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="User account"
            >
              <User size={20} className="text-gray-700 dark:text-gray-200" />
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products, brands, or categories..."
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    autoFocus
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
                {/* Popular Searches */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-sm text-gray-500">Popular:</span>
                  {['Summer Dress', 'Leather Bag', 'Sneakers', 'Watch', 'Necklace'].map((term) => (
                    <button
                      key={term}
                      className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-gray-200 dark:border-gray-700"
          >
            <nav className="px-4 py-4 space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                <Link href="/blog" className="block py-2 text-gray-700 dark:text-gray-200">Blog</Link>
                <Link href="/deals" className="block py-2 text-gray-700 dark:text-gray-200">Deals</Link>
                <Link href="/contact" className="block py-2 text-gray-700 dark:text-gray-200">Contact</Link>
                <Link href="/wishlist" className="block py-2 text-gray-700 dark:text-gray-200">Wishlist</Link>
                <Link href="/dashboard" className="block py-2 text-gray-700 dark:text-gray-200">My Account</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
