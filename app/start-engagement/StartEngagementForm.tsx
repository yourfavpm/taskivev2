'use client';

import { useState, useRef, useEffect } from 'react';

export default function StartEngagementForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Scroll to top of form wrapper whenever success state becomes true
  useEffect(() => {
    if (success && wrapperRef.current) {
      // Small delay to let the DOM settle after re-render
      setTimeout(() => {
        wrapperRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }, [success]);

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    if (window.innerWidth < 768) {
      setTimeout(() => {
        e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  };

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

  return (
    // Single persistent wrapper — ref is always attached regardless of success/form state
    <div ref={wrapperRef}>
      {success ? (
        /* ── SUCCESS STATE ──────────────────────────────────────── */
        <div style={{ padding: '48px 0 24px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'var(--signal-dim)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--signal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>
            <span className="dot"></span>REQUEST RECEIVED
          </div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', marginBottom: '14px', lineHeight: 1.2 }}>
            We'll be in touch within 1–2 business days.
          </h2>
          <p style={{ color: 'var(--slate)', fontSize: '15px', lineHeight: 1.7, maxWidth: '520px', marginBottom: '20px' }}>
            A senior team member is reviewing your submission now. Check your inbox — we've sent a confirmation with everything you told us and what happens next.
          </p>
          <p style={{ fontSize: '13.5px', color: 'var(--slate-soft)' }}>
            Questions in the meantime?{' '}
            <a href="mailto:info@taskivetech.tech" style={{ color: 'var(--signal)' }}>info@taskivetech.tech</a>
          </p>
        </div>
      ) : (
        /* ── FORM STATE ─────────────────────────────────────────── */
        <form id="engagement-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <div className="field">
              <label>Full name</label>
              <input type="text" id="fullName" name="fullName" placeholder="Jordan Lee" required onFocus={handleFocus} />
            </div>
            <div className="field">
              <label>Work email</label>
              <input type="email" id="email" name="email" placeholder="jordan@company.com" required onFocus={handleFocus} />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label>Company name</label>
              <input type="text" id="companyName" name="companyName" placeholder="Company Inc." required onFocus={handleFocus} />
            </div>
            <div className="field">
              <label>Company size</label>
              <select id="companySize" name="companySize" required onFocus={handleFocus}>
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
              <select id="projectType" name="projectType" required onFocus={handleFocus}>
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
              <select id="timeline" name="timeline" required onFocus={handleFocus}>
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
            <select id="budget" name="budget" onFocus={handleFocus}>
              <option value="">Prefer not to say yet</option>
              <option>$15,000 – $50,000</option>
              <option>$50,000 – $150,000</option>
              <option>$150,000 – $400,000</option>
              <option>$400,000+</option>
            </select>
          </div>
          <div className="field">
            <label>What are you building, and what's at stake?</label>
            <textarea id="description" name="description" rows={6} placeholder="Tell us about the business problem, the workflow, and what needs to be true for this to work." required onFocus={handleFocus}></textarea>
          </div>

          {error && (
            <div id="error-msg" style={{ marginTop: '16px', color: '#B91C1C', fontSize: '14px', padding: '12px', backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '6px', marginBottom: '16px' }}>
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary btn-lg btn-block" id="submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send to Taskive →'}
          </button>
        </form>
      )}
    </div>
  );
}
