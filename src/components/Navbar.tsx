import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X,ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Services", path: "/services" },
    { label: "Achievements", path: "/achievements" },
    { label: "Key Persons", path: "/key-persons" },
    { label: "Gallery", path: "/gallery" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];
  const aboutUsSubItems = [
    { name :"Our Story",path:"/about/ourstory"},
    { name :"Why Us",path:"/about/whyus"},
    { name :"Quality Policy",path:"/about/qualitypolicy"},
    { name :"Client List",path:"/about/clientlist"},
  ];

  const isActive = (path: string) => location.pathname === path;
  const isAboutUsActive = aboutUsSubItems.some(item => isActive(item.path)) || location.pathname.startsWith('/about');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Company Info */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center shadow-glow">
              <span className="text-2xl font-bold text-accent-foreground">S</span>
            </div>
              <div className="hidden md:block">
                <h1 className={`text-lg font-bold ${isScrolled ? 'text-black' : 'text-white'} leading-tight`}>
                  SAI BALAJI Infra India Pvt. Ltd.
                </h1>
                <p className={`${isScrolled ? 'text-black/70' : 'text-white/80'} text-xs italic`}>
                  Your Satisfaction Is Our Mission
                </p>
              </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-smooth relative group ${
                  isActive(item.path)
                    ? 'text-accent'
                    : isScrolled
                      ? 'text-black hover:text-accent'
                      : 'text-white hover:text-accent'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-accent transition-smooth ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-smooth text-left ${
                    isActive(item.path)
                      ? 'bg-accent/10 text-accent'
                      : isScrolled
                        ? 'text-black hover:bg-secondary'
                        : 'text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;