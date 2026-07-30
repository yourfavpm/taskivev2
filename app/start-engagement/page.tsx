import StartEngagementForm from "./StartEngagementForm";

export default function StartEngagement() {
  return (
    <>
      <section style={{ paddingBottom: "20px" }}>
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot"></span>START AN ENGAGEMENT</div>
          <h1 className="reveal" style={{ fontSize: "clamp(34px,5vw,54px)", margin: "18px 0 16px", maxWidth: "760px" }}>
            Tell us what problem you need solved.
          </h1>
          <p className="reveal" style={{ color: "var(--slate)", fontSize: "17.5px", maxWidth: "620px", fontWeight: 500 }}>
            The right engagement depends on the system, the workflow, and the outcome you need. Share the details and we’ll tell you honestly if Taskive is the right fit, usually within one business day.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "24px" }}>
        <div className="wrap form-grid">
          <div className="reveal">
            <StartEngagementForm />
          </div>

          <div className="reveal">
            <div className="side-card">
              <h4>How engagements begin</h4>
              <div className="step-mini">
                <span className="num">01</span>
                <p><strong>We review, usually within 24 hours.</strong>A senior person reads every submission personally.</p>
              </div>
              <div className="step-mini">
                <span className="num">02</span>
                <p><strong>A short intro call.</strong>30 minutes to understand scope, constraints, and fit.</p>
              </div>
              <div className="step-mini">
                <span className="num">03</span>
                <p><strong>A scoping proposal.</strong>Timeline, team, and investment, specific to your engagement.</p>
              </div>
            </div>

            <div className="side-card">
              <h4>Direct contact</h4>
              <p style={{ color: "var(--slate)", fontSize: "14px", marginBottom: "10px" }}>Prefer email? Reach us directly:</p>
              <a href="mailto:info@taskivetech.tech" className="btn btn-ghost btn-block">info@taskivetech.tech</a>
            </div>

            <div className="side-card" style={{ marginBottom: 0 }}>
              <h4>Common questions</h4>
              <details className="faq-item" open>
                <summary>How fast do you actually respond?</summary>
                <p>Within one business day for the initial review, every time - not just for large budgets.</p>
              </details>
              <details className="faq-item">
                <summary>Do you sign NDAs?</summary>
                <p>Yes - routinely, including for the confidential engagement currently on our case studies page.</p>
              </details>
              <details className="faq-item">
                <summary>Do you work with earlier-stage companies too?</summary>
                <p>Our focus is mid-size and enterprise engagements, but we’ll always tell you honestly if we’re the right fit.</p>
              </details>
              <details className="faq-item">
                <summary>Is there a minimum engagement size?</summary>
                <p>There's no public number - it depends on scope and complexity, which is exactly why we start with a conversation, not a price list.</p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
