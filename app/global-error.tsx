'use client';

import { useEffect } from 'react';

export default function GlobalError({
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
    <html lang="en">
      <body>
        <main>
          <section style={{ padding: '120px 0' }}>
            <div className="wrap">
              <div className="eyebrow"><span className="dot"></span>ERROR</div>
              <h1 style={{ margin: '16px 0 12px', fontSize: 'clamp(32px, 4vw, 48px)' }}>
                Taskive hit a render error.
              </h1>
              <p style={{ color: 'var(--slate)', maxWidth: '640px', marginBottom: '24px' }}>
                Please reload the page and try again.
              </p>
              <button className="btn btn-primary" onClick={reset}>
                Reload
              </button>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
