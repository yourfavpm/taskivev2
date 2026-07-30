'use client';

import { useState } from 'react';

export default function StartEngagementForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/start-engagement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const resData = await response.json();
        throw new Error(resData.error || 'Failed to submit the form');
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'There was an error submitting your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <p className="success-msg mono" style={{ marginTop: "16px", color: "var(--signal)", fontSize: "13.5px" }}>
        ✓ Thank you! We have received your engagement request and will be in touch within 1-2 business days.
      </p>
    );
  }

  return (
    <form id="engagement-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field">
          <label>Full name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Jordan Lee" required />
        </div>
        <div className="field">
          <label>Work email</label>
          <input type="email" id="email" name="email" placeholder="jordan@company.com" required />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label>Company name</label>
          <input type="text" id="companyName" name="companyName" placeholder="Company Inc." required />
        </div>
        <div className="field">
          <label>Company size</label>
          <select id="companySize" name="companySize" required>
            <option value="">Select one</option>
            <option>1–10 employees</option>
            <option>11–50 employees</option>
            <option>51–200 employees</option>
            <option>201–1,000 employees</option>
            <option>1,000+ employees</option>
          </select>
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label>Project type</label>
          <select id="projectType" name="projectType" required>
            <option value="">Select one</option>
            <option>New platform or product build</option>
            <option>Platform modernisation</option>
            <option>Operational automation</option>
            <option>Systems integration</option>
            <option>Fractional technical leadership</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="field">
          <label>Timeline</label>
          <select id="timeline" name="timeline" required>
            <option value="">Select one</option>
            <option>ASAP / urgent</option>
            <option>Within 1 month</option>
            <option>1–3 months</option>
            <option>3+ months out</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label>Estimated budget range (optional)</label>
        <select id="budget" name="budget">
          <option value="">Prefer not to say yet</option>
          <option>$15,000 – $50,000</option>
          <option>$50,000 – $150,000</option>
          <option>$150,000 – $400,000</option>
          <option>$400,000+</option>
        </select>
      </div>
      <div className="field">
        <label>What are you building, and what's at stake?</label>
        <textarea id="description" name="description" rows={6} placeholder="Tell us about the business problem, the workflow, and what needs to be true for this to work." required></textarea>
      </div>
      
      {error && (
        <div id="error-msg" style={{ marginTop: "16px", color: "var(--signal)", fontSize: "14px", padding: "12px", backgroundColor: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "6px", marginBottom: "16px" }}>
          {error}
        </div>
      )}

      <button type="submit" className="btn btn-primary btn-lg btn-block" id="submit-btn" disabled={loading}>
        {loading ? 'Sending...' : 'Send to Taskive →'}
      </button>
    </form>
  );
}
