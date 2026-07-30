'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    quote: "\"Skeduley needed to feel as premium as the businesses using it to run their whole client experience. Taskive built it like it mattered.\"",
    who: "DRAFT — SKEDULEY ENGAGEMENT, PENDING CLIENT APPROVAL"
  },
  {
    quote: "\"We needed a talent platform that felt enterprise-grade from day one. Taskive delivered something we could put in front of serious clients immediately.\"",
    who: "DRAFT — OPSLY HR ENGAGEMENT, PENDING CLIENT APPROVAL"
  },
  {
    quote: "\"Coordinating a student portal across dozens of university partners and multiple countries is not simple. Taskive made the complexity invisible to our students.\"",
    who: "DRAFT — EDUPLAN360 ENGAGEMENT, PENDING CLIENT APPROVAL"
  },
  {
    quote: "\"They didn't just build what we asked for — they pushed back on scope that would have slowed our launch, and they were right to.\"",
    who: "DRAFT — KEMUKO ENGAGEMENT, PENDING CLIENT APPROVAL"
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

  // Autoscroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="testimonial">
      {testimonials.map((t, index) => (
        <div key={index} className={`t-slide ${index === currentIndex ? 'active' : ''}`}>
          <p className="quote">{t.quote}</p>
          <div className="who">{t.who}</div>
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
      <span className="placeholder-tag">4 draft quotes shown — replace with real, approved client testimonials before launch</span>
    </div>
  );
}
