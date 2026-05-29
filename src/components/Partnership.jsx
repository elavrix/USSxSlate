import React from 'react';
import { motion } from 'framer-motion';
import { imageConfig } from '../config/imageConfig';
import './Partnership.css';

const kpis = [
  ['500+', 'Fleet Deployments'],
  ['Since 2016', 'Procurement Expertise'],
  ['Nationwide', 'Support Network'],
  ['Commercial EV', 'Solutions'],
];

export default function Partnership() {
  return (
    <section className="partnership section" id="solutions">
      <div className="partnership-atmosphere" />
      <div className="partnership-inner container">
        <div className="partnership-main">
          <motion.div
            className="partnership-copy"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-160px' }}
          >
            <p className="eyebrow">Strategic Commercial EV Partnership</p>
            <h2>Procurement clarity for modern electric fleets.</h2>
            <p>
              USSC brings compliant acquisition expertise. Slate brings a configurable EV platform. Together, they
              create a cleaner path from fleet strategy to deployment.
            </p>
          </motion.div>

          <motion.div
            className="partnership-visual"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-160px' }}
          >
            <img src={imageConfig.industries.government} alt="Government fleet deployment" />
            <div className="visual-caption">
              <span>Fleet deployment channel</span>
              <strong>Federal, municipal and enterprise ready.</strong>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="partnership-alliance partnership-kpis"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-160px' }}
        >
          {kpis.map(([value, label], index) => (
            <React.Fragment key={label}>
              <div className="partnership-kpi">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
              {index < kpis.length - 1 && <div className="alliance-line" />}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
