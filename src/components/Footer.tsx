import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Shantharathna Constructions
            </h3>
            <p className="text-gray-400 mb-4">
              Building the future, restoring the past. Quality construction
              services since 2003.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
                <Link to="/" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Renovations & Remodeling
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Road/Bridge Construction
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Electrical & Plumbing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Interior Finishing
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  123 Construction Ave, Building City, State 12345
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-amber-500 mr-2" />
                <span className="text-gray-400">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 text-amber-500 mr-2" />
                <span className="text-gray-400">info@shantharathna.com</span>
              </li>
              <li className="flex items-start">
                <ClockIcon className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Monday - Friday: 8am - 5pm
                  <br />
                  Saturday: 9am - 1pm
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <div className="text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Shantharathna Constructions. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;