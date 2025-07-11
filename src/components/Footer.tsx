import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shantharathna Constructions</h3>
            <p className="text-gray-400 mb-4">
              Delivering trusted residential and commercial construction solutions across Sri Lanka since 2003.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/shantha.rathna.940" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-amber-500 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</Link></li>
              <li><Link to="/quote" className="text-gray-400 hover:text-amber-500 transition-colors">Get a Quotation</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">Rolling Shutters</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">Remote Control Gates</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">Iron Carpentry</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">Welding & Gas Cutting</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">Grill Gates</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">Aluminium Partitions</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">All Types of Iron Works</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=136/23/B,+Wanamal+Uyana,+Sapugasthenna,+Kalagedihena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  136/23/B, Wanamal Uyana, Sapugasthenna, Kalagedihena
                </a>
              </li>
              
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-amber-500 mr-2" />
                <a
                  href="tel:+94775451850"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  077 54 51 850
                </a>
              </li>
              
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 text-amber-500 mr-2" />
                <a
                  href="mailto:santharathna938@gmail.com"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  santharathna938@gmail.com
                </a>
              </li>
              
              <li className="flex items-start">
                <ClockIcon className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Monday - Friday: 8:00 AM - 5:00 PM
                  <br />
                  Saturday - Sunday: 9:00 AM - 1:00 PM
                </span>
              </li>

            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Shantharathna Constructions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
