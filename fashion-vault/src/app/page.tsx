import HeroSection from '@/components/HeroSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import TrendingProducts from '@/components/TrendingProducts';
import NewArrivals from '@/components/NewArrivals';
import BestSellers from '@/components/BestSellers';
import FlashDeals from '@/components/FlashDeals';
import CouponSection from '@/components/CouponSection';
import BlogSection from '@/components/BlogSection';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <TrendingProducts />
      <NewArrivals />
      <BestSellers />
      <FlashDeals />
      <CouponSection />
      <BlogSection />
      <NewsletterCTA />
    </>
  );
}
