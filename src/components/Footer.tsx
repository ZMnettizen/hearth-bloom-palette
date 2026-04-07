import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/work" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-border/40 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button onClick={() => navigate("/")}>
            <Logo />
          </button>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
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
