import { motion } from "framer-motion";
import { Shield, Search, Smartphone, Headphones } from "lucide-react";

const trustItems = [
  { icon: Shield, title: "Secure Payments", desc: "SSL, HTTPS & PCI compliant" },
  { icon: Search, title: "SEO Optimized", desc: "Built for visibility & rankings" },
  { icon: Smartphone, title: "Mobile First", desc: "Flawless on every device" },
  { icon: Headphones, title: "Ongoing Support", desc: "Dedicated post-launch care" },
];

const TrustSection = () => (
  <section className="py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
          Why Choose Us
        </p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Helping restaurants elevate their digital presence
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Trusted by premium hospitality brands. Fast, secure, and fully managed.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustItems.map((item, i) => (
          <motion.div
            key={item.title}
            className="glass rounded-2xl p-8 text-center hover:glow-gold transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <item.icon className="text-primary" size={26} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
