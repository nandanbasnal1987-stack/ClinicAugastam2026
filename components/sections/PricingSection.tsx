"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import { usePricing } from "@/hooks/usePricing";
import "@/styles/pricing.css";

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  usePricing(ref);

  return (
    <div className="merged-section" id="section-11" ref={ref}>
      <section className="sec">
        <h1>
          Choose the Perfect Plan for Your Healthcare Needs
        </h1>
        <p className="lead">
          Simple, transparent pricing that scales with your clinic network.
        </p>
        <div className="grid">
          <article className="card" tabIndex={0}>
            <h3>
              Free
            </h3>
            <div className="pr">
              <span className="n" data-v="0">
                $0
              </span>
              <small>
                /month
              </small>
            </div>
            <p className="d">
              Perfect for small and mid size Clinics
            </p>
            <ul>
              <li style={{ "--i": "0" } as CSSProperties}>
                <i className="ck" style={{ "--i": "0" } as CSSProperties}></i>
                1 Facility Onboarding
              </li>
              <li style={{ "--i": "1" } as CSSProperties}>
                <i className="ck" style={{ "--i": "1" } as CSSProperties}></i>
                Basic dashboard access
              </li>
              <li style={{ "--i": "2" } as CSSProperties}>
                <i className="ck" style={{ "--i": "2" } as CSSProperties}></i>
                Email Support
              </li>
              <li style={{ "--i": "3" } as CSSProperties}>
                <i className="ck" style={{ "--i": "3" } as CSSProperties}></i>
                48-hour response time
              </li>
            </ul>
            <button className="btn" style={{ bottom: "30px" } as CSSProperties}>
              Get Started
            </button>
          </article>
          <article className="card pop" tabIndex={0}>
            <span className="badge">
              Most Popular
            </span>
            <h3>
              Standard
            </h3>
            <div className="pr">
              <span className="n" data-v="199">
                $199
              </span>
              <small>
                /month
              </small>
            </div>
            <p className="d">
              Perfect for small and mid size Clinics
            </p>
            <ul>
              <li style={{ "--i": "0" } as CSSProperties}>
                <i className="ck" style={{ "--i": "0" } as CSSProperties}></i>
                5 Facility onboarding
              </li>
              <li style={{ "--i": "1" } as CSSProperties}>
                <i className="ck" style={{ "--i": "1" } as CSSProperties}></i>
                Advanced analytics
              </li>
              <li style={{ "--i": "2" } as CSSProperties}>
                <i className="ck" style={{ "--i": "2" } as CSSProperties}></i>
                Priority email support
              </li>
              <li style={{ "--i": "3" } as CSSProperties}>
                <i className="ck" style={{ "--i": "3" } as CSSProperties}></i>
                24-hour response time
              </li>
              <li style={{ "--i": "4" } as CSSProperties}>
                <i className="ck" style={{ "--i": "4" } as CSSProperties}></i>
                Custom branding options
              </li>
            </ul>
            <button className="btn" style={{ bottom: "30px" } as CSSProperties}>
              Get Started
            </button>
          </article>
          <article className="card" tabIndex={0}>
            <h3>
              Custom
            </h3>
            <div className="pr t">
              Contact US
            </div>
            <p className="d">
              for large healthcare networks for unique needs
            </p>
            <ul style={{ marginTop: "22px" } as CSSProperties}>
              <li style={{ "--i": "0" } as CSSProperties}>
                <i className="ck" style={{ "--i": "0" } as CSSProperties}></i>
                Unlimited facility onboarding
              </li>
              <li style={{ "--i": "1" } as CSSProperties}>
                <i className="ck" style={{ "--i": "1" } as CSSProperties}></i>
                Dedicated account manager
              </li>
              <li style={{ "--i": "2" } as CSSProperties}>
                <i className="ck" style={{ "--i": "2" } as CSSProperties}></i>
                Phone and email support
              </li>
              <li style={{ "--i": "3" } as CSSProperties}>
                <i className="ck" style={{ "--i": "3" } as CSSProperties}></i>
                4-hour response time
              </li>
              <li style={{ "--i": "4" } as CSSProperties}>
                <i className="ck" style={{ "--i": "4" } as CSSProperties}></i>
                Custom workflow automation
              </li>
            </ul>
            <button className="btn" style={{ bottom: "30px" } as CSSProperties}>
              Get Started
            </button>
          </article>
        </div>
      </section>
    </div>
  );
}
