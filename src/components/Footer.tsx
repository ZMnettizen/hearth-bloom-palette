import { useNavigate } from "react-router-dom";

const footerLinks = [
  { label: "Work", id: "work", isPage: true },
  { label: "About", id: "about", isPage: false },
  { label: "Services", id: "services", isPage: false },
  { label: "Process", id: "process", isPage: false },
  { label: "Contact", id: "contact", isPage: false },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleNav = (id: string, isPage: boolean) => {
    if (isPage) {
      navigate(`/${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button
            onClick={() => navigate("/")}
            className="font-display text-lg font-bold text-foreground"
          >
            SionSite
          </button>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id, link.isPage)}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} SionSite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
