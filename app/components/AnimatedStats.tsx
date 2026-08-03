'use client';
import { useState, useEffect, useRef } from 'react';

function CountUp({ end, suffix = '', duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    let animationFrame: number;

    const update = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easeOut));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="stat-num">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <section className="proof tight reveal">
      <div className="wrap proof-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        <div>
          <CountUp end={30} suffix="+" />
          <div className="stat-label">Businesses served</div>
        </div>
        <div>
          <CountUp end={400000} suffix="+" />
          <div className="stat-label">Users served through platforms we've built</div>
        </div>
        <div>
          <CountUp end={10} suffix="+" />
          <div className="stat-label">Years building software</div>
        </div>
        <div>
          <CountUp end={85} suffix="%" />
          <div className="stat-label">Client retention / repeat engagements</div>
        </div>
        <div>
          <div className="stat-num" style={{ fontSize: 'clamp(22px, 2.8vw, 30px)' }}>Full-lifecycle</div>
          <div className="stat-label">Strategy → build → production ownership, not point solutions</div>
        </div>
      </div>
    </section>
  );
}
