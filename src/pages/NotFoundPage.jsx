import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found · Blue Spice Holidays";
  }, []);

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="font-display text-6xl font-bold text-brand-accent">404</span>
        <h1 className="serif-font text-2xl font-bold text-brand-ink mt-4">Page Not Found</h1>
        <p className="mt-3 text-sm text-brand-muted">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex bg-brand-ink text-white font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-premium hover:bg-brand-accent hover:text-brand-ink transition-colors duration-300 shadow-md"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
