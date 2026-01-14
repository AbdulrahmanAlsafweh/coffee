import type { Metadata } from "next";
import { Manrope, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AmbientBackground } from "@/components/ambient-background";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Qahwa Najd | Saudi Specialty Coffee Portfolio",
    template: "%s | Qahwa Najd",
  },
  description:
    "A premium Saudi specialty coffee brand experience celebrating Najdi hospitality, refined roasting, and cultural ritual.",
  metadataBase: new URL("https://qahwa-najd.example"),
  openGraph: {
    title: "Qahwa Najd | Saudi Specialty Coffee Portfolio",
    description:
      "A premium Saudi specialty coffee brand experience celebrating Najdi hospitality, refined roasting, and cultural ritual.",
    url: "https://qahwa-najd.example",
    siteName: "Qahwa Najd",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Qahwa Najd Saudi coffee portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qahwa Najd | Saudi Specialty Coffee Portfolio",
    description:
      "A premium Saudi specialty coffee brand experience celebrating Najdi hospitality, refined roasting, and cultural ritual.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${notoArabic.variable} antialiased`}>
        <Providers>
          <div className="relative min-h-screen overflow-x-hidden">
            <AmbientBackground />
            <Navbar />
            <main id="main-content" className="relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
