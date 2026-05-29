import React from 'react';
import { motion } from 'framer-motion';
import { imageConfig } from '../config/imageConfig';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-bg" />
      <div className="hero-inner container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="eyebrow">US Supply Chain Corporation x Slate Auto</p>
          <h1>FUTURE OF FLEET ELECTRIFICATION.</h1>
          <p className="hero-subheadline">
            USSC and Slate Auto are redefining how government agencies and enterprise fleets deploy electric vehicles.
          </p>
          <div className="hero-buttons">
            <a className="primary-button" href="#fleet">
              Explore Fleet Programs
            </a>
            <a className="secondary-button" href="#consultation">
              Schedule Consultation
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-vehicle-wrap"
          initial={{ opacity: 0, x: 80, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.12, ease: 'easeOut' }}
        >
          <img src={imageConfig.hero.truck} alt="Slate electric pickup" className="hero-vehicle" />
        </motion.div>
      </div>

      <motion.div
        className="hero-origin-bar"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.34, ease: 'easeOut' }}
      >
        <div className="hero-origin-inner container">
          <div className="origin-lockup">
            <img className="origin-ussc" src={imageConfig.logos.ussc} alt="USSC" />
            <span aria-hidden="true">x</span>
            <img className="origin-slate" src={imageConfig.logos.slate} alt="Slate Auto" />
          </div>
          <div className="origin-divider" />
          <div className="origin-message">
            <span>American Product Platform</span>
            <strong>Designed, built and deployed for U.S. fleet operations.</strong>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
