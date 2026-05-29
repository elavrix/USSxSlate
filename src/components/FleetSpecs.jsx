import React from 'react';
import { motion } from 'framer-motion';
import './FleetSpecs.css';

const specs = [
  ['Powertrain', 'All-Electric'],
  ['Charging Network', 'Tesla Supercharger Compatible'],
  ['Body Styles', 'Pickup Truck + SUV Conversion'],
  ['Wrap-Ready', 'Yes — Engineered for Wraps'],
  ['Wrap Cost', 'Starting at ~$500'],
  ['Service Network', 'RepairPal Certified Partners'],
  ['Dealer', 'US Supply Chain Corp.'],
  ['Procurement', 'Federal, Military & Fleet'],
];

export default function FleetSpecs() {
  return (
    <section className="fleet-specs section">
      <div className="fleet-specs-inner container">
        <motion.div
          className="fleet-specs-copy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-140px' }}
        >
          <p className="eyebrow">By the Numbers</p>
          <h2>Everything you need to know.</h2>
          <p>
            Slate keeps things radically simple — no endless trim levels, no confusing option packages. Just a capable
            electric truck configured exactly the way your fleet needs it.
          </p>

          <div className="fleet-contact">
            <span>Talk to our team</span>
            <a href="tel:+13868951135">+1 (386) 895-1135</a>
            <a href="mailto:J.coyne@ussupplychaincorp.com">J.coyne@ussupplychaincorp.com</a>
            <p>831 E. 11th Ave., New Smyrna Beach, FL 32169</p>
          </div>

          <a className="fleet-specs-button" href="#consultation">
            Start Fleet Review
          </a>
        </motion.div>

        <motion.div
          className="fleet-specs-table"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-140px' }}
        >
          {specs.map(([label, value]) => (
            <div className="spec-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
          <p className="spec-note">
            Full specifications released at time of production window opening. Battery options and range details coming
            soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
