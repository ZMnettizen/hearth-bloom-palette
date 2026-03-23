import Header from "@/components/Header";
import HeroGrid from "@/components/HeroGrid";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => (
  <div className="min-h-screen bg-background scroll-smooth">
    <Header />
    <main>
      <HeroGrid />
      <About />
      <Services />
      <WhyUs />
      <CTA />
      <Contact />
    </main>
    <Footer />
    <Toaster />
  </div>
);

export default Index;
