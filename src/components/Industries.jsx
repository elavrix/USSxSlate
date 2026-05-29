import React from 'react';
import { motion } from 'framer-motion';
import { imageConfig } from '../config/imageConfig';
import './Industries.css';

const industries = [
  { name: 'Utilities', image: imageConfig.industries.utilities, tone: 'utilities' },
  { name: 'Government', image: imageConfig.industries.government, tone: 'government' },
  { name: 'Municipal', image: imageConfig.industries.municipal, tone: 'municipal' },
  { name: 'Energy', image: imageConfig.industries.energy, tone: 'energy' },
  { name: 'Logistics', image: imageConfig.industries.logistics, tone: 'logistics' },
  { name: 'Enterprise', image: imageConfig.industries.enterprise, tone: 'enterprise' },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 42, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Industries() {
  return (
    <section className="industries section" id="industries">
      <div className="container">
        <div className="industries-heading">
          <p className="eyebrow">Industries</p>
          <h2 className="section-title">Built for public and private fleet operations.</h2>
        </div>
        <motion.div
          className="industries-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
        >
          {industries.map(({ name, image, tone }) => (
            <motion.article
              className={`industry-tile industry-${tone}`}
              key={name}
              variants={tileVariants}
              whileHover={{ y: -8 }}
            >
              <img src={image} alt={`${name} fleet operations`} loading="lazy" decoding="async" />
              <span>{name}</span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
