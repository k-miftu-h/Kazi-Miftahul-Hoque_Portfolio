'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Resume', href: '/resume' },
  { name: 'Works', href: '/works' },
  { name: 'Experience', href: '/experience' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '1rem 5%',
      background: 'rgba(31, 78, 107, 0.6)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" onClick={() => setIsOpen(false)} style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          Miftu<span className="text-accent">.</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                position: 'relative',
                fontWeight: 500,
                color: pathname === link.href ? 'var(--accent-primary)' : 'var(--text-primary)',
                transition: 'color 0.3s ease'
              }}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--accent-primary)',
                    borderRadius: '2px'
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: 0 }}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: 'rgba(15, 47, 63, 0.95)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem 5% 2rem 5%',
              borderBottom: '1px solid var(--border-color)',
              gap: '1rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
            className="mobile-nav-menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontWeight: 500,
                  fontSize: '1.2rem',
                  padding: '0.75rem 0',
                  color: pathname === link.href ? 'var(--accent-primary)' : 'var(--text-primary)',
                  borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .mobile-nav-toggle { display: none !important; }
          .mobile-nav-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}} />
    </header>
  );
}
