import { motion } from "framer-motion";

const reasons = [
  { stat: "150+", label: "Projects Completed" },
  { stat: "15", label: "Years of Experience" },
  { stat: "98%", label: "Client Satisfaction" },
];

const WhyUs = () => (
  <section className="bg-secondary py-20 px-6 text-center">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
      Why Choose Us
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {reasons.map((r, i) => (
        <motion.div
          key={r.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
        >
          <p className="font-display text-5xl font-bold text-primary mb-2">{r.stat}</p>
          <p className="font-body text-muted-foreground">{r.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhyUs;
