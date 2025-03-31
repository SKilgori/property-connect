
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dwellz-primary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Dwellz</span>
              <span className="text-dwellz-secondary">Connect</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for finding the perfect home or investment property.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-dwellz-secondary">
                <Facebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-dwellz-secondary">
                <Instagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-dwellz-secondary">
                <Twitter />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-dwellz-secondary">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-dwellz-secondary">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-dwellz-secondary">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-dwellz-secondary">Properties</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-dwellz-secondary">Property Buying</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-dwellz-secondary">Property Selling</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-dwellz-secondary">Property Management</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-dwellz-secondary">Investment Consulting</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-dwellz-secondary" />
                <span className="text-gray-300">123 Real Estate Way, Property City, PC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-dwellz-secondary" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-dwellz-secondary" />
                <span className="text-gray-300">info@dwellzconnect.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} DwellzConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
