import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


import { ShieldCheck, Award } from "lucide-react";

const navItems = [
  { label: "About Us", path: "#" }, // Will also have dropdown
  { label: "Group Companies", path: "#" }, // Will also have dropdown
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  // { label: "Credentials", path: "/credentials" },
  // { label: "Key Persons", path: "/key-persons" },
  // { label: "Gallery", path: "/gallery" },

  { label: "Contact", path: "/contact" },
];

const aboutDropdownItems = [
  { label: "About Company", path: "/about-company" },
  { label: "Our Story", path: "/our-story" },
  { label: "Client List", path: "/client-list" },
  { label: "Credentials", path: "/credentials" },
  { label: "Key Persons", path: "/key-persons" },
  { label: "Gallery", path: "/gallery" },
];

const groupCompaniesDropdownItems = [
  { label: "Sai Balaji MEP LLP", path: "/group-companies/mep-llp" },
  { label: "Sai Balaji Power Control LLP", path: "/group-companies/power-control-llp" },
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
  // Removed isScrolled state as navbar is now always white

  // New state for Mobile About Us toggle
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileGroupOpen, setMobileGroupOpen] = useState(false);

  // hover geometry state
  const [hoverActive, setHoverActive] = useState(false);
  const [leftWidth, setLeftWidth] = useState(0);
  const [rightWidth, setRightWidth] = useState(0);

  const navRef = React.useRef<HTMLElement | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement;
    const navEl = navRef.current;
    if (!target || !navEl) return;
    const linkRect = target.getBoundingClientRect();
    const navRect = navEl.getBoundingClientRect();

    const left = Math.max(0, linkRect.left - navRect.left);
    const right = Math.max(0, navRect.right - linkRect.right);

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
      className="fixed top-0 left-0 right-0 z-50 transition-smooth bg-white shadow-medium font-sans"
    >
      {/* TOP ROW: Header (Logo & Certs) */}
      <div className="w-full px-4 md:px-10 lg:px-16 py-2 flex justify-between items-center border-b border-gray-100/50">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-auto h-16 md:h-20 flex items-center justify-center">
            <img src="/logo.png" alt="SAI BALAJI Logo" className="h-full w-full object-contain" />
          </div>
        </Link>

        {/* Right: Certifications (Desktop & Mobile) */}
        <div className="flex items-center gap-2 md:gap-6">
          <div className="flex items-center gap-1.5 md:gap-3 px-1.5 py-1 md:px-3 md:py-1.5 bg-secondary/5 rounded-lg border border-secondary/10 hover:bg-secondary/10 transition-colors cursor-default group">
            <div className="bg-white p-1 md:p-1.5 rounded-full shadow-sm group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-4 h-4 md:w-6 md:h-6 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-bold text-primary leading-tight tracking-tight">ISO 9001:2015</span>
              <span className="hidden sm:block text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Certified Company</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 md:gap-3 px-1.5 py-1 md:px-3 md:py-1.5 bg-secondary/5 rounded-lg border border-secondary/10 hover:bg-secondary/10 transition-colors cursor-default group">
            <div className="bg-white p-1 md:p-1.5 rounded-full shadow-sm group-hover:scale-110 transition-transform">
              <Award className="w-4 h-4 md:w-6 md:h-6 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-bold text-primary leading-tight tracking-tight">ISO 45001:2018</span>
              <span className="hidden sm:block text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Certified Company</span>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black p-2 hover:bg-black/5 rounded-lg transition-colors"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* BOTTOM ROW: Navigation (Desktop) */}
      <div className="hidden md:block border-t border-transparent relative">
        <div className="w-full px-4 md:px-10 lg:px-16 relative">
          {/* Electric Flow Effects (Full Width of Container) */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div
              className={`electric-flow-left absolute left-0 top-1/2 -translate-y-1/2 h-0 overflow-hidden transition-all duration-300 ${hoverActive ? 'active h-[5vh]' : ''}`}
              style={{ width: `${leftWidth}px` }}
            >
              <svg className="electric-flow-svg" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden>
                <g className="wave-wrap">
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

          {/* Nav Items Container */}
          <div className="flex items-center justify-between py-2 relative z-20">
            {navItems.map((item) => {
              const active = isActive(item.path);

              if (item.label === "About Us") {
                const anySubItemActive = aboutDropdownItems.some(sub => isActive(sub.path));
                const isAboutActive = active || anySubItemActive;
                return (
                  <div key={item.path} className="relative group h-full flex items-center">
                    <Link
                      to={item.path}
                      onMouseEnter={(e) => handleMouseEnter(e)}
                      onMouseLeave={handleMouseLeave}
                      className={`electric-link text-sm font-bold uppercase tracking-wide relative px-4 py-2 rounded-md transition-colors ${isAboutActive
                        ? 'text-accent bg-accent/10 hover:bg-accent/20'
                        : hoverActive
                          ? 'text-black hover:bg-secondary/50'
                          : 'text-black hover:bg-black/5'
                        }`}
                    >
                      <span className="electric-bg" aria-hidden />
                      <SplitChars text={item.label} />
                    </Link>

                    {/* Hover Dropdown */}
                    <div className="absolute top-full text-left left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-white rounded-md shadow-xl border border-primary/10 py-1 flex flex-col overflow-hidden">
                        {aboutDropdownItems.map((subItem) => {
                          const subActive = isActive(subItem.path);
                          return (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-4 py-2 text-sm transition-colors ${subActive
                                ? 'text-accent bg-accent/5 font-medium'
                                : 'text-black/80 hover:text-accent hover:bg-accent/5'
                                }`}
                            >
                              {subItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.label === "Group Companies") {
                const anySubItemActive = groupCompaniesDropdownItems.some(sub => isActive(sub.path));
                const isGroupActive = active || anySubItemActive;
                return (
                  <div key={item.path} className="relative group h-full flex items-center">
                    <Link
                      to={item.path}
                      onMouseEnter={(e) => handleMouseEnter(e)}
                      onMouseLeave={handleMouseLeave}
                      className={`electric-link text-sm font-bold uppercase tracking-wide relative px-4 py-2 rounded-md transition-colors ${isGroupActive
                        ? 'text-accent bg-accent/10 hover:bg-accent/20'
                        : hoverActive
                          ? 'text-black hover:bg-secondary/50'
                          : 'text-black hover:bg-black/5'
                        }`}
                    >
                      <span className="electric-bg" aria-hidden />
                      <SplitChars text={item.label} />
                    </Link>

                    {/* Hover Dropdown */}
                    <div className="absolute top-full left-0 pt-2 w-56 text-left opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-white rounded-md shadow-xl border border-primary/10 py-1 flex flex-col overflow-hidden">
                        {groupCompaniesDropdownItems.map((subItem) => {
                          const subActive = isActive(subItem.path);
                          return (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-4 py-2 text-sm transition-colors ${subActive
                                ? 'text-accent bg-accent/5 font-medium'
                                : 'text-black/80 hover:text-accent hover:bg-accent/5'
                                }`}
                            >
                              {subItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onMouseEnter={(e) => handleMouseEnter(e)}
                  onMouseLeave={handleMouseLeave}
                  className={`electric-link text-sm font-bold uppercase tracking-wide relative px-4 py-2 rounded-md transition-colors ${active
                    ? 'text-accent bg-accent/10 hover:bg-accent/20'
                    : hoverActive
                      ? 'text-black hover:bg-secondary/50'
                      : 'text-black hover:bg-black/5'
                    }`}
                >
                  <span className="electric-bg" aria-hidden />
                  <SplitChars text={item.label} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden py-4 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-2 container mx-auto px-4">
            {navItems.map((item) => {
              const active = isActive(item.path);
              const textColor = 'text-black';

              // Special handling for About Us in mobile menu (Accordion Style)
              if (item.label === "About Us") {
                return (
                  <div key={item.path} className="space-y-1">
                    <div className="flex items-center justify-between pr-4 bg-gray-50 rounded-lg">
                      <Link
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className={`px-4 py-3 rounded-lg transition-colors block font-semibold flex-1 ${active
                          ? 'text-accent'
                          : textColor
                          }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                        className={`p-3 rounded-md transition-all ${textColor}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    </div>

                    {mobileAboutOpen && (
                      <div className="pl-4 space-y-1 bg-white mx-2 py-1 border-l-2 border-accent/20">
                        {aboutDropdownItems.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setOpen(false)}
                            className={`pl-4 py-2 rounded-md transition-colors block text-sm ${isActive(sub.path)
                              ? 'text-accent font-medium'
                              : 'text-black/70 hover:text-black'
                              }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.label === "Group Companies") {
                return (
                  <div key={item.path} className="space-y-1">
                    <div className="flex items-center justify-between pr-4 bg-gray-50 rounded-lg">
                      <Link
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className={`px-4 py-3 rounded-lg transition-colors block font-semibold flex-1 ${active
                          ? 'text-accent'
                          : textColor
                          }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setMobileGroupOpen(!mobileGroupOpen)}
                        className={`p-3 rounded-md transition-all ${textColor}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`transition-transform duration-300 ${mobileGroupOpen ? 'rotate-180' : ''}`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    </div>

                    {mobileGroupOpen && (
                      <div className="pl-4 space-y-1 bg-white mx-2 py-1 border-l-2 border-accent/20">
                        {groupCompaniesDropdownItems.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setOpen(false)}
                            className={`pl-4 py-2 rounded-md transition-colors block text-sm ${isActive(sub.path)
                              ? 'text-accent font-medium'
                              : 'text-black/70 hover:text-black'
                              }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-colors block font-semibold bg-gray-50 text-black hover:bg-gray-100 ${active ? 'text-accent bg-accent/5' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ElectricalNavbar;