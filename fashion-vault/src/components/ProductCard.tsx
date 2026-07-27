import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  store: string;
  rating?: number;
  reviews?: number;
  isHot?: boolean;
  isNew?: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md card-hover"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-gray-700">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isHot && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              HOT
            </span>
          )}
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              NEW
            </span>
          )}
          {product.discount && (
            <span className="bg-luxury-gold text-luxury-black text-xs font-bold px-2 py-1 rounded-full">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 dark:hover:bg-red-900/20"
          aria-label="Add to wishlist"
        >
          <Heart size={18} className="text-gray-700 dark:text-gray-200 hover:text-red-500" />
        </button>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link
            href={`/product/${product.id}`}
            className="btn-secondary text-sm px-6 py-2"
          >
            Quick View
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Store */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{product.store}</p>

        {/* Product Name */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.rating!) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              ({product.reviews})
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-primary-600">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Affiliate Button */}
        <a
          href={`/product/${product.id}`}
          className="w-full btn-primary inline-flex items-center justify-center gap-2 text-sm py-2"
        >
          View Deal
          <ExternalLink size={16} />
        </a>
      </div>
    </motion.div>
  );
}
