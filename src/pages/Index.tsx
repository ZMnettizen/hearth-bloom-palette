import Header from "@/components/Header";
import HeroGrid from "@/components/HeroGrid";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroGrid />
    <About />
    <Services />
    <WhyUs />
    <CTA />
    <Footer />
  </div>
);

export default Index;
