import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" }, // Will also have dropdown
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Achievements", path: "/achievements" },
  { label: "Key Persons", path: "/key-persons" },
  { label: "Gallery", path: "/gallery" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const aboutDropdownItems = [
  { label: "Our Story", path: "/about/ourstory" },
  { label: "Why Us", path: "/about/whyus" },
  { label: "Quality Policy", path: "/about/qualitypolicy" },
  { label: "Client List", path: "/about/clientlist" },
];

function SplitChars({ text }: { text: string }) {
  return (
    <span className="electric-link-container inline-flex">
      {text.split("").map((ch, i) => (
        <span key={i} className="electric-char inline-block px-[1px] leading-none">
          {ch}
        </span>
      ))}
    </span>
  );
}

const ElectricalNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // hover geometry state
  const [hoverActive, setHoverActive] = useState(false);
  const [leftWidth, setLeftWidth] = useState(0);
  const [rightWidth, setRightWidth] = useState(0);

  const navRef = React.useRef<HTMLElement | null>(null);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement;
    const navEl = navRef.current;
    if (!target || !navEl) return;
    const linkRect = target.getBoundingClientRect();
    const navRect = navEl.getBoundingClientRect();

    const left = Math.max(0, linkRect.left - navRect.left);
    const right = Math.max(0, navRect.right - linkRect.right);

    // extend a bit so the flow originates from roughly the center of the link
    setLeftWidth(left + linkRect.width / 2);
    setRightWidth(right + linkRect.width / 2);
    setHoverActive(true);
  };

  const handleMouseLeave = () => {
    setHoverActive(false);
  };

     
  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${(isScrolled || hoverActive) ? 'bg-white/95 shadow-medium' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 relative">
        {/* full-width flow layers (behind links) */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div
            className={`electric-flow-left absolute left-0 top-1/2 -translate-y-1/2 h-0 overflow-hidden transition-all duration-300 ${hoverActive ? 'active h-[5vh]' : ''}`}
            style={{ width: `${leftWidth}px` }}
          >
            <svg className="electric-flow-svg" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden>
              <g className="wave-wrap">
                {/* A repeated ECG-like waveform across the long viewBox */}
                <path className="wave" d="M0 10 L70 50 L80 30 L90 80 L100 50 L180 50 L200 50 L210 40 L220 50 L260 50 L300 50 L320 50 L330 30 L340 80 L350 50 L430 50 L500 50 L560 50 L580 30 L590 80 L600 50 L680 50 L760 50 L820 50 L840 30 L850 80 L860 50 L1000 50" />
                <path className="wave" d="M1000 1.0 L1070 50 L1080 30 L1090 80 L1100 50 L1180 50 L1200 50 L1210 40 L1220 50 L1260 50 L1300 50 L1320 50 L1330 30 L1340 80 L1350 50 L1430 50 L1500 50 L1560 50 L1580 30 L1590 80 L1600 50 L1680 50 L1760 50 L1820 50 L1840 30 L1850 80 L1860 50 L2000 50" />
              </g>
            </svg>
          </div>
          <div
            className={`electric-flow-right absolute right-0 top-1/2 -translate-y-1/2 h-0 overflow-hidden transition-all duration-300 ${hoverActive ? 'active h-[5vh]' : ''}`}
            style={{ width: `${rightWidth}px` }}
          >
            <svg className="electric-flow-svg" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden>
              <g className="wave-wrap" transform="scale(1,1)">
                <path className="wave" d="M0 50 L70 50 L80 30 L90 80 L100 50 L180 50 L200 50 L210 40 L220 50 L260 50 L300 50 L320 50 L330 30 L340 80 L350 50 L430 50 L500 50 L560 50 L580 30 L590 80 L600 50 L680 50 L760 50 L820 50 L840 30 L850 80 L860 50 L1000 50" />
                <path className="wave" d="M1000 50 L1070 50 L1080 30 L1090 80 L1100 50 L1180 50 L1200 50 L1210 40 L1220 50 L1260 50 L1300 50 L1320 50 L1330 30 L1340 80 L1350 50 L1430 50 L1500 50 L1560 50 L1580 30 L1590 80 L1600 50 L1680 50 L1760 50 L1820 50 L1840 30 L1850 80 L1860 50 L2000 50" />
              </g>
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 relative z-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center shadow-glow">
                <span className={`font-extrabold ${(isScrolled || hoverActive) ? 'text-black' : 'text-white'}`}>S</span>
              </div>
              <div className="hidden sm:block">
                <div className={`${(isScrolled || hoverActive) ? 'text-black' : 'text-white'} font-bold`}>Sai Balaji Infra India Pvt. Ltd.</div>
                <div className={`${(isScrolled || hoverActive) ? 'text-black/70' : 'text-white/80'} text-xs`}>Your Satisfaction Is Our Mission</div>
              </div>
            </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const active = isActive(item.path);
              
              // Special handling for About Us with dropdown
              if (item.label === "About Us") {
                return (
                  <div key={item.path} className="flex items-center gap-1">
                    <Link
                      to={item.path}
                      onMouseEnter={(e) => handleMouseEnter(e)}
                      onMouseLeave={handleMouseLeave}
                      className={`electric-link text-sm font-medium relative px-2 py-1.5 rounded-md transition-colors ${
                        active 
                          ? 'text-accent bg-accent/10 hover:bg-accent/20' 
                          : hoverActive 
                            ? 'text-black hover:bg-secondary/50' 
                            : isScrolled 
                              ? 'text-black hover:bg-secondary/50' 
                              : 'text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="electric-bg" aria-hidden />
                      <SplitChars text={item.label} />
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger 
                        className={`inline-flex items-center justify-center rounded-md w-6 h-6 transition-colors hover:bg-accent/10 ${
                          active 
                            ? 'text-accent' 
                            : isScrolled || hoverActive
                              ? 'text-black' 
                              : 'text-white'
                        }`}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        {aboutDropdownItems.map((subItem) => (
                          <DropdownMenuItem key={subItem.path} asChild>
                            <Link 
                              to={subItem.path} 
                              className="w-full block px-2 py-1.5 text-sm hover:text-accent transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                );
              }

              // Regular nav items
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onMouseEnter={(e) => handleMouseEnter(e)}
                  onMouseLeave={handleMouseLeave}
                  className={`electric-link text-sm font-medium relative px-2 py-1.5 rounded-md transition-colors ${
                      active 
                        ? 'text-accent bg-accent/10 hover:bg-accent/20' 
                        : hoverActive 
                          ? 'text-black hover:bg-secondary/50' 
                          : isScrolled 
                            ? 'text-black hover:bg-secondary/50' 
                            : 'text-white hover:bg-white/5'
                    }`}
                >
                  <span className="electric-bg" aria-hidden />
                  <SplitChars text={item.label} />
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active = isActive(item.path);
                
                // Special handling for About Us in mobile menu
                if (item.label === "About Us") {
                  return (
                    <div key={item.path} className="space-y-1">
                      <Link
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className={`px-4 py-2 rounded-lg transition-colors block font-medium ${
                          active
                            ? 'text-accent bg-accent/10 hover:bg-accent/20'
                            : isScrolled
                              ? 'text-black hover:bg-secondary/50'
                              : 'text-white hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                      {aboutDropdownItems.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setOpen(false)}
                          className={`pl-8 py-2 rounded-lg transition-colors block ${
                            isActive(sub.path)
                              ? 'text-accent bg-accent/10 hover:bg-accent/20'
                              : isScrolled
                                ? 'text-black/80 hover:bg-secondary/50'
                                : 'text-white/90 hover:bg-white/5'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      active 
                        ? 'text-accent bg-accent/10 hover:bg-accent/20' 
                        : hoverActive 
                          ? 'text-black hover:bg-secondary/50' 
                          : isScrolled 
                            ? 'text-black hover:bg-secondary/50' 
                            : 'text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ElectricalNavbar;
