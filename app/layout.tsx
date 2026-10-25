import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";

const mukta = Mukta({
  variable: "--font-mukta",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "devanagari"],
});

export const metadata: Metadata = {
  title: "Gurunanak Steel Center | Steel, MS Pipes & Construction Materials in Itarsi",
  description:
    "Contact Gurunanak Steel Center in Lakkad Ganj, near Janta Talkies, Itarsi, for steel and iron products, MS pipes, roofing solutions, cement, and welding materials.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${mukta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
