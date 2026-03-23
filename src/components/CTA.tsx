import { Button } from "@/components/ui/button";

const CTA = () => (
  <section className="bg-primary py-20 px-6 text-center">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
      Let's Build Your Online Presence
    </h2>
    <p className="font-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
      Ready to take your business to the next level? Let's create a website that
      works as hard as you do.
    </p>
    <Button
      variant="secondary"
      size="lg"
      className="font-body font-bold text-primary"
      onClick={() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Get Started Today
    </Button>
  </section>
);

export default CTA;
