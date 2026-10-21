"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { usePatientApp } from "@/hooks/usePatientApp";
import "@/styles/patient-app.css";

export default function PatientAppSection() {
  const ref = useRef<HTMLDivElement>(null);
  usePatientApp(ref);

  return (
    <div className="merged-section" id="section-6" ref={ref}>
      <div className="wrap" id="sec6-wrap">
        <div className="canvas">
          <div className="copy">
            <h1>
              360
              <sup>
                °
              </sup>
              {" "}
              of Care Delivery via Patient App
            </h1>
            <ul id="sec6-list">
              <li data-go="0" data-hl="appt">
                Appointment Management
              </li>
              <li data-go="0" data-hl="tele">
                Video & Chat Consultation
              </li>
              <li data-go="0" data-hl="bell">
                Secure Medical Records & Real Time Alerts
              </li>
              <li data-go="sec6-cats" data-hl="">
                Medical Records at your fingertips
              </li>
              <li data-go="sec6-home" data-hl="home">
                Home Healthcare based Services
              </li>
              <li data-go="0" data-hl="bell">
                Smart Notifications
              </li>
            </ul>
          </div>
          <button className="demo">
            Book a Demo Now
            {" "}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h17M14 6l6 6-6 6" />
            </svg>
          </button>
          <div className="artwrap">
            <Image src="/Images/mobile_app.svg" alt="Augastam patient app on a phone" fill sizes="(max-width: 900px) 100vw, 800px" style={{ objectFit: "contain" }} />
            <div className="art" id="sec6-art">
              <div className="c1"></div>
              <div className="c2"></div>
              <svg className="hand" id="sec6-hand" viewBox="0 0 800 880">
                <defs>
                  <linearGradient id="sec6-sk" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#a06a52" />
                    <stop offset="1" stopColor="#5a3527" />
                  </linearGradient>
                </defs>
                <path d="M507 330C548 318 566 348 562 392L548 520C562 565 640 640 700 880H470L498 700Z" fill="url(#sec6-sk)" />
              </svg>
              <div className="phone-wrap" id="sec6-pw">
                <div className="phone" id="sec6-ph">
                  <div className="screen">
                    <div className="status">
                      9:41
                      <i></i>
                    </div>
                    <div className="scroll" id="sec6-sc">
                      <div className="in">
                        <div className="hdr">
                          <span className="av"></span>
                          <b>
                            Good Morning
                            <br />
                            Joule Mahistrow
                          </b>
                          <span className="sos">
                            SOS
                          </span>
                          <span className="bell" id="sec6-bell">
                            🔔
                          </span>
                        </div>
                        <div className="search">
                          <div>
                            🔍 Search for Doctor / Specialty
                          </div>
                          <span className="mic">
                            🎤
                          </span>
                        </div>
                        <div className="h">
                          What are you looking for?
                        </div>
                        <div className="s">
                          Get Instant Consultation with Health Experts
                        </div>
                        <div className="grid">
                          <div className="tile" data-k="appt">
                            <div className="im" style={{ background: "linear-gradient(135deg,#dbe9fb,#a9cdf2)" } as CSSProperties}>
                              🩺
                            </div>
                            Book an Appointment
                          </div>
                          <div className="tile" data-k="tele">
                            <div className="im" style={{ background: "linear-gradient(135deg,#d9f5e4,#8fdcaf)" } as CSSProperties}>
                              👩‍⚕️
                            </div>
                            Tele Consultation
                          </div>
                          <div className="tile">
                            <div className="im" style={{ background: "linear-gradient(135deg,#f3ead8,#e2d2b0)" } as CSSProperties}>
                              🧪
                            </div>
                            Home Sample Collection
                          </div>
                          <div className="tile">
                            <div className="im" style={{ background: "linear-gradient(135deg,#bfe0d6,#2f6f66)" } as CSSProperties}>
                              🩻
                            </div>
                            Scan Appointment
                          </div>
                          <div className="tile">
                            <div className="im" style={{ background: "linear-gradient(135deg,#fbe0e4,#f2a9b4)" } as CSSProperties}>
                              💊
                            </div>
                            Order Medicines
                          </div>
                        </div>
                        <div className="band"></div>
                        <div id="sec6-home">
                          <div className="h" style={{ marginTop: "12px" } as CSSProperties}>
                            Home Healthcare Services
                            {" "}
                            <span className="see">
                              See all
                            </span>
                          </div>
                          <div className="s">
                            Book services at home
                          </div>
                          <div className="home">
                            <div>
                              <em>
                                Coming soon
                              </em>
                              <div className="ic">
                                🏥
                              </div>
                              Nursing Care
                            </div>
                            <div>
                              <em>
                                Coming soon
                              </em>
                              <div className="ic">
                                🧑‍🦽
                              </div>
                              Physiotherapy
                            </div>
                            <div>
                              <em>
                                Coming soon
                              </em>
                              <div className="ic">
                                🩻
                              </div>
                              Scan at Home
                            </div>
                          </div>
                          <div className="dots">
                            <i></i>
                            <i></i>
                            <i></i>
                          </div>
                        </div>
                        <div className="band"></div>
                        <div id="sec6-cats">
                          <div className="h" style={{ marginTop: "12px" } as CSSProperties}>
                            Book By Categories
                            {" "}
                            <span className="see">
                              See all
                            </span>
                          </div>
                          <div className="s">
                            Consult with Top Specialists
                          </div>
                          <div className="row2">
                            <i style={{ background: "linear-gradient(#f6e3d4,#e6b99a)" } as CSSProperties}></i>
                            <i style={{ background: "linear-gradient(#f9d3d6,#9ed0f0)" } as CSSProperties}></i>
                            <i style={{ background: "linear-gradient(#fbdcd9,#f1a6a6)" } as CSSProperties}></i>
                          </div>
                        </div>
                        <div className="sp"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <svg className="thumb" id="sec6-thumb" viewBox="0 0 800 880">
                <path d="M184 400C150 400 124 430 122 455C118 540 145 610 186 700L190 700Z" fill="url(#sec6-sk)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
