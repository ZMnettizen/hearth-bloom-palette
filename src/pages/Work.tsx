import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MzansiMeatsPreview from "@/components/previews/MzansiMeatsPreview";
import EcommercePreview from "@/components/previews/EcommercePreview";
import NonnasPreview from "@/components/previews/NonnasPreview";
import TradesPreview from "@/components/previews/TradesPreview";

const projects = [
  {
    title: "Mzansi Meats",
    client: "Inkabi Meats",
    category: "Food & Beverage",
    year: "2024",
    Preview: MzansiMeatsPreview,
    url: "https://id-preview--49c8ab60-f515-48a6-bf57-013d1f778b6a.lovable.app",
    description: "A bold, conversion-focused site for a proudly South African meat supplier. Built to communicate quality, trust, and local pride.",
    services: ["Brand Identity", "Web Design", "Copywriting"],
  },
  {
    title: "Retail E-Commerce",
    client: "Urban Outfitters",
    category: "E-Commerce",
    year: "2024",
    Preview: EcommercePreview,
    url: null,
    description: "A premium fashion e-commerce experience with intuitive browsing and a minimalist checkout flow designed to increase conversions.",
    services: ["UI/UX Design", "E-Commerce Dev", "Performance Optimisation"],
  },
  {
    title: "Nonna's Kitchen",
    client: "Nonna's Restaurant",
    category: "Restaurant",
    year: "2024",
    Preview: NonnasPreview,
    url: "https://id-preview--463169f5-1fa0-449a-a7d1-dc1343a361a7.lovable.app",
    description: "An elegant restaurant site with online reservations, a full menu display, and a gallery that makes guests hungry before they arrive.",
    services: ["Web Design", "Booking Integration", "Photography Direction"],
  },
  {
    title: "ProPlumb Trades",
    client: "ProPlumb Co.",
    category: "Trades & Services",
    year: "2025",
    Preview: TradesPreview,
    url: null,
    description: "A professional, high-trust website for a licensed plumbing business with clear service listings and emergency call-to-action.",
    services: ["Web Design", "Local SEO Setup", "Lead Generation"],
  },
];

const Work = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background theme-grey">
      <Header />
      <main>
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft size={16} />
                Back to Home
              </button>
              <p className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
                Our Portfolio
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] text-balance">
                Real Websites, Real Results
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Every project is crafted to convert visitors into customers. Browse our portfolio to see the quality behind each build.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
            {projects.map((p, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={p.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "[direction:rtl]" : ""}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="relative [direction:ltr]">
                    <div
                      className="relative overflow-hidden rounded-2xl shadow-lg bg-card border border-border h-[420px] lg:h-[500px] group cursor-pointer"
                      onClick={() => p.url && window.open(p.url, "_blank", "noopener,noreferrer")}
                    >
                      <div className="w-full h-full overflow-hidden">
                        <p.Preview />
                      </div>
                      {p.url && (
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm px-6 py-3 rounded-lg shadow-lg">
                            View Live Site
                            <ExternalLink size={16} />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body text-xs font-bold shadow-lg">
                      {p.year}
                    </div>
                  </div>

                  <div className="space-y-5 [direction:ltr]">
                    <p className="font-body text-xs font-semibold uppercase tracking-widest text-primary">
                      {p.category}
                    </p>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                      {p.title}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground">Client: {p.client}</p>
                    <p className="font-body text-muted-foreground leading-relaxed">{p.description}</p>
                    <div>
                      <p className="font-body text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                        Services Delivered
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.services.map((s) => (
                          <span key={s} className="font-body text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    {p.url ? (
                      <Button size="lg" className="font-body font-semibold" onClick={() => window.open(p.url!, "_blank", "noopener,noreferrer")}>
                        View Live Site
                        <ExternalLink size={16} className="ml-2" />
                      </Button>
                    ) : (
                      <p className="font-body text-sm text-muted-foreground italic">Live preview not available for this project.</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="bg-primary py-20 lg:py-28">
          <motion.div
            className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground">
              Want a Website Like These?
            </h2>
            <p className="font-body text-primary-foreground/80 max-w-xl mx-auto text-lg">
              Let's build something that makes your business stand out online.
            </p>
            <Button variant="secondary" size="lg" className="font-body font-bold text-base" onClick={() => navigate("/contact")}>
              Get In Touch
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
