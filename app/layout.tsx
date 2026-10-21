import type { Metadata, Viewport } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Augastam Clinical – AI-Native Clinical care",
  description:
    "Smarter, connected healthcare with Augastam Clinical — bringing consultations, clinical documentation, and AI-powered tools together to support better patient care at every stage.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const FONT_STYLESHEETS = [
  "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Inter:wght@400;500;600;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Poppins:wght@400;500;600&display=swap",
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap",
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Inter:wght@500;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,400&family=Roboto:wght@400;500&display=swap"
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {FONT_STYLESHEETS.map((href) => (
          // eslint-disable-next-line @next/next/no-page-custom-font
          <link key={href} href={href} rel="stylesheet" />
        ))}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
