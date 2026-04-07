import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MzansiMeatsPreview from "./previews/MzansiMeatsPreview";
import EcommercePreview from "./previews/EcommercePreview";
import NonnasPreview from "./previews/NonnasPreview";

const projects = [
  {
    title: "Mzansi Meats",
    client: "Inkabi Meats",
    category: "Food & Beverage",
    Preview: MzansiMeatsPreview,
    url: "https://id-preview--49c8ab60-f515-48a6-bf57-013d1f778b6a.lovable.app",
  },
  {
    title: "Retail E-Commerce",
    client: "Urban Outfitters",
    category: "E-Commerce",
    Preview: EcommercePreview,
    url: null,
  },
  {
    title: "Nonna's Kitchen",
    client: "Nonna's Restaurant",
    category: "Restaurant",
    Preview: NonnasPreview,
    url: "https://id-preview--463169f5-1fa0-449a-a7d1-dc1343a361a7.lovable.app",
  },
];

const PreviewShowcase = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
            Our Work
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Real Websites, Real Results
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            See how we've helped businesses stand out with bespoke digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="relative group cursor-pointer transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              onClick={() => p.url && window.open(p.url, "_blank", "noopener,noreferrer")}
            >
              <div className="relative overflow-hidden rounded-2xl glass border-border/30 h-[380px] lg:h-[480px]">
                <div className="w-full h-full overflow-hidden">
                  <p.Preview />
                </div>
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    {p.url && (
                      <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm px-6 py-3 rounded-lg">
                        View Live Site
                        <ExternalLink size={16} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                  {p.category}
                </p>
                <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{p.client}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" className="font-body font-semibold text-base rounded-xl" onClick={() => navigate("/work")}>
            View All Our Work
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PreviewShowcase;
