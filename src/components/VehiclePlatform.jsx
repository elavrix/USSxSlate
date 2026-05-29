import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { imageConfig } from '../config/imageConfig';
import './VehiclePlatform.css';

const slateConfigurations = [
  ['Blank Slate', 'A simple electric pickup foundation ready for fleet use and field customization.', ['Pickup', 'Base Platform', 'Fleet Ready']],
  ['Sunrise in J-Tree', 'Desert-inspired finish with a warm wrap package built for standout visibility.', ['Pickup', 'Wrap Package', 'Lifestyle']],
  ['Purple Reign', 'Fastback SUV configuration with a bold purple exterior and lifted stance.', ['Fastback SUV', 'Lift Kit', 'Premium Wrap']],
  ['Desert Drifter', 'Pickup utility with blacktop details, tire carrier, and off-road attitude.', ['Pickup', 'Blacktop Kit', 'Off-Road']],
  ['Cali Sunset', 'Surf-ready truck treatment with roof rack utility and bright coastal graphics.', ['Pickup', 'Roof Rack', 'Recreation']],
  ['The Professional', 'Sleek black fastback SUV configuration with a clean, low-profile presence.', ['Fastback SUV', 'Tinted Glass', 'Executive']],
  ["Mauvin' On Up", 'Mauve SUV design with bright accent trim and large-format wheels.', ['SUV', '20 in Wheels', 'Accent Trim']],
  ['The Sunnyside', 'Laidback fastback SUV configuration with a capable everyday setup.', ['Fastback SUV', 'Utility Kit', 'Daily Use']],
  ['Surf Break', 'Board-rack truck configuration designed for shoreline runs and gear transport.', ['Pickup', 'Board Rack', 'Adventure']],
  ['The Weekender', 'SUV setup with large tires and roof storage for extended travel.', ['SUV', '32 in Tires', 'Roof Rack']],
  ['Blue Wanderer', 'Open-air SUV configuration with off-road tires and roof-mounted utility.', ['Open Air SUV', '31.5 in Tires', 'Roof Rack']],
  ['Glow Stick', 'Green fastback SUV with high-contrast wheels and visual accent package.', ['Fastback SUV', '20 in Wheels', 'High-Visibility']],
  ['The Cherrybomb', 'Street-ready red pickup configuration with a confident performance look.', ['Pickup', 'Street Package', 'Red Wrap']],
  ['Grit and Grind', 'Passenger-friendly SUV configuration with roof storage for weekend gear.', ['SUV', 'Roof Rack', 'Crew Utility']],
  ['Highway Hero', 'Blue squareback SUV package tuned for practical everyday fleet movement.', ['Squareback SUV', 'Blue Wrap', 'Urban Fleet']],
  ['The Stargazer', 'Open-air SUV configuration built for outdoor events and night drives.', ['Open Air SUV', 'Event Ready', 'Adventure']],
  ['Petal to the Metal', 'Green wrap package with custom decal treatment and a playful work-truck tone.', ['Pickup', 'Custom Decal', 'Green Wrap']],
  ['Mud Master', 'Bold truck configuration with rugged accents and weekend trail energy.', ['Pickup', 'Rugged Accents', 'Trail']],
  ['Stellar Strider', 'Tower-rack truck setup with color-forward styling and practical storage.', ['Pickup', 'Tower Rack', 'Utility']],
  ['The DJ Set', 'Custom wrap configuration with cargo flexibility for equipment and events.', ['Pickup', 'Cargo Bed', 'Event Utility']],
  ['Kind of a Big Teal', 'Teal wrap configuration that brings strong visibility to daily operations.', ['SUV', 'Teal Wrap', 'Daily Driver']],
  ['Beach Bound', 'Doorless open-air SUV setup made for summer access and lightweight utility.', ['Open Air SUV', 'Doorless Kit', 'Recreation']],
  ['The Vintage', 'Pickup configuration with throwback striping and a classic visual package.', ['Pickup', 'Stripe Package', 'Heritage']],
  ['Street Smarts', 'Custom-wrapped truck design built to make the vehicle itself a brand surface.', ['Pickup', 'Custom Wrap', 'Street']],
  ['Quiet Power', 'Fastback SUV with large tires and a restrained, capable profile.', ['Fastback SUV', '32 in Tires', 'Stealth']],
  ['Posted Up', 'Lowered SUV configuration with custom wrap treatment and urban stance.', ['SUV', 'Lowering Kit', 'Custom Wrap']],
  ['The Builder', 'Business-ready truck with wraps, racks, and storage for jobsite use.', ['Pickup', 'Racks + Storage', 'Commercial']],
  ['Check Out My Highlights', 'Silver truck configuration with subtle color accents for a polished look.', ['Pickup', 'Accent Stripe', 'Silver Wrap']],
  ['Moving Day', 'Pickup configuration that puts the bed and roof rack to work.', ['Pickup', 'Roof Rack', 'Cargo']],
  ['Lucky 77', 'Green racing-inspired truck with custom wheel and body wrap details.', ['Pickup', 'Wheel Wrap', 'Sport']],
  ['The Doer', 'Work-focused truck configuration for building, fixing, installation, and service work.', ['Pickup', 'Work Package', 'Service']],
  ['Night Watch', 'Dark custom wrap with room for boards, audio gear, and field equipment.', ['Pickup', 'Custom Wrap', 'Gear Ready']],
  ['The Snow Dog', 'Cold-weather truck setup with coordinated ski-ready visual details.', ['Pickup', 'Ski Setup', 'Winter']],
].map(([name, description, specs], index) => ({
  name,
  description,
  specs,
  image: imageConfig.vehicles[index],
}));

export default function VehiclePlatform() {
  const [active, setActive] = useState(0);
  const vehicle = slateConfigurations[active];

  const goTo = (index) => {
    const total = slateConfigurations.length;
    setActive((index + total) % total);
  };

  return (
    <section className="vehicle-platform section" id="fleet">
      <div className="vehicle-platform-inner container">
        <motion.div
          className="platform-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-160px' }}
        >
          <p className="eyebrow">Vehicle Platform</p>
          <h2>{vehicle.name}</h2>
          <p>{vehicle.description}</p>
        </motion.div>

        <div className="platform-image-shell">
          <button className="platform-arrow platform-arrow-prev" type="button" aria-label="Previous configuration" onClick={() => goTo(active - 1)}>
            ‹
          </button>
          <motion.div
            className="platform-image-stage"
            key={vehicle.image}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <img src={vehicle.image} alt={`${vehicle.name} Slate configuration`} />
          </motion.div>
          <button className="platform-arrow platform-arrow-next" type="button" aria-label="Next configuration" onClick={() => goTo(active + 1)}>
            ›
          </button>
        </div>

        <div className="platform-bottom">
          <div className="platform-metrics">
            {vehicle.specs.map((spec, index) => (
              <div key={spec}>
                <strong>{spec}</strong>
                <span>{['Body', 'Configuration', 'Use Case'][index]}</span>
              </div>
            ))}
          </div>

          <div className="platform-controls">
            <span className="platform-count">
              {active + 1} / {slateConfigurations.length}
            </span>
            <div className="platform-selector" aria-label="Vehicle configuration selector">
              {slateConfigurations.map((item, index) => (
                <button
                  type="button"
                  className={index === active ? 'active' : ''}
                  key={item.name}
                  aria-label={`Show ${item.name}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
