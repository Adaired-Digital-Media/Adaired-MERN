import { Poppins, Outfit, Montserrat, Mr_Dafoe } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import whatsApp from '../public/assets/icons/whatsapp.png';

/* =========================
   FONT CONFIGURATION
========================= */

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const mrDafoe = Mr_Dafoe({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dafoe",
  display: "swap",
});

/* =========================
   ROOT LAYOUT
========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${outfit.variable} ${montserrat.variable} ${mrDafoe.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        <div>
          <div className="fixed bottom-2 left-3 z-40 cursor-pointer">
            <Link href="https://wa.me/918907300008" target="_blank">
              <Image
                src={whatsApp}
                width={55}
                height={55}
                alt="WhatsApp"
                className="h-[2.8rem] w-[2.8rem] md:h-[3.2rem] md:w-[3.2rem] lg:h-[3.438rem] lg:w-[3.438rem]"
              />
            </Link>
          </div>
          <Script
            id="zsiqscript"
            src="https://salesiq.zohopublic.com/widget?wc=siq7daf32053a2c9ad94317715612d7eb575af5e85bd3e25754067471d73684b3b9"
            strategy="lazyOnload"
          />
        </div>
      </body>
    </html>
  );
}
