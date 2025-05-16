import React from 'react';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-green-300" />
              <span className="text-xl font-bold text-white">EcoConnect</span>
            </div>
            <p className="text-green-100 text-sm">
              Building a sustainable community through education, 
              action, and connection. Join us in making eco-friendly 
              choices for a better future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-green-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-100 hover:text-white transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recycling" className="text-green-100 hover:text-white transition-colors duration-300 text-sm">
                  Recycling Programs
                </Link>
              </li>
              <li>
                <Link to="/energy-tips" className="text-green-100 hover:text-white transition-colors duration-300 text-sm">
                  Energy Conservation
                </Link>
              </li>
              <li>
                <Link to="/gardening" className="text-green-100 hover:text-white transition-colors duration-300 text-sm">
                  Community Gardening
                </Link>
              </li>
              <li>
                <Link to="/swap" className="text-green-100 hover:text-white transition-colors duration-300 text-sm">
                  Product Swap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-green-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">123 Eco Street, Green City, Earth</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">info@ecoconnect.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-green-700 pb-2">Stay Connected</h3>
            <p className="text-green-100 text-sm">
              Subscribe to our newsletter for updates on events, tips, and community initiatives.
            </p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
              />
              <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-10 pt-6 text-center text-green-200 text-sm">
          <p>© {new Date().getFullYear()} EcoConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;