import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About Us",
    "Projects",
    "Services",
    "Achievements",
    "Key Persons",
    "Gallery",
    "Careers",
    "Contact",
    "Sai Balaji MELLP"
  ];

  const scrollToSection = (item: string) => {
    const sectionId = item.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-card/95 backdrop-blur-lg shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Company Info */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center shadow-glow">
              <span className="text-2xl font-bold text-accent-foreground">S</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-foreground leading-tight">
                SAI BALAJI Infra India Pvt. Ltd.
              </h1>
              <p className="text-xs text-muted-foreground italic">
                Your Satisfaction Is Our Mission
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-smooth relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-smooth" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
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
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-smooth text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
