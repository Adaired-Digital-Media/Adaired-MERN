"use client";
import Link from "next/link";
import WebFooter from "../components/common/Footer/WebFooter";
import Header from "../components/common/Header/Header";
import { useEffect, useState } from "react";
import Image from "next/image";
import whatsApp from "../../public/assets/icons/whatsapp.png";
import Script from "next/script";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative flex min-h-dvh flex-col">
      {/* <Navbar /> */}
      <div
        className={`fixed left-0 z-50 w-full transition-all duration-500 ease-out ${
          scrolled ? "top-0" : "top-4"
        }`}
      >
        <Header />
      </div>

      <main id="main" className="flex-1">
        {children}
      </main>
      <WebFooter />
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
    </div>
  );
}
