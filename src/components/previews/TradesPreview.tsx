import { Phone, Mail, MapPin, CheckCircle, Shield, Clock } from "lucide-react";

const TradesPreview = () => (
  <div className="w-full h-full bg-white text-[#1a1a2e] overflow-hidden flex flex-col" style={{ fontFamily: "'Arial', sans-serif" }}>
    {/* Top contact bar */}
    <div className="bg-[#0d47a1] text-white flex items-center justify-between px-6 py-2 text-[10px]">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1"><Phone size={10} /> (012) 345-6789</span>
        <span className="flex items-center gap-1"><Mail size={10} /> info@proplumb.co.za</span>
      </div>
      <span className="flex items-center gap-1"><MapPin size={10} /> Serving Johannesburg & Pretoria</span>
    </div>

    {/* Nav */}
    <nav className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#0d47a1] rounded-lg flex items-center justify-center">
          <span className="text-white text-xs font-bold">PP</span>
        </div>
        <span className="text-lg font-bold text-[#0d47a1]">ProPlumb</span>
      </div>
      <div className="hidden md:flex gap-6 text-xs font-medium text-[#555]">
        <span>Home</span><span>Services</span><span>About</span><span>Projects</span><span>Contact</span>
      </div>
      <button className="bg-[#ff6f00] text-white text-[10px] font-bold uppercase px-5 py-2 rounded-md">
        Get a Quote
      </button>
    </nav>

    {/* Hero */}
    <div className="flex-1 relative flex items-center" style={{ background: "linear-gradient(135deg, #0d47a1 0%, #1565c0 60%, #0d47a1 100%)" }}>
      <div className="px-8 md:px-12 max-w-lg relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Shield size={14} className="text-[#ff6f00]" />
          <span className="text-[10px] uppercase tracking-widest text-white/70">Licensed & Insured</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          Professional Plumbing<br />& Trade Services
        </h1>
        <p className="text-white/60 text-sm mb-6 leading-relaxed">
          Reliable solutions for residential and commercial properties. Available 24/7 for emergencies.
        </p>
        <div className="flex gap-3">
          <button className="bg-[#ff6f00] text-white px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider">
            Call Now
          </button>
          <button className="border border-white/30 text-white px-6 py-2.5 rounded-md text-xs uppercase tracking-wider">
            Our Services
          </button>
        </div>
      </div>
      {/* Decorative circles */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden md:block">
        <div className="w-48 h-48 border-2 border-white/10 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 border-2 border-white/10 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-[#ff6f00]/20 rounded-full flex items-center justify-center">
              <Phone size={20} className="text-[#ff6f00]" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Trust strip */}
    <div className="grid grid-cols-3 bg-[#f5f7fa] border-t border-gray-200">
      {[
        { icon: CheckCircle, label: "Licensed Pros", sub: "Fully certified team" },
        { icon: Clock, label: "24/7 Emergency", sub: "Always available" },
        { icon: Shield, label: "Guaranteed Work", sub: "100% satisfaction" },
      ].map((f) => (
        <div key={f.label} className="flex items-center gap-3 justify-center py-4 border-r last:border-r-0 border-gray-200">
          <f.icon size={18} className="text-[#0d47a1]" />
          <div>
            <p className="text-[11px] font-bold">{f.label}</p>
            <p className="text-[9px] text-[#999]">{f.sub}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TradesPreview;
