import { Phone, Mail } from "lucide-react";

const MzansiMeatsPreview = () => (
  <div className="w-full bg-[#111111] text-white overflow-hidden flex flex-col" style={{ fontFamily: "'DM Sans', sans-serif" }}>
    {/* Nav */}
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#0a7a3b] rounded-full flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">IM</span>
        </div>
        <span className="text-lg font-semibold tracking-tight">Inkabi Meats</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
        <span>Home</span><span>About</span><span>Products</span><span>Contact</span>
      </div>
      <button className="bg-[#0a7a3b] text-white text-xs font-semibold px-5 py-2 rounded-md">
        Get in Touch
      </button>
    </nav>

    {/* Hero */}
    <div className="relative flex items-center py-28" style={{ background: "linear-gradient(135deg, #111 0%, #1a1a1a 50%, #0d0d0d 100%)" }}>
      <div className="absolute inset-0 opacity-20" style={{ background: "url('data:image/svg+xml,...') center/cover" }} />
      <div className="px-8 md:px-12 max-w-2xl relative z-10">
        <h1 className="text-4xl md:text-5xl leading-[1.05] mb-4 tracking-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Quality Meat.{" "}
          <span className="text-[#daa520]">Proudly South African.</span>
        </h1>
        <p className="text-lg text-white/65 max-w-lg mb-8 leading-relaxed">
          Affordable, locally sourced, and ethically raised meat you can trust.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#0a7a3b] text-white font-semibold px-7 py-3 rounded-md text-sm shadow-lg shadow-[#0a7a3b]/25">
            View Products
          </button>
          <button className="border-2 border-white/25 text-white font-semibold px-7 py-3 rounded-md text-sm">
            Contact Us
          </button>
        </div>
      </div>
    </div>

    {/* About strip */}
    <div className="bg-[#f5f2ed] text-[#141414] py-16 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0a7a3b] mb-3">Our Story</p>
        <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>Meet the Founder</h2>
        <div className="w-16 h-1 bg-[#daa520] mx-auto mb-6 rounded-full" />
        <p className="text-sm text-[#666] leading-relaxed">
          Founded by <strong className="text-[#141414]">Yolani Nguza</strong>, Inkabi Meats was built on a vision 
          to provide communities with affordable, high-quality meat. With a passion for ethical sourcing 
          and local empowerment.
        </p>
      </div>
    </div>

    {/* Trust bar */}
    <div className="grid grid-cols-3 bg-[#0a0a0a] border-t border-white/10">
      {[
        { icon: "🥩", label: "Premium Cuts", sub: "Ethically sourced" },
        { icon: "🇿🇦", label: "Proudly SA", sub: "Locally raised" },
        { icon: "📦", label: "Fast Delivery", sub: "Nationwide shipping" },
      ].map((f) => (
        <div key={f.label} className="flex items-center gap-3 justify-center py-5 border-r last:border-r-0 border-white/10">
          <span className="text-xl">{f.icon}</span>
          <div>
            <p className="text-[11px] font-bold text-white">{f.label}</p>
            <p className="text-[9px] text-white/40">{f.sub}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MzansiMeatsPreview;
