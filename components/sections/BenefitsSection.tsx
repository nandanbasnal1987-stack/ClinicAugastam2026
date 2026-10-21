"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import { useBenefitRings } from "@/hooks/useBenefitRings";
import "@/styles/benefits.css";

export default function BenefitsSection() {
  const ref = useRef<HTMLDivElement>(null);
  useBenefitRings(ref);

  return (
    <div className="merged-section" id="section-8" ref={ref}>
      <section>
        <span className="pill">
          WHY AUGASTAM
        </span>
        <h1>
          Better clinical outcomes, backed by smarter workflows.
        </h1>
        <p className="lead">
          Augastam Clinical brings consultations, documentation, and clinic operations together to help healthcare teams save time, improve coordination, and deliver more informed patient care.
        </p>
        <div className="rings">
          <div className="ring" tabIndex={0} data-v="27" style={{ "--glow": "#2fbf7a" } as CSSProperties}>
            <svg viewBox="0 0 120 120">
              <defs>
                <linearGradient id="sec8-g1" x1="0.3" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#5ff0a0" />
                  <stop offset="1" stopColor="#05503e" />
                </linearGradient>
              </defs>
              <circle className="t" cx="60" cy="60" r="56" transform="scale(1)" style={{ strokeWidth: "6.2" } as CSSProperties} />
              <circle className="p" cx="60" cy="60" r="56" pathLength="100" stroke="url(#sec8-g1)" style={{ strokeWidth: "6.2" } as CSSProperties} />
            </svg>
            <div className="in">
              <b>
                0%
              </b>
              <span>
                Faster Clinical Documentation
              </span>
            </div>
          </div>
          <div className="ring" tabIndex={0} data-v="40" style={{ "--glow": "#4a86e8" } as CSSProperties}>
            <svg viewBox="0 0 120 120">
              <defs>
                <linearGradient id="sec8-g2" x1="0.3" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#b3d0f0" />
                  <stop offset="1" stopColor="#4a86e8" />
                </linearGradient>
              </defs>
              <circle className="t" cx="60" cy="60" r="56" style={{ strokeWidth: "6.2" } as CSSProperties} />
              <circle className="p" cx="60" cy="60" r="56" pathLength="100" stroke="url(#sec8-g2)" style={{ strokeWidth: "6.2" } as CSSProperties} />
            </svg>
            <div className="in">
              <b>
                0%
              </b>
              <span>
                Connected patient journeys
              </span>
            </div>
          </div>
          <div className="ring" tabIndex={0} data-v="30" style={{ "--glow": "#2f9a7a" } as CSSProperties}>
            <svg viewBox="0 0 120 120">
              <defs>
                <linearGradient id="sec8-g3" x1="0.3" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#7fd3b5" />
                  <stop offset="1" stopColor="#075a45" />
                </linearGradient>
              </defs>
              <circle className="t" cx="60" cy="60" r="56" style={{ strokeWidth: "6.2" } as CSSProperties} />
              <circle className="p" cx="60" cy="60" r="56" pathLength="100" stroke="url(#sec8-g3)" style={{ strokeWidth: "6.2" } as CSSProperties} />
            </svg>
            <div className="in">
              <b>
                0%
              </b>
              <span>
                Improved operational visibility
              </span>
            </div>
          </div>
          <div className="ring" tabIndex={0} data-v="21" style={{ "--glow": "#1aa8d0" } as CSSProperties}>
            <svg viewBox="0 0 120 120">
              <defs>
                <linearGradient id="sec8-g4" x1="0.2" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#22d0e8" />
                  <stop offset="1" stopColor="#003a70" />
                </linearGradient>
              </defs>
              <circle className="t" cx="60" cy="60" r="56" style={{ strokeWidth: "6.2" } as CSSProperties} />
              <circle className="p" cx="60" cy="60" r="56" pathLength="100" stroke="url(#sec8-g4)" style={{ strokeWidth: "6.2" } as CSSProperties} />
            </svg>
            <div className="in">
              <b>
                0%
              </b>
              <span>
                More efficient clinic operations
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
