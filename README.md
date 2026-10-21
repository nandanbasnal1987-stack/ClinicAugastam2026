# Augastam – Next.js (App Router, TypeScript)

The Augastam single-page site converted from 13 HTML files into a component-based Next.js project.
Design, copy and behaviour are unchanged from the HTML source.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (type-checks everything)
npm start        # serve the production build
```

Requires Node 20.9+ (tested with Node 22). Next.js 16.4, React 19.3, TypeScript 5.9.

## Structure

```text
app/
  layout.tsx            root layout: metadata, Google Fonts, <Header/> + {children} + <Footer/>
  page.tsx              home page: HeroSection + <main> with every section in order
  globals.css           page-level base (html/body, .merged-section)
components/
  layout/               Header (announcement bar) · Navbar · MobileMenu · Footer
  sections/             HeroSection · AiAssistSection · ConnectedClinicSection · JourneySection
                        SolutionTabsSection · PatientAppSection · TransitionBanner · BenefitsSection
                        AiSuiteSection · PrivacySection · PricingSection · ContactSection · FaqSection
  ui/                   FaqItem · FooterColumn (data-driven repeated elements)
styles/                 one CSS file per component/section (header, navbar, hero, ai-assist, ...)
hooks/                  one hook per interactive section + shared hooks (see below)
lib/utils.ts            createScope(): tracked listeners/timers/observers with cleanup
public/                 Images/ Icons/ Fonts/   (put your assets here, see list below)
```

## How the conversion works

* **CSS is unchanged.** Every declaration is identical to the HTML source. Each section's rules are scoped under
  its own wrapper (`#section-N`, and `.section-1` for the header/hero pair) because the original files reuse the
  same global selectors (`.card`, `.pill`, `.bar`, `h1`, ...). All element IDs are unique (`secN-name`).
* **Header / Navbar / MobileMenu / hero parallax** are real React state and hooks (`useScrolled`, `useHeroParallax`).
* **Other sections** keep their original interaction code in `hooks/use*.ts`, run through `hooks/useSectionScript.ts`
  and `createScope()` in `lib/utils.ts`: every listener, timer, animation frame and IntersectionObserver is removed on
  unmount, so nothing is registered twice (verified under React Strict Mode). These hook files start with
  `// @ts-nocheck` because they are the original untyped scripts, kept line-for-line.
* `hooks/useScrollAnimation.ts` is Section 3's scroll-reveal + counters.
* Client components use `"use client"`; the layout, page and `TransitionBanner` are server components.

## Assets expected in `public/`

```text
Images/augastam.svg                Images/handoffs.svg            Images/queue.svg
Images/home-banner.jpg             Images/documentation.svg       Images/Glance.svg
Images/queue2.svg                  Images/simplified_billing.svg  Images/mobile_app.svg
Images/transition_img.svg          Images/Background+Border.svg
Images/Group 1000012820.svg  (used twice)   Images/Group 1000012821.svg
Images/Group 1000012822.svg                 Images/Group 1000012823.svg
Images/Footer/akhil_logo.svg       Images/Footer/apple.svg        Images/Footer/playstore.svg
```

## Notes

* Section 7 was never supplied; the transition banner (`TransitionBanner`) sits in its place between Sections 6 and 8.
* The phone mock-up in Section 6 is hidden (`#section-6 .art{display:none !important}`), replaced by `mobile_app.svg`.
* Four sections (3, 4, 12, 13) each render a "Toggle theme" button in the same fixed corner; all do the same global switch.
* Fonts are loaded with `<link>` tags in `app/layout.tsx` so the CSS font names stay exactly as in the source.
* Placeholder copy was kept as-is (FAQ answers 5 and 6, footer "Company Name", lorem ipsum).
