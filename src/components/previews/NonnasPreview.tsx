const menuItems = [
  { title: "Wood-Fired Pizza", desc: "San Marzano tomatoes, fior di latte", price: "R145", color: "#c9b99a" },
  { title: "Handmade Pasta", desc: "Truffle cream, aged Parmigiano", price: "R165", color: "#b8a88a" },
  { title: "Italian Desserts", desc: "Classic tiramisu, mascarpone cream", price: "R95", color: "#d4c4a8" },
  { title: "Signature Cocktails", desc: "Negroni Classico, orange peel", price: "R110", color: "#a89070" },
];

const NonnasPreview = () => (
  <div className="w-full bg-[#f5f0e8] text-[#1f2e1a] overflow-hidden flex flex-col" style={{ fontFamily: "'Georgia', serif" }}>
    {/* Nav */}
    <nav className="flex items-center justify-between px-6 h-16 bg-transparent">
      <span className="text-xl font-light tracking-tight">Nonna's</span>
      <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.15em] font-medium text-[#1f2e1a]/60" style={{ fontFamily: "system-ui, sans-serif" }}>
        <span>About</span><span>Menu</span><span>Gallery</span><span>Reservations</span><span>Contact</span>
      </div>
    </nav>

    {/* Hero */}
    <div className="relative flex items-center justify-center py-28" style={{ background: "linear-gradient(135deg, #3a2a1a 0%, #2a1f12 50%, #3a2a1a 100%)" }}>
      <div className="text-center px-6 max-w-3xl relative z-10">
        <p className="text-[10px] uppercase tracking-[0.15em] font-medium text-[#f5f0e8]/60 mb-6" style={{ fontFamily: "system-ui, sans-serif" }}>
          Est. Family Tradition
        </p>
        <h1 className="text-4xl md:text-5xl font-light text-[#f5f0e8] mb-6 tracking-tight">
          Authentic Italian Flavours.
          <br />
          Made with Tradition.
        </h1>
        <p className="text-[#f5f0e8]/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10" style={{ fontFamily: "system-ui, sans-serif" }}>
          Experience handcrafted pasta, wood-fired pizzas and classic Italian recipes inspired by Nonna's kitchen.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-[#4a6b3a] text-[#f5f0e8] px-7 py-3 text-xs uppercase tracking-widest font-medium" style={{ fontFamily: "system-ui, sans-serif" }}>
            View Menu
          </button>
          <button className="border border-[#f5f0e8]/30 text-[#f5f0e8] px-7 py-3 text-xs uppercase tracking-widest" style={{ fontFamily: "system-ui, sans-serif" }}>
            Reserve a Table
          </button>
        </div>
      </div>
    </div>

    {/* Menu section */}
    <div className="bg-[#ebe5d9] py-14 px-6">
      <div className="text-center mb-10">
        <p className="text-[10px] uppercase tracking-[0.15em] font-medium text-[#1f2e1a]/50 mb-3" style={{ fontFamily: "system-ui, sans-serif" }}>
          From Our Kitchen
        </p>
        <h2 className="text-2xl md:text-3xl font-light tracking-tight">Featured Dishes</h2>
      </div>
      <div className="grid grid-cols-4 gap-5 max-w-3xl mx-auto">
        {menuItems.map((item) => (
          <div key={item.title} className="group cursor-pointer">
            <div className="aspect-[4/5] mb-3 rounded-sm" style={{ backgroundColor: item.color }} />
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-[12px] font-medium">{item.title}</h3>
              <span className="text-[10px] text-[#1f2e1a]/50" style={{ fontFamily: "system-ui, sans-serif" }}>{item.price}</span>
            </div>
            <p className="text-[10px] leading-relaxed text-[#1f2e1a]/50" style={{ fontFamily: "system-ui, sans-serif" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default NonnasPreview;
