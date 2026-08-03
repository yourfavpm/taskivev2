import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy — Taskive Technologies',
  description: 'Cookie Policy for Taskive Technologies.',
};

export default function CookiePolicyPage() {
  return (
    <main className="tsk">
      <div className="breadcrumb">
        <div className="wrap">
          <a href="/">Home</a><span className="sep">/</span><span className="current">Cookie Policy</span>
        </div>
      </div>

      <section style={{ paddingBottom: '20px' }}>
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot"></span>LEGAL</div>
          <h1 className="reveal" style={{ fontSize: 'clamp(32px,4.6vw,50px)', margin: '16px 0 14px' }}>Cookie Policy</h1>
          <p className="reveal" style={{ color: 'var(--slate)', fontSize: '16px', maxWidth: '640px' }}>
            Last updated: <strong style={{ color: 'var(--ink)' }}>August 3, 2026</strong> · Effective date: <strong style={{ color: 'var(--ink)' }}>August 3, 2026</strong>
          </p>
        </div>
      </section>

      <section style={{ paddingTop: '20px' }}>
        <div className="wrap cs-layout">
          <div className="cs-toc">
            <a href="#what-are-cookies" className="active">What Are Cookies</a>
            <a href="#how-we-use">How We Use Cookies</a>
            <a href="#categories">Categories We Use</a>
            <a href="#third-party-cookies">Third-Party Cookies</a>
            <a href="#managing">Managing Preferences</a>
            <a href="#changes">Changes to This Policy</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="cs-body reveal">
            <h3 id="what-are-cookies">1. What Are Cookies</h3>
            <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites function properly, to remember your preferences, and to provide information to the site owner about how the site is used. This Cookie Policy explains what cookies and similar technologies (such as pixels, tags, and local storage) Taskive Technologies uses on taskivetech.tech (the "Site"), and how you can control them.</p>
            <p>This Cookie Policy forms part of, and should be read alongside, our <a href="/privacy-policy" style={{ color: 'var(--signal)', fontWeight: 600 }}>Privacy Policy</a>.</p>

            <h3 id="how-we-use">2. How We Use Cookies</h3>
            <p>We use cookies and similar technologies for the following general purposes:</p>
            <ul>
              <li><strong>To operate the Site.</strong> Certain cookies are necessary for core site functionality, such as remembering your progress through the "Start an Engagement" or "Build an Outsourced Team" forms, and maintaining basic security.</li>
              <li><strong>To understand usage.</strong> Analytics cookies help us understand how visitors find and use the Site, which pages and case studies are most viewed, and where visitors drop off, so we can improve the Site over time.</li>
              <li><strong>To remember preferences.</strong> Functionality cookies remember choices you've made on the Site (such as a cookie consent choice) so you are not asked again on every visit.</li>
            </ul>
            <p>We do not currently use cookies for third-party advertising or ad retargeting purposes. If this changes, this Policy will be updated accordingly and, where required by law, we will request your consent before doing so.</p>

            <h3 id="categories">3. Categories of Cookies We Use</h3>
            <p>The table below describes the categories of cookies used on the Site. Specific cookie names will depend on the exact analytics and hosting tools in use at deployment — replace the illustrative examples below with the actual cookies set once those tools are finalized.</p>

            <table className="cookie-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Purpose</th>
                  <th>Example</th>
                  <th>Duration</th>
                  <th>Consent required?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Strictly Necessary</td>
                  <td>Required for the Site to function — e.g. security, load balancing, remembering form progress within a session.</td>
                  <td>[e.g. session_id]</td>
                  <td>Session</td>
                  <td>No — essential to Site operation</td>
                </tr>
                <tr>
                  <td>Functionality</td>
                  <td>Remembers choices you've made, such as your cookie consent preference, so you aren't asked repeatedly.</td>
                  <td>[e.g. cookie_consent]</td>
                  <td>Up to 12 months</td>
                  <td>No (records a consent choice itself)</td>
                </tr>
                <tr>
                  <td>Analytics / Performance</td>
                  <td>Helps us understand aggregate visitor behavior — pages viewed, time on page, referral source — to improve the Site.</td>
                  <td>[e.g. _ga, _ga_*, if using Google Analytics]</td>
                  <td>Up to 24 months</td>
                  <td>Yes, in the EEA/UK and other jurisdictions requiring opt-in consent</td>
                </tr>
                <tr>
                  <td>Marketing / Advertising</td>
                  <td>Not currently used on the Site. Reserved for future use if the Site adopts retargeting or ad-tracking tools.</td>
                  <td>Not currently applicable</td>
                  <td>—</td>
                  <td>Yes, where applicable</td>
                </tr>
              </tbody>
            </table>

            <h3 id="third-party-cookies">4. Third-Party Cookies</h3>
            <p>Some cookies on the Site may be set by third-party service providers we use to operate and improve the Site — for example, an analytics provider or a hosting/CDN provider. These third parties may use cookies in accordance with their own privacy and cookie policies, which we encourage you to review.</p>

            <h3 id="managing">5. Managing Your Cookie Preferences</h3>
            <p>You have several ways to control or limit how cookies are used on your device:</p>
            <ul>
              <li><strong>Cookie consent tool.</strong> You can update your preferences at any time via the 'Cookie Preferences' link in the site footer.</li>
              <li><strong>Browser settings.</strong> Most browsers allow you to refuse or delete cookies through their settings. Refer to your browser's help documentation for instructions — settings are typically found under "Privacy," "Security," or "Cookies":
                <ul>
                  <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
                  <li>Safari: Preferences → Privacy → Manage Website Data</li>
                  <li>Firefox: Settings → Privacy &amp; Security → Cookies and Site Data</li>
                  <li>Edge: Settings → Cookies and site permissions</li>
                </ul>
              </li>
              <li><strong>Analytics opt-outs.</strong> Where we use Google Analytics, you may install the <a href="https://tools.google.com/dlpage/gaoptout" style={{ color: 'var(--signal)', fontWeight: 600 }} target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
            </ul>
            <p>Please note that blocking or deleting certain cookies, particularly strictly necessary cookies, may affect the functionality of the Site, including your ability to complete our forms.</p>

            <h3 id="changes">6. Changes to This Policy</h3>
            <p>We may update this Cookie Policy from time to time to reflect changes in the cookies and technologies we use, or for legal or regulatory reasons. We will post the updated Policy on this page with a revised "Last updated" date.</p>

            <h3 id="contact">7. Contact Us</h3>
            <p>Questions about this Cookie Policy can be directed to:</p>
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
