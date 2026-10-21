"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { useHeroParallax } from "@/hooks/useHeroParallax";
import "@/styles/hero.css";

/** Hero banner with parallax background (Section 1, bottom part). */
export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  useHeroParallax(heroRef, [sceneRef, photoRef]);

  return (
    <div className="section-1">
      <section className="hero" id="sec1-hero" ref={heroRef}>
        <div className="scene" id="sec1-scene" ref={sceneRef}>
          <Image src="/Images/home-banner.jpg" alt="Augastam clinic banner" width={0} height={0} sizes="100vw" priority style={{ width: "100%", height: "auto" }} />
        </div>
        <div className="photo" id="sec1-photo" ref={photoRef}></div>
        <div className="shade"></div>
        <div className="copy">
          <h1 className="in" style={{ "--d": "1" } as CSSProperties}>
            AI-Native Clinical care designed around
            {" "}
            <em>
              every patient.
            </em>
          </h1>
          <p className="lead in" style={{ "--d": "2" } as CSSProperties}>
            Smarter, connected healthcare with Augastam Clinical — bringing consultations, clinical documentation, and AI-powered tools together to support better patient care at every stage.
          </p>
          <div className="btns in" style={{ "--d": "3" } as CSSProperties}>
            <button className="b1">
              Explore platform
            </button>
            {" "}
            <button className="b2">
              Get care
            </button>
          </div>
        </div>
        <div className="partners in" style={{ "--d": "4" } as CSSProperties}>
          <div>
            <svg viewBox="0 0 30 38">
              <circle cx="15" cy="15" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M8 20h14M15 6v14M10 11h10" stroke="currentColor" strokeWidth="2" />
            </svg>
            {" "}
            <span className="nha">
              national
              <br />
              health
              <br />
              authority
            </span>
          </div>
          <div>
            <svg viewBox="0 0 28 38">
              <path d="M14 2c8 10 10 16 6 24-2 5-8 7-11 2-4-6 2-12 5-26z" fill="currentColor" />
            </svg>
            {" "}
            <span className="hl7">
              HL7
              <sup style={{ fontSize: "9px" } as CSSProperties}>
                ®
              </sup>
              {" "}
              FHIR
              <sup style={{ fontSize: "9px" } as CSSProperties}>
                ®
              </sup>
            </span>
          </div>
          <div>
            <svg viewBox="0 0 64 64" style={{ height: "64px" } as CSSProperties}>
              <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="2 3" />
              <path d="M32 18c4 6 4 10 0 14-4-4-4-8 0-14zm-10 8c6 0 9 3 10 7-6 0-9-3-10-7zm20 0c-1 4-4 7-10 7 1-4 4-7 10-7zM24 36h16l-3 6H27z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
