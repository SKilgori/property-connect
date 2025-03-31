
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-dwellz-primary">PropertyConnect</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-600 hover:text-dwellz-secondary px-3 py-2 rounded-md">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-dwellz-secondary px-3 py-2 rounded-md">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-dwellz-secondary px-3 py-2 rounded-md">
              Contact
            </Link>
            
            {user && user.userType === 'seller' && (
              <Link to="/add-property" className="text-gray-600 hover:text-dwellz-secondary px-3 py-2 rounded-md">
                Add Property
              </Link>
            )}
            
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">
                  {user.userType === 'buyer' ? 'Buyer' : 'Seller'}
                </span>
                <Button 
                  onClick={logout}
                  variant="outline"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-dwellz-secondary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <CloseIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-dwellz-secondary"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-dwellz-secondary"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-dwellz-secondary"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          
          {user && user.userType === 'seller' && (
            <Link
              to="/add-property"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-dwellz-secondary"
              onClick={toggleMenu}
            >
              Add Property
            </Link>
          )}
          
          {user ? (
            <div className="px-3 py-2">
              <div className="text-gray-700 mb-2">
                {user.userType === 'buyer' ? 'Logged in as Buyer' : 'Logged in as Seller'}
              </div>
              <Button 
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                variant="outline"
                className="w-full"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="px-3 py-2 space-y-2">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full">Register</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
