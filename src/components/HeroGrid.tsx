import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import MzansiMeatsPreview from "./previews/MzansiMeatsPreview";
import EcommercePreview from "./previews/EcommercePreview";
import NonnasPreview from "./previews/NonnasPreview";

const projects = [
  {
    title: "Mzansi Meats",
    client: "Inkabi Meats",
    Preview: MzansiMeatsPreview,
    url: "https://id-preview--49c8ab60-f515-48a6-bf57-013d1f778b6a.lovable.app",
  },
  {
    title: "Retail E-Commerce",
    client: "Urban Outfitters",
    Preview: EcommercePreview,
    url: null,
  },
  {
    title: "Nonna's Italian Kitchen",
    client: "Nonna's Restaurant",
    Preview: NonnasPreview,
    url: "https://id-preview--463169f5-1fa0-449a-a7d1-dc1343a361a7.lovable.app",
  },
];

const HeroGrid = () => {
  const handleClick = (url: string | null) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="relative">
      <div className="flex flex-col max-w-[1280px] min-w-0 mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="relative overflow-hidden cursor-pointer group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            onClick={() => handleClick(p.url)}
          >
            {/* Live mini preview */}
            <div className="w-full pointer-events-none">
              <p.Preview />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent group-hover:from-foreground/70 group-hover:via-foreground/20 transition-all duration-300" />
            <div className="absolute bottom-0 w-full p-6 text-center">
              <h3 className="font-display text-xl font-semibold text-primary-foreground drop-shadow-lg flex items-center justify-center gap-2">
                {p.title}
                {p.url && <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
              </h3>
              <p className="font-body text-sm text-primary-foreground/80 drop-shadow-lg">
                {p.client}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center px-6">
          <motion.h1
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground drop-shadow-xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Bringing Businesses Online, Beautifully
          </motion.h1>
          <motion.p
            className="font-body text-lg md:text-xl text-primary-foreground/90 drop-shadow-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Custom websites designed for growth, simplicity, and impact
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroGrid;
