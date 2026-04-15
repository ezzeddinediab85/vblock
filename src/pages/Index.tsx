import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const Product = lazy(() => import('@/components/Product'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const Benefits = lazy(() => import('@/components/Benefits'));
const Stats = lazy(() => import('@/components/Stats'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Waitlist = lazy(() => import('@/components/Waitlist'));
const Community = lazy(() => import('@/components/Community'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Product />
        <HowItWorks />
        <Benefits />
        <Stats />
        <Testimonials />
        <FAQ />
        <Waitlist />
        <Community />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
