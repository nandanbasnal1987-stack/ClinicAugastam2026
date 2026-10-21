"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import { usePrivacyLock } from "@/hooks/usePrivacyLock";
import "@/styles/privacy.css";

export default function PrivacySection() {
  const ref = useRef<HTMLDivElement>(null);
  usePrivacyLock(ref);

  return (
    <div className="merged-section" id="section-10" ref={ref}>
      <div className="wrap" id="sec10-wrap">
        <div className="canvas">
          <div className="copy">
            <h1>
              Manage your practice securely with built in layers of privacy & protection
            </h1>
          </div>
          <button className="try">
            Try For Free
            {" "}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h17M14 6l6 6-6 6" />
            </svg>
          </button>
          <div className="lockbox">
            <div className="lock" id="sec10-lock">
              <div className="glow"></div>
              <svg className="sh" id="sec10-sh" viewBox="0 0 360 200">
                <path d="M116 121A68 68 0 1 1 242 121" stroke="#fff" strokeWidth="44" />
                <path d="M116 121A68 68 0 1 1 242 121" stroke="var(--shackle)" strokeWidth="38" />
              </svg>
              <div className="pill" style={{ top: "153px", "--i": "0" } as CSSProperties}>
                <svg viewBox="0 0 24 24">
                  <path d="M3 18V6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v3" />
                  <path d="M3 18a1 1 0 0 0 1 1h7" />
                  <circle cx="17" cy="14" r="2" />
                  <path d="M13.500 20c.4-2 1.800-3 3.500-3s3.100 1 3.500 3" />
                </svg>
                Patient data that ONLY you own
              </div>
              <div className="pill" style={{ top: "210px", "--i": "1" } as CSSProperties}>
                <svg viewBox="0 0 24 24">
                  <circle cx="6" cy="12" r="2.500" />
                  <circle cx="18" cy="6" r="2.500" />
                  <circle cx="18" cy="18" r="2.500" />
                  <path d="m8.200 10.800 7.600-3.600M8.200 13.200l7.600 3.600" />
                </svg>
                Signed NDA barring data sharing
              </div>
              <div className="pill" style={{ top: "267px", "--i": "2" } as CSSProperties}>
                <svg viewBox="0 0 24 24">
                  <ellipse cx="12" cy="6" rx="8" ry="3" />
                  <path d="M4 6v6c0 1.700 3.600 3 8 3s8-1.300 8-3V6M4 12v6c0 1.700 3.600 3 8 3s8-1.300 8-3v-6" />
                </svg>
                FHIR complaint data storage
              </div>
              <div className="pill" style={{ top: "323px", "--i": "3" } as CSSProperties}>
                <svg viewBox="0 0 24 24">
                  <path d="M4 5h16v11H9l-5 4z" />
                  <path d="M8 9h8M8 12.500h5" />
                </svg>
                Control over messages to patients
              </div>
              <div className="pill" style={{ top: "380px", "--i": "4" } as CSSProperties}>
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.500l2.300 1.700 2.800-.1.900 2.700 2.300 1.600-.9 2.700.9 2.700-2.300 1.600-.9 2.700-2.800-.1L12 21.500l-2.300-1.700-2.800.1-.9-2.700-2.300-1.600.9-2.700-.9-2.700 2.300-1.600.9-2.700 2.800.1z" />
                  <path d="m8.500 12 2.500 2.500 4.500-5" />
                </svg>
                NHA Approved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
