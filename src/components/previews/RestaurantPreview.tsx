const RestaurantPreview = () => (
  <div className="w-full h-full bg-[#1a1a1a] text-white overflow-hidden flex flex-col" style={{ fontFamily: "'Georgia', serif" }}>
    {/* Nav */}
    <nav className="flex items-center justify-between px-6 py-4 bg-[#111]">
      <span className="text-xl font-bold tracking-wider text-[#d4a853]">LA MAISON</span>
      <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest text-white/70">
        <span>Home</span><span>Menu</span><span>Reservations</span><span>Gallery</span><span>Contact</span>
      </div>
      <button className="text-xs uppercase tracking-widest border border-[#d4a853] text-[#d4a853] px-4 py-2 rounded-none">
        Book a Table
      </button>
    </nav>

    {/* Hero */}
    <div className="flex-1 relative flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          background: "linear-gradient(135deg, #2c1810 0%, #1a1a1a 50%, #2c1810 100%)",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-8 max-w-2xl">
        <p className="text-[#d4a853] text-xs uppercase tracking-[0.3em] mb-4">Est. 2019</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>
          Fine Dining,<br />Redefined
        </h1>
        <p className="text-white/60 text-sm md:text-base mb-8 leading-relaxed">
          Experience culinary excellence in an atmosphere of timeless elegance. Every dish tells a story.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-[#d4a853] text-black px-8 py-3 text-xs uppercase tracking-widest font-semibold">
            View Menu
          </button>
          <button className="border border-white/30 text-white px-8 py-3 text-xs uppercase tracking-widest">
            Our Story
          </button>
        </div>
      </div>
    </div>

    {/* Features strip */}
    <div className="grid grid-cols-3 bg-[#111] border-t border-white/10">
      {[
        { label: "Michelin Inspired", sub: "Award-winning cuisine" },
        { label: "Private Events", sub: "Exclusive dining rooms" },
        { label: "Open Daily", sub: "11:00 AM – 11:00 PM" },
      ].map((f) => (
        <div key={f.label} className="text-center py-5 border-r last:border-r-0 border-white/10">
          <p className="text-[#d4a853] text-xs uppercase tracking-widest mb-1">{f.label}</p>
          <p className="text-white/40 text-[10px]">{f.sub}</p>
        </div>
      ))}
    </div>
  </div>
);

export default RestaurantPreview;
