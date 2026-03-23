import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, User } from "lucide-react";
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
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <User className="text-primary" size={22} />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Owner</p>
                <p className="font-body font-semibold text-foreground">Zion Mpanza</p>
              </div>
            </div>

            <a
              href="tel:0785199522"
              className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
            >
              <div className="bg-primary/10 rounded-full p-3">
                <Phone className="text-primary" size={22} />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Phone</p>
                <p className="font-body font-semibold text-foreground">078 519 9522</p>
              </div>
            </a>

            <a
              href="mailto:zionmpanza@icloud.com"
              className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
            >
              <div className="bg-primary/10 rounded-full p-3">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Email</p>
                <p className="font-body font-semibold text-foreground">zionmpanza@icloud.com</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="font-body"
              maxLength={100}
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="font-body"
              maxLength={255}
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="font-body min-h-[120px]"
              maxLength={1000}
            />
            <Button type="submit" className="w-full font-body font-bold">
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
