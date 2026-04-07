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
            About SionSite
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Your Vision, Crafted Into a Premium Online Presence
          </h2>
          <div className="space-y-5">
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              At SionSite, we believe every business deserves a website that truly represents who they are. We work one-on-one with each client to understand their vision and bring it to life with a high-end, custom-built website.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Whether you're a restaurant looking to fill tables, a tradesperson building credibility, or a small business ready to grow — we design websites that help customers trust you from the first click.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Dedicated one-on-one collaboration with every client",
                "Focused on restaurants, trades & small businesses",
                "Every build is custom — never a template",
                "Helping your business present itself professionally online",
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
          <p className="font-display text-2xl lg:text-3xl font-bold text-foreground leading-snug mb-8">
            "We don't just build websites — we build the digital face of your business."
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
