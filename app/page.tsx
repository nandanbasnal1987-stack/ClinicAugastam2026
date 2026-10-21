import HeroSection from "@/components/sections/HeroSection";
import AiAssistSection from "@/components/sections/AiAssistSection";
import ConnectedClinicSection from "@/components/sections/ConnectedClinicSection";
import JourneySection from "@/components/sections/JourneySection";
import SolutionTabsSection from "@/components/sections/SolutionTabsSection";
import PatientAppSection from "@/components/sections/PatientAppSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import AiSuiteSection from "@/components/sections/AiSuiteSection";
import PrivacySection from "@/components/sections/PrivacySection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import TransitionBanner from "@/components/sections/TransitionBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <main id="page-main">
      <AiAssistSection />
      <ConnectedClinicSection />
      <JourneySection />
      <SolutionTabsSection />
      <PatientAppSection />
      <TransitionBanner />
      <BenefitsSection />
      <AiSuiteSection />
      <PrivacySection />
      <PricingSection />
      <ContactSection />
      <FaqSection />
      </main>
    </>
  );
}
