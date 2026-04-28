import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Doctor" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "Ear Disorders & Infections",
  "Nose & Sinus Treatment",
  "Throat & Voice Care",
  "Vertigo & Balance",
  "Snoring & Sleep Apnea",
  "Hearing Assessment",
];

export default function Footer() {
  return (
    <footer className="bg-[#01263f] text-white">


      {/* ── Main Footer Body ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-[#00b4d8] to-[#0096c7] shadow-md group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
                  <circle cx="16" cy="10" r="5" stroke="white" strokeWidth="2.3" />
                  <path d="M7 28c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="white" strokeWidth="2.3" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p
                  className="font-extrabold text-white text-base leading-none tracking-tight"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  FORNIX CLINIC
                </p>
                <p className="text-[#90e0ef] text-xs mt-0.5 font-medium">ENT Specialist Clinic</p>
              </div>
            </Link>

            <p className="text-[#8fb8cc] text-sm leading-relaxed mb-6 max-w-[240px]">
              Expert ENT care by Dr. Prince Hirdesh Sharma, MBBS, MS. Serving South Delhi with compassion, precision, and affordable treatment.
            </p>

            {/* Rating Badge */}
            <div className="flex items-center gap-2.5 bg-white/5 rounded-2xl px-4 py-3 w-fit border border-white/10">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} viewBox="0 0 20 20" width="14" height="14" fill={i <= 4 ? "#fbbf24" : "#fbbf24"} opacity={i === 5 ? "0.5" : "1"}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div>
                <p className="text-white text-xs font-bold leading-none">4.2 / 5</p>
                <p className="text-[#8fb8cc] text-[10px] mt-0.5">125+ Google Reviews</p>
              </div>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3
              className="text-white font-bold text-xs uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center gap-2.5 text-sm text-[#8fb8cc] hover:text-white transition-colors group"
                  >
                    <span className="w-5 h-5 rounded-lg bg-white/5 group-hover:bg-[#00b4d8]/20 flex items-center justify-center transition-colors flex-shrink-0">
                      <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00b4d8]">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h3
              className="text-white font-bold text-xs uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="flex items-center gap-2.5 text-sm text-[#8fb8cc] hover:text-white transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8]/60 group-hover:bg-[#00b4d8] transition-colors flex-shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div>
            <h3
              className="text-white font-bold text-xs uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <p className="text-[#8fb8cc] text-sm leading-relaxed">
                  1st Floor, D1, Devli Rd,<br />
                  Khanpur, New Delhi — 110080
                </p>
              </li>

              <li className="flex gap-3 items-center">
                <span className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                  </svg>
                </span>
                <a
                  href="tel:+919711430836"
                  className="text-[#8fb8cc] hover:text-white text-sm font-semibold transition-colors"
                >
                  +91 97114 30836
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <span className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div>
                  <p className="text-green-400 text-sm font-bold leading-none">Open 24 Hours</p>
                  <p className="text-[#8fb8cc] text-xs mt-0.5">7 Days · Including Holidays</p>
                </div>
              </li>

              <li className="flex gap-3 items-center">
                <span className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="2"/><path d="m16 8 5 5v4h-5V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </span>
                <p className="text-[#8fb8cc] text-sm">
                  Near Khanpur Metro<br />
                  <span className="text-[10px] text-[#6a9ab2]">(Violet Line)</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6a9ab2] text-xs">
            © {new Date().getFullYear()} Fornix Clinic. All rights reserved.
          </p>
          <p className="text-[#6a9ab2] text-xs text-center">
            Dr. Prince Hirdesh Sharma, MBBS, MS — ENT Specialist, Khanpur, New Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}