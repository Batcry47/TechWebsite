import React, { useState, useEffect } from 'react';
import { Smartphone, Menu, X, Search, MapPin } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  onScrollTo: (elementId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onScrollTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    onNavigate('HOME');
    // Small timeout to allow view switch before scrolling
    setTimeout(() => {
        onScrollTo(section);
        setIsMobileMenuOpen(false);
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => handleNavClick('hero')}
          >
            <div className="bg-tech-600 p-2 rounded-lg text-white">
              <Smartphone size={24} />
            </div>
            <div>
              <h1 className={`font-bold text-xl leading-none ${isScrolled ? 'text-dark-900' : 'text-slate-900'}`}>
                TechFix<span className="text-tech-600">Pro</span>
              </h1>
              <p className="text-[10px] tracking-wider text-gray-500 font-medium">REPAIR & RETAIL</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('services')} className="font-medium text-gray-600 hover:text-tech-600 transition-colors">Services</button>
            <button onClick={() => handleNavClick('products')} className="font-medium text-gray-600 hover:text-tech-600 transition-colors">Products</button>
            <button onClick={() => handleNavClick('categories')} className="font-medium text-gray-600 hover:text-tech-600 transition-colors">Categories</button>
            <div className="flex items-center gap-1 text-gray-500 text-sm border-l pl-6 border-gray-300">
               <MapPin size={16} />
               <span>Downtown, NY</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col space-y-4 md:hidden animate-fade-in">
          <button onClick={() => handleNavClick('services')} className="text-left py-2 font-medium text-gray-700">Services</button>
          <button onClick={() => handleNavClick('products')} className="text-left py-2 font-medium text-gray-700">Products</button>
          <button onClick={() => handleNavClick('categories')} className="text-left py-2 font-medium text-gray-700">Categories</button>
          <div className="pt-4 border-t border-gray-100 text-sm text-gray-500 flex items-center gap-2">
             <MapPin size={16} />
             <span>123 Tech Avenue, Downtown NY</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;