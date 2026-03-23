import { motion } from "framer-motion";
import { Home, Compass, Leaf, Ruler } from "lucide-react";

const services = [
  { icon: Home, title: "Residential Design", desc: "Custom homes tailored to your lifestyle and landscape." },
  { icon: Compass, title: "Urban Planning", desc: "Thoughtful community layouts that foster connection." },
  { icon: Leaf, title: "Sustainable Building", desc: "Eco-conscious materials and energy-efficient systems." },
  { icon: Ruler, title: "Interior Architecture", desc: "Refined interiors that balance form and function." },
];

const Services = () => (
  <section id="services" className="py-20 px-6 text-center">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
      Our Services
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          className="bg-card rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <s.icon className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">{s.title}</h3>
          <p className="font-body text-muted-foreground text-sm">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;
