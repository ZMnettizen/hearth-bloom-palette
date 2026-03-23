const Footer = () => (
  <footer className="bg-foreground text-background/70 py-8 px-6 text-center font-body text-sm">
    <p className="mb-2">
      © {new Date().getFullYear()} SionSite. All rights reserved.
    </p>
    <p className="text-background/50">
      Designed with care for small businesses everywhere.
    </p>
  </footer>
);

export default Footer;
