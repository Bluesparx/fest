import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: '  Home  ', link: '/' },
    { label: ' Events ', link: '/events' },
    { label: '  Itinerary ', link: '/itinerary' },
    { label: 'Sponsors', link: '/sponsors' },
    { label: '  Team  ', link: '/team' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full transition-transform duration-300 z-50 ${visible ? 'transform-none' : 'transform -translate-y-full'}`}>
      
      <div className={`md:hidden flex justify-between items-center px-4 py-3 bg-black/50 backdrop-blur-sm ${!visible && !isMenuOpen ? 'hidden' : ''}`}>
        <Link to="/" className="font-imenglish text-lg text-red-700 font-medium">
        <img src="/title.png" alt="Logo" className="h-8" />
        </Link>
         <button 
          className="text-red-700 focus:outline-none bg-none" 
          onClick={toggleMenu}
        >
          <div className="flex flex-col space-y-1">
            <div className="w-6 h-0.5 bg-red-700"></div>
            <div className="w-6 h-0.5 bg-red-700"></div>
            <div className="w-6 h-0.5 bg-red-700"></div>
          </div>
        </button>

      </div>

      <div className={`absolute top-0 left-0 w-full bg-red-800  transform transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <ul className="flex bg-black/40 flex-col p-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="px-4 py-3 font-imenglish text-xl text-white block hover:text-red-100 transition-colors"
                onClick={() => setIsMenuOpen(false)} 
              >
                {item.label.trim()}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center items-center p-10">
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <Link
                to={item.link}
                className="px-18 font-imenglish text-lg text-red-700 text-center py-4 font-medium block relative z-10 hover:text-red-500 transition-colors"
              >
                {item.label}
              </Link>
              <img
                src="/nav.png"
                alt=""
                className="absolute inset-0 rounded-md -z-0"
                style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;