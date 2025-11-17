import { NavLink } from "./NavLink";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-cool bg-clip-text text-transparent">
              TelliOnSat
            </h3>
            <p className="text-muted-foreground">
              Providing quality childcare and early education in a nurturing environment where every child can shine.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </NavLink>
              <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </NavLink>
              <NavLink to="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                Programs
              </NavLink>
              <NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </NavLink>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <span>info@littlestarsdaycare.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>123 Rainbow Street, Sunshine City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TelliOnSat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
