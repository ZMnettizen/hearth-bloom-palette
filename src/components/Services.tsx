import { motion } from "framer-motion";
import { Globe, RefreshCw, Store, Wrench, Smartphone, Headphones } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    desc: "From concept to launch — we design and build stunning websites tailored to your brand and business goals.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Already have a site? We'll redesign and modernize it to attract more customers and improve conversions.",
  },
  {
    icon: Store,
    title: "E-Commerce Solutions",
    desc: "Online stores that sell — optimized product pages, secure checkout, and inventory management.",
  },
  {
    icon: Wrench,
    title: "Industry-Specific",
    desc: "Specialized solutions for restaurants, trades, and service businesses with booking and scheduling.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    desc: "Every site looks and works perfectly on phones, tablets, and desktops — no compromise.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "We stick around after launch. Updates, fixes, and improvements — we've got your back long-term.",
  },
];

const Services = () => (
  <section id="services" className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          What We Do
        </p>
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
          Our Services
        </h2>
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          Everything you need to establish and grow your online presence.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
              {s.title}
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
