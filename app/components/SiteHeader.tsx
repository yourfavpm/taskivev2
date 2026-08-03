'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="site-header">
        <div className="utility-bar">
          <div className="wrap">
            <span>Software consulting and product engineering for business-critical systems</span>
            <a href="/case-studies">View our case studies →</a>
          </div>
        </div>
        <div className="wrap">
          <nav className="main-nav">
            <a href="/" className="logo">
              <img src="/img/taskivelogo.png" alt="Taskive" style={{ width: "140px", height: "auto", display: "block" }} />
            </a>
            <div className="nav-links desktop-only">
              <a href="/services" data-section="true">Services</a>
              <a href="/case-studies">Case studies</a>
              <a href="/#industries" data-section="true">Industries</a>
              <a href="/#process" data-section="true">How We Work</a>
              <a href="/#about" data-section="true">About</a>
            </div>
            <a href="/start-engagement" className="btn btn-primary nav-cta desktop-only">Start an Engagement</a>
            
            <button className="hamburger-btn mobile-only" onClick={() => setIsOpen(true)} aria-label="Open Menu">
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Modal */}
      <div className={`mobile-menu-modal ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <a href="/" className="logo" onClick={() => setIsOpen(false)}>
            <img src="/img/taskivelogo.png" alt="Taskive" style={{ width: "140px", height: "auto", display: "block" }} />
          </a>
          <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="mobile-menu-body">
          <a href="/services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="/case-studies" onClick={() => setIsOpen(false)}>Case studies</a>
          <a href="/#industries" onClick={() => setIsOpen(false)}>Industries</a>
          <a href="/#process" onClick={() => setIsOpen(false)}>How We Work</a>
          <a href="/#about" onClick={() => setIsOpen(false)}>About</a>
        </div>
        <div className="mobile-menu-footer">
          <a href="/start-engagement" className="btn btn-primary btn-lg btn-block" onClick={() => setIsOpen(false)}>Start an Engagement</a>
        </div>
      </div>
    </>
  );
}
