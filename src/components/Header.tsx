import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Projects", "About", "Services", "Why Us", "Contact"];

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (item: string) => {
    setOpen(false);
    const id = item.toLowerCase().replace(/\s+/g, "-");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary px-6 py-4 flex items-center justify-between shadow-md">
      <span className="font-display text-2xl font-bold text-primary-foreground tracking-wide">
        SionSite
      </span>
      <button
        className="md:hidden text-primary-foreground"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav
        className={`${
          open ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-primary md:bg-transparent gap-1 md:gap-6 p-4 md:p-0`}
      >
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="text-primary-foreground font-body font-semibold text-sm hover:opacity-80 transition-opacity py-2 md:py-0 text-left md:text-center"
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
