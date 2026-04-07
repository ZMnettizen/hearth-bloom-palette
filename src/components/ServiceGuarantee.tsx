import { motion } from "framer-motion";
import { ShieldCheck, Clock, Zap, Heart } from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    desc: "Every website is built to the highest standard. If you're not happy, we'll refine it until you are.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We respect your time. Clear timelines, consistent updates, and no surprises.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    desc: "Optimized for speed, security, and performance — your site won't let you down.",
  },
  {
    icon: Heart,
    title: "Ongoing Partnership",
    desc: "We don't disappear after launch. Continuous support, updates, and improvements.",
  },
];

const ServiceGuarantee = () => (
  <section className="py-20 lg:py-28 bg-secondary/50">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
          Our Promise
        </p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Built on Trust, Delivered with Excellence
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          When you work with SionSite, you get more than a website — you get a partner committed to your success.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {guarantees.map((g, i) => (
          <motion.div
            key={g.title}
            className="glass rounded-2xl p-8 text-center hover:glow-gold transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <g.icon className="text-primary" size={26} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              {g.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {g.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceGuarantee;
