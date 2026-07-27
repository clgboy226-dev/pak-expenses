'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const coupons = [
  {
    code: 'LUXURY20',
    discount: '20% OFF',
    description: 'Sitewide discount on all products',
    minPurchase: '$50+',
    expiry: 'Dec 31, 2024',
    color: 'from-primary-500 to-primary-600',
  },
  {
    code: 'NEWUSER30',
    discount: '30% OFF',
    description: 'First order special discount',
    minPurchase: '$100+',
    expiry: 'Dec 31, 2024',
    color: 'from-luxury-gold to-yellow-600',
  },
  {
    code: 'FREESHIP',
    discount: 'Free Shipping',
    description: 'Free shipping on all orders',
    minPurchase: '$75+',
    expiry: 'Dec 31, 2024',
    color: 'from-green-500 to-emerald-600',
  },
];

export default function CouponSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary-600 dark:text-primary-400 font-medium text-sm uppercase tracking-wider">
            Save More
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Exclusive Coupons
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto">
            Use these codes at checkout for amazing discounts
          </p>
        </div>

        {/* Coupons Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {coupons.map((coupon, index) => (
            <div
              key={coupon.code}
              className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900 border-2 border-dashed border-gray-300 dark:border-gray-700 p-6"
            >
              {/* Gradient Overlay */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${coupon.color}`}></div>
              
              {/* Discount Badge */}
              <div className={`inline-block bg-gradient-to-r ${coupon.color} text-white font-bold px-4 py-2 rounded-lg mb-4`}>
                {coupon.discount}
              </div>

              {/* Coupon Code */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <code className="text-lg font-mono font-bold text-gray-900 dark:text-white">
                    {coupon.code}
                  </code>
                  <button
                    onClick={() => handleCopy(coupon.code, index)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="Copy code"
                  >
                    {copiedIndex === index ? (
                      <Check size={20} className="text-green-500" />
                    ) : (
                      <Copy size={20} className="text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {coupon.description}
              </p>

              {/* Details */}
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                <span>Min. purchase: {coupon.minPurchase}</span>
                <span>Expires: {coupon.expiry}</span>
              </div>

              {/* CTA */}
              <a
                href="/shop"
                className="mt-4 block w-full text-center btn-primary text-sm py-2"
              >
                Shop Now
              </a>
            </div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want more exclusive deals?
          </p>
          <a
            href="#newsletter"
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center gap-2"
          >
            Subscribe to our newsletter
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
