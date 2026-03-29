import { Search, ShoppingCart, Heart } from "lucide-react";

const products = [
  { name: "Classic Trench", price: "$189", color: "#e8ddd3" },
  { name: "Knit Sweater", price: "$79", color: "#c4b5a2" },
  { name: "Leather Tote", price: "$245", color: "#8b7355" },
  { name: "Linen Blazer", price: "$155", color: "#d4c5b0" },
];

const EcommercePreview = () => (
  <div className="w-full bg-[#faf9f7] text-[#2a2a2a] overflow-hidden flex flex-col" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
    {/* Top bar */}
    <div className="bg-[#2a2a2a] text-white text-[10px] text-center py-1.5 tracking-widest uppercase">
      Free shipping on orders over $150
    </div>

    {/* Nav */}
    <nav className="flex items-center justify-between px-6 py-4 border-b border-[#e5e2dd]">
      <span className="text-xl font-bold tracking-[0.2em] uppercase">URBAIN</span>
      <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-[#666]">
        <span>New In</span><span>Women</span><span>Men</span><span>Accessories</span><span>Sale</span>
      </div>
      <div className="flex items-center gap-4 text-[#666]">
        <Search size={16} />
        <Heart size={16} />
        <div className="relative">
          <ShoppingCart size={16} />
          <span className="absolute -top-2 -right-2 bg-[#2a2a2a] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
        </div>
      </div>
    </nav>

    {/* Hero Banner */}
    <div className="relative h-[40%] min-h-[120px] flex items-center" style={{ background: "linear-gradient(135deg, #e8ddd3 0%, #d4c5b0 100%)" }}>
      <div className="px-8 md:px-12 max-w-md">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#666] mb-2">Spring Collection 2026</p>
        <h2 className="text-2xl md:text-3xl font-light leading-snug mb-3">Effortless<br />Elegance</h2>
        <button className="bg-[#2a2a2a] text-white text-[10px] uppercase tracking-widest px-6 py-2.5">
          Shop Now
        </button>
      </div>
    </div>

    {/* Products */}
    <div className="flex-1 px-6 py-5 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs uppercase tracking-[0.2em] font-semibold">Trending Now</h3>
        <span className="text-[10px] uppercase tracking-widest text-[#999] cursor-pointer">View All →</span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.name} className="group">
            <div className="aspect-[3/4] rounded-sm mb-2 relative" style={{ backgroundColor: p.color }}>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart size={14} className="text-[#666]" />
              </div>
            </div>
            <p className="text-[11px] font-medium">{p.name}</p>
            <p className="text-[11px] text-[#999]">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default EcommercePreview;
