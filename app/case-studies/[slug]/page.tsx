import { notFound } from "next/navigation";

type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  color: string;
  industry: string;
  engagement: string;
  status: string;
  siteLabel: string;
  siteHref?: string;
  heroCards: Array<{
    tag: string;
    lines: string[];
    chip?: string;
    chipColor?: string;
    chipBg?: string;
    graph?: { bars: Array<{ height: string; color: string }> };
  }>;
  overview: string;
  problem: string;
  built: string[];
  stats: Array<{ value: string; label: string }>;
  stack: string[];
  prev: { label: string; href: string };
  next: { label: string; href: string };
};

const caseStudies: CaseStudy[] = [
  {
    slug: "skeduley",
    title: "Skeduley",
    eyebrow: "VERTICAL SAAS · LIVE IN PRODUCTION",
    subtitle: "A platform for service businesses to create a booking website in minutes and manage bookings, payments, scheduling, CRM, staff, and more from one place.",
    color: "#0E9F6E",
    industry: "Vertical SaaS",
    engagement: "Full-platform build",
    status: "Live in production",
    siteLabel: "skeduley.com ↗",
    siteHref: "https://www.skeduley.com",
    heroCards: [
      {
        tag: "BOOK A SLOT",
        lines: ["Brand-first booking website", "Launch in minutes"],
        chip: "Confirmed for 3:00 PM",
        chipColor: "#0E9F6E",
        chipBg: "#DCF3E9",
      },
      {
        tag: "OPERATIONS",
        lines: ["Bookings, payments, CRM", "Staff scheduling in one place"],
        graph: {
          bars: [
            { height: "40%", color: "#0E9F6E" },
            { height: "70%", color: "#0E9F6E" },
            { height: "55%", color: "#0E9F6E" },
            { height: "85%", color: "#0E9F6E" },
            { height: "60%", color: "#0E9F6E" },
          ],
        },
      },
    ],
    overview: "Service businesses needed more than a booking form. They needed a way to launch a branded booking website quickly, then run bookings, payments, scheduling, client records, and staff operations from a single platform.",
    problem: "Most tools solved only one part of the workflow. Owners had to stitch together booking links, calendars, payment tools, CRM software, and staff scheduling, which created friction for both the business and the customer.",
    built: [
      "A booking website builder that lets a service business launch a branded site in minutes, not weeks.",
      "A scheduling system that handles availability, time zones, rescheduling, and reminders without manual coordination.",
      "Integrated payments so bookings can be confirmed and paid for in one flow.",
      "CRM and staff tools so owners can manage clients, team members, and day-to-day operations in one dashboard.",
    ],
    stats: [
      { value: "Minutes", label: "Branded booking sites can be launched quickly" },
      { value: "One system", label: "Bookings, payments, CRM, and staff live in the same platform" },
      { value: "Live", label: "In production with service businesses using it day to day" },
    ],
    stack: ["Next.js", "TypeScript", "Payments API", "CRM workflows", "Staff scheduling", "PostgreSQL", "Real-time scheduling engine"],
    prev: { label: "Kongila", href: "/case-studies/kongila" },
    next: { label: "Opsly HR", href: "/case-studies/opsly-hr" },
  },
  {
    slug: "opsly-hr",
    title: "Opsly HR",
    eyebrow: "HR TECH · LIVE IN PRODUCTION",
    subtitle: "An enterprise talent-acquisition and outsourcing platform connecting scaling businesses with vetted product and operations professionals.",
    color: "#1F3FE0",
    industry: "HR Tech",
    engagement: "Platform build",
    status: "Live in production",
    siteLabel: "opslyhr.com ↗",
    siteHref: "https://www.opslyhr.com",
    heroCards: [
      {
        tag: "CANDIDATE MATCH",
        lines: ["Pre-vetted product talent", "Enterprise-ready pipeline"],
        chip: "Vetted · Product",
        chipColor: "var(--signal)",
        chipBg: "var(--signal-dim)",
      },
      {
        tag: "PIPELINE",
        lines: ["Match, review, engage", "Hiring at a faster pace"],
        graph: {
          bars: [
            { height: "50%", color: "#1F3FE0" },
            { height: "80%", color: "#1F3FE0" },
            { height: "35%", color: "#1F3FE0" },
            { height: "65%", color: "#1F3FE0" },
            { height: "90%", color: "#1F3FE0" },
          ],
        },
      },
    ],
    overview: "Scaling companies needed a faster, more reliable way to bring on vetted product and operations talent without building an internal recruiting function from scratch.",
    problem: "Traditional hiring and outsourcing pipelines for product and operations roles were slow, unreliable, and lacked any real vetting signal before a company got to the interview stage.",
    built: [
      "A talent-matching platform connecting companies directly with pre-vetted product and operations professionals.",
      "An outsourcing workflow layer so companies can engage talent on flexible terms, not just full-time hires.",
      "Structured vetting and profile data so hiring teams can evaluate fit fast, without redundant screening.",
      "An enterprise-ready front end that signals credibility to larger prospective clients from the first visit.",
    ],
    stats: [
      { value: "Live", label: "In active production use, connecting companies with vetted talent today" },
      { value: "Faster", label: "Pipeline from need to hire to a vetted, matched candidate" },
      { value: "Enterprise-ready", label: "Platform built to support scaling companies' outsourcing needs" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Applicant data pipeline", "Role-based access control"],
    prev: { label: "Skeduley", href: "/case-studies/skeduley" },
    next: { label: "EduPlan360", href: "/case-studies/eduplan360" },
  },
  {
    slug: "eduplan360",
    title: "EduPlan360",
    eyebrow: "EDTECH · LIVE IN PRODUCTION",
    subtitle: "A global study-abroad platform guiding international students from university selection through visa approval.",
    color: "#C99A2E",
    industry: "EdTech / Global Services",
    engagement: "Platform + student portal",
    status: "Live in production",
    siteLabel: "eduplan360.vercel.app ↗",
    siteHref: "https://eduplan360.vercel.app",
    heroCards: [
      {
        tag: "STUDENT PORTAL",
        lines: ["Document submission", "Application tracking"],
        chip: "Visa: approved",
        chipColor: "#9A7714",
        chipBg: "#F3E7C9",
      },
      {
        tag: "DESTINATIONS",
        lines: ["University partners", "Multi-region study support"],
        graph: {
          bars: [
            { height: "55%", color: "#C99A2E" },
            { height: "80%", color: "#C99A2E" },
            { height: "40%", color: "#C99A2E" },
            { height: "70%", color: "#C99A2E" },
            { height: "90%", color: "#C99A2E" },
          ],
        },
      },
    ],
    overview: "International students face one of the most fragmented journeys in any service category: course selection, school selection, document prep, and visa approval, often spread across unrelated tools and advisors.",
    problem: "Coordinating course selection, school applications, document verification, and visa support across dozens of destination countries and university partners is inherently complex.",
    built: [
      "A destinations and university-partner content system covering dozens of countries and institutions.",
      "A student portal for document submission, application tracking, and status updates in one place.",
      "A consultation and advisory booking flow connecting students directly with counsellors.",
      "An architecture built to operate across multiple regions and time zones reliably.",
    ],
    stats: [
      { value: "1,200+", label: "Students served through the platform" },
      { value: "95%", label: "Visa success rate on supported applications" },
      { value: "50+", label: "University partners represented on the platform" },
    ],
    stack: ["Next.js", "Vercel", "TypeScript", "Document management pipeline", "Multi-region content system"],
    prev: { label: "Opsly HR", href: "/case-studies/opsly-hr" },
    next: { label: "Kemuko", href: "/case-studies/kemuko" },
  },
  {
    slug: "kemuko",
    title: "Kemuko",
    eyebrow: "CONSUMER · EARLY ACCESS",
    subtitle: "A consumer waitlist product with early-access growth mechanics ahead of a full public launch.",
    color: "#D6497A",
    industry: "Consumer",
    engagement: "Pre-launch growth build",
    status: "Early access / waitlist",
    siteLabel: "kemuko.org ↗",
    siteHref: "https://www.kemuko.org",
    heroCards: [
      {
        tag: "WAITLIST",
        lines: ["Early-access incentives", "Capture interest before launch"],
        chip: "Early-bird reward unlocked",
        chipColor: "#B03A65",
        chipBg: "#FAE1EA",
      },
      {
        tag: "SIGN-UPS",
        lines: ["Reward-driven growth loop", "Launch momentum"],
        graph: {
          bars: [
            { height: "30%", color: "#D6497A" },
            { height: "55%", color: "#D6497A" },
            { height: "45%", color: "#D6497A" },
            { height: "75%", color: "#D6497A" },
            { height: "95%", color: "#D6497A" },
          ],
        },
      },
    ],
    overview: "Kemuko needed to build genuine demand and a founding community before the product itself was ready.",
    problem: "Launching cold, with no audience or signal of demand, is one of the highest-risk moments for a consumer product.",
    built: [
      "A waitlist site designed to convert visitors into signed-up early members quickly.",
      "Early-access growth mechanics: early-bird discounts, free courses, and rewards for joining ahead of launch.",
      "A lightweight, fast-loading experience built to handle a traffic spike from a single campaign or share.",
    ],
    stats: [
      { value: "Live", label: "Waitlist actively converting visitors ahead of full launch" },
      { value: "Pre-launch", label: "Momentum and community built before product release" },
      { value: "Reward-driven", label: "Early-member incentives designed into the growth loop" },
    ],
    stack: ["Next.js", "TypeScript", "Email & waitlist automation", "Lightweight CMS"],
    prev: { label: "EduPlan360", href: "/case-studies/eduplan360" },
    next: { label: "Kongila", href: "/case-studies/kongila" },
  },
  {
    slug: "kongila",
    title: "Kongila",
    eyebrow: "CONFIDENTIAL ENGAGEMENT · IN DEVELOPMENT",
    subtitle: "Currently in active build. Full details are under wraps until launch.",
    color: "#5B616E",
    industry: "Confidential",
    engagement: "In development",
    status: "Pre-launch",
    siteLabel: "Not yet public",
    heroCards: [
      {
        tag: "CONFIDENTIAL",
        lines: ["Details hidden under NDA", "Active build in progress"],
        chip: "Locked until launch",
        chipColor: "var(--slate)",
        chipBg: "var(--paper-dim)",
      },
    ],
    overview: "Kongila is a live engagement currently in active development. We're keeping the details confidential at the client's request until it's ready to be shown publicly.",
    problem: "The project is under NDA, so the public site needs to acknowledge the work honestly without exposing details prematurely.",
    built: [
      "A confidential-project format that still keeps the engagement visible on the site.",
      "A launch-ready placeholder structure that can be expanded into a full case study later.",
    ],
    stats: [
      { value: "Private", label: "Details remain under wraps until launch" },
      { value: "Active", label: "Currently in development" },
      { value: "Reusable", label: "Confidential-project format for future NDA work" },
    ],
    stack: ["NDA", "Private build", "Launch-ready placeholder"],
    prev: { label: "Kemuko", href: "/case-studies/kemuko" },
    next: { label: "Skeduley", href: "/case-studies/skeduley" },
  },
];

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((entry) => entry.slug === slug);
  if (!caseStudy) return { title: "Case Study" };
  return {
    title: `${caseStudy.title} — Case Study — Taskive Technologies`,
    description: caseStudy.subtitle,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((entry) => entry.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <section className="cs-hero">
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot" style={{ background: caseStudy.color }}></span>{caseStudy.eyebrow}</div>
          <h1 className="reveal" style={{ fontSize: "clamp(34px,5.4vw,58px)", margin: "16px 0 16px" }}>{caseStudy.title}</h1>
          <p className="reveal" style={{ color: "var(--slate)", fontSize: "18px", maxWidth: "680px", fontWeight: 500 }}>{caseStudy.subtitle}</p>

          <div className="cs-meta-row reveal">
            <div><div className="label">Industry</div><div className="val">{caseStudy.industry}</div></div>
            <div><div className="label">Engagement</div><div className="val">{caseStudy.engagement}</div></div>
            <div><div className="label">Status</div><div className="val">{caseStudy.status}</div></div>
            <div>
              <div className="label">Site</div>
              <div className="val" style={{ fontSize: "14px" }}>
                {caseStudy.siteHref ? <a href={caseStudy.siteHref} target="_blank" rel="noopener" style={{ color: "var(--signal)" }}>{caseStudy.siteLabel}</a> : <span style={{ color: "var(--slate-soft)" }}>{caseStudy.siteLabel}</span>}
              </div>
            </div>
          </div>

          <div className="cs-visual reveal" style={{ background: `linear-gradient(135deg,${caseStudy.color}10,${caseStudy.color}22)` }}>
            <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", maxWidth: "640px" }}>
                {caseStudy.heroCards.map((card) => (
                  <div key={card.tag} className="ui-card" style={{ width: "220px" }}>
                    <div className="top">
                      <span></span><span></span><span></span><span className="tag">{card.tag}</span>
                    </div>
                    {card.lines.map((line, idx) => (
                      <div key={idx} className={`bar ${idx === 0 ? "w80" : "w60"}`} style={{ background: card.chipBg || "var(--paper-dim)" }}></div>
                    ))}
                    {card.graph ? (
                      <div className="graph">
                        {card.graph.bars.map((bar, idx) => (
                          <i key={idx} style={{ height: bar.height, background: bar.color }}></i>
                        ))}
                      </div>
                    ) : null}
                    {card.chip ? <div className="chip" style={{ background: card.chipBg, color: card.chipColor }}>{card.chip}</div> : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "40px" }}>
        <div className="wrap cs-layout">
          <div className="cs-toc">
            <a href="#overview" className="active">Overview</a>
            <a href="#problem">The Problem</a>
            <a href="#built">What We Built</a>
            <a href="#outcome">Outcome</a>
            <a href="#stack">Tech Stack</a>
          </div>
          <div className="cs-body reveal">
            <h3 id="overview">Overview</h3>
            <p>{caseStudy.overview}</p>

            <h3 id="problem">The problem</h3>
            <p>{caseStudy.problem}</p>

            <h3 id="built">What we built</h3>
            <ul>
              {caseStudy.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 id="outcome">Outcome</h3>
            <div className="cs-stats">
              {caseStudy.stats.map((stat) => (
                <div key={stat.value}>
                  <div className="stat-num" style={{ fontSize: "26px" }}>{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <h3 id="stack">Tech stack</h3>
            <div className="tech-chips">
              {caseStudy.stack.map((item) => (
                <span key={item} className="tech-chip">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cs-nav reveal">
            <a href={caseStudy.prev.href}><div className="label">← Previous</div><div className="name">{caseStudy.prev.label}</div></a>
            <a href={caseStudy.next.href}><div className="label">Next →</div><div className="name">{caseStudy.next.label}</div></a>
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot"></span>START AN ENGAGEMENT</div>
          <h2 className="reveal">Have a system like this to build?</h2>
          <p className="reveal">Tell us what you’re building. We’ll tell you honestly if we’re the right team for it.</p>
          <a href="/start-engagement" className="btn btn-primary btn-lg reveal">Start an Engagement</a>
        </div>
      </section>
    </>
  );
}
