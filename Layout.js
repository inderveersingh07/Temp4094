
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0.9)', 'rgba(255, 255, 255, 1)']
  );
  
  const navTextColor = useTransform(
    scrollY,
    [0, 100],
    ['rgb(255, 255, 255)', 'rgb(17, 24, 39)']
  );
  
  // Removed logoFilter as it's no longer needed for color changes

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --primary: 0 0% 0%;
          --primary-foreground: 0 0% 100%;
          --secondary: 0 84% 60%;
          --secondary-foreground: 0 0% 100%;
        }
        
        * {
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .material-shadow-1 { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }
        .material-shadow-2 { box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); }
        .material-shadow-3 { box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); }
        
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: rgb(220, 38, 38);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: rgb(220, 38, 38);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      <motion.header
        style={{ backgroundColor: headerBg }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              className="cursor-pointer flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed46b216616d0771b7585d/70f1dc55d_Logo.jpg"
                alt="Quality Detail Logo"
                // Removed style={{ filter: logoFilter }} to show original colors
                className="h-12 md:h-14 w-auto object-contain"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  style={{ color: navTextColor }}
                  className="nav-link font-medium text-base"
                >
                  {item.label}
                </motion.button>
              ))}
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white shadow-lg font-semibold px-6 py-2"
                onClick={() => scrollToSection('#contact')}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              style={{ color: navTextColor }}
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 bg-black rounded-lg mt-2 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col gap-4 px-4 py-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-white hover:text-red-500 font-medium py-2 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white w-full"
                  onClick={() => scrollToSection('#contact')}
                >
                  Get Quote
                </Button>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      <main>
        {children}
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed46b216616d0771b7585d/70f1dc55d_Logo.jpg"
                alt="Quality Detail Logo"
                className="h-12 w-auto object-contain mb-4" // Removed brightness-0 invert to show original colors
              />
              <p className="text-gray-400">
                Professional detailing services for boats, cars, RVs, and window tinting.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-red-500">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Boat Detailing</li>
                <li>Car Detailing</li>
                <li>RV Detailing</li>
                <li>Window Tinting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-red-500">Contact</h4>
              <p className="text-gray-400 mb-4">
                Get in touch with us for a free quote on any of our services.
              </p>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Quality Detail. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
