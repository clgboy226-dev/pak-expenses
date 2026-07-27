import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: '1',
    title: '10 Summer Fashion Trends You Need to Know',
    excerpt: 'Discover the hottest summer styles that will keep you looking chic and cool all season long.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop',
    category: 'Trends',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'How to Build a Capsule Wardrobe on a Budget',
    excerpt: 'Learn the art of creating a versatile wardrobe with essential pieces that mix and match perfectly.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
    category: 'Guide',
    date: 'Dec 12, 2024',
    readTime: '8 min read',
  },
  {
    id: '3',
    title: 'Accessorizing 101: Elevate Any Outfit',
    excerpt: 'Master the art of accessorizing with our expert tips on choosing the perfect jewelry, bags, and more.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop',
    category: 'Tips',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-primary-600 dark:text-primary-400 font-medium text-sm uppercase tracking-wider">
              Fashion Blog
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
              Latest Articles
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl">
              Style tips, trend reports, and fashion inspiration
            </p>
          </div>
          <Link
            href="/blog"
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center gap-2"
          >
            View All Posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md card-hover"
            >
              {/* Image */}
              <Link href={`/blog/${post.id}`} className="block relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-luxury-gold text-luxury-black text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.id}`}>
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary-600 dark:text-primary-400 font-medium text-sm hover:underline inline-flex items-center gap-2"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
