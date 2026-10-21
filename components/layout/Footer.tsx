"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import FooterColumn from "@/components/ui/FooterColumn";
import { useFooter } from "@/hooks/useFooter";
import "@/styles/footer.css";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  useFooter(ref);

  return (
    <div className="merged-section" id="section-14" ref={ref}>
      <footer id="sec14-footer">
        <div className="wrap">
          <div className="main">
            <a className="brand in" href="#" aria-label="Akhil Systems home" style={{ animationDelay: "0s" } as CSSProperties}>
              <Image src="/Images/Footer/akhil_logo.svg" alt="Akhil Systems logo" width={0} height={0} style={{ width: "auto", height: "auto" }} />
              {" "}
              <span>
                <b>
                  Akhil systems Pvt Ltd
                </b>
                <i>
                  your healthcare IT partner
                </i>
              </span>
            </a>
            <FooterColumn title="Product" delay=".08s" links={["Pricing", "Overview", "Browse", "Accessibility", "Five"]} />
            <FooterColumn title="Resources" delay=".16s" links={["Help Center", "Blog", "Tutorials"]} />
            <FooterColumn title="Support" delay=".24s" links={["Contact Us", "Developers", "Documentation", "Integrations", "Reports", "Webinar"]} />
            <FooterColumn title="Company" delay=".32s" links={["About", "Press", "Events", "Careers"]} />
          </div>
          <div className="rule"></div>
          <div className="bar">
            <button className="logo" id="sec14-up" type="button" aria-label="Back to top">
              <Image src="/Images/Footer/akhil_logo.svg" alt="Akhil Systems logo" width={0} height={0} style={{ width: "auto", height: "auto" }} />
            </button>
            <p className="copy">
              ©
              {" "}
              <span id="sec14-yr">
                2023
              </span>
              {" "}
              Company Name, Inc. All rights reserved.
            </p>
            <div className="legal">
              <a href="#">
                Terms
              </a>
              <a href="#">
                Privacy
              </a>
              <a href="#">
                Contact
              </a>
            </div>
            <div className="social">
              <a href="#" data-n="youtube" aria-label="YouTube">
                <svg viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800ZM10 15V9l5.200 3Z" />
                </svg>
              </a>
              {" "}
              <a href="#" data-n="facebook" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M14 8h3V4h-3c-2.800 0-4 1.800-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.500c0-.3.200-.5.500-.5z" />
                </svg>
              </a>
              {" "}
              <a href="#" data-n="twitter" aria-label="Twitter">
                <svg viewBox="0 0 24 24">
                  <path d="M22 5.900c-.7.300-1.500.500-2.400.600.900-.5 1.500-1.300 1.800-2.300-.8.500-1.700.8-2.600 1a4.100 4.100 0 0 0-7 3.700C8.400 8.800 5.400 7.200 3.400 4.700c-1.100 1.900-.5 4.200 1.200 5.400-.7 0-1.300-.2-1.900-.5 0 2 1.400 3.700 3.300 4.100-.6.200-1.200.2-1.900.1.500 1.600 2 2.800 3.800 2.900A8.300 8.300 0 0 1 2 18.200 11.600 11.600 0 0 0 8.300 20c7.500 0 11.700-6.300 11.400-12 .8-.6 1.500-1.300 2.300-2.100z" />
                </svg>
              </a>
              {" "}
              <a href="#" data-n="instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.500-3.200a1.200 1.200 0 1 1 0 2.400 1.200 1.200 0 0 1 0-2.400Z" />
                </svg>
              </a>
              {" "}
              <a href="#" data-n="linkedin" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M3 9h4v12H3zM5 3a2.200 2.200 0 1 1 0 4.400A2.200 2.200 0 0 1 5 3zM10 9h3.800v1.700c.6-1 1.900-2 3.900-2 3.600 0 4.300 2.400 4.300 5.500V21h-4v-5.700c0-1.400 0-3.100-1.900-3.100s-2.100 1.500-2.100 3V21h-4z" />
                </svg>
              </a>
            </div>
            <div className="stores">
              <a href="#" data-store="App Store">
                <Image src="/Images/Footer/apple.svg" alt="Download on the App Store" width={0} height={0} style={{ width: "auto", height: "auto" }} />
              </a>
              {" "}
              <a href="#" data-store="Google Play">
                <Image src="/Images/Footer/playstore.svg" alt="Get it on Google Play" width={0} height={0} style={{ width: "auto", height: "auto" }} />
              </a>
            </div>
          </div>
          <p className="fine">
            In sed posuere sed ullamcorper feugiat. Lacinia elit neque, ipsum, non. Tellus mattis enim volutpat habitasse. Semper posuere lectus consectetur aliquam et ullamcorper. Dictumst aenean justo fames diam eget volutpat vestibulum elit. Blandit aliquet bibendum pellentesque turpis id penatibus faucibus id nunc. Aenean rhoncus, erat pellentesque eu. Quis morbi condimentum phasellus in ultricies eu amet.
          </p>
        </div>
      </footer>
      <div id="sec14-toast" role="status" aria-live="polite"></div>
    </div>
  );
}
