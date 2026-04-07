import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Mail, User, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const ContactPage = () => {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 mb-16"
            >
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft size={16} />
                Back to Home
              </button>
              <p className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
                Contact Us
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                Get In Touch
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ready to create something extraordinary? Let's talk about your project.
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto glass rounded-3xl p-8 lg:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
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

                <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
                  <Input
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="font-body h-12 rounded-xl bg-muted/50 border-border/50"
                    maxLength={100}
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="font-body h-12 rounded-xl bg-muted/50 border-border/50"
                    maxLength={255}
                  />
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="font-body min-h-[140px] rounded-xl bg-muted/50 border-border/50"
                    maxLength={1000}
                  />
                  <Button type="submit" size="lg" className="w-full font-body font-bold text-base rounded-xl glow-gold">
                    Send Message
                    <Send size={16} className="ml-2" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default ContactPage;
