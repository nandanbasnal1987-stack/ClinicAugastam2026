"use client";

import { useState } from "react";
import Image from "next/image";
import MobileMenu from "@/components/layout/MobileMenu";
import { useScrolled } from "@/hooks/useScrolled";
import "@/styles/navbar.css";

/** Logo, dropdown menu, Login / Book a demo buttons and the mobile burger. */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(10);

  return (
    <header className={`nav${open ? " open" : ""}${scrolled ? " sh" : ""}`} id="sec1-nav">
      <a className="logo" href="#">
        <Image src="/Images/augastam.svg" alt="Augastam Logo" width={0} height={0} style={{ width: "auto", height: "auto" }} />
      </a>
      <ul className="menu">
        <li>
          <a tabIndex={0}>
            About Us
            {" "}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 9 7 7 7-7" />
            </svg>
          </a>
          <div className="dd">
            <a href="#">
              Our story
            </a>
            {" "}
            <a href="#">
              Leadership
            </a>
            {" "}
            <a href="#">
              Careers
            </a>
          </div>
        </li>
        <li>
          <a tabIndex={0}>
            Why Augastam Clinics
            {" "}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 9 7 7 7-7" />
            </svg>
          </a>
          <div className="dd">
            <a href="#">
              For clinics
            </a>
            {" "}
            <a href="#">
              For hospitals
            </a>
            {" "}
            <a href="#">
              For diagnostics
            </a>
          </div>
        </li>
        <li>
          <a href="#">
            Features
          </a>
        </li>
        <li>
          <a tabIndex={0}>
            AI
            {" "}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 9 7 7 7-7" />
            </svg>
          </a>
          <div className="dd">
            <a href="#">
              Ambient AI
            </a>
            {" "}
            <a href="#">
              Document extraction OCR
            </a>
            {" "}
            <a href="#">
              AI PACS
            </a>
            {" "}
            <a href="#">
              AI care plans
            </a>
          </div>
        </li>
      </ul>
      <div className="cta">
        <button className="login">
          Login
        </button>
        {" "}
        <button className="demo">
          Book a demo
        </button>
      </div>
      <MobileMenu open={open} onToggle={() => setOpen((o) => !o)} />
    </header>
  );
}
