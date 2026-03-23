import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="bg-secondary py-20 px-6 text-center">
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
        About SionSite
      </h2>
      <p className="font-body text-muted-foreground leading-relaxed text-lg">
        We are a design-forward architecture studio crafting spaces that harmonize with nature.
        With over 15 years of experience, our team blends sustainable materials, innovative
        engineering, and timeless aesthetics to create homes and buildings that inspire.
      </p>
    </motion.div>
  </section>
);

export default About;
