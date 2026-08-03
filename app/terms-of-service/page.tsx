import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Taskive Technologies',
  description: 'Terms of Service for Taskive Technologies.',
};

export default function TermsOfServicePage() {
  return (
    <main className="tsk">
      <div className="breadcrumb">
        <div className="wrap">
          <a href="/">Home</a><span className="sep">/</span><span className="current">Terms of Service</span>
        </div>
      </div>

      <section style={{ paddingBottom: '20px' }}>
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot"></span>LEGAL</div>
          <h1 className="reveal" style={{ fontSize: 'clamp(32px,4.6vw,50px)', margin: '16px 0 14px' }}>Terms of Service</h1>
          <p className="reveal" style={{ color: 'var(--slate)', fontSize: '16px', maxWidth: '640px' }}>
            Last updated: <strong style={{ color: 'var(--ink)' }}>August 3, 2026</strong> · Effective date: <strong style={{ color: 'var(--ink)' }}>August 3, 2026</strong>
          </p>
        </div>
      </section>

      <section style={{ paddingTop: '20px' }}>
        <div className="wrap cs-layout">
          <div className="cs-toc">
            <a href="#acceptance" className="active">Acceptance of Terms</a>
            <a href="#description">Description of Services</a>
            <a href="#eligibility">Eligibility &amp; Use</a>
            <a href="#ip">Intellectual Property</a>
            <a href="#engagements">Client Engagements</a>
            <a href="#confidentiality">Confidentiality</a>
            <a href="#submissions">Forms &amp; Submissions</a>
            <a href="#acceptable-use">Acceptable Use</a>
            <a href="#disclaimers">Disclaimers</a>
            <a href="#liability">Limitation of Liability</a>
            <a href="#indemnification">Indemnification</a>
            <a href="#third-party">Third-Party Links</a>
            <a href="#governing-law">Governing Law</a>
            <a href="#termination">Termination</a>
            <a href="#changes">Changes to These Terms</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="cs-body reveal">
            <h3 id="acceptance">1. Acceptance of Terms</h3>
            <p>These Terms of Service ("Terms") govern your access to and use of taskivetech.tech (the "Site") and any related content made available by Taskive Technologies ("Taskive," "we," "us," or "our"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, do not access or use the Site.</p>
            <p>These Terms apply to your use of the Site itself. They do <strong>not</strong> constitute, replace, or override any separate signed statement of work, master services agreement, or other contract entered into between Taskive and a client with respect to actual consulting, engineering, or outsourced team services (each, a "Services Agreement"). Where a Services Agreement exists, its terms govern the delivery of those Services, and these Terms apply only to your use of the Site.</p>

            <h3 id="description">2. Description of Services</h3>
            <p>The Site provides information about Taskive's software consulting, custom engineering, platform modernization, AI and automation, enterprise integration, technical advisory, and outsourced product development team services, along with case studies of past engagements and a means to submit an inquiry through our "Start an Engagement" and "Build an Outsourced Team" forms.</p>
            <p>Submitting a form through the Site is an inquiry only. It does not create a client relationship, a Services Agreement, or any obligation on the part of Taskive to perform any work, and does not create any obligation on your part to engage Taskive, until a separate Services Agreement is signed by both parties.</p>

            <h3 id="eligibility">3. Eligibility &amp; Use of the Site</h3>
            <p>The Site is intended for business use by individuals acting on behalf of a company or organization evaluating or engaging Taskive's Services. You represent that you are at least 18 years old and have the authority to submit inquiries on behalf of the company you identify in any form submission.</p>

            <h3 id="ip">4. Intellectual Property</h3>
            <p>Unless otherwise indicated, the Site and all content on it — including text, graphics, logos, the Taskive name and marks, case study descriptions, design elements, and underlying code — are the property of Taskive Technologies or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may view and print content from the Site for your own personal or internal business evaluation of our Services, but you may not reproduce, distribute, modify, or create derivative works from any part of the Site without our prior written consent.</p>
            <p>Case studies published on the Site describe work performed for named clients. Any client names, logos, or product names referenced remain the property of their respective owners and are used with permission or in a purely descriptive, factual capacity.</p>
            <p>Nothing in these Terms transfers ownership of any intellectual property created for a client under a Services Agreement — ownership of deliverables produced during an engagement is governed exclusively by that Services Agreement.</p>

            <h3 id="engagements">5. Client Engagements &amp; Separate Agreements</h3>
            <p>Any actual engagement for consulting, engineering, modernization, AI/automation, integration, advisory, or outsourced product team services will be governed by a separate, mutually signed Services Agreement setting out scope, fees, timeline, deliverables, ownership of work product, warranties, and liability specific to that engagement. In the event of any conflict between these Terms and a signed Services Agreement, the Services Agreement controls with respect to the Services it covers.</p>

            <h3 id="confidentiality">6. Confidentiality</h3>
            <p>We regularly work under non-disclosure agreements with prospective and current clients, including for engagements described on the Site only in general or anonymized terms (such as our confidential, in-development case studies). Submitting information through our forms is not by itself a substitute for a signed non-disclosure or confidentiality agreement; if you require a signed NDA before sharing sensitive information with us, please say so in your submission or contact us directly before sharing such information.</p>

            <h3 id="submissions">7. Forms &amp; Submissions</h3>
            <p>When you submit our "Start an Engagement" or "Build an Outsourced Team" forms, you agree to provide accurate and truthful information. You retain ownership of any content you submit to us, but you grant Taskive a limited license to use the information you provide for the purpose of evaluating, responding to, and following up on your inquiry, consistent with our <a href="/privacy-policy" style={{ color: 'var(--signal)', fontWeight: 600 }}>Privacy Policy</a>.</p>
            <p>We reserve the right, but have no obligation, to decline to respond to any submission, including where we determine an inquiry is not a fit for our Services, is incomplete, or appears fraudulent or abusive.</p>

            <h3 id="acceptable-use">8. Acceptable Use</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Site for any unlawful purpose or in violation of these Terms;</li>
              <li>Submit false, misleading, or fraudulent information through any form on the Site;</li>
              <li>Attempt to gain unauthorized access to the Site, its underlying infrastructure, or any related systems;</li>
              <li>Interfere with or disrupt the operation of the Site, including through the introduction of malware or excessive automated requests;</li>
              <li>Scrape, harvest, or otherwise collect information from the Site through automated means without our prior written consent; or</li>
              <li>Use the Site to infringe the intellectual property or other rights of any third party.</li>
            </ul>

            <h3 id="disclaimers">9. Disclaimers</h3>
            <p>The Site and all content on it are provided "as is" and "as available," without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, and accuracy. We do not warrant that the Site will be uninterrupted, secure, or error-free, or that any information on the Site (including statistics, case study outcomes, or timelines described) will remain accurate or current at all times.</p>
            <p>Case studies and outcomes described on the Site reflect specific engagements and specific clients' results; they are not a guarantee of similar results for any other engagement.</p>

            <h3 id="liability">10. Limitation of Liability</h3>
            <p>To the fullest extent permitted by applicable law, Taskive Technologies and its officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or business opportunity, arising out of or in connection with your use of the Site, even if advised of the possibility of such damages.</p>
            <p>Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.</p>

            <h3 id="indemnification">11. Indemnification</h3>
            <p>You agree to indemnify, defend, and hold harmless Taskive Technologies and its officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your misuse of the Site, your violation of these Terms, or your violation of any rights of a third party.</p>

            <h3 id="third-party">12. Third-Party Links</h3>
            <p>The Site may link to third-party websites, including live products built for our clients. We do not control and are not responsible for the content, accuracy, or practices of any linked third-party site. Inclusion of a link does not imply endorsement.</p>

            <h3 id="governing-law">13. Governing Law &amp; Dispute Resolution</h3>
            <p>These Terms are governed by the laws of <strong>Nigeria</strong>, without regard to its conflict of laws principles. Any dispute arising out of or relating to these Terms or your use of the Site will be subject to the exclusive jurisdiction of the courts located in <strong>Nigeria</strong>, unless otherwise required by applicable law.</p>

            <h3 id="termination">14. Termination</h3>
            <p>We may suspend or restrict your access to the Site at any time, without notice, for conduct that we believe violates these Terms or is otherwise harmful to other users, us, or third parties, or for any other reason at our discretion. Provisions of these Terms that by their nature should survive termination (including intellectual property, disclaimers, limitation of liability, and indemnification) will survive.</p>

            <h3 id="changes">15. Changes to These Terms</h3>
            <p>We may revise these Terms from time to time. The updated Terms will be posted on this page with a revised "Last updated" date, and your continued use of the Site after such changes constitutes acceptance of the revised Terms. Material changes will be communicated through reasonable means, such as a notice on the Site.</p>

            <h3 id="contact">16. Contact Us</h3>
            <p>Questions about these Terms can be directed to:</p>
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
