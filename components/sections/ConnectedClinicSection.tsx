"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import "@/styles/connected-clinic.css";

export default function ConnectedClinicSection() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimation(ref);

  return (
    <div className="merged-section" id="section-3" ref={ref}>
      <div className="page">
        <div className="wrap">
          <section className="stats rv" aria-label="Company highlights">
            <div className="stat">
              <div className="ico">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4.500" width="18" height="16" rx="2" />
                  <path d="M8 2.500v4M16 2.500v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
                </svg>
              </div>
              <div className="num">
                <span data-n="32">
                  32
                </span>
                +
              </div>
              <div className="lbl">
                Years in healthcare technology
              </div>
            </div>
            <div className="stat">
              <div className="ico">
                <svg viewBox="0 0 24 24">
                  <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 10h5a1 1 0 0 1 1 1v10M2 21h20M8 8h2M8 12h2M8 16h2M17 14h.01M17 17h.01" />
                </svg>
              </div>
              <div className="num">
                <span data-n="40">
                  40
                </span>
                +
              </div>
              <div className="lbl">
                Hospital groups and healthcare organizations
              </div>
            </div>
            <div className="stat">
              <div className="ico">
                <svg viewBox="0 0 24 24">
                  <circle cx="9" cy="8" r="3.500" />
                  <path d="M2.500 20c0-3.600 2.900-6 6.500-6s6.500 2.400 6.500 6M16 4.500a3.500 3.500 0 0 1 0 7M18 14.300c2 .8 3.500 2.600 3.500 5.700" />
                </svg>
              </div>
              <div className="num">
                <span data-n="700">
                  700
                </span>
                +
              </div>
              <div className="lbl">
                Customers across healthcare workflows
              </div>
            </div>
            <div className="stat">
              <div className="ico">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.500 2.700 3.800 5.700 3.800 9S14.500 18.300 12 21c-2.500-2.700-3.800-5.700-3.800-9S9.500 5.700 12 3z" />
                </svg>
              </div>
              <div className="num">
                <span data-n="11">
                  11
                </span>
                +
              </div>
              <div className="lbl">
                Countries with global presence
              </div>
            </div>
          </section>
          <section className="head rv">
            <span className="chip">
              The problem
            </span>
            <h2 className="h1">
              Your clinic is busy. Your systems shouldn't make it harder.
            </h2>
            <p className="sub">
              When registration, appointments, queue handling, clinical notes and billing live in disconnected processes, staff spend time switching systems instead of moving the patient journey forward.
            </p>
          </section>
          <div className="cards">
            <article className="card rv g1" tabIndex={0} style={{ "--d": "0s" } as CSSProperties}>
              <div className="photo">
                <Image src="/Images/handoffs.svg" alt="Patient details repeated across reception, consultation and billing" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="cap">
                <h3>
                  Too many Handoffs
                </h3>
                <p>
                  Patient information gets repeated from reception to consultation to billing.
                </p>
              </div>
            </article>
            <article className="card rv g2" tabIndex={0} style={{ "--d": ".1s" } as CSSProperties}>
              <div className="photo">
                <Image src="/Images/queue.svg" alt="Patients waiting in a clinic queue" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="cap">
                <h3>
                  Longer waiting times
                </h3>
                <p>
                  Long waiting times increase patient frustration & create pressure on clinic staff, affecting the overall care experience.
                </p>
              </div>
            </article>
            <article className="card rv g3" tabIndex={0} style={{ "--d": ".2s" } as CSSProperties}>
              <div className="photo">
                <Image src="/Images/documentation.svg" alt="Doctor writing clinical notes" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="cap">
                <h3>
                  Documentation takes time
                </h3>
                <p>
                  Doctors and teams lose valuable minutes creating and retrieving clinical notes.
                </p>
              </div>
            </article>
          </div>
          <section className="head second rv">
            <span className="chip">
              With Augastam
            </span>
            <h2 className="h2">
              One connected clinic. A clearer way to care.
            </h2>
            <p className="sub" style={{ maxWidth: "1060px" } as CSSProperties}>
              Augastam brings consultations, queues, collections, and clinic performance together—giving your team better visibility into daily operations and more time to focus on patients.
            </p>
          </section>
          <div className="cards wide">
            <article className="card rv g4" tabIndex={0} style={{ "--d": "0s" } as CSSProperties}>
              <div className="photo">
                <Image src="/Images/Glance.svg" alt="Clinic performance dashboard" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
              <span className="badge">
                <i></i>
                NEW
              </span>
              <div className="cap">
                <h3>
                  Performance at a Glance
                </h3>
                <p>
                  Track patient visits, collections, and daily clinic activity from one dashboard. Get clearer insights to make informed decisions and manage your practice better.
                </p>
              </div>
            </article>
            <article className="card rv g5" tabIndex={0} style={{ "--d": ".1s" } as CSSProperties}>
              <div className="photo">
                <Image src="/Images/queue2.svg" alt="Patient token and waiting queue screen" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
              <span className="badge">
                <i></i>
                NEW
              </span>
              <div className="cap">
                <h3>
                  Smarter Queue Management
                </h3>
                <p>
                  Keep track of patient tokens and waiting queues in real time. Help your staff manage patient flow and reduce confusion throughout the clinic.
                </p>
              </div>
            </article>
            <article className="card rv g6" tabIndex={0} style={{ "--d": ".2s" } as CSSProperties}>
              <div className="photo">
                <Image src="/Images/simplified_billing.svg" alt="Billing and collections summary" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
              <span className="badge">
                <i></i>
                NEW
              </span>
              <div className="cap">
                <h3>
                  Simplified Billing & Collections
                </h3>
                <p>
                  Track patient visits, collections, and daily clinic activity from one dashboard. Get clearer insights to make informed decisions and manage your practice better.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <button id="sec3-theme" type="button">
        Toggle theme
      </button>
    </div>
  );
}
