import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, User, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent(`New enquiry from ${form.name} via SionSite`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:zionmpanza@icloud.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client…", description: "Your message is pre-filled and ready to send." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Contact Us
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Ready to start your project? Reach out and let's talk.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Owner</p>
                  <p className="font-body font-semibold text-foreground">Zion Mpanza</p>
                </div>
              </div>

              <a href="tel:0785199522" className="flex items-start gap-4 group hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                  <p className="font-body font-semibold text-foreground">078 519 9522</p>
                </div>
              </a>

              <a href="mailto:zionmpanza@icloud.com" className="flex items-start gap-4 group hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <p className="font-body font-semibold text-foreground">zionmpanza@icloud.com</p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="font-body h-12 rounded-xl"
                maxLength={100}
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="font-body h-12 rounded-xl"
                maxLength={255}
              />
              <Textarea
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="font-body min-h-[140px] rounded-xl"
                maxLength={1000}
              />
              <Button type="submit" size="lg" className="w-full font-body font-bold text-base rounded-xl">
                Send Message
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
