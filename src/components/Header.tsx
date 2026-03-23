import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary px-6 py-4 flex items-center justify-between">
      <span className="font-display text-xl font-bold text-primary-foreground tracking-wide">
        SionSite
      </span>
      <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-primary md:bg-transparent gap-1 md:gap-6 p-4 md:p-0`}>
        {["Projects", "About", "Services", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-primary-foreground font-body font-semibold text-sm hover:opacity-80 transition-opacity py-2 md:py-0"
            onClick={() => setOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
