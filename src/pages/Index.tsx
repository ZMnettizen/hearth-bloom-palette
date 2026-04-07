import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Identity from "@/components/Identity";
import PreviewShowcase from "@/components/PreviewShowcase";
import ServiceGuarantee from "@/components/ServiceGuarantee";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => (
  <div className="min-h-screen bg-background scroll-smooth">
    <Header />
    <main>
      <Hero />
      <TrustSection />
      <Identity />
      <PreviewShowcase />
      <ServiceGuarantee />
      <CTA />
    </main>
    <Footer />
    <Toaster />
  </div>
);

export default Index;
