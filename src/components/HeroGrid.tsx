import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  { img: project1, title: "Restaurant Website", client: "Fine Dining Co." },
  { img: project2, title: "Retail E-Commerce", client: "Urban Outfitters" },
  { img: project3, title: "Trades & Services", client: "ProPlumb Solutions" },
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
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/50 transition-colors duration-300" />
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

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-foreground/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full h-full overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 bg-foreground/60 text-primary-foreground rounded-full p-2 hover:bg-foreground/80 transition-colors"
                aria-label="Close preview"
              >
                <X size={20} />
              </button>
              <img
                src={projects[selected].img}
                alt={projects[selected].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-foreground/80 to-transparent">
                <h3 className="font-display text-2xl font-bold text-primary-foreground">
                  {projects[selected].title}
                </h3>
                <p className="font-body text-primary-foreground/80 mt-1">
                  Client: {projects[selected].client}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroGrid;
