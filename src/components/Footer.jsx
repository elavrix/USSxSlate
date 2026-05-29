import React from 'react';
import { imageConfig } from '../config/imageConfig';
import './Footer.css';

const columns = [
  ['Solutions', ['Fleet Programs', 'Commercial EVs', 'Procurement', 'Deployment']],
  ['Company', ['About USSC', 'Slate Auto', 'Partnership', 'Careers']],
  ['Resources', ['Fleet Guide', 'Compliance', 'Case Studies', 'News']],
  ['Support', ['Contact', 'Service Network', 'Help Center', 'Consultation']],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg-text">USSC x SLATE</div>
      <div className="footer-inner container">
        <div className="footer-brand">
          <div className="footer-lockup">
            <img src={imageConfig.logos.ussc} alt="USSC" />
            <span>x</span>
            <img src={imageConfig.logos.slate} alt="Slate Auto" />
          </div>
          <p>Strategic Commercial EV Partnership for federal, municipal and enterprise fleet operations.</p>
        </div>

        <nav className="footer-columns" aria-label="Footer navigation">
          {columns.map(([title, links]) => (
            <div className="footer-column" key={title}>
              <h3>{title}</h3>
              {links.map((link) => (
                <a href="#top" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
          <div className="footer-column">
            <h3>Contact</h3>
            <a href="mailto:partnerships@ussc.com">partnerships@ussc.com</a>
            <a href="tel:+18000000000">1-800-000-0000</a>
            <a href="#consultation">Request Consultation</a>
          </div>
        </nav>

        <div className="footer-bottom">
          <span>© 2026 USSC x Slate Auto. All rights reserved.</span>
          <div>
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
            <a href="#top">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
