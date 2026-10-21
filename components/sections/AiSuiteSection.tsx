"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { useAiSuite } from "@/hooks/useAiSuite";
import "@/styles/ai-suite.css";

export default function AiSuiteSection() {
  const ref = useRef<HTMLDivElement>(null);
  useAiSuite(ref);

  return (
    <div className="merged-section" id="section-9" ref={ref}>
      <section className="hero" id="sec9-hero">
        <div className="canvas" id="sec9-canvas">
          <h1>
            From Conversation to Care, From Data to Decisions.
          </h1>
          <div className="sub">
            100% Self-Configurable and Customizable
          </div>
          <div className="stage" id="sec9-stage">
            <div className="orbit" data-d="5" style={{ width: "602px", height: "602px" } as CSSProperties}></div>
            <div className="orbit" data-d="8" style={{ width: "750px", height: "750px" } as CSSProperties}></div>
            <div className="orbit" data-d="12" style={{ width: "972px", height: "972px", opacity: ".8" } as CSSProperties}></div>
            <div className="orbit" data-d="16" style={{ width: "1262px", height: "1262px", opacity: ".55" } as CSSProperties}></div>
            <div className="spin">
              <div className="node" tabIndex={0} style={{ "--s": "88px", "--x": "135px", "--y": "-277px" } as CSSProperties}>
                <Image src="/Images/aipacs.svg" alt="AI PACS" width={0} height={0} style={{ width: "auto", height: "auto" }} />
              </div>
              <div className="node" tabIndex={0} style={{ "--s": "70px", "--x": "290px", "--y": "-61px" } as CSSProperties}>
                <Image src="/Images/AIDischargeSummary.svg" alt="AI Discharge Summary" width={0} height={0} style={{ width: "auto", height: "auto" }} />
              </div>
              <div className="node" tabIndex={0} style={{ "--s": "66px", "--x": "-188px", "--y": "235px" } as CSSProperties}>
                <Image src="/Images/aicareplan.svg" alt="AI Care Plans" width={0} height={0} style={{ width: "auto", height: "auto" }} />
              </div>
            </div>
            <div className="spin r">
              <div className="node" tabIndex={0} style={{ "--s": "114px", "--x": "-324px", "--y": "-158px" } as CSSProperties}>
                <Image src="/Images/InventoryManagement.svg" alt="Inventory Management" width={0} height={0} style={{ width: "auto", height: "auto" }} />
              </div>
              <div className="node" tabIndex={0} style={{ "--s": "96px", "--x": "318px", "--y": "220px" } as CSSProperties}>
                <Image src="/Images/OpticalCharacterReader.svg" alt="Optical Character Reader" width={0} height={0} style={{ width: "auto", height: "auto" }} />
              </div>
            </div>
          </div>
          <div className="logo">
            <div className="disc">
              <svg width="88" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="sec9-g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#4f2fe0" />
                    <stop offset="1" stopColor="#b061e8" />
                  </linearGradient>
                </defs>
                <path d="M42 10 L58 10 L40 78 Q36 90 26 84 Q18 78 24 68Z" fill="url(#sec9-g)" />
                <path d="M44 68 Q64 40 84 80" fill="none" stroke="#150a30" strokeWidth="12" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span className="brand">
                AUGASTAM
              </span>
              <span className="chip">
                AI
              </span>
            </div>
            <div className="tag">
              Where care meets innovation
            </div>
          </div>
        </div>
      </section>
      <section className="row one">
        <div className="card">
          <div className="vis" id="sec9-wave"></div>
          <div className="cap">
            <h3>
              Augastam Ambient AI
            </h3>
            <p>
              100% Self-Configurable and Customizable
            </p>
          </div>
          <div className="mock">
            <header>
              Augastam AI
              {" "}
              <small>
                Clinical Documentation
              </small>
            </header>
            <div className="cols">
              <div>
                <b>
                  Transcription
                </b>
                <div className="msg">
                  <b>
                    Speaker
                  </b>
                  <br />
                  Hello Raman, how are you doing today? I'm doing great, doctor. I'm suffering from viral fever for five days. On a scale of one to 10, how much would you score it? I would score it 8.5.
                </div>
                <div className="msg">
                  <b>
                    Speaker
                  </b>
                  <br />
                  Dolo 650
                </div>
                <div className="rec" id="sec9-rec">
                  <button>
                    🎙
                  </button>
                  <span id="sec9-rt">
                    Tap the mic to start recording
                  </span>
                </div>
              </div>
              <div>
                <b>
                  Conversation Note
                </b>
                <div className="tabs">
                  <button className="tab on" data-t="0">
                    Summary
                  </button>
                  <button className="tab" data-t="1">
                    Sections
                  </button>
                </div>
                <div id="sec9-notes"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <h2>
            Let Every Conversation Become Clinical Documentation.
          </h2>
          <ul>
            <li>
              Less Typing, More Caring
            </li>
            <li>
              Consult naturally in 85+ international language while AI captures the conversation
            </li>
            <li>
              Automatically convert speech into structured clinical notes
            </li>
            <li>
              Capture symptoms, diagnoses, and treatment plans with AI
            </li>
          </ul>
        </div>
      </section>
      <section className="row two">
        <div className="card">
          <div className="ocr">
            <div className="page"></div>
            <div className="pill" style={{ top: "46px", "--c": "#f0434f" } as CSSProperties}></div>
            <div className="pill" style={{ top: "94px", "--c": "#2bd9a0" } as CSSProperties}></div>
            <div className="pill" style={{ top: "142px", "--c": "#c040e8" } as CSSProperties}></div>
          </div>
          <div className="cap">
            <h3>
              OCR - Document Extraction AI
            </h3>
            <p>
              100% Self-Configurable and Customizable
            </p>
          </div>
          <div className="mock">
            <header>
              Document Extraction
              {" "}
              <small>
                upload documents and extract meaningful sections for the EMR.
              </small>
            </header>
            <div className="cols">
              <div>
                <b>
                  Upload Document
                </b>
                <div className="doc" id="sec9-doc">
                  <div>
                    📄 gastro pres 2.pdf
                    <br />
                    <u style={{ color: "#6c3ff0" } as CSSProperties} id="sec9-dl">
                      click to extract
                    </u>
                  </div>
                </div>
              </div>
              <div>
                <b>
                  Extracted Sections
                </b>
                <div style={{ marginTop: "8px" } as CSSProperties}>
                  <b>
                    Vitals
                  </b>
                  <div className="field">
                    <label>
                      Height
                    </label>
                    158
                  </div>
                  <div className="field">
                    <label>
                      Sys BP
                    </label>
                    133
                  </div>
                  <div className="field">
                    <label>
                      BMI
                    </label>
                    30.04
                  </div>
                  <div className="field">
                    <label>
                      Blood group
                    </label>
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <h2>
            Extract key patient information in seconds with AI-powered OCR
          </h2>
          <ul>
            <li>
              Upload PDFs, images, and scanned medical documents
            </li>
            <li>
              Automatically extract clinical details into structured fields
            </li>
            <li>
              Reduce manual data entry and documentation time
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
