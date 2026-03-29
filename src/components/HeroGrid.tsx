import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import RestaurantPreview from "./previews/RestaurantPreview";
import EcommercePreview from "./previews/EcommercePreview";
import TradesPreview from "./previews/TradesPreview";

const projects = [
  { title: "Restaurant Website", client: "Fine Dining Co.", Preview: RestaurantPreview },
  { title: "Retail E-Commerce", client: "Urban Outfitters", Preview: EcommercePreview },
  { title: "Trades & Services", client: "ProPlumb Solutions", Preview: TradesPreview },
];

const HeroGrid = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section id="projects" className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[85vh] max-w-[1280px] min-w-0 mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="relative overflow-hidden cursor-pointer group h-[50vh] md:h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              onClick={() => setSelected(i)}
            >
              {/* Live mini preview */}
              <div className="w-full h-full pointer-events-none scale-[1.15] origin-top">
                <p.Preview />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent group-hover:from-foreground/70 group-hover:via-foreground/20 transition-all duration-300" />
              <div className="absolute bottom-0 w-full p-6 text-center">
                <h3 className="font-display text-xl font-semibold text-primary-foreground drop-shadow-lg">
                  {p.title}
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

      {/* Modal - full live preview */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-[90vw] max-w-3xl h-[75vh] rounded-xl overflow-hidden shadow-2xl border border-border bg-background"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-muted border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background rounded-md px-3 py-1 text-xs text-muted-foreground text-center border border-border">
                    {projects[selected].client.toLowerCase().replace(/\s+/g, '') + '.co.za'}
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close preview"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Live website preview */}
              <div className="w-full h-[calc(100%-40px)] overflow-auto">
                {(() => {
                  const P = projects[selected].Preview;
                  return <P />;
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroGrid;
