import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
            Web Design & Development
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] text-balance">
            Websites That Turn Visitors Into Customers
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We design and build high-converting websites for restaurants, eCommerce stores, and trades businesses — so you can focus on what you do best.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="font-body font-semibold text-base px-8"
              onClick={() => navigate("/work")}
            >
              View Our Work
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-body font-semibold text-base px-8"
              onClick={() => scrollTo("contact")}
            >
              Get a Website
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
