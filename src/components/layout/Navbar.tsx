
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin, LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <MapPin 
            className={cn(
              "text-primary transition-all duration-300",
              isScrolled ? "h-6 w-6" : "h-8 w-8"
            )} 
          />
          <span 
            className={cn(
              "font-semibold tracking-tight transition-all duration-300",
              isScrolled ? "text-xl" : "text-2xl"
            )}
          >
            SmartCityTraveller
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/map" className="font-medium hover:text-primary transition-colors">
            Explore
          </Link>
          <Link to="#features" className="font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link to="/auth" className="flex items-center space-x-1 btn-primary">
            <LogIn className="h-4 w-4" />
            <span>Sign In</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-4 animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/map" 
              className="font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore
            </Link>
            <Link 
              to="#features" 
              className="font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/auth" 
              className="flex items-center space-x-1 btn-primary justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
