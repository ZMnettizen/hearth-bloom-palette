import { motion } from "framer-motion";
import { Lightbulb, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Plan",
    desc: "We learn about your business, goals, and audience to create a clear project roadmap.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Design",
    desc: "We craft a custom design that reflects your brand and speaks to your customers.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build",
    desc: "We develop your site with clean code, fast performance, and mobile responsiveness.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    desc: "We deploy your website, test everything, and provide ongoing support.",
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
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          How It Works
        </p>
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
          Our Process
        </h2>
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          A simple, transparent workflow from idea to launch.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            className="relative text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <s.icon className="text-primary" size={28} />
            </div>
            <p className="font-body text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Step {s.step}
            </p>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              {s.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {s.desc}
            </p>

            {/* Connector line (hidden on last item and mobile) */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
