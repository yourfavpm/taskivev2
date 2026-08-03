'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const formContainerRef = useRef<HTMLDivElement>(null);

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
    
    const rolesNeeded: string[] = [];
    const checkboxes = e.currentTarget.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(cb => rolesNeeded.push((cb as HTMLInputElement).value));
    
    const payload = {
      ...data,
      rolesNeeded
    };

    try {
      const response = await fetch('/api/outsourced-team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const resData = await response.json();
        throw new Error(resData.error || 'Failed to submit the form');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err: any) {
      setError(err.message || 'There was an error submitting your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="tsk">
      <div className="breadcrumb">
        <div className="wrap">
          <Link href="/">Home</Link><span className="sep">/</span><span className="current">Services</span>
        </div>
      </div>

      <section style={{ paddingBottom: '30px' }}>
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot"></span>OUR SERVICES</div>
          <h1 className="reveal" style={{ fontSize: 'clamp(34px,5.4vw,58px)', margin: '18px 0 18px', maxWidth: '820px' }}>
            Software consulting built around outcomes, not deliverables.
          </h1>
          <p className="reveal" style={{ color: 'var(--slate)', fontSize: '17.5px', maxWidth: '640px', fontWeight: 500, marginBottom: '32px' }}>
            Six ways we work with growing and enterprise teams — from a single strategic engagement to a full outsourced product team embedded in your roadmap.
          </p>
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <Link href="/start-engagement" className="btn btn-primary btn-lg">Start an Engagement</Link>
            <a href="#outsourced-team" className="btn btn-ghost btn-lg">Build an Outsourced Team ↓</a>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: '20px' }}>
        <div className="wrap">
          <div className="service-detail-list">

            <div className="service-detail reveal" id="strategy">
              <div className="service-detail-icon">
                <div className="icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polygon points="15,9 13,13 9,15 11,11"/></svg></div>
                <div className="service-detail-index">01 / STRATEGY</div>
              </div>
              <div className="service-detail-body">
                <h3>Product &amp; Technology Strategy</h3>
                <p>Before we write a line of code, we make sure the right thing is being built. We run structured discovery and technical due diligence so your roadmap is grounded in your users, your data, and your actual constraints — not assumptions.</p>
                <ul className="service-detail-list-items">
                  <li>Discovery workshops with stakeholders and end users</li>
                  <li>Technical due diligence on existing systems</li>
                  <li>Architecture &amp; build-vs-buy recommendations</li>
                  <li>A roadmap your team can actually execute against</li>
                </ul>
                <Link href="/start-engagement" className="service-cta">Talk to us about strategy</Link>
              </div>
            </div>

            <div className="service-detail reveal" id="engineering">
              <div className="service-detail-icon">
                <div className="icon"><svg viewBox="0 0 24 24"><polyline points="8,7 3,12 8,17"/><polyline points="16,7 21,12 16,17"/></svg></div>
                <div className="service-detail-index">02 / ENGINEERING</div>
              </div>
              <div className="service-detail-body">
                <h3>Custom Software Engineering</h3>
                <p>We design and build the platforms your business actually runs on — web applications, internal tools, and customer-facing products engineered for the load, complexity, and lifespan of a real system, not a demo.</p>
                <ul className="service-detail-list-items">
                  <li>Full-stack platform builds, start to production</li>
                  <li>Senior engineers writing and reviewing every line</li>
                  <li>Built for scale from day one, not retrofitted later</li>
                  <li>Clean handoff docs so your team can own it after us</li>
                </ul>
                <Link href="/start-engagement" className="service-cta">Talk to us about engineering</Link>
              </div>
            </div>

            <div className="service-detail reveal" id="modernization">
              <div className="service-detail-icon">
                <div className="icon"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="5"/><rect x="4" y="11" width="16" height="5"/><path d="M4 18h16"/></svg></div>
                <div className="service-detail-index">03 / MODERNIZATION</div>
              </div>
              <div className="service-detail-body">
                <h3>Platform Modernization</h3>
                <p>Aging systems slow every decision down. We re-architect legacy platforms into something your team can build on with confidence — without the &quot;rebuild everything and pray&quot; risk that scares most companies out of doing it at all.</p>
                <ul className="service-detail-list-items">
                  <li>Incremental migration paths, not risky rewrites</li>
                  <li>Legacy data and integration mapping before any change</li>
                  <li>Performance and security hardening along the way</li>
                  <li>Zero-downtime cutover planning</li>
                </ul>
                <Link href="/start-engagement" className="service-cta">Talk to us about modernization</Link>
              </div>
            </div>

            <div className="service-detail reveal" id="ai-automation">
              <div className="service-detail-icon">
                <div className="icon"><svg viewBox="0 0 24 24"><path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><circle cx="12" cy="12" r="4"/></svg></div>
                <div className="service-detail-index">04 / AI &amp; AUTOMATION</div>
              </div>
              <div className="service-detail-body">
                <h3>AI &amp; Intelligent Automation</h3>
                <p>We build automation that removes real operational drag — not a chatbot bolted onto your homepage. Every AI engagement starts from the workflow that&apos;s actually costing your team time, and works backward from there.</p>
                <ul className="service-detail-list-items">
                  <li>Workflow audits to find genuine automation opportunities</li>
                  <li>Applied AI features scoped to measurable outcomes</li>
                  <li>Internal tooling that removes manual, repetitive work</li>
                  <li>Built with guardrails — reliability over novelty</li>
                </ul>
                <Link href="/start-engagement" className="service-cta">Talk to us about AI &amp; automation</Link>
              </div>
            </div>

            <div className="service-detail reveal" id="integrations">
              <div className="service-detail-icon">
                <div className="icon"><svg viewBox="0 0 24 24"><circle cx="7" cy="12" r="3"/><circle cx="17" cy="12" r="3"/><path d="M10 12h4"/></svg></div>
                <div className="service-detail-index">05 / INTEGRATIONS</div>
              </div>
              <div className="service-detail-body">
                <h3>Enterprise Integrations</h3>
                <p>Payments, HR systems, CRMs, and data pipelines rarely talk to each other cleanly out of the box. We wire your systems together reliably, so information moves automatically instead of living in someone&apos;s weekly spreadsheet export.</p>
                <ul className="service-detail-list-items">
                  <li>Payment, CRM, and HR system integrations</li>
                  <li>Reliable data pipelines between internal systems</li>
                  <li>API design for systems that need to talk to each other</li>
                  <li>Monitoring so a broken integration doesn&apos;t fail silently</li>
                </ul>
                <Link href="/start-engagement" className="service-cta">Talk to us about integrations</Link>
              </div>
            </div>

            <div className="service-detail reveal" id="advisory">
              <div className="service-detail-icon">
                <div className="icon"><svg viewBox="0 0 24 24"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><polyline points="9,12 11,14 15,10"/></svg></div>
                <div className="service-detail-index">06 / ADVISORY</div>
              </div>
              <div className="service-detail-body">
                <h3>Fractional CTO / Technical Advisory</h3>
                <p>Not every company needs a full-time CTO yet — but every company making real technical decisions needs senior judgment in the room. We sit alongside your team as an ongoing technical advisor, not a one-off consultant.</p>
                <ul className="service-detail-list-items">
                  <li>Ongoing architecture and hiring guidance</li>
                  <li>Vendor and build-vs-buy decision support</li>
                  <li>A senior technical voice in investor and board conversations</li>
                  <li>Flexible hours — scoped to what you actually need</li>
                </ul>
                <Link href="/start-engagement" className="service-cta">Talk to us about advisory</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="outsourced-team">
        <div className="wrap">
          <div className="outsourced-section reveal" ref={formContainerRef}>

            {isSubmitted ? (
              /* ── SUCCESS STATE ─────────────────────────────────── */
              <div style={{
                textAlign: 'center',
                padding: '64px 24px',
                maxWidth: '600px',
                margin: '0 auto',
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--signal-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--signal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>
                  <span className="dot"></span>REQUEST RECEIVED
                </div>
                <h2 style={{ fontSize: 'clamp(24px,3.5vw,36px)', marginBottom: '16px', lineHeight: 1.2 }}>
                  We'll be in touch within 1 business day.
                </h2>
                <p style={{ color: 'var(--slate)', fontSize: '16px', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 28px' }}>
                  A senior team member is reviewing your request now. Check your inbox — we've sent a confirmation with everything you told us and what happens next.
                </p>
                <p style={{ fontSize: '14px', color: 'var(--slate-soft)' }}>
                  Questions in the meantime? Reply to the confirmation email or write to{' '}
                  <a href="mailto:info@taskivetech.tech" style={{ color: 'var(--signal)' }}>info@taskivetech.tech</a>.
                </p>
              </div>
            ) : (
              /* ── FORM STATE ─────────────────────────────────────── */
              <div className="outsourced-grid">
                <div className="outsourced-copy">
                  <div className="eyebrow"><span className="dot"></span>FEATURED SERVICE</div>
                  <h2>Build an outsourced product development team.</h2>
                  <p>Some companies don&apos;t need one project — they need an embedded team. We assemble a dedicated product development team — design, engineering, and delivery — that plugs directly into your roadmap, working like an extension of your company rather than an outside vendor.</p>
                  <ul className="outsourced-list">
                    <li>A consistent, dedicated team assigned to you — not rotating contractors</li>
                    <li>Senior-only talent, the same studio-led standard as every Taskive engagement</li>
                    <li>Direct daily access via Slack/Teams — no account manager relaying messages</li>
                    <li>Scales up or down as your roadmap changes, without a re-hiring cycle</li>
                    <li>Works inside your existing tools, repos, and processes from week one</li>
                  </ul>
                  <p style={{ fontSize: '14px', color: '#9AA0B0', maxWidth: '440px', marginBottom: 0 }}>
                    Fill out the form and tell us what you need — we&apos;ll come back with a proposed team shape, not a generic sales call.
                  </p>
                </div>

                <div className="outsourced-form">
                  <h4>Tell us about your team needs</h4>
                  <p>We&apos;ll respond within one business day with a proposed team shape and next steps.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="field-row">
                      <div className="field">
                        <label>Full name</label>
                        <input type="text" name="fullName" placeholder="Jordan Lee" required onFocus={handleFocus} />
                      </div>
                      <div className="field">
                        <label>Work email</label>
                        <input type="email" name="email" placeholder="jordan@company.com" required onFocus={handleFocus} />
                      </div>
                    </div>
                    <div className="field">
                      <label>Company name</label>
                      <input type="text" name="companyName" placeholder="Company Inc." required onFocus={handleFocus} />
                    </div>
                    <div className="field">
                      <label>What roles do you need on the team?</label>
                      <div className="checkbox-grid">
                        <label className="checkbox-item"><input type="checkbox" value="Product design" /> Product design</label>
                        <label className="checkbox-item"><input type="checkbox" value="Frontend engineering" /> Frontend engineering</label>
                        <label className="checkbox-item"><input type="checkbox" value="Backend engineering" /> Backend engineering</label>
                        <label className="checkbox-item"><input type="checkbox" value="Full-stack engineering" /> Full-stack engineering</label>
                        <label className="checkbox-item"><input type="checkbox" value="QA / testing" /> QA / testing</label>
                        <label className="checkbox-item"><input type="checkbox" value="Project management" /> Project management</label>
                      </div>
                    </div>
                    <div className="field-row">
                      <div className="field">
                        <label>Estimated team size</label>
                        <select name="estimatedTeamSize" required onFocus={handleFocus}>
                          <option value="">Select one</option>
                          <option>1–2 people</option>
                          <option>3–5 people</option>
                          <option>6–10 people</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                      <div className="field">
                        <label>Engagement length</label>
                        <select name="engagementLength" required onFocus={handleFocus}>
                          <option value="">Select one</option>
                          <option>3–6 months</option>
                          <option>6–12 months</option>
                          <option>Ongoing / open-ended</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                    </div>
                    <div className="field">
                      <label>What will this team be working on?</label>
                      <textarea name="description" rows={4} placeholder="Tell us about the product, the roadmap, and what's driving the need for a dedicated team." required onFocus={handleFocus}></textarea>
                    </div>

                    {error && (
                      <div style={{ marginTop: '16px', color: '#B91C1C', fontSize: '14px', padding: '12px', backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '6px', marginBottom: '16px' }}>
                        {error}
                      </div>
                    )}

                    <button type="submit" className="btn btn-primary btn-lg btn-block ot-submit" disabled={loading}>
                      {loading ? 'Sending...' : 'Request Your Outsourced Team →'}
                    </button>
                  </form>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      <section className="closing">
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot"></span>NOT SURE WHICH FITS?</div>
          <h2 className="reveal">Tell us the problem. We&apos;ll tell you the service.</h2>
          <p className="reveal">Most engagements don&apos;t fit neatly into one box above — start a conversation and we&apos;ll shape the right approach together.</p>
          <Link href="/start-engagement" className="btn btn-primary btn-lg reveal">Start an Engagement</Link>
        </div>
      </section>
    </main>
  );
}
