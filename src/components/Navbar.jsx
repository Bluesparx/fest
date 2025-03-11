import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  
  const navItems = [
    { label: '  Home  ', link: '/' },
    { label: ' Events ', link: '/events' },
    { label: 'Sponsers', link: '#' },
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

  return (
    <nav className={`fixed top-0 w-full transition-transform duration-300 z-50 ${visible ? 'transform-none' : 'transform -translate-y-full'}`}>
      <div className="flex justify-center items-center p-10">
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