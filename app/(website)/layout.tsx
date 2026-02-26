"use client"
import type { Metadata } from "next";
import Link from "next/link";
import WebFooter from "../components/common/Footer/WebFooter";
import Header from "../components/common/Header/Header";
import { useEffect, useState } from "react";


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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="relative flex min-h-dvh flex-col">
      {/* <Navbar /> */}
      <div
        className={`fixed left-0 z-50 w-full transition-all duration-500 ease-out ${scrolled ? 'top-0' : 'top-4'
          }`}
      >
        <Header />
      </div>

      <main id="main" className="flex-1">
        {children}
      </main>
      <WebFooter />
    </div>
  );
}