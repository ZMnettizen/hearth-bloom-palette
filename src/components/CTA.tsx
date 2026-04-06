import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => (
  <section className="py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <motion.div
        className="glass-strong rounded-3xl p-12 lg:p-20 text-center glow-gold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
          Ready to Begin?
        </p>
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground leading-tight mb-6 max-w-2xl mx-auto">
          Elevate Your Restaurant's Digital Presence
        </h2>
        <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto mb-8">
          Let's create a website that's as refined as your dining experience.
        </p>
        <Button
          size="lg"
          className="font-body font-bold text-base px-10 py-6 rounded-xl glow-gold"
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
