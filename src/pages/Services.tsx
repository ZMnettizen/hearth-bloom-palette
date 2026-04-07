import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  TrendingUp,
  Users,
  Eye,
  CalendarCheck,
  Search,
  Palette,
  MessageSquare,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "Essential Presence",
    subtitle: "Quick-Start Template",
    price: "R2 499",
    priceNote: "Once-off",
    description: "Get online fast with a professionally designed pre-built template, customized with your branding and content.",
    popular: false,
    label: null,
    features: [
      "Pre-designed premium template",
      "Customized with your branding",
      "Domain setup",
      "Mobile responsive design",
      "SSL & HTTPS security",
      "Fast loading speeds",
      "Basic SEO setup",
    ],
  },
  {
    name: "Custom Website",
    subtitle: "One-on-One Collaboration",
    price: "R5 999",
    priceNote: "Once-off",
    description: "A fully custom-built website designed from scratch with dedicated one-on-one collaboration to bring your exact vision to life.",
    popular: true,
    label: "Most Popular",
    features: [
      "Everything in Essential, plus:",
      "Fully custom UI/UX design",
      "One-on-one design process",
      "Advanced SEO optimization",
      "Hosting included (1 year)",
      "Branding consistency across pages",
      "Email client integration",
      "Content strategy guidance",
    ],
  },
  {
    name: "Premium Ongoing",
    subtitle: "Continuous Growth Partner",
    price: "R8 999",
    priceNote: "per month",
    description: "For businesses that demand excellence — ongoing design improvements, priority support, and continuous optimization.",
    popular: false,
    label: "Best Value",
    features: [
      "Everything in Custom, plus:",
      "Continuous design improvements",
      "Monthly content updates",
      "Priority support & fast response",
      "Advanced performance optimization",
      "Ongoing SEO improvements",
      "Hosting & uptime management",
      "Dedicated design partnership",
    ],
  },
];

const outcomes = [
  {
    icon: TrendingUp,
    title: "Increased Conversions",
    desc: "Websites designed to turn visitors into paying customers, bookings, and leads.",
  },
  {
    icon: Eye,
    title: "Better Brand Perception",
    desc: "A premium online presence that makes customers trust and choose your business.",
  },
  {
    icon: CalendarCheck,
    title: "More Bookings",
    desc: "Optimized layouts and CTAs that drive reservations, inquiries, and sales.",
  },
  {
    icon: Users,
    title: "Professional Credibility",
    desc: "Stand out from competitors with a website that reflects your true quality.",
  },
];

const steps = [
  { icon: Search, step: "01", title: "Discovery", desc: "Understanding your brand, audience, and goals." },
  { icon: Palette, step: "02", title: "Design", desc: "Crafting a unique, high-end interface." },
  { icon: MessageSquare, step: "03", title: "Review", desc: "Refinement with your feedback until perfect." },
  { icon: Rocket, step: "04", title: "Launch", desc: "Go live with full optimization and support." },
];

const Services = () => {
  const navigate = useNavigate();

  const handlePurchase = (tierName: string) => {
    const subject = encodeURIComponent(`Inquiry: ${tierName} — SionSite`);
    const body = encodeURIComponent(`Hi Zion,\n\nI'm interested in the "${tierName}" package.\n\nPlease share more details.\n\nThanks!`);
    window.location.href = `mailto:zionmpanza@icloud.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background theme-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft size={16} />
                Back to Home
              </button>
              <p className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
                Our Services
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] text-balance">
                Solutions That Deliver Real Results
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                From quick-start templates to fully custom builds and ongoing partnerships — find the right fit for your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col ${
                    tier.popular
                      ? "bg-primary text-primary-foreground border-primary glow-blue md:scale-105 md:z-10 shadow-2xl"
                      : "bg-card border-border hover:shadow-xl hover:border-primary/30"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  {tier.label && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-body font-bold uppercase tracking-wider ${
                      tier.popular ? "bg-background text-foreground" : "bg-primary text-primary-foreground"
                    }`}>
                      {tier.label}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className={`font-display text-2xl font-bold mb-1 ${tier.popular ? "text-primary-foreground" : "text-foreground"}`}>
                      {tier.name}
                    </h3>
                    <p className={`font-body text-sm ${tier.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {tier.subtitle}
                    </p>
                  </div>

                  <div className="mb-6">
                    <span className={`font-display text-4xl font-bold ${tier.popular ? "text-primary-foreground" : "text-foreground"}`}>
                      {tier.price}
                    </span>
                    <span className={`font-body text-sm ml-2 ${tier.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {tier.priceNote}
                    </span>
                  </div>

                  <p className={`font-body text-sm leading-relaxed mb-8 ${tier.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {tier.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check size={16} className={`mt-0.5 flex-shrink-0 ${tier.popular ? "text-primary-foreground" : "text-primary"}`} />
                        <span className={`font-body text-sm ${tier.popular ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    variant={tier.popular ? "secondary" : "default"}
                    className="w-full font-body font-bold text-base rounded-xl"
                    onClick={() => handlePurchase(tier.name)}
                  >
                    Get Started
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 lg:py-28 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                Results That Matter
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What You Actually Get
              </h2>
              <p className="font-body text-muted-foreground max-w-lg mx-auto">
                It's not just about a website — it's about real business outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {outcomes.map((o, i) => (
                <motion.div
                  key={o.title}
                  className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                    <o.icon className="text-primary" size={26} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{o.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
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
                How It Works
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                Our Process
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <s.icon className="text-primary" size={26} />
                  </div>
                  <p className="font-body text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    Step {s.step}
                  </p>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 lg:py-28">
          <motion.div
            className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground">
              Your Business Deserves More Than a Template
            </h2>
            <p className="font-body text-primary-foreground/80 max-w-xl mx-auto text-lg">
              Let's build a website that represents your true quality and drives real results.
            </p>
            <Button variant="secondary" size="lg" className="font-body font-bold text-base" onClick={() => navigate("/contact")}>
              Start Your Project
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
