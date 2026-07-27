'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-luxury-gold/10 dark:from-luxury-charcoal dark:via-luxury-black dark:to-primary-900/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-luxury-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-luxury-gold/20 dark:bg-luxury-gold/10 text-luxury-gold dark:text-luxury-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Premium Fashion Marketplace</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Discover Your
              <span className="text-gradient"> Unique Style</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              Curated fashion finds from Temu, Daraz, AliExpress, Amazon, and more. 
              Shop the latest trends at unbeatable prices with our exclusive deals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/category/womens-fashion"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Shop Women's Fashion
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/deals"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                View Flash Deals
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div>
                <p className="text-3xl font-bold text-primary-600">50K+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">100+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Brands</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">24/7</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Support</p>
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop"
                  alt="Women's Fashion"
                  className="w-full h-64 object-cover"
                  loading="eager"
                />
              </div>
              <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover">
                <img
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=300&fit=crop"
                  alt="Accessories"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop"
                  alt="Luxury Fashion"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover">
                <img
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop"
                  alt="Shoes Collection"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
