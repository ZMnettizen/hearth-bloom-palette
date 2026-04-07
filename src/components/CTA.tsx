import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const navigate = useNavigate();

  return (
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
            Elevate Your Business's Digital Presence
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Let's create a website that represents your business at its best.
          </p>
          <Button
            size="lg"
            className="font-body font-bold text-base px-10 py-6 rounded-xl glow-gold"
            onClick={() => navigate("/contact")}
          >
            Get Started Today
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
