import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            About SionSite
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            We Build Websites That Grow Your Business
          </h2>
          <div className="space-y-4">
            <p className="font-body text-muted-foreground leading-relaxed">
              At SionSite, we believe every small and medium business deserves a
              reliable, professional online presence — without the hefty price tag.
              We partner with restaurants, retail stores, tradespeople, and local
              businesses to create websites that truly represent their vision.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Our approach is built on trust, transparency, and easy communication.
              We don't just build websites — we build long-term partnerships that
              help your business grow, engage more customers, and stand out in a
              digital world.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "3+", label: "Years Experience" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-secondary rounded-2xl p-8 text-center"
            >
              <p className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
