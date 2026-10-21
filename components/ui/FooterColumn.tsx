import type { CSSProperties } from "react";

interface FooterColumnProps {
  title: string;
  delay: string;
  links: string[];
}

/** A footer link column (collapses into an accordion on mobile via useFooter). */
export default function FooterColumn({ title, delay, links }: FooterColumnProps) {
  return (
    <nav className="col in" style={{ animationDelay: delay } as CSSProperties} aria-label={title}>
      <h3>
        <button type="button" aria-expanded="false">
          {title}
          <svg viewBox="0 0 24 24">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </h3>
      <ul>
        <div>
          {links.map((l) => (
            <li key={l}>
              <a href="#">{l}</a>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}
