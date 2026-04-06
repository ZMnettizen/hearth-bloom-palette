import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "Basic Website",
    price: "R2 499",
    popular: false,
    features: [
      "Custom design (non-template)",
      "Domain setup",
      "Mobile responsive design",
      "Basic SEO setup",
      "SSL & HTTPS security",
      "Fast loading speeds",
    ],
  },
  {
    name: "Pro Website",
    price: "R5 999",
    popular: true,
    features: [
      "Everything in Basic, plus:",
      "Advanced SEO optimization",
      "Branding consistency across pages",
      "Hosting included",
      "Email client integration",
      "Ongoing maintenance",
      "Content updates",
    ],
  },
  {
    name: "Extreme High-End",
    price: "R8 999",
    popular: false,
    features: [
      "Everything in Pro, plus:",
      "Fully custom luxury UI/UX design",
      "Conversion-focused design strategy",
      "Priority support",
      "Advanced performance optimization",
      "Continuous updates & improvements",
      "Dedicated one-on-one design process",
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft size={16} /> Back to Home
              </button>
              <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Our Packages
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                Investment in Excellence
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Every package includes continuous maintenance, hosting, updates, SEO improvements, and dedicated support — so your investment keeps working for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  className={`relative glass rounded-3xl p-8 lg:p-10 flex flex-col ${
                    tier.popular ? "glow-gold border-primary/30" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary text-primary-foreground font-body text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                      <Star size={12} /> Most Popular
                    </div>
                  )}

                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-6">
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

            {/* Value justification */}
            <motion.div
              className="mt-16 glass rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Why Monthly?
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Your website isn't a one-time project — it's a living asset. Monthly plans include hosting, security updates, performance monitoring, SEO improvements, content updates, and priority support. We keep your site running at peak performance so you can focus on your restaurant.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
