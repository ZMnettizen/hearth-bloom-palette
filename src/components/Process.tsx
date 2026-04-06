import { motion } from "framer-motion";
import { Search, Palette, MessageSquare, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    desc: "Understanding your brand, audience, and goals to define the vision.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Design Development",
    desc: "Crafting a unique, high-end interface that reflects your restaurant's character.",
  },
  {
    icon: MessageSquare,
    step: "03",
    title: "Review",
    desc: "Refinement through client feedback until every detail is perfect.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    desc: "Go live with full optimization, testing, and ongoing support.",
  },
];

const Process = () => (
  <section id="process" className="py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
          How It Works
        </p>
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
          Our Process
        </h2>
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          A refined workflow designed around precision and perfection.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            className="relative glass rounded-2xl p-8 text-center hover:glow-gold transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={28} />
            </div>
            <p className="font-body text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Step {s.step}
            </p>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              {s.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
