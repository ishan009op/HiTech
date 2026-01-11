import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Mail, Phone } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Products", path: "/products" },
    { title: "Reviews", path: "/reviews" },
    { title: "Pricing", path: "/pricing" },
    { title: "Contact", path: "/contact" }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className='bg-white sticky top-0 z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo */}
          <div 
            onClick={() => navigate('/')} 
            className='cursor-pointer'
          >
            <h2 className='text-3xl font-bold text-cyan-500'>HiTech</h2>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex'>
            <ul className='flex gap-8 items-center'>
              {links.map((link, i) => (
                <li 
                  onClick={() => handleNavigation(link.path)} 
                  className='text-lg cursor-pointer text-slate-700 hover:text-cyan-500 transition-colors relative group' 
                  key={i}
                >
                  {link.title}
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300'></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA Buttons */}
          <div className='hidden lg:flex gap-3'>
            <button 
              onClick={() => window.location.href = 'mailto:info@elevatelifts.com'}
              className='flex items-center gap-2 text-md border-2 border-slate-300 text-slate-700 hover:text-cyan-500 px-5 py-2 rounded-lg hover:border-cyan-500 transition-all'
            >
              <Mail className='w-4 h-4' />
              Email us
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+1234567890'}
              className='flex items-center gap-2 text-md bg-cyan-500 text-white px-5 py-2 rounded-lg hover:bg-cyan-600 transition-all shadow-sm hover:shadow-md'
            >
              <Phone className='w-4 h-4' />
              Call us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='lg:hidden text-slate-700 hover:text-cyan-500 transition-colors'
          >
            {mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='lg:hidden py-4 border-t border-slate-200'>
            <ul className='space-y-4'>
              {links.map((link, i) => (
                <li 
                  onClick={() => handleNavigation(link.path)} 
                  className='text-lg cursor-pointer text-slate-700 hover:text-cyan-500 transition-colors px-2 py-1' 
                  key={i}
                >
                  {link.title}
                </li>
              ))}
            </ul>
            <div className='flex flex-col gap-3 mt-6'>
              <button 
                onClick={() => window.location.href = 'mailto:info@elevatelifts.com'}
                className='flex items-center justify-center gap-2 text-md border-2 border-slate-300 text-slate-700 hover:text-cyan-500 px-5 py-2 rounded-lg hover:border-cyan-500 transition-all'
              >
                <Mail className='w-4 h-4' />
                Email us
              </button>
              <button 
                onClick={() => window.location.href = 'tel:+1234567890'}
                className='flex items-center justify-center gap-2 text-md bg-cyan-500 text-white px-5 py-2 rounded-lg hover:bg-cyan-600 transition-all'
              >
                <Phone className='w-4 h-4' />
                Call us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;