import { motion } from "framer-motion";
import { DollarSign, Target, Zap, MessageCircle, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: DollarSign, title: "Affordable Pricing", desc: "Quality web design that fits your budget — no hidden costs." },
  { icon: Target, title: "Tailored Solutions", desc: "Every website is custom-built for your specific business needs." },
  { icon: Zap, title: "Fast Turnaround", desc: "We work efficiently to get your site live as quickly as possible." },
  { icon: MessageCircle, title: "Easy Communication", desc: "We keep things simple and straightforward — no jargon, no confusion." },
  { icon: ShieldCheck, title: "Long-Term Support", desc: "We're in it for the long haul with ongoing maintenance and updates." },
];

const WhyUs = () => (
  <section id="why-us" className="bg-secondary py-20 px-6 text-center">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
      Why Choose Us
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
      {reasons.map((r, i) => (
        <motion.div
          key={r.title}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <div className="bg-primary/10 rounded-full p-4 mb-4">
            <r.icon className="text-primary" size={28} />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-1">
            {r.title}
          </h3>
          <p className="font-body text-muted-foreground text-sm">{r.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhyUs;
