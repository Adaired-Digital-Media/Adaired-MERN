import { Poppins, Outfit, Montserrat, Mr_Dafoe } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
      </body>
    </html>
  );
}