import { motion } from "framer-motion";

const Identity = () => (
  <section className="py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
            Our Identity
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            We design for experience, not just appearance.
          </h2>
          <div className="space-y-5">
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              We partner with restaurants to craft immersive digital experiences that reflect their atmosphere, elevate their brand, and convert visitors into guests.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Focused exclusively on fine dining restaurants",
                "Emphasis on luxury branding & atmosphere",
                "Tailored, non-template builds — every project is unique",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <p className="font-body text-foreground/80">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-10 lg:p-14 glow-gold"
        >
          <p className="font-display text-2xl lg:text-3xl font-bold text-foreground leading-snug mb-6">
            "Every plate tells a story. Every website should too."
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "3+", label: "Years Experience" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Identity;
