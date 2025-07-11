import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About Us',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Projects',
    path: '/projects'
  },{
    name: 'Contact',
    path: '/contact'
  }];
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'bg-transparent-70 py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
                src="/icons/logo.png" 
                alt="Shantharathna Constructions Logo" 
                className="h-20 w-auto" 
            />
          </Link>
       </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(item => <Link key={item.name} to={item.path} className={`text-sm font-medium transition-colors hover:text-amber-600 ${location.pathname === item.path ? 'text-amber-600' : 'text-gray-700'}`}>
              {item.name}
            </Link>)}
          <Link to="/quote" className="bg-amber-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-amber-700 transition-colors">
            Get a Quote
          </Link>
        </nav>
        <div className="hidden md:flex items-center">
          <a href="tel:+1234567890" className="flex items-center text-gray-700 hover:text-amber-600 transition-colors">
            <PhoneIcon className="h-5 w-5 mr-2" />
            <span className="font-medium">+94 (70) 327 4701</span>
          </a>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon className="h-6 w-6 text-gray-800" /> : <MenuIcon className="h-6 w-6 text-gray-800" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === item.path ? 'bg-amber-50 text-amber-600' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>)}
            <Link to="/quote" className="block px-3 py-2 text-base font-medium rounded-md bg-amber-600 text-white" onClick={() => setIsMenuOpen(false)}>
              Get a Quote
            </Link>
            <a href="tel:+1234567890" className="flex items-center px-3 py-2 text-base font-medium text-gray-700">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span>+94 (70) 327 4701</span>
            </a>
          </div>
        </div>}
    </header>;
};
export default Navbar;