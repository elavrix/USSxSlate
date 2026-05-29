import React, { useEffect, useState } from 'react';
import { imageConfig } from '../config/imageConfig';
import './Header.css';

const navItems = [
  ['Solutions', '#solutions'],
  ['Fleet Programs', '#fleet'],
  ['Industries', '#industries'],
  ['Procurement', '#procurement'],
  ['Support', '#support'],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="site-header-inner">
        <a className="brand-mark ussc-mark" href="#top" aria-label="USSC home">
          <img src={imageConfig.logos.ussc} alt="USSC" />
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="brand-mark slate-mark" href="#fleet" aria-label="Slate Auto">
            <img src={imageConfig.logos.slate} alt="Slate Auto" />
          </a>
          <a className="header-cta" href="#consultation">
            Schedule Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
