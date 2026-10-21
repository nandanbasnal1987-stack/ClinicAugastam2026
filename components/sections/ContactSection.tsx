"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { useContactDialog } from "@/hooks/useContactDialog";
import "@/styles/contact.css";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  useContactDialog(ref);

  return (
    <div className="merged-section" id="section-12" ref={ref}>
      <section className="cta" id="sec12-cta" aria-labelledby="sec12-h">
        <div className="photo" id="sec12-photo" role="img" aria-label="Doctor talking with two patients">
          <Image src="/Images/Background+Border.svg" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="body">
          <h1 id="sec12-h">
            Run Your Clinic Better. Make More Time for Care.
          </h1>
          <p className="lead">
            See how Augastam Clinic can fit your registration, appointment, QMS, EMR, billing and AI workflows.
          </p>
          <div className="btns">
            <button className="btn p" id="sec12-demo" type="button">
              Book a Demo
              {" "}
              <span className="ar" aria-hidden="true">
                →
              </span>
            </button>
            {" "}
            <a className="btn s" href="#" id="sec12-visit">
              Visit Akhil Systems
            </a>
          </div>
        </div>
      </section>
      <dialog id="sec12-dlg" aria-labelledby="sec12-dt">
        <form method="dialog" id="sec12-f">
          <h2 id="sec12-dt">
            Book a demo
          </h2>
          <p>
            Tell us where to reach you and we'll set up a walkthrough.
          </p>
          <label>
            Name
            <input name="n" required autoComplete="name" />
          </label>
          {" "}
          <label>
            Work email
            <input name="e" type="email" required autoComplete="email" />
          </label>
          <div className="row">
            <button className="btn s" type="button" id="sec12-cancel">
              Cancel
            </button>
            {" "}
            <button className="btn p" type="submit">
              Request demo
            </button>
          </div>
        </form>
        <div className="ok">
          <span style={{ fontSize: "36px" } as CSSProperties}>
            ✅
          </span>
          <b>
            Request received
          </b>
          <span>
            We'll be in touch shortly.
          </span>
          <div className="row">
            <button className="btn p" type="button" id="sec12-close">
              Close
            </button>
          </div>
        </div>
      </dialog>
      <button id="sec12-theme" type="button">
        Toggle theme
      </button>
    </div>
  );
}
