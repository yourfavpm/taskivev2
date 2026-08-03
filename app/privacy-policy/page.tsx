import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Taskive Technologies',
  description: 'Privacy Policy for Taskive Technologies.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="tsk">
      <div className="breadcrumb">
        <div className="wrap">
          <a href="/">Home</a><span className="sep">/</span><span className="current">Privacy Policy</span>
        </div>
      </div>

      <section style={{ paddingBottom: '20px' }}>
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot"></span>LEGAL</div>
          <h1 className="reveal" style={{ fontSize: 'clamp(32px,4.6vw,50px)', margin: '16px 0 14px' }}>Privacy Policy</h1>
          <p className="reveal" style={{ color: 'var(--slate)', fontSize: '16px', maxWidth: '640px' }}>
            Last updated: <strong style={{ color: 'var(--ink)' }}>August 3, 2026</strong> · Effective date: <strong style={{ color: 'var(--ink)' }}>August 3, 2026</strong>
          </p>
        </div>
      </section>

      <section style={{ paddingTop: '20px' }}>
        <div className="wrap cs-layout">
          <div className="cs-toc">
            <a href="#overview" className="active">Overview</a>
            <a href="#info-we-collect">Information We Collect</a>
            <a href="#how-we-use">How We Use It</a>
            <a href="#legal-basis">Legal Basis</a>
            <a href="#cookies">Cookies &amp; Tracking</a>
            <a href="#sharing">How We Share It</a>
            <a href="#retention">Data Retention</a>
            <a href="#security">Data Security</a>
            <a href="#your-rights">Your Rights</a>
            <a href="#transfers">International Transfers</a>
            <a href="#children">Children's Privacy</a>
            <a href="#third-party-links">Third-Party Links</a>
            <a href="#changes">Changes to This Policy</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="cs-body reveal">
            <h3 id="overview">1. Overview</h3>
            <p>Taskive Technologies ("Taskive," "we," "us," or "our") provides software consulting, custom engineering, and outsourced product development team services (the "Services"). This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit taskivetech.tech (the "Site"), submit a form, or otherwise interact with us.</p>
            <p>This Policy applies to visitors, prospective clients, and clients of the Site. It does not apply to information we process on behalf of a client as part of a signed engagement (for example, data contained within a software system we build for a client) — that processing is governed by the separate services agreement and any data processing addendum entered into with that client.</p>
            <p>By using the Site, you agree to the collection and use of information in accordance with this Policy. If you do not agree with this Policy, please do not use the Site.</p>

            <h3 id="info-we-collect">2. Information We Collect</h3>
            <p>We collect information in the following ways:</p>
            <ul>
              <li><strong>Information you provide directly.</strong> When you submit our "Start an Engagement" form, "Build an Outsourced Team" form, or otherwise contact us (including by email), we collect information such as your full name, work email address, company name, company size, project type, timeline, budget range, requested roles, team size, engagement length, and any project details, documents, or other content you choose to share with us.</li>
              <li><strong>Information collected automatically.</strong> When you visit the Site, we and our service providers may automatically collect certain information about your device and usage, including your IP address, browser type and version, device type, operating system, referring/exit pages, pages viewed, time spent on pages, and general location data (such as country or city, derived from IP address). This information is collected primarily through cookies and similar tracking technologies — see our <a href="/cookie-policy" style={{ color: 'var(--signal)', fontWeight: 600 }}>Cookie Policy</a> for full detail.</li>
              <li><strong>Information from third parties.</strong> We may receive limited information about you from third-party services you use to contact us (for example, if you reach us via a scheduling tool, email provider, or a connected messaging platform), consistent with that third party's own privacy practices.</li>
            </ul>
            <p>We do not knowingly collect sensitive categories of personal information (such as health data, financial account credentials, or government identification numbers) through the Site, and we ask that you do not submit such information to us through our forms.</p>

            <h3 id="how-we-use">3. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to and evaluate engagement requests and outsourced team requests submitted through the Site;</li>
              <li>Communicate with you, including sending confirmation emails after a form submission and following up regarding a potential engagement;</li>
              <li>Operate, maintain, and improve the Site, including understanding how visitors use it;</li>
              <li>Detect, investigate, and prevent fraudulent, unauthorized, or illegal activity;</li>
              <li>Comply with applicable legal obligations; and</li>
              <li>For any other purpose disclosed to you at the time the information is collected, or with your consent.</li>
            </ul>
            <p>We do not sell your personal information, and we do not use the information submitted through our engagement or outsourced-team forms for unrelated marketing purposes without your consent.</p>

            <h3 id="legal-basis">4. Legal Basis for Processing (EEA/UK Visitors)</h3>
            <p>If you are located in the European Economic Area or the United Kingdom, our legal basis for processing your personal information depends on the context in which it was collected:</p>
            <ul>
              <li><strong>Contractual necessity</strong> — where processing is necessary to respond to your request for a proposal or to take steps prior to entering into an agreement with you;</li>
              <li><strong>Legitimate interests</strong> — where processing is necessary for our legitimate business interests, such as operating and securing the Site, provided those interests are not overridden by your data protection rights;</li>
              <li><strong>Consent</strong> — where you have given clear consent for us to process your information for a specific purpose, such as certain non-essential cookies; and</li>
              <li><strong>Legal obligation</strong> — where processing is necessary for us to comply with the law.</li>
            </ul>

            <h3 id="cookies">5. Cookies &amp; Tracking Technologies</h3>
            <p>The Site uses cookies and similar technologies to operate correctly, understand usage, and (where applicable) support analytics. Full detail on the categories of cookies we use, their purposes, and how to manage your preferences is available in our <a href="/cookie-policy" style={{ color: 'var(--signal)', fontWeight: 600 }}>Cookie Policy</a>, which forms part of this Privacy Policy by reference.</p>

            <h3 id="sharing">6. How We Share Your Information</h3>
            <p>We do not sell your personal information. We may share information with:</p>
            <ul>
              <li><strong>Service providers.</strong> Third parties that perform services on our behalf, such as email delivery (for sending confirmation and follow-up emails), hosting and infrastructure providers, analytics providers, and scheduling tools — bound by contractual obligations to protect your information and use it only for the purposes we specify.</li>
              <li><strong>Professional advisors.</strong> Lawyers, accountants, and other professional advisors where necessary in the ordinary course of operating our business.</li>
              <li><strong>Business transfers.</strong> In connection with a merger, acquisition, financing, or sale of all or a portion of our business or assets, in which case information may be transferred as part of that transaction.</li>
              <li><strong>Legal requirements.</strong> Where we believe disclosure is necessary to comply with a legal obligation, protect our rights or property, or protect the safety of any person.</li>
            </ul>

            <h3 id="retention">7. Data Retention</h3>
            <p>We retain personal information submitted through our forms for as long as necessary to evaluate and respond to your request, to pursue a potential or actual engagement with you, and thereafter for a reasonable period to comply with our legal obligations, resolve disputes, and enforce our agreements. If your engagement or outsourced-team request does not proceed, we will retain your submission for <strong>24 months</strong> before deleting or anonymizing it, unless you request earlier deletion in accordance with Section 9 below.</p>

            <h3 id="security">8. Data Security</h3>
            <p>We implement reasonable technical and organizational measures designed to protect personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security. You are responsible for keeping any account credentials or communication channels you use to contact us secure.</p>

            <h3 id="your-rights">9. Your Privacy Rights</h3>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access</strong> — the right to request a copy of the personal information we hold about you;</li>
              <li><strong>Correction</strong> — the right to request that we correct inaccurate or incomplete information;</li>
              <li><strong>Deletion</strong> — the right to request that we delete your personal information, subject to certain exceptions;</li>
              <li><strong>Restriction &amp; objection</strong> — the right to request that we restrict or stop certain processing of your information;</li>
              <li><strong>Portability</strong> — the right to request a copy of your information in a portable format;</li>
              <li><strong>Withdrawal of consent</strong> — where processing is based on consent, the right to withdraw that consent at any time; and</li>
              <li><strong>Non-discrimination</strong> — the right not to be discriminated against for exercising any of the above rights (relevant to California and certain other residents).</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:info@taskivetech.tech" style={{ color: 'var(--signal)', fontWeight: 600 }}>info@taskivetech.tech</a>. We will respond within the timeframe required by applicable law. We may need to verify your identity before fulfilling certain requests.</p>
            <p>If you are located in the EEA or UK, you also have the right to lodge a complaint with your local data protection supervisory authority. If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), consistent with the rights described above.</p>

            <h3 id="transfers">10. International Data Transfers</h3>
            <p>Taskive Technologies is headquartered in Lagos, Nigeria and has a branch in Winnipeg, Canada. If you are located outside of that country, your information may be transferred to, stored, and processed in a country with data protection laws that differ from those of your home jurisdiction. Where required, we rely on appropriate safeguards — such as Standard Contractual Clauses — to protect information transferred internationally.</p>

            <h3 id="children">11. Children's Privacy</h3>
            <p>The Site and Services are directed at businesses and are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can take appropriate action.</p>

            <h3 id="third-party-links">12. Third-Party Links</h3>
            <p>The Site may contain links to third-party websites, including the live products of our clients (for example, in our case studies) and services we do not control. This Policy does not apply to those third-party sites, and we encourage you to review the privacy policies of any third-party site you visit.</p>

            <h3 id="changes">13. Changes to This Policy</h3>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will post the updated Policy on this page with a revised "Last updated" date. Material changes will be communicated through reasonable means, such as a notice on the Site.</p>

            <h3 id="contact">14. Contact Us</h3>
            <p>If you have questions about this Privacy Policy or wish to exercise your privacy rights, contact us at:</p>
            <p style={{ color: 'var(--ink)', fontWeight: 600 }}>
              Taskive Technologies<br />
              <span style={{ fontWeight: 400, color: 'var(--slate)' }}>
                44, Commercial Avenue, Sabo, Yaba, Lagos, Nigeria<br />
                167, Lombard Ave, Winnipeg, Canada<br />
                Email: <a href="mailto:info@taskivetech.tech" style={{ color: 'var(--signal)', fontWeight: 600 }}>info@taskivetech.tech</a>
              </span>
            </p>


          </div>
        </div>
      </section>
    </main>
  );
}
