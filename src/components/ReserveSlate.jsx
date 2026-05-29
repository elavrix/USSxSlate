import React, { useState } from 'react';
import './ReserveSlate.css';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  interest: 'Reserve a Slate',
  message: '',
};

const interestOptions = [
  'Reserve a Slate',
  'Fleet Procurement',
  'Municipal Fleet',
  'Utility / Service Fleet',
  'Enterprise Partnership',
  'General Inquiry',
];

const steps = [
  {
    number: '01',
    title: 'Submit Your Interest',
    text: "Fill out the form and we'll be in touch.",
  },
  {
    number: '02',
    title: 'Design Your Slate',
    text: 'Choose battery, features, and accessories.',
  },
  {
    number: '03',
    title: 'Drive Your Slate',
    text: 'Delivered and supported by USSC.',
  },
];

export default function ReserveSlate() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="reserve-slate-section" id="reserve-slate" aria-labelledby="reserve-slate-title">
      <div className="reserve-slate-container">
        <div className="reserve-slate-copy">
          <p className="reserve-slate-eyebrow">Secure Your Slate</p>

          <h2 className="reserve-slate-heading" id="reserve-slate-title">
            Reserve Your
            <span>Slate — For Free.</span>
          </h2>

          <p className="reserve-slate-intro">
            Brought to you by US Supply Chain Corp. — your trusted federal & military procurement
            partner since 2016. Submit your details and our team will reach out to walk you through
            everything.
          </p>

          <div className="reserve-slate-steps" aria-label="Reservation process">
            {steps.map((step) => (
              <div className="reserve-slate-step" key={step.number}>
                <div className="reserve-slate-step-number" aria-hidden="true">
                  {step.number}
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="reserve-slate-card" onSubmit={handleSubmit}>
          <div className="reserve-slate-card-header">
            <p className="reserve-slate-card-kicker">Procurement Inquiry</p>
            <h3>Request Information</h3>
          </div>

          <div className="reserve-slate-form-grid">
            <div className="reserve-slate-field">
              <label htmlFor="fullName">Full Name *</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="reserve-slate-field">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="reserve-slate-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                autoComplete="tel"
              />
            </div>

            <div className="reserve-slate-field">
              <label htmlFor="interest">I’m Interested In</label>
              <select id="interest" name="interest" value={form.interest} onChange={handleChange}>
                {interestOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="reserve-slate-field reserve-slate-field-full">
              <label htmlFor="message">Message Optional</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your fleet, timeline, or procurement requirements"
                rows="6"
              />
            </div>
          </div>

          <button className="reserve-slate-button" type="submit">
            Reserve For Free <span aria-hidden="true">→</span>
          </button>

          <p className="reserve-slate-privacy">
            By submitting, you agree to be contacted by US Supply Chain Corp. regarding your Slate
            inquiry. Your information will never be shared with third parties.
          </p>

          {submitted && (
            <p className="reserve-slate-success" role="status">
              Thank you. A USSC specialist will contact you shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
