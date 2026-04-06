import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Services", "Portfolio", "Contact"];

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item: string) => {
    setOpen(false);
    const id = item.toLowerCase().replace(/\s+/g, "-");

    if (id === "services") {
      navigate("/services");
      return;
    }
    if (id === "portfolio") {
      navigate("/work");
      return;
    }

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = () => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/#contact");
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <button
          onClick={() => navigate("/")}
          className="font-display text-xl font-bold text-foreground tracking-tight"
        >
          SionSite
        </button>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-background/95 backdrop-blur-xl md:bg-transparent gap-1 md:gap-8 p-6 md:p-0 border-b md:border-0 border-border/40 md:items-center`}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors py-2 md:py-0 text-left md:text-center"
            >
              {item}
            </button>
          ))}
          <Button
            size="sm"
            className="font-body font-semibold text-sm mt-2 md:mt-0 rounded-lg"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
