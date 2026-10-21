"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import { useAiAssist } from "@/hooks/useAiAssist";
import "@/styles/ai-assist.css";

export default function AiAssistSection() {
  const ref = useRef<HTMLDivElement>(null);
  useAiAssist(ref);

  return (
    <div className="merged-section" id="section-2" ref={ref}>
      <section className="sec">
        <div className="disc"></div>
        <div className="brandrow">
          <span className="brand">
            AUGASTAMdd
          </span>
          {" "}
          <span className="chip">
            <b>
              AI
            </b>
          </span>
        </div>
        
        <h1>
          Let technology handle the busywork. Keep the clinical focus human.
        </h1>
        <p className="trust">
          Trusted by 300+ Hospitals to improve outcomes across every stage
        </p>
        <div className="cards">
          <article className="card">
            <div className="art green">
              <div className="r1"></div>
              <div className="r2"></div>
              <div className="r3"></div>
            </div>
            <h3>
              Quick AI Summary
            </h3>
            <p>
              Highlight key clinical details and potential risks to help doctors understand patient cases faster and make informed decisions.
            </p>
          </article>
          <article className="card mid">
            <div className="stagewrap">
              <div className="ripple"></div>
              <div className="ripple b"></div>
              <div className="fill live" id="sec2-fill">
                <header>
                  Fill Section
                  {" "}
                  <button className="x" id="sec2-x" aria-label="Close">
                    ✕
                  </button>
                </header>
                <div className="row">
                  <div className="mic">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.900V22h2v-3.100A7 7 0 0 0 19 12z" />
                    </svg>
                  </div>
                  <span className="lst" id="sec2-lst">
                    Listening…
                  </span>
                  <span className="tm">
                    <i></i>
                    {" "}
                    <span id="sec2-tm">
                      00:03
                    </span>
                  </span>
                  <button className="btn" id="sec2-btn">
                    <s></s>
                    {" "}
                    <span id="sec2-bt">
                      Stop & Fill
                    </span>
                  </button>
                </div>
                <div className="hint" id="sec2-hint"></div>
              </div>
               <h3>
              Speech-to-text
            </h3>
             <p className="desc">
          Convert doctor-Speech into accurate text in real time, reducing manual documentation during consultations. Capture clinical notes faster and help doctors focus more on patient care.
        </p>
            </div>
           
          </article>
          <article className="card">
            <div className="art yellow">
              <div className="y1"></div>
              <div className="y2"></div>
            </div>
            <h3>
              Visit Summary - powered by AI
            </h3>
            <p>
          Highlight key clinical details and potential risks to help doctors understand patient cases faster and make informed decisions.
        </p>
          </article>
        </div>
      </section>
    </div>
  );
}
