const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 border-2 border-primary rounded-sm rotate-45" />
      <span className="font-display text-sm font-bold text-primary tracking-tight relative z-10">SS</span>
    </div>
    <div className="flex flex-col leading-none">
      <span className="font-display text-base font-bold text-foreground tracking-tight">SionSite</span>
      <span className="font-body text-[9px] uppercase tracking-[0.25em] text-muted-foreground">by Zion</span>
    </div>
  </div>
);

export default Logo;
