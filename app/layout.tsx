import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GOOGLE_TAG_ID = "AW-18520330456";

const mukta = Mukta({
  variable: "--font-mukta",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "devanagari"],
});

export const metadata: Metadata = {
  title: "Gurunanak Steel Center | Steel, MS Pipes & Construction Materials in Itarsi",
  description:
    "Contact Gurunanak Steel Center in Lakkad Ganj, near Janta Talkies, Itarsi, for steel and iron products, MS pipes, roofing solutions, cement, and welding materials from brands like Goel TMT, Kamdhenu, Tata Pipes, Prakash Surya, ACC, UltraTech and Wonder Cement.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${mukta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        {/* Google tag (gtag.js) */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`} strategy="afterInteractive" />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_TAG_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
