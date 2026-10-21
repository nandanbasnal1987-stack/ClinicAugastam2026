"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import { useJourney } from "@/hooks/useJourney";
import "@/styles/journey.css";

export default function JourneySection() {
  const ref = useRef<HTMLDivElement>(null);
  useJourney(ref);

  return (
    <div className="merged-section" id="section-4" ref={ref}>
      <div className="page">
        <header className="head">
          <span className="chip">
            One connected journey
          </span>
          <h1>
            From the first click to the final follow-up
          </h1>
          <p className="sub">
            Augastam brings the everyday clinic journey into one connected flow, so every team member can work from the same patient context.
          </p>
        </header>
        <div className="track" id="sec4-track">
          <svg className="path" viewBox="0 0 1416 340" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <clipPath id="sec4-cp">
                <rect id="sec4-reveal" x="0" y="-60" width="0" height="460" />
              </clipPath>
            </defs>
            <g clipPath="url(#sec4-cp)">
              <path d="M80 238 C130 180 190 120 240 105" />
              <path d="M322 102 C390 125 430 190 478 208" />
              <path d="M565 205 C620 190 640 135 672 108" />
              <path d="M752 86 C830 100 870 190 922 214" />
              <path d="M1002 210 C1050 190 1080 105 1125 80" />
              <path d="M1205 86 C1260 105 1310 170 1340 208" />
            </g>
          </svg>
          <div className="pt s end" data-x="68" style={{ "--x": "68", "--y": "255" } as CSSProperties}>
            <div className="start">
              START
            </div>
          </div>
          <div className="pt step" tabIndex={0} data-x="280" style={{ "--x": "280", "--y": "135" } as CSSProperties}>
            <div className="n">
              01
            </div>
            <div>
              <h3>
                Registration
              </h3>
              <p>
                Create and retrieve patient records quickly.
              </p>
            </div>
          </div>
          <div className="pt step" tabIndex={0} data-x="520" style={{ "--x": "520", "--y": "250" } as CSSProperties}>
            <div className="n">
              02
            </div>
            <div>
              <h3>
                Appointment
              </h3>
              <p>
                Schedule visits and keep the day organized.
              </p>
            </div>
          </div>
          <div className="pt step" tabIndex={0} data-x="711" style={{ "--x": "711", "--y": "130" } as CSSProperties}>
            <div className="n">
              03
            </div>
            <div>
              <h3>
                QMS
              </h3>
              <p>
                See who is waiting and who is next.
              </p>
            </div>
          </div>
          <div className="pt step" tabIndex={0} data-x="962" style={{ "--x": "962", "--y": "250" } as CSSProperties}>
            <div className="n">
              04
            </div>
            <div>
              <h3>
                EMR
              </h3>
              <p>
                Capture the clinical story in one patient record.
              </p>
            </div>
          </div>
          <div className="pt step" tabIndex={0} data-x="1164" style={{ "--x": "1164", "--y": "103" } as CSSProperties}>
            <div className="n">
              05
            </div>
            <div>
              <h3>
                Billing
              </h3>
              <p>
                Connect services, invoices and collections.
              </p>
            </div>
          </div>
          <div className="pt f end" data-x="1343" style={{ "--x": "1343", "--y": "210" } as CSSProperties}>
            <svg className="flag" viewBox="0 0 54 50" aria-label="Finish">
              <ellipse cx="22" cy="40" rx="24" ry="6" fill="#aab2bf" />
              <rect x="19" y="8" width="2" height="32" fill="#7a1010" />
              <path className="cloth" d="M21 8h22l-6 8 6 8H21Z" fill="#e0201f" />
            </svg>
          </div>
        </div>
        <button id="sec4-replay" type="button">
          Replay journey
        </button>
      </div>
      <button id="sec4-theme" type="button">
        Toggle theme
      </button>
    </div>
  );
}
