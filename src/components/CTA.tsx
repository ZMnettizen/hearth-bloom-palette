import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => (
  <section className="py-20 lg:py-28 bg-primary">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
      <motion.div
        className="max-w-2xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground leading-tight">
          Ready to Elevate Your Online Presence?
        </h2>
        <p className="font-body text-primary-foreground/80 text-lg max-w-xl mx-auto">
          Let's create a website that works as hard as you do. Get started today and see results.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="font-body font-bold text-base px-8"
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get Started Today
          <ArrowRight size={18} className="ml-2" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CTA;
