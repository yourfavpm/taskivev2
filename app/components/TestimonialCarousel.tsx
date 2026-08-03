'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    quote: "We came to Taskive with an idea and a deadline that honestly felt impossible. What stood out wasn't just the speed — it was that they actually sat with us, challenged our thinking, and helped us shape a better product than the one we originally asked for. Skeduley launched on time, and it's held up under real production load ever since.",
    who: "Daniel",
    role: "Co-founder, Skeduley",
    outcome: "Full platform — concept to production"
  },
  {
    quote: "We didn't need a contractor to execute a spec. We needed a product team that could think alongside us. Taskive put together a dedicated team that's been embedded in our roadmap for over a year now. The consistency, the quality, the direct communication — it's exactly what a scaling company needs without the overhead of building that in-house.",
    who: "Kemuko Team",
    role: "Kemuko",
    outcome: "Outsourced product team — 12+ months"
  },
  {
    quote: "Our platform had to serve thousands of users across multiple touchpoints without breaking. Taskive built it to actually perform at that scale — not just function in a demo. The multi-platform experience is seamless, and our clients notice it. We still get compliments on how the product feels.",
    who: "Opsly HR",
    role: "Opsly HR Platform",
    outcome: "Enterprise multi-platform — live in production"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  // Autoscroll every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const t = testimonials[currentIndex];

  return (
    <div className="testimonial">
      {testimonials.map((item, index) => (
        <div key={index} className={`t-slide ${index === currentIndex ? 'active' : ''}`}>
          <p className="quote">&ldquo;{item.quote}&rdquo;</p>
          <div className="who">
            <strong>{item.who}</strong>
            <span style={{ color: 'var(--slate-soft)', margin: '0 8px' }}>·</span>
            <span>{item.role}</span>
          </div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '12px',
            background: 'var(--signal-dim)',
            color: 'var(--signal)',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            padding: '4px 10px',
            borderRadius: '3px',
          }}>
            <span style={{ color: 'var(--signal)' }}>✓</span>
            {item.outcome}
          </div>
        </div>
      ))}
      <div className="t-controls">
        <div className="t-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="t-arrows">
          <button className="t-prev" onClick={prevSlide} aria-label="Previous testimonial">←</button>
          <button className="t-next" onClick={nextSlide} aria-label="Next testimonial">→</button>
        </div>
      </div>
    </div>
  );
}
