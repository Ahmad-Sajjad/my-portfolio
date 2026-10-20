import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main id="main" className="notfound">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1 className="notfound__title">That page isn&rsquo;t here.</h1>
        <p className="notfound__body">
          The link may have moved or never existed. Here&rsquo;s where to head
          next.
        </p>
        <div className="notfound__cta">
          <Link href="/" className="btn-primary">
            Home
            <span aria-hidden>→</span>
          </Link>
          <Link href="/work" className="btn-ghost">
            See the work
          </Link>
          <Link href="/contact" className="btn-ghost">
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
