import React, { useEffect, useState } from 'react';
import { imageConfig } from '../config/imageConfig';
import './Header.css';

const navItems = [
  ['Solutions', '#solutions'],
  ['Fleet Programs', '#fleet'],
  ['Industries', '#industries'],
  ['Procurement', '#procurement'],
  ['Support', '#reserve-slate'],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('ussc-theme') || 'dark';
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('ussc-theme', theme);
  }, [theme]);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="site-header-inner">
        <a className="brand-mark ussc-mark" href="#top" aria-label="USSC home" onClick={closeMobileMenu}>
          <img src={theme === 'dark' ? imageConfig.logos.ussc : '/assets/logos/USSC-Black.svg'} alt="USSC" />
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={() => setTheme(nextTheme)} aria-label={`Switch to ${nextTheme} mode`}>
            <span className="theme-toggle-track">
              <span className="theme-toggle-thumb" />
            </span>
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <a className="header-cta" href="#reserve-slate">
            Schedule Consultation
          </a>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map(([label, href]) => (
          <a href={href} key={label} onClick={closeMobileMenu}>
            {label}
          </a>
        ))}
        <a className="mobile-nav-cta" href="#reserve-slate" onClick={closeMobileMenu}>
          Schedule Consultation
        </a>
      </nav>
    </header>
  );
}
