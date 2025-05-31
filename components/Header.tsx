import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, APP_NAME, MenuIcon, XMarkIcon } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-[#FFFFFF] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className={`text-2xl font-bold ${isScrolled || isOpen ? 'text-[#0E0E0E]' : 'text-[#0E0E0E] sm:text-[#FFFFFF]'}`}>
            {APP_NAME}
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-[#E8B040] ${
                    isActive ? 'text-[#E8B040]' : (isScrolled || isOpen ? 'text-[#434343]' : 'text-[#FFFFFF] hover:text-[#E8B040]/80')
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className={`${isScrolled || isOpen ? 'text-[#0E0E0E]' : 'text-[#0E0E0E] sm:text-[#FFFFFF]'}`}
            >
              {isOpen ? <XMarkIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFFFFF] shadow-lg pb-4">
          <nav className="flex flex-col items-center space-y-4 pt-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors hover:text-[#E8B040] ${
                    isActive ? 'text-[#E8B040]' : 'text-[#434343]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
