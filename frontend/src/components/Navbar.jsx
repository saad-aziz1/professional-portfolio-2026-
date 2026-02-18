import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FEFFF2] dark:bg-dark-bg/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-500">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative z-20 bg-[#FEFFF2] dark:bg-transparent">
        
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-secondary to-orange-600 bg-clip-text text-transparent cursor-pointer">
          PORTFOLIO
        </div>

        {/* --- BIG-SCREEN-LINKS --- */}
        <div className="hidden md:flex items-center gap-8 text-slate-700 dark:text-slate-300 font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-secondary transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Right-Side-Icons */}
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-lg text-slate-800 dark:text-yellow-400">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Mobile-Toggle-Button */}
          <button className="md:hidden p-2 text-slate-800 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE-DROPDOWN  --- */}
      {isOpen && (
        <div className="md:hidden bg-[#FEFFF2] dark:bg-dark-bg relative z-10 
          shadow-[inset_0_10px_15px_-10px_rgba(0,0,0,0.1)] 
          dark:shadow-none border-t border-slate-100 dark:border-slate-800
          animate-in slide-in-from-top-5 duration-300">
          
          <div className="flex flex-col p-6 space-y-5 font-semibold text-slate-700 dark:text-slate-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-secondary transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;