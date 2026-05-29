import React, { useState } from 'react';
import './ConsultationForm.css';

const initial = {
  name: '',
  organization: '',
  fleetSize: '',
  industry: '',
  email: '',
  phone: '',
  requirements: '',
};

export default function ConsultationForm() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="consultation-form-section section" id="consultation">
      <div className="container">
        <form className="consultation-card" onSubmit={submit}>
          <div className="consultation-title">
            <p className="eyebrow">Consultation</p>
            <h2>Request Consultation</h2>
          </div>
          <div className="form-grid">
            <input name="name" value={form.name} onChange={update} placeholder="Name" required />
            <input name="organization" value={form.organization} onChange={update} placeholder="Organization" required />
            <input name="fleetSize" value={form.fleetSize} onChange={update} placeholder="Fleet Size" required />
            <input name="industry" value={form.industry} onChange={update} placeholder="Industry" required />
            <input name="email" type="email" value={form.email} onChange={update} placeholder="Email" required />
            <input name="phone" value={form.phone} onChange={update} placeholder="Phone" required />
            <textarea name="requirements" value={form.requirements} onChange={update} placeholder="Project Requirements" rows="5" />
          </div>
          <button className="primary-button" type="submit">
            Request Consultation
          </button>
          {sent && <p className="form-success">Thank you. A consultation specialist will be in touch.</p>}
        </form>
      </div>
    </section>
  );
}
