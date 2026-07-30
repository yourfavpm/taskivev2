'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section style={{ padding: '120px 0' }}>
      <div className="wrap">
        <div className="eyebrow"><span className="dot"></span>ERROR</div>
        <h1 style={{ margin: '16px 0 12px', fontSize: 'clamp(32px, 4vw, 48px)' }}>
          Something went wrong.
        </h1>
        <p style={{ color: 'var(--slate)', maxWidth: '640px', marginBottom: '24px' }}>
          We hit an application error while loading this page.
        </p>
        <button className="btn btn-primary" onClick={reset}>
          Try again
        </button>
      </div>
    </section>
  );
}
