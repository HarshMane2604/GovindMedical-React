import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active Navigation Link Highlighting
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Store', href: '#store' },
    { name: 'Categories', href: '#categories' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Header / Nav */}
      <header
        className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm ${
          isScrolled ? 'py-3 shadow-md' : ''
        }`}
      >
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="flex justify-between items-center">
            <div className="logo">
              <a href="#" className="flex items-center gap-2 text-2xl font-extrabold text-[var(--color-primary)]">
                <i className="fa-solid fa-notes-medical text-[1.75rem] text-[var(--color-secondary)]"></i>
                <span className="hidden sm:inline">Jay Govind Medical</span>
                <span className="sm:hidden">JG Medical</span>
              </a>
            </div>
            
            <nav className="hidden lg:block">
              <ul className="flex gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`font-medium text-[var(--color-text-main)] relative py-2 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[var(--color-primary)] after:transition-all after:duration-300 ${
                        activeSection === link.href.substring(1)
                          ? 'text-[var(--color-primary)] after:w-full'
                          : 'after:w-0 hover:text-[var(--color-primary)] hover:after:w-full'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleCart}
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-bg-light)] text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:bg-[rgba(11,95,181,0.05)] transition-all"
                aria-label="Shopping Cart"
              >
                <i className="fa-solid fa-cart-shopping text-xl"></i>
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-[var(--color-accent)] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white transform translate-x-1 -translate-y-1">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </button>
            
              <a
                href="#contact"
                className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-2.5 font-semibold rounded-full cursor-pointer transition-all duration-300 border-none text-sm bg-[var(--color-primary)] text-white shadow-[0_4px_15px_rgba(11,95,181,0.3)] hover:bg-[var(--color-primary-dark)] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(11,95,181,0.4)]"
              >
                Order Now
              </a>
              <button
                className="lg:hidden bg-transparent border-none text-2xl text-[var(--color-text-main)] cursor-pointer"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 w-[300px] h-screen bg-white z-[1001] shadow-2xl transition-all duration-300 p-8 flex flex-col ${
          isMobileMenuOpen ? 'right-0' : '-right-full'
        }`}
      >
        <div className="text-right mb-8">
          <button
            className="bg-transparent border-none text-2xl cursor-pointer text-[var(--color-text-main)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-xl font-semibold block text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
