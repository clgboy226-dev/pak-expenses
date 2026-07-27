'use client';

import { useState, useEffect } from 'react';
import { Clock, Zap, ExternalLink } from 'lucide-react';
import ProductCard from './ProductCard';

const flashDealsData = [
  {
    id: '13',
    name: 'Designer Tote Bag',
    price: 79.99,
    originalPrice: 199.99,
    discount: 60,
    image: 'https://images.unsplash.com/photo-1591561954557-269407c89646?w=400&h=500&fit=crop',
    store: 'Amazon',
    rating: 4.8,
    reviews: 456,
    isHot: true,
  },
  {
    id: '14',
    name: 'Premium Headphones',
    price: 89.99,
    originalPrice: 249.99,
    discount: 64,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=500&fit=crop',
    store: 'AliExpress',
    rating: 4.9,
    reviews: 789,
    isHot: true,
  },
  {
    id: '15',
    name: 'Luxury Perfume Set',
    price: 65.99,
    originalPrice: 159.99,
    discount: 59,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop',
    store: 'Daraz',
    rating: 4.7,
    reviews: 234,
  },
  {
    id: '16',
    name: 'Smart Fitness Watch',
    price: 49.99,
    originalPrice: 129.99,
    discount: 62,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop',
    store: 'Temu',
    rating: 4.6,
    reviews: 567,
    isHot: true,
  },
];

export default function FlashDeals() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              // Reset timer
              return { hours: 12, minutes: 45, seconds: 30 };
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-800 dark:to-luxury-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-4">
            <Zap size={20} className="fill-yellow-400 text-yellow-400" />
            <span className="font-bold">FLASH DEALS</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Limited Time Offers
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Grab these incredible deals before they're gone!
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px]"
              >
                <p className="text-3xl font-bold text-white">
                  {String(item.value).padStart(2, '0')}
                </p>
                <p className="text-xs text-primary-100 uppercase">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Clock size={16} />
            <span>Deals end soon!</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashDealsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/deals"
            className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors shadow-lg"
          >
            View All Flash Deals
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
