import { Button } from "@/components/ui/button";

const CTA = () => (
  <section id="contact" className="bg-primary py-20 px-6 text-center">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
      Ready to Build Your Vision?
    </h2>
    <p className="font-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
      Let's collaborate on your next project. Reach out and let's start designing together.
    </p>
    <Button
      variant="secondary"
      size="lg"
      className="font-body font-bold text-primary"
    >
      Get in Touch
    </Button>
  </section>
);

export default CTA;
