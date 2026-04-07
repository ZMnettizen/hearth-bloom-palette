import { motion } from "framer-motion";
import { Star, MessageCircle, Shield, Users } from "lucide-react";

const testimonials = [
  {
    quote: "SionSite transformed our online presence. Bookings increased by 40% within the first month.",
    name: "Thabo M.",
    role: "Restaurant Owner",
  },
  {
    quote: "Professional, reliable, and truly understood our vision. The website exceeded our expectations.",
    name: "Sarah K.",
    role: "E-Commerce Founder",
  },
  {
    quote: "Working with Zion felt personal. He listened, refined, and delivered something we're proud of.",
    name: "James P.",
    role: "Plumbing Business Owner",
  },
];

const trustPoints = [
  { icon: Users, text: "One-on-one collaboration" },
  { icon: Shield, text: "Fully managed & secure" },
  { icon: Star, text: "Premium quality guaranteed" },
  { icon: MessageCircle, text: "Clear communication always" },
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
          Trusted by Businesses
        </p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
          What Our Clients Say
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="glass rounded-2xl p-8 hover:glow-gold transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="text-primary fill-primary" />
              ))}
            </div>
            <p className="font-body text-foreground/80 leading-relaxed mb-6 italic">
              "{t.quote}"
            </p>
            <div>
              <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
              <p className="font-body text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {trustPoints.map((item, i) => (
          <motion.div
            key={item.text}
            className="flex flex-col items-center text-center gap-3 p-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <item.icon className="text-primary" size={22} />
            </div>
            <p className="font-body text-sm text-muted-foreground">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
