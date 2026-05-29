import React from 'react';
import { motion } from 'framer-motion';
import { imageConfig } from '../config/imageConfig';
import './WhyPartnership.css';

const features = [
  {
    title: '3D Wrap Studio',
    kicker: 'Exterior System',
    image: imageConfig.editorial.wrapGif,
    className: 'feature-large',
  },
  {
    title: 'Interior Options',
    kicker: 'Cabin Layouts',
    image: imageConfig.editorial.interior,
  },
  {
    title: 'Tire Options',
    kicker: 'Wheel Packages',
    image: imageConfig.editorial.wheels,
  },
  {
    title: 'Pickup to SUV',
    kicker: 'Body Conversion',
    image: imageConfig.editorial.suv,
  },
  {
    title: 'Grille Faces',
    kicker: 'Front Identity',
    image: imageConfig.editorial.grill,
  },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyPartnership() {
  return (
    <section className="why-partnership section">
      <div className="customization-inner container">
        <motion.div
          className="customization-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-140px' }}
        >
          <p className="eyebrow">Slate Configuration System</p>
          <h2>Built to adapt before it ever reaches the fleet.</h2>
          <p>
            Wraps, cabin treatments, wheels, body conversions and front-end identities give commercial operators a
            platform that can match the work.
          </p>
        </motion.div>

        <motion.div
          className="customization-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
        >
          {features.map((feature) => (
            <motion.article
              className={`customization-tile ${feature.className || ''}`}
              key={feature.title}
              variants={tileVariants}
              whileHover={{ y: -8 }}
            >
              <img src={feature.image} alt={feature.title} loading="lazy" decoding="async" />
              <div className="customization-label">
                <span>{feature.kicker}</span>
                <h3>{feature.title}</h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
