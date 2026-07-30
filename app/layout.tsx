import type { Metadata } from "next";
import Script from "next/script";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";
import "../public/style.css";

export const metadata: Metadata = {
  title: "Taskive Technologies — Software consulting and product engineering",
  description: "Software consulting and product engineering for business-critical systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <SiteHeader />
        
        {children}

        <footer>
          <div className="wrap">
            <div className="footer-grid">
              <div className="footer-col">
                <div className="logo" style={{ marginBottom: "14px" }}>
                  <img src="/img/taskivelogo.png" alt="Taskive" style={{ width: "140px", height: "auto", display: "block" }} />
                </div>
                <p style={{ color: "var(--slate)", fontSize: "14px", maxWidth: "260px" }}>A software consulting and product engineering partner for businesses with operationally complex systems.</p>
              </div>
              <div className="footer-col">
                <h5>Services</h5>
                <a href="/#services">Product Strategy</a>
                <a href="/#services">Custom Engineering</a>
                <a href="/#services">Modernization</a>
                <a href="/#services">AI &amp; Automation</a>
              </div>
              <div className="footer-col">
                <h5>Company</h5>
                <a href="/case-studies">Portfolio</a>
                <a href="/#process">How We Work</a>
                <a href="/#about">About</a>
              </div>
              <div className="footer-col">
                <h5>Get in touch</h5>
                <p style={{ color: "var(--slate)", fontSize: "14px", marginBottom: "12px" }}>
                  <strong style={{ color: "var(--ink)" }}>Lagos</strong><br />
                  44, Commercial Avenue, Sabo, Yaba, Lagos, Nigeria<br />
                  <a href="tel:+2348165097555">+234 816 509 7555</a>
                </p>
                <p style={{ color: "var(--slate)", fontSize: "14px", marginBottom: "12px" }}>
                  <strong style={{ color: "var(--ink)" }}>Winnipeg</strong><br />
                  167, Lombard Ave, Winnipeg, Canada<br />
                  <a href="tel:+13682107661">+1 368 210 7661</a>
                </p>
                <a href="mailto:info@taskivetech.tech">info@taskivetech.tech</a>
                <div style={{ marginTop: "12px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <a href="#" aria-label="LinkedIn">LinkedIn</a>
                  <a href="#" aria-label="Instagram">Instagram</a>
                  <a href="#" aria-label="Twitter">Twitter</a>
                  <a href="#" aria-label="Facebook">Facebook</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© 2026 Taskive Technologies. All rights reserved.</span>
              <span>Homepage prototype — Rebrand v2</span>
            </div>
          </div>
        </footer>
        <Script src="/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
