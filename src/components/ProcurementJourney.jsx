import React from 'react';
import './ProcurementJourney.css';

const steps = ['Consultation', 'Fleet Assessment', 'Vehicle Configuration', 'Procurement Approval', 'Delivery & Deployment', 'Ongoing Support'];

export default function ProcurementJourney() {
  return (
    <section className="procurement section" id="procurement">
      <div className="container">
        <div className="procurement-heading">
          <p className="eyebrow">Procurement Journey</p>
          <h2 className="section-title">From fleet strategy to national deployment.</h2>
        </div>
        <div className="timeline">
          {steps.map((step, index) => (
            <div className="timeline-step" key={step}>
              <div className="timeline-circle">{String(index + 1).padStart(2, '0')}</div>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
