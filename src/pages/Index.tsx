import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PreviewShowcase from "@/components/PreviewShowcase";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => (
  <div className="min-h-screen bg-background scroll-smooth">
    <Header />
    <main>
      <Hero />
      <PreviewShowcase />
      <About />
      <Services />
      <Process />
      <CTA />
      <Contact />
    </main>
    <Footer />
    <Toaster />
  </div>
);

export default Index;
