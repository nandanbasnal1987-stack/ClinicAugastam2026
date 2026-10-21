"use client";

import { useRef } from "react";
import FaqItem from "@/components/ui/FaqItem";
import { useFaq } from "@/hooks/useFaq";
import "@/styles/faq.css";
const faqs = [
  {
    question: "What is the full form of EMR and EHR in healthcare?",
    answer: "EMR stands for Electronic Medical Record and EHR stands for Electronic Health Record. Both are digital versions of a patient's health information, but they differ in how far that information travels.",
  },
  {
    question: "What is EHR?",
    answer: "An Electronic Health Record is a patient's complete digital health history that can be shared across hospitals, clinics, labs and pharmacies, so every provider involved in the patient's care sees the same information.",
  },
  {
    question: "What is EMR?",
    answer: "An Electronic Medical Record is the digital chart a single clinic or hospital keeps for its own patients, including diagnoses, prescriptions, test results and visit notes. It replaces paper files inside one practice.",
  },
  {
    question: "Why are doctors opting for Augastam Clinic software, for patient and clinic management?",
    answer: "Augastam Clinic brings registration, appointments, queues, consultations and billing into one connected system. Doctors and staff avoid repeating patient details, spend less time on notes, and get a clear view of daily clinic activity.",
  },
  {
    question: "What kind of data securities, Augastam Clinic uses to secure patients data?",
    answer: "Replace this with your confirmed security details, such as encryption, role-based access, audit trails and backups.",
  },
  {
    question: "What are the minimum system requirements to run Augastam Clinic software?",
    answer: "Replace this with your confirmed requirements, such as supported operating systems, browsers, memory and internet speed.",
  },
];

export default function FaqSection() {
  const ref = useRef<HTMLDivElement>(null);
  useFaq(ref);

  return (
    <div className="merged-section" id="section-13" ref={ref}>
      <section className="faq" aria-labelledby="sec13-t">
        <div className="intro">
          <h2 id="sec13-t">
            Frequently Asked Questions
          </h2>
          <p>
            Find Answers to Your Most Common Questions Here
          </p>
        </div>
        <div className="list" id="sec13-list">
          {faqs.map((f, i) => (
  <FaqItem key={i} n={i + 1} question={f.question} answer={f.answer} />
))}
        </div>
      </section>
      <button id="sec13-theme" type="button">
        Toggle theme
      </button>
    </div>
  );
}
