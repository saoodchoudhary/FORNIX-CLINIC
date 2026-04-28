"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#023e8a] text-white text-xs py-2 px-4 text-center hidden sm:block">
        <span className="text-green-300 font-bold mr-2">● OPEN 24 HOURS</span>
        Expert ENT Care in Khanpur, New Delhi —
        <a
          href="tel:+919711430836"
          className="font-bold text-[#90e0ef] hover:text-white transition-colors ml-1 underline underline-offset-2"
        >
          Call: +91 97114 30836
        </a>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-white/98 backdrop-blur-md border-b border-slate-100"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-[#00b4d8] to-[#0096c7] shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200">
                <svg viewBox="0 0 32 32" width="20" height="20" fill="none">
                  <circle cx="16" cy="10" r="5" stroke="white" strokeWidth="2.3" />
                  <path
                    d="M7 28c0-4.97 4.03-9 9-9s9 4.03 9 9"
                    stroke="white"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M23 7.5c1.8 1.2 3 3.2 3 5.5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity=".55"
                  />
                </svg>
              </div>
              <div className="leading-none">
                <p
                  className="font-extrabold text-slate-900 text-[15px] tracking-tight leading-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  FORNIX CLINIC
                </p>
                <p className="text-[11px] text-[#0096c7] font-semibold mt-0.5 tracking-wide hidden sm:block">
                  ENT Specialist · New Delhi
                </p>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-[#00b4d8] font-semibold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#00b4d8]" />
                    )}
                  </Link>
                );
              })}

              {/* Divider */}
              <span className="w-px h-5 bg-slate-200 mx-2" />

              <a
                href="tel:+919711430836"
                className="flex items-center gap-2 bg-[#00b4d8] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0096c7] active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                </svg>
                Book Appointment
              </a>
            </nav>

            {/* ── Mobile Right Side ── */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="tel:+919711430836"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#00b4d8] text-white shadow-sm"
                aria-label="Call clinic"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                </svg>
              </a>
              <button
                className="flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 text-slate-600 hover:text-[#00b4d8] hover:border-[#00b4d8] transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu Dropdown ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-slate-100 px-4 pt-3 pb-5">
            <nav className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#00b4d8] bg-[#e0f7fd] font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] flex-shrink-0" />
                    )}
                    {!isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile CTA block */}
            <div className="bg-[#f0f9ff] rounded-2xl p-4 border border-[#90e0ef]/40">
              <p className="text-xs text-slate-500 mb-2 font-medium">Book a consultation</p>
              <a
                href="tel:+919711430836"
                className="flex items-center justify-center gap-2 bg-[#00b4d8] text-white text-sm font-bold py-3 rounded-xl hover:bg-[#0096c7] transition-colors w-full"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                </svg>
                +91 97114 30836
              </a>
              <div className="flex items-center justify-center gap-1.5 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-600 font-semibold">Open 24 hours · Walk-ins welcome</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}