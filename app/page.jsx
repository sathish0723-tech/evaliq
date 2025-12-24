import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DashboardPreview from '@/components/DashboardPreview';
import WhyChooseEvaliq from '@/components/WhyChooseEvaliq';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <DashboardPreview />
      <WhyChooseEvaliq />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}

