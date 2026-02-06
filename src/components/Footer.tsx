import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    "Home",
    "About Us",
    "Projects",
    "Services",
    "Achievements",
    "Key Persons",
    "Gallery",
    "Careers",
    "Contact",
  ];

  const services = [
    "Transmission Lines",
    "Solar EPC Solutions",
    "Substation Development",
    "Distribution Networks",
    "O&M Services",
    "Safety Audits",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="w-full px-4 md:px-10 lg:px-16 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-full md:w-auto h-auto md:h-24 overflow-hidden flex items-center justify-start bg-transparent">
                <img src="/logo-bg.png" alt="SAI BALAJI Logo" className="w-full h-auto md:h-full md:w-auto object-contain p-0" />
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Your Satisfaction Is Our Mission. Leading electrical infrastructure solutions across India.
            </p>
            <div className="flex space-x-3">
              <a
                href="#" target="_blank"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-spring hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#" target="_blank"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-spring hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/sai-balaji-infra-india-pvt.-ltd./" target="_blank"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-spring hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/sai_balaji_infra_india_pvt_ltd?igsh=cDI5bGs3a2NtdjJq" target="_blank"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-spring hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@saibalajiinfraindiapvtltd?si=0GT2W5aKo-ZfD1js" target="_blank"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-spring hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about-company" className="text-sm hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-sm hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/services" className="text-sm hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=PLOT+NO.135+SAI+BALAJI+HEIGHTS+LAXMI+NAGAR+MIYAPUR+HYDERABAD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent transition-smooth cursor-pointer"
                >
                  SAI BALAJI INFRA INDIA PVT LTD, LAXMI NAGAR, MIYAPUR, HYDERABAD 500049.
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+919014467222"
                  className="text-primary-foreground/70 hover:text-accent transition-smooth"
                >
                  +91 90144 67222
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:tenders@saibalajiinfra.com"
                  className="text-primary-foreground/70 hover:text-accent transition-smooth"
                >
                  tenders@saibalajiinfra.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:sales@saibalajiinfra.com"
                  className="text-primary-foreground/70 hover:text-accent transition-smooth"
                >
                  sales@saibalajiinfra.com
                </a>
              </li>
            </ul>
          </div>

          {/* Logos */}
          <div className="flex flex-col items-start md:items-center gap-4 mb-6 w-full">
            <div className="w-full md:w-auto h-auto md:h-24 overflow-hidden flex items-center justify-center bg-transparent">
              <img src="/MLP.jpeg" alt="SAI BALAJI Logo" className="w-full h-auto md:h-full md:w-auto object-contain p-0" />
            </div>
            <div className="w-full md:w-auto h-auto md:h-24 overflow-hidden flex items-center justify-center bg-transparent">
              <img src="/LLP.jpeg" alt="SAI BALAJI Logo" className="w-full h-auto md:h-full md:w-auto object-contain p-0" />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} SAI BALAJI Infra India Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
