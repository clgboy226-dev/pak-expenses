import Link from 'next/link';
import { Facebook, Instagram, Twitter, Pinterest, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck, Heart } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: "Women's Fashion", href: '/category/womens-fashion' },
    { name: "Men's Fashion", href: '/category/mens-fashion' },
    { name: 'Shoes', href: '/category/shoes' },
    { name: 'Bags', href: '/category/bags' },
    { name: 'Jewelry', href: '/category/jewelry' },
    { name: 'Beauty', href: '/category/beauty' },
    { name: 'Watches', href: '/category/watches' },
    { name: 'Accessories', href: '/category/accessories' },
  ],
  help: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Track Order', href: '/track-order' },
    { name: 'Size Guide', href: '/size-guide' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Affiliate Program', href: '/affiliate' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/fashionvault', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/fashionvault', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/fashionvault', label: 'Twitter' },
  { icon: Pinterest, href: 'https://pinterest.com/fashionvault', label: 'Pinterest' },
  { icon: Youtube, href: 'https://youtube.com/fashionvault', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-luxury-charcoal text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Join the Fashion Vault Family
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Subscribe to get exclusive deals, early access to new arrivals, and fashion tips from our experts.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="btn-secondary whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-xs text-primary-200 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <h2 className="font-display text-2xl font-bold text-gradient">
                  Fashion Vault
                </h2>
                <p className="text-xs text-gray-400 -mt-1">by Sami</p>
              </Link>
              <p className="text-sm text-gray-400 mb-4">
                Your premium destination for curated fashion finds from around the world.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>hello@fashionvault.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>New York, NY</span>
                </div>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Shop</h4>
              <ul className="space-y-2">
                {footerLinks.shop.slice(0, 5).map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-luxury-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Help</h4>
              <ul className="space-y-2">
                {footerLinks.help.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-luxury-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-luxury-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-luxury-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-full hover:bg-luxury-gold hover:text-luxury-black transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CreditCard size={16} />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield size={16} />
                  <span>Buyer Protection</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Truck size={16} />
                  <span>Fast Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Heart size={16} />
                  <span>Loved by Thousands</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Fashion Vault by Sami. All rights reserved.</p>
            <p className="mt-2 text-xs">
              This site contains affiliate links. We may earn a commission when you buy through our links.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
