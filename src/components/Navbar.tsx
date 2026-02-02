import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    {
      label: "About Us",
      path: "#",
      children: [
        { label: "About Company", path: "/about-company" },
        { label: "Our Story", path: "/our-story" },
        { label: "Client List", path: "/client-list" },
      ]
    },
    { label: "Products", path: "/products" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Credentials", path: "/credentials" },
    { label: "Key Persons", path: "/key-persons" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled
        ? "bg-white/95 backdrop-blur-lg shadow-medium"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Company Info */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-16 h-16 flex items-center justify-center shadow-glow overflow-hidden">
              <img src="/logo.png" alt="SAI BALAJI Logo" className="h-full w-full object-cover rounded-full" />
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
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-smooth relative flex items-center gap-1 ${isScrolled
                      ? 'text-black hover:text-accent'
                      : 'text-white hover:text-accent'
                      }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-smooth relative group ${isActive(item.path)
                      ? 'text-accent'
                      : isScrolled
                        ? 'text-black hover:text-accent'
                        : 'text-white hover:text-accent'
                      }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-accent transition-smooth ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                    />
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 transition-all duration-200 origin-top-left ${activeDropdown === item.label ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                      }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
          <div className="lg:hidden py-4 animate-fade-in bg-white/95 backdrop-blur-lg absolute top-full left-0 right-0 shadow-lg">
            <div className="flex flex-col space-y-2 px-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="space-y-1">
                      <div className="px-4 py-2 text-sm font-medium text-black">
                        {item.label}
                      </div>
                      <div className="pl-6 border-l-2 border-accent/20 ml-2 space-y-1">
                        {item.children.map(child => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-4 py-2 text-sm transition-smooth text-gray-600 hover:text-accent ${isActive(child.path) ? 'text-accent font-semibold' : ''}`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-2 text-sm font-medium rounded-lg transition-smooth ${isActive(item.path)
                        ? 'bg-accent/10 text-accent'
                        : 'text-black hover:bg-black/5'
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;