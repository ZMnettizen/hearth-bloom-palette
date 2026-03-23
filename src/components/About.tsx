import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="bg-secondary py-20 px-6">
    <motion.div
      className="max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
        What We Stand For
      </h2>
      <p className="font-body text-muted-foreground leading-relaxed text-lg mb-4">
        At SionSite, we believe every small and medium business deserves a
        reliable, professional online presence — without the hefty price tag. We
        partner with restaurants, retail stores, tradespeople, and local
        businesses to create websites that truly represent their vision.
      </p>
      <p className="font-body text-muted-foreground leading-relaxed text-lg">
        Our approach is built on trust, transparency, and easy communication. We
        don't just build websites — we build long-term partnerships that help
        your business grow, engage more customers, and stand out in a digital
        world.
      </p>
    </motion.div>
  </section>
);

export default About;
