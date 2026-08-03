import TestimonialCarousel from "./components/TestimonialCarousel";
import AnimatedStats from "./components/AnimatedStats";

export default function Home() {
  return (
    <>
      <div id="scroll-progress"></div>

      <div className="dotnav">
        <a href="#hero" data-label="Top"></a>
        <a href="#services" data-label="Services"></a>
        <a href="#work" data-label="Work"></a>
        <a href="#industries" data-label="Industries"></a>
        <a href="#process" data-label="Process"></a>
        <a href="#about" data-label="Why Taskive"></a>
        <a href="#testimonials" data-label="Clients"></a>
      </div>

      <section id="hero" style={{ padding: "64px 0 60px" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0" }} className="hero-grid-outer">
            <div>
              <h1 style={{ fontSize: "clamp(38px,5.6vw,68px)", lineHeight: 1.02, margin: "20px 0 22px", maxWidth: "720px", fontWeight: 700 }}>
                Technical leadership for systems that have to work.
              </h1>
              <p style={{ fontSize: "18.5px", color: "var(--slate)", maxWidth: "560px", marginBottom: "32px", fontWeight: 500 }}>
                Taskive helps businesses modernise platforms, connect systems, and reduce the operational friction that slows delivery.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <a href="/start-engagement" className="btn btn-primary btn-lg">Start an Engagement</a>
                <a href="#work" className="btn btn-ghost btn-lg">See systems in production ↓</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 76px" }}>
        <div className="wrap">
          <div className="hero-visual reveal">
            <div className="marquee-col">
              <div className="ui-card"><div className="top"><span></span><span></span><span></span><span className="tag">SKEDULEY</span></div><div className="bar w80" style={{ background: "#DCF3E9" }}></div><div className="bar w60" style={{ background: "#DCF3E9" }}></div><div className="chip" style={{ background: "#DCF3E9", color: "#0E9F6E" }}>Booking confirmed</div></div>
              <div className="ui-card"><div className="top"><span></span><span></span><span></span><span className="tag">OPSLY HR</span></div><div className="graph">
                <i style={{ height: "40%", background: "#1F3FE0" }}></i><i style={{ height: "70%", background: "#1F3FE0" }}></i><i style={{ height: "55%", background: "#1F3FE0" }}></i><i style={{ height: "85%", background: "#1F3FE0" }}></i><i style={{ height: "35%", background: "#1F3FE0" }}></i><i style={{ height: "65%", background: "#1F3FE0" }}></i>
              </div><div className="bar w40" style={{ marginTop: "10px" }}></div></div>
              <div className="ui-card"><div className="top"><span></span><span></span><span></span><span className="tag">EDUPLAN360</span></div><div className="bar w60" style={{ background: "#F3E7C9" }}></div><div className="bar w80" style={{ background: "#F3E7C9" }}></div><div className="chip" style={{ background: "#F3E7C9", color: "#9A7714" }}>95% visa success</div></div>
              <div className="ui-card"><div className="top"><span></span><span></span><span></span><span className="tag">SKEDULEY</span></div><div className="bar w80" style={{ background: "#DCF3E9" }}></div><div className="bar w60" style={{ background: "#DCF3E9" }}></div><div className="chip" style={{ background: "#DCF3E9", color: "#0E9F6E" }}>Booking confirmed</div></div>
              <div className="ui-card"><div className="top"><span></span><span></span><span></span><span className="tag">OPSLY HR</span></div><div className="graph">
                <i style={{ height: "40%", background: "#1F3FE0" }}></i><i style={{ height: "70%", background: "#1F3FE0" }}></i><i style={{ height: "55%", background: "#1F3FE0" }}></i><i style={{ height: "85%", background: "#1F3FE0" }}></i><i style={{ height: "35%", background: "#1F3FE0" }}></i><i style={{ height: "65%", background: "#1F3FE0" }}></i>
              </div><div className="bar w40" style={{ marginTop: "10px" }}></div></div>
              <div className="ui-card"><div className="top"><span></span><span></span><span></span><span className="tag">EDUPLAN360</span></div><div className="bar w60" style={{ background: "#F3E7C9" }}></div><div className="bar w80" style={{ background: "#F3E7C9" }}></div><div className="chip" style={{ background: "#F3E7C9", color: "#9A7714" }}>95% visa success</div></div>
            </div>
            <div className="marquee-col rev">
              <div className="ui-card"><div className="top"><span></span><span></span><span></span><span className="tag">KEMUKO</span></div><div className="bar w60" style={{ background: "#FAE1EA" }}></div><div className="bar w40" style={{ background: "#FAE1EA" }}></div><div className="chip" style={{ background: "#FAE1EA", color: "#B03A65" }}>Early access +240</div></div>
              <div className="ui-card"><div className="top"><span></span><span></span><span></span><span className="tag">KONGILA</span></div><div className="bar w80"></div><div className="bar w60"></div><div className="chip" style={{ background: "var(--paper-dim)", color: "var(--slate)" }}>In development</div></div>
              <div className="ui-card"><div className="top"><span></span><span></span><span></span><span className="tag">EDUPLAN360</span></div><div className="graph">
                <i style={{ height: "50%", background: "#C99A2E" }}></i><i style={{ height: "80%", background: "#C99A2E" }}></i><i style={{ height: "65%", background: "#C99A2E" }}></i><i style={{ height: "90%", background: "#C99A2E" }}></i><i style={{ height: "45%", background: "#C99A2E" }}></i>
              </div></div>
              <div className="ui-card"><div className="top"><span></span><span></span><span></span><span className="tag">KEMUKO</span></div><div className="bar w60" style={{ background: "#FAE1EA" }}></div><div className="bar w40" style={{ background: "#FAE1EA" }}></div><div className="chip" style={{ background: "#FAE1EA", color: "#B03A65" }}>Early access +240</div></div>
              <div className="ui-card"><div className="top"><span></span><span></span><span></span><span className="tag">KONGILA</span></div><div className="bar w80"></div><div className="bar w60"></div><div className="chip" style={{ background: "var(--paper-dim)", color: "var(--slate)" }}>In development</div></div>
              <div className="ui-card"><div className="top"><span></span><span></span><span></span><span className="tag">EDUPLAN360</span></div><div className="graph">
                <i style={{ height: "50%", background: "#C99A2E" }}></i><i style={{ height: "80%", background: "#C99A2E" }}></i><i style={{ height: "65%", background: "#C99A2E" }}></i><i style={{ height: "90%", background: "#C99A2E" }}></i><i style={{ height: "45%", background: "#C99A2E" }}></i>
              </div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip reveal">
        <div className="wrap">
          <div className="trust-strip-content">
            <div className="trust-stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years IT Experience</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-rating">
              <div className="stars" aria-hidden="true">⭐⭐⭐⭐⭐</div>
              <span className="rating-text"><strong>Rated 4.9/5</strong> by enterprise clients</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-industries">
              <span className="industries-label">Trusted across:</span>
              <div className="industries-list">
                <span className="industry-item">Fintech<span className="industry-dot">&middot;</span></span>
                <span className="industry-item">Logistics<span className="industry-dot">&middot;</span></span>
                <span className="industry-item">Healthtech<span className="industry-dot">&middot;</span></span>
                <span className="industry-item">SaaS</span>
              </div>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-logos" aria-label="Client logos">
              <img className="trust-logo" src="/img/skeduleylogo.png" alt="Skeduley logo" />
              <img className="trust-logo" src="/img/opslylogo.png" alt="Opsly logo" />
              <img className="trust-logo" src="/img/eduplan360logo.png" alt="EduPlan360 logo" />
              <img className="trust-logo" src="/img/kongilalogo.png" alt="Kongila logo" />
            </div>
          </div>
        </div>
      </section>

      <AnimatedStats />

      <section id="services">
        <div className="wrap">
          <div className="section-head reveal">
            <svg className="mini-pulse" viewBox="0 0 44 16"><path d="M0,8 L14,8 L17,2 L20,14 L23,8 L44,8"/></svg>
            <h2>How we help</h2>
            <p>We help businesses modernise platforms, connect systems, and remove repetitive operational work.</p>
          </div>
          <div className="services-list">
            <div className="service-row reveal">
              <div className="service-index">01</div>
              <div className="icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polygon points="15,9 13,13 9,15 11,11"/></svg></div>
              <div className="service-name">Product &amp; Technology Strategy</div>
              <div className="service-desc">Discovery, technical due diligence, and roadmapping before a line of code is written.</div>
            </div>
            <div className="service-row reveal">
              <div className="service-index">02</div>
              <div className="icon"><svg viewBox="0 0 24 24"><polyline points="8,7 3,12 8,17"/><polyline points="16,7 21,12 16,17"/></svg></div>
              <div className="service-name">Custom Software Engineering</div>
              <div className="service-desc">Web platforms, internal systems, and customer-facing products built for scale, not just launch.</div>
            </div>
            <div className="service-row reveal">
              <div className="service-index">03</div>
              <div className="icon"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="5"/><rect x="4" y="11" width="16" height="5"/><path d="M4 18h16"/></svg></div>
              <div className="service-name">Platform Modernization</div>
              <div className="service-desc">Re-architecting aging systems into something your team can actually build on.</div>
            </div>
            <div className="service-row reveal">
              <div className="service-index">04</div>
              <div className="icon"><svg viewBox="0 0 24 24"><path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><circle cx="12" cy="12" r="4"/></svg></div>
              <div className="service-name">AI &amp; Intelligent Automation</div>
              <div className="service-desc">Automation and applied AI that removes real operational drag, not demo-ware.</div>
            </div>
            <div className="service-row reveal">
              <div className="service-index">05</div>
              <div className="icon"><svg viewBox="0 0 24 24"><circle cx="7" cy="12" r="3"/><circle cx="17" cy="12" r="3"/><path d="M10 12h4"/></svg></div>
              <div className="service-name">Enterprise Integrations</div>
              <div className="service-desc">Payments, HR systems, CRMs, and data pipelines wired together reliably.</div>
            </div>
            <div className="service-row reveal">
              <div className="service-index">06</div>
              <div className="icon"><svg viewBox="0 0 24 24"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><polyline points="9,12 11,14 15,10"/></svg></div>
              <div className="service-name">Fractional CTO / Technical Advisory</div>
              <div className="service-desc">Senior technical judgment on tap for teams without a full-time CTO yet.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <div className="section-head row reveal">
            <div style={{ maxWidth: "620px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <svg className="mini-pulse" viewBox="0 0 44 16"><path d="M0,8 L14,8 L17,2 L20,14 L23,8 L44,8"/></svg>
              <h2>Systems in production</h2>
              <p>Each engagement below is a business problem solved with a working system in production.</p>
            </div>
            <a href="/case-studies" className="btn btn-ghost">View the case studies →</a>
          </div>

          <div className="work-list">
            <a className="work-row reveal" href="/case-studies/skeduley">
              <div>
                <div className="work-name-wrap"><span className="work-swatch" style={{ background: "#0E9F6E" }}></span><span className="work-name">Skeduley</span></div>
                <div className="work-tags">VERTICAL SAAS · PAYMENTS · SCHEDULING</div>
                <div className="status-live"><span className="dot"></span>Live in production</div>
              </div>
              <div className="work-desc">A platform for service businesses to create a booking website in minutes and manage bookings, payments, scheduling, CRM, staff, and more from one place.</div>
              <div className="work-cta"><span className="work-cta-label">View case study</span><span className="work-cta-arrow">→</span></div>
            </a>
            <a className="work-row reveal" href="/case-studies/opsly-hr">
              <div>
                <div className="work-name-wrap"><span className="work-swatch" style={{ background: "#1F3FE0" }}></span><span className="work-name">Opsly HR</span></div>
                <div className="work-tags">HR TECH · MARKETPLACE · ENTERPRISE</div>
                <div className="status-live"><span className="dot"></span>Live in production</div>
              </div>
              <div className="work-desc">An enterprise talent and outsourcing platform connecting scaling companies with vetted product and operations professionals.</div>
              <div className="work-cta"><span className="work-cta-label">View case study</span><span className="work-cta-arrow">→</span></div>
            </a>
            <a className="work-row reveal" href="/case-studies/eduplan360">
              <div>
                <div className="work-name-wrap"><span className="work-swatch" style={{ background: "#C99A2E" }}></span><span className="work-name">EduPlan360</span></div>
                <div className="work-tags">EDTECH · MULTI-REGION · STUDENT PORTAL</div>
                <div className="status-live"><span className="dot"></span>Live in production</div>
              </div>
              <div className="work-desc">A global study-abroad platform: destinations, university partners, and a student portal — 1,200+ students, 95% visa success rate.</div>
              <div className="work-cta"><span className="work-cta-label">View case study</span><span className="work-cta-arrow">→</span></div>
            </a>
            <a className="work-row reveal" href="/case-studies/kemuko">
              <div>
                <div className="work-name-wrap"><span className="work-swatch" style={{ background: "#D6497A" }}></span><span className="work-name">Kemuko</span></div>
                <div className="work-tags">CONSUMER · GROWTH · PRE-LAUNCH</div>
                <div className="status-live"><span className="dot"></span>Early access</div>
              </div>
              <div className="work-desc">A consumer waitlist product with early-access growth mechanics ahead of a full public launch.</div>
              <div className="work-cta"><span className="work-cta-label">View case study</span><span className="work-cta-arrow">→</span></div>
            </a>
            <a className="work-row reveal work-confidential" href="/case-studies/kongila">
              <div>
                <div className="work-name-wrap"><span className="work-swatch" style={{ background: "#5B616E" }}></span><span className="work-name">Kongila</span></div>
                <div className="work-tags">CONFIDENTIAL ENGAGEMENT</div>
                <div className="status-live" style={{ opacity: .6 }}>In development</div>
              </div>
              <div className="work-desc">Currently in active build. Details under wraps until launch.</div>
              <div className="work-cta"><span className="work-cta-label">View details</span><span className="work-cta-arrow">↗</span></div>
            </a>
          </div>
        </div>
      </section>

      <section id="industries">
        <div className="wrap">
          <div className="section-head reveal">
            <svg className="mini-pulse" viewBox="0 0 44 16"><path d="M0,8 L14,8 L17,2 L20,14 L23,8 L44,8"/></svg>
            <h2>Industries we know</h2>
            <p>We’ve shipped in these sectors before, and we know the operating realities that shape the work.</p>
          </div>
          <div className="industries-grid reveal">
            <div className="industry-card">
              <div className="icon"><svg viewBox="0 0 24 24"><path d="M7 17a4 4 0 0 1 0-8 5 5 0 0 1 9.5-1.8A4.5 4.5 0 0 1 17 17H7z"/></svg></div>
              <h4>SaaS &amp; Technology</h4>
              <p>MVP to scale — the technical and business nuance of fast-growing product companies.</p>
            </div>
            <div className="industry-card">
              <div className="icon"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5"/><path d="M15 14c2.4 0 5 1.6 5 5"/></svg></div>
              <h4>HR &amp; People Operations</h4>
              <p>Talent platforms and outsourcing infrastructure built for scaling organizations.</p>
            </div>
            <div className="industry-card">
              <div className="icon"><svg viewBox="0 0 24 24"><path d="M2 9l10-4 10 4-10 4z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/></svg></div>
              <h4>Education &amp; EdTech</h4>
              <p>Multi-region admissions, student portals, and learning infrastructure.</p>
            </div>
            <div className="industry-card">
              <div className="icon"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="1.5"/><path d="M3 10h18"/></svg></div>
              <h4>Fintech &amp; Payments</h4>
              <p>Secure, compliant, scalable financial technology for the modern era.</p>
            </div>
            <div className="industry-card">
              <div className="icon"><svg viewBox="0 0 24 24"><path d="M6 8h12l-1 12H7z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg></div>
              <h4>Marketplaces &amp; Commerce</h4>
              <p>Seamless transaction experiences and the infrastructure that supports them.</p>
            </div>
            <div className="industry-card">
              <div className="icon"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg></div>
              <h4>Nonprofits &amp; Impact</h4>
              <p>Mission-driven organizations scaling global impact through effective platforms.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="process">
        <div className="wrap">
          <div className="section-head reveal">
            <svg className="mini-pulse" viewBox="0 0 44 16"><path d="M0,8 L14,8 L17,2 L20,14 L23,8 L44,8"/></svg>
            <h2>How an engagement runs</h2>
            <p>A structured process — because at this scale, ambiguity is the most expensive thing in the room.</p>
          </div>
          <div className="process-grid reveal">
            <div className="process-step">
              <div className="process-num">01 / Understand</div>
              <div className="icon"><svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="6"/><path d="M15 15l5 5"/></svg></div>
              <h4 style={{ marginTop: "14px" }}>Discovery</h4>
              <p>We learn your business, users, and constraints. No assumptions, no templated scope.</p>
            </div>
            <div className="process-step">
              <div className="process-num">02 / Design</div>
              <div className="icon"><svg viewBox="0 0 24 24"><path d="M4 20l4-1 10-10-3-3L5 16z"/><path d="M14 6l3 3"/></svg></div>
              <h4 style={{ marginTop: "14px" }}>Architecture</h4>
              <p>We define the system before we write code — technical and product decisions made together.</p>
            </div>
            <div className="process-step">
              <div className="process-num">03 / Build</div>
              <div className="icon"><svg viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-3-3z"/></svg></div>
              <h4 style={{ marginTop: "14px" }}>Delivery</h4>
              <p>Iterative development with direct access to the engineers building your system.</p>
            </div>
            <div className="process-step">
              <div className="process-num">04 / Launch</div>
              <div className="icon"><svg viewBox="0 0 24 24"><path d="M12 2c3 3 4 7 3 12l-3 3-3-3c-1-5 0-9 3-12z"/><circle cx="12" cy="10" r="1.6"/><path d="M9 15l-3 5 5-3"/></svg></div>
              <h4 style={{ marginTop: "14px" }}>Ownership</h4>
              <p>We deploy, monitor, and support the system in production — we don't disappear at handoff.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <div className="section-head reveal">
            <svg className="mini-pulse" viewBox="0 0 44 16"><path d="M0,8 L14,8 L17,2 L20,14 L23,8 L44,8"/></svg>
            <h2>Why clients choose Taskive</h2>
            <p>Senior people lead the work, technical decisions stay tied to business outcomes, and communication stays direct.</p>
          </div>
          <div className="why-grid reveal" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "36px" }}>
            <div className="why-card">
              <span className="mono" style={{ color: "var(--pulse)", fontSize: "13px", display: "block", marginBottom: "14px" }}>01</span>
              <h4 style={{ fontSize: "20px", marginBottom: "10px" }}>Senior-led delivery</h4>
              <p style={{ color: "var(--slate)", fontSize: "15px" }}>The people shaping the solution are the same people accountable for the work.</p>
            </div>
            <div className="why-card">
              <span className="mono" style={{ color: "var(--pulse)", fontSize: "13px", display: "block", marginBottom: "14px" }}>02</span>
              <h4 style={{ fontSize: "20px", marginBottom: "10px" }}>Business-first decisions</h4>
              <p style={{ color: "var(--slate)", fontSize: "15px" }}>We make technical choices against operational outcomes, not feature lists.</p>
            </div>
            <div className="why-card">
              <span className="mono" style={{ color: "var(--pulse)", fontSize: "13px", display: "block", marginBottom: "14px" }}>03</span>
              <h4 style={{ fontSize: "20px", marginBottom: "10px" }}>Direct communication</h4>
              <p style={{ color: "var(--slate)", fontSize: "15px" }}>No jargon, no surprises, and no unnecessary ceremony.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="wrap">
          <div className="section-head reveal">
            <svg className="mini-pulse" viewBox="0 0 44 16"><path d="M0,8 L14,8 L17,2 L20,14 L23,8 L44,8"/></svg>
            <h2>Business outcomes</h2>
            <p>Representative client feedback from live engagements.</p>
          </div>
          <div className="testimonial-wrap reveal">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <section className="closing" id="start">
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot"></span>START AN ENGAGEMENT</div>
          <h2 className="reveal">Have a system that has to work?</h2>
          <p className="reveal">Tell us what problem you need solved. We’ll tell you honestly if Taskive is the right fit.</p>
          <a href="/start-engagement" className="btn btn-primary btn-lg reveal">Start an Engagement</a>
        </div>
      </section>
    </>
  );
}
