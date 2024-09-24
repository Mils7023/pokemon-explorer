'use client';

import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="container text-center py-5">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-4">Oops! Page Not Found</h2>
      <p className="lead">
        We couldn't find the page you were looking for.
      </p>
      <button className="btn btn-primary" onClick={() => router.push('/')}>
        Go Back Home
      </button>
    </div>
  );
}
