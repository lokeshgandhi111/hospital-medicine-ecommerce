import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, Search, Menu, X, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const cartItemCount = getCartItemCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Medicines', path: '/medicines' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/90 backdrop-blur-lg shadow-glass py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-health-primary to-health-secondary p-2.5 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-gray-900 tracking-tight leading-none">
                PHARMACY
              </span>
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold tracking-wide transition-all duration-300 hover:text-health-primary relative group ${location.pathname === link.path ? 'text-health-primary' : 'text-gray-600'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-health-primary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''
                  }`}></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 md:space-x-5">
            <button className="hidden sm:flex p-2.5 text-gray-600 hover:text-health-primary hover:bg-health-primary/10 rounded-xl transition-all">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden sm:flex p-2.5 text-gray-600 hover:text-health-primary hover:bg-health-primary/10 rounded-xl transition-all">
              <User className="w-5 h-5" />
            </button>
            <Link to="/cart" className="relative p-2.5 text-gray-600 hover:text-health-primary hover:bg-health-primary/10 rounded-xl transition-all">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute top-1 right-1 bg-health-accent-coral text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-white animate-pulse-soft">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2.5 bg-gray-100 rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96 mt-4 pb-4 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="flex flex-col space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-bold text-gray-800 hover:text-health-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-gray-200" />
            <div className="flex items-center justify-between">
              <span className="font-bold text-gray-600">Search Medicines</span>
              <Search className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
