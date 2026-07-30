export default function CaseStudiesPage() {
  return (
    <>
      <section style={{ paddingBottom: "40px" }}>
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot"></span>CASE STUDIES</div>
          <h1 className="reveal" style={{ fontSize: "clamp(34px,5vw,56px)", margin: "18px 0 18px", maxWidth: "820px" }}>
            Selected engagements. Systems in production.
          </h1>
          <p className="reveal" style={{ color: "var(--slate)", fontSize: "17.5px", maxWidth: "680px", fontWeight: 500 }}>
            A showcase of notable projects we’ve shipped and continue to support. Open any entry below to jump to the project highlight.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="work-list">
            <a id="skeduley" className="work-row reveal" href="/case-studies/skeduley">
              <div>
                <div className="work-name-wrap">
                  <span className="work-swatch" style={{ background: "#0E9F6E" }}></span>
                  <span className="work-name">Skeduley</span>
                </div>
                <div className="work-tags">VERTICAL SAAS · PAYMENTS · SCHEDULING</div>
                <div className="status-live"><span className="dot"></span>Live in production</div>
              </div>
              <div className="work-desc">Like Shopify for service providers: create a booking website in minutes and manage bookings, payments, scheduling, CRM, staff, and more from one system.</div>
              <div className="work-cta"><span className="work-cta-label">View case study</span><span className="work-cta-arrow">→</span></div>
            </a>

            <a id="opsly-hr" className="work-row reveal" href="/case-studies/opsly-hr">
              <div>
                <div className="work-name-wrap">
                  <span className="work-swatch" style={{ background: "#1F3FE0" }}></span>
                  <span className="work-name">Opsly HR</span>
                </div>
                <div className="work-tags">HR TECH · MARKETPLACE · ENTERPRISE</div>
                <div className="status-live"><span className="dot"></span>Live in production</div>
              </div>
              <div className="work-desc">An enterprise talent and outsourcing platform connecting scaling companies with vetted product and operations professionals.</div>
              <div className="work-cta"><span className="work-cta-label">View case study</span><span className="work-cta-arrow">→</span></div>
            </a>

            <a id="eduplan360" className="work-row reveal" href="/case-studies/eduplan360">
              <div>
                <div className="work-name-wrap">
                  <span className="work-swatch" style={{ background: "#C99A2E" }}></span>
                  <span className="work-name">EduPlan360</span>
                </div>
                <div className="work-tags">EDTECH · MULTI-REGION · STUDENT PORTAL</div>
                <div className="status-live"><span className="dot"></span>Live in production</div>
              </div>
              <div className="work-desc">A global study-abroad platform: destinations, university partners, and a student portal with 1,200+ students and a 95% visa success rate.</div>
              <div className="work-cta"><span className="work-cta-label">View case study</span><span className="work-cta-arrow">→</span></div>
            </a>

            <a id="kemuko" className="work-row reveal" href="/case-studies/kemuko">
              <div>
                <div className="work-name-wrap">
                  <span className="work-swatch" style={{ background: "#D6497A" }}></span>
                  <span className="work-name">Kemuko</span>
                </div>
                <div className="work-tags">CONSUMER · GROWTH · PRE-LAUNCH</div>
                <div className="status-live"><span className="dot"></span>Early access</div>
              </div>
              <div className="work-desc">A consumer waitlist product with early-access growth mechanics ahead of a full public launch.</div>
              <div className="work-cta"><span className="work-cta-label">View case study</span><span className="work-cta-arrow">→</span></div>
            </a>

            <a id="kongila" className="work-row reveal work-confidential" href="/case-studies/kongila">
              <div>
                <div className="work-name-wrap">
                  <span className="work-swatch" style={{ background: "#5B616E" }}></span>
                  <span className="work-name">Kongila</span>
                </div>
                <div className="work-tags">CONFIDENTIAL ENGAGEMENT</div>
                <div className="status-live" style={{ opacity: 0.6 }}>In development</div>
              </div>
              <div className="work-desc">Currently in active build. Details under wraps until launch.</div>
              <div className="work-cta"><span className="work-cta-label">View details</span><span className="work-cta-arrow">↗</span></div>
            </a>
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot"></span>START AN ENGAGEMENT</div>
          <h2 className="reveal">See something like your problem?</h2>
          <p className="reveal">Tell us what you’re building. We’ll tell you honestly if we’re the right team for it.</p>
          <a href="/start-engagement" className="btn btn-primary btn-lg reveal">Start an Engagement</a>
        </div>
      </section>
    </>
  );
}
