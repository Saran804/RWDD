import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Recycling', path: '/recycling' },
    { name: 'Energy Tips', path: '/energy-tips' },
    { name: 'Community Garden', path: '/gardening' },
    { name: 'Product Swap', path: '/swap' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold"
            onClick={closeMenu}
          >
            <Leaf className="h-8 w-8 text-green-700" />
            <span className={`${isScrolled ? 'text-green-700' : 'text-white'} transition-colors duration-300`}>
              EcoConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  ${location.pathname === item.path 
                    ? 'font-semibold text-green-700' 
                    : `${isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-200'}`
                  } 
                  transition-colors duration-300
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white mt-2 py-4 px-4 rounded-lg shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block ${
                    location.pathname === item.path
                      ? 'font-semibold text-green-700'
                      : 'text-gray-700 hover:text-green-700'
                  } transition-colors duration-300`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;