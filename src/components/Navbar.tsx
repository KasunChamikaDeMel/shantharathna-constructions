import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2 bg-white' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
          className="flex items-center text-2xl font-bold text-amber-600"
        >
          SHANTHARATHNA CONSTRUCTIONS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => {
                if (item.path === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`text-sm font-medium transition-colors hover:text-amber-600 ${location.pathname === item.path ? 'text-amber-600' : 'text-gray-700'}`}
            >
              {item.name}
            </Link>
          ))}
          <a href="tel:+94775451850" className="flex items-center text-gray-700 hover:text-amber-600 text-sm">
            <PhoneIcon className="h-5 w-5 mr-2" />
            +94 (77) 545 1850
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon className="h-6 w-6 text-gray-800" /> : <MenuIcon className="h-6 w-6 text-gray-800" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-3 pb-4 space-y-2">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => {
                setIsMenuOpen(false);
                if (item.path === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`block text-base font-medium rounded-md px-3 py-2 ${location.pathname === item.path ? 'bg-amber-50 text-amber-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              {item.name}
            </Link>
          ))}
          <a href="tel:+94775451850" className="flex items-center text-gray-700 px-3 py-2">
            <PhoneIcon className="h-5 w-5 mr-2" />
            +94 (77) 545 1850
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
