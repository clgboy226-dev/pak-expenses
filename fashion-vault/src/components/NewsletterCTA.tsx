'use client';

import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would call an API
    console.log('Newsletter subscription:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-16 md:py-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-luxury-gold rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Mail size={32} className="text-white" />
            </div>

            {/* Content */}
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Join the Fashion Vault Family
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-8">
              Subscribe to get exclusive deals, early access to new arrivals, fashion tips, 
              and 10% off your first order. No spam, unsubscribe anytime.
            </p>

            {/* Form */}
            {isSubmitted ? (
              <div className="max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-center gap-3 text-white">
                  <Check size={24} className="text-green-400" />
                  <p className="font-medium">Thank you for subscribing!</p>
                </div>
                <p className="text-primary-100 text-sm mt-2">
                  Check your inbox for your welcome discount code.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="btn-secondary whitespace-nowrap px-8 py-4"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-primary-200 mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </form>
            )}

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div>
                <p className="text-2xl font-bold text-white">10%</p>
                <p className="text-sm text-primary-200">Off First Order</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Early</p>
                <p className="text-sm text-primary-200">Access to Sales</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Free</p>
                <p className="text-sm text-primary-200">Fashion Tips</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
