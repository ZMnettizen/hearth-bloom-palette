import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check, Star, ArrowRight, Search, Palette, MessageSquare, Rocket, Users, Building2, Zap, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "Essential Presence",
    price: "R2 499",
    popular: false,
    tagline: "Entry into premium digital presence",
    features: [
      "Custom non-template website",
      "Domain setup",
      "Mobile responsive design",
      "SSL & HTTPS security",
      "Fast loading speeds",
    ],
  },
  {
    name: "Refined Experience",
    price: "R5 999",
    popular: true,
    tagline: "Designed for growing restaurants",
    features: [
      "Everything in Essential, plus:",
      "Advanced SEO optimization",
      "Hosting included",
      "Branding consistency across pages",
      "Email client integration",
      "Monthly updates & maintenance",
    ],
  },
  {
    name: "Signature Digital Presence",
    price: "R8 999",
    popular: false,
    tagline: "For establishments that demand excellence",
    features: [
      "Everything in Refined, plus:",
      "Fully custom luxury UI/UX design",
      "Conversion strategy (booking-focused)",
      "Priority support",
      "Continuous improvements",
      "Dedicated one-on-one collaboration",
    ],
  },
];

const trustItems = [
  { icon: Users, text: "Private, one-on-one design process" },
  { icon: Building2, text: "Built for high-end hospitality brands" },
  { icon: Zap, text: "Performance, speed, and SEO optimized" },
  { icon: Settings, text: "Fully managed from concept to launch" },
];

const processSteps = [
  { icon: Search, title: "Discovery", desc: "Understanding your brand, audience, and vision." },
  { icon: Palette, title: "Design Development", desc: "Crafting a bespoke, high-end interface." },
  { icon: MessageSquare, title: "Review", desc: "Refinement through collaborative feedback." },
  { icon: Rocket, title: "Launch", desc: "Go live with full optimization and support." },
];

const whyMonthly = [
  "Continuous SEO improvements",
  "Ongoing maintenance & security",
  "Hosting + uptime management",
  "Content updates on request",
  "Performance optimization",
  "Dedicated priority support",
];

const Services = () => {
  const navigate = useNavigate();

  const scrollToPricing = () => {
    const el = document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-[100px]" />

          <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <p className="font-body text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                The New Creation. At Your Table.
              </p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] text-balance">
                Digital Experiences Worthy of Your Table
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We don't build websites. We design presence.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                <Button
                  size="lg"
                  className="font-body font-semibold text-base px-10 py-6 rounded-xl glow-gold"
                  onClick={scrollToPricing}
                >
                  Choose Your Experience
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Trust Strip ── */}
        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  className="glass rounded-2xl p-7 text-center hover:glow-gold transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-primary" size={22} />
                  </div>
                  <p className="font-body text-sm text-foreground/90 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.p
              className="text-center mt-10 font-body text-sm text-muted-foreground italic tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Every project is crafted — never templated.
            </motion.p>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                Our Packages
              </p>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground">
                Investment in Excellence
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  className={`relative glass rounded-3xl p-8 lg:p-10 flex flex-col transition-all duration-300 ${
                    tier.popular
                      ? "glow-gold border-primary/30 md:scale-105 md:z-10"
                      : "hover:glow-gold"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary text-primary-foreground font-body text-xs font-bold uppercase tracking-wider px-5 py-1.5 rounded-full">
                      <Star size={12} /> Most Popular
                    </div>
                  )}

                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    {tier.name}
                  </h3>
                  <p className="font-body text-xs text-primary/80 italic mb-5">
                    {tier.tagline}
                  </p>

                  <div className="mb-7">
                    <span className="font-display text-4xl font-bold text-primary">
                      {tier.price}
                    </span>
                    <span className="font-body text-sm text-muted-foreground ml-2">
                      monthly or once-off
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm text-foreground/80">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    variant={tier.popular ? "default" : "outline"}
                    className={`w-full font-body font-bold text-base rounded-xl ${
                      tier.popular ? "glow-gold" : "border-border/60 hover:border-primary/40"
                    }`}
                    onClick={() => navigate("/#contact")}
                  >
                    Get Started
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Monthly ── */}
        <section className="py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <motion.div
              className="glass-strong rounded-3xl p-10 lg:p-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                    Transparent Value
                  </p>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Why Clients Stay With Us
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Your website is a living asset — not a one-time deliverable. Our monthly plans ensure it stays fast, secure, and continuously optimized so you can focus entirely on your guests.
                  </p>
                </div>
                <ul className="space-y-4">
                  {whyMonthly.map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="font-body text-foreground/85">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Process ── */}
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
                How We Work
              </p>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground">
                Our Process
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((s, i) => (
                <motion.div
                  key={s.title}
                  className="glass rounded-2xl p-8 text-center hover:glow-gold transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="text-primary" size={26} />
                  </div>
                  <p className="font-body text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    0{i + 1}
                  </p>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                Your Restaurant Deserves More Than a Template
              </h2>
              <Button
                size="lg"
                className="font-body font-bold text-base px-12 py-6 rounded-xl glow-gold"
                onClick={() => navigate("/#contact")}
              >
                Start Your Project
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
