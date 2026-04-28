import Link from "next/link";

export const metadata = {
  title: "About Dr. Prince Hirdesh Sharma | Fornix Clinic — ENT Specialist, New Delhi",
  description:
    "Dr. Prince Hirdesh Sharma, MBBS, MS — Expert ENT Surgeon at Fornix Clinic, Khanpur, New Delhi. Quick diagnosis, compassionate care, affordable treatment.",
};

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "5000+", label: "Patients Treated" },
  { number: "4.2★", label: "Google Rating" },
  { number: "24/7", label: "Clinic Hours" },
];

const qualifications = [
  {
    deg: "MBBS",
    full: "Bachelor of Medicine & Bachelor of Surgery",
    color: "bg-[#e0f7fd] text-[#0077b6]",
  },
  {
    deg: "MS (ENT)",
    full: "Master of Surgery — Otorhinolaryngology (Ear, Nose & Throat)",
    color: "bg-[#e0f7fd] text-[#0077b6]",
  },
];

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: "Highly Qualified",
    desc: "MBBS + MS in Otorhinolaryngology (ENT) with years of post-graduate clinical experience.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Quick Diagnosis",
    desc: "Known for identifying ENT problems accurately and quickly — saving patients time and money.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Compassionate Care",
    desc: "Treats every patient with warmth, patience, and thorough personalized counselling.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Affordable Treatment",
    desc: "High-quality ENT care at transparent, reasonable consultation and procedure charges.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "24/7 Availability",
    desc: "Fornix Clinic is open round the clock — emergency and regular ENT care, any time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Trusted by Thousands",
    desc: "Rated 4.2★ on Google with 125+ verified positive patient reviews.",
  },
];

const facilities = [
  "Advanced Ear Microscopy & Cleaning",
  "Audiometry & Hearing Assessment",
  "Nasal Endoscopy",
  "Throat & Laryngeal Examination",
  "Vertigo & Balance Assessment (Epley)",
  "Minor ENT Surgical Procedures",
  "Emergency ENT Care (24/7)",
  "FESS (Functional Endoscopic Sinus Surgery)",
  "Hearing Aid Prescription & Fitting",
  "Skin Care Dept — Dr. Pinki",
];

const clinicInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Address",
    value: "1st Floor, D1, Devli Rd, Krishna Park Colony, Khanpur, New Delhi – 110080",
    link: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z"/>
      </svg>
    ),
    label: "Phone",
    value: "+91 97114 30836",
    link: "tel:+919711430836",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "Timings",
    value: "Open 24 Hours, 7 Days a Week",
    link: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    label: "Speciality",
    value: "ENT (Ear, Nose & Throat) + Skin Care",
    link: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/><path d="m16 8 5 5v4h-5V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    label: "Nearest Metro",
    value: "Khanpur / Badarpur (Violet Line)",
    link: null,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="hero-gradient text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge mb-5 block w-fit">About Us</span>
            <h1
              className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Meet Dr. Prince<br className="hidden sm:block" /> Hirdesh Sharma
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              A dedicated ENT specialist with 15+ years of experience — committed to providing the highest standard of Ear, Nose & Throat care in South Delhi.
            </p>
            {/* Inline stat row in hero */}
            <div className="flex flex-wrap gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-2.5 text-center"
                >
                  <p className="text-white font-extrabold text-lg leading-none" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {s.number}
                  </p>
                  <p className="text-[#90e0ef] text-[11px] mt-0.5 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Doctor Profile ────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Image Card */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[320px] rounded-3xl overflow-hidden shadow-2xl border border-[#90e0ef]/30">
                {/* Photo placeholder — replace with: <img src="/doctor.jpg" alt="..." className="w-full aspect-[3/4] object-cover" /> */}
                <div className="aspect-[3/4] bg-gradient-to-br from-[#e0f7fd] via-[#caf0f8] to-[#90e0ef] flex flex-col items-center justify-center gap-3">
                  <div className="w-28 h-28 rounded-full bg-white/40 border-4 border-white/60 flex items-center justify-center">
                    <svg className="w-14 h-14 text-[#0096c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-[#0077b6] text-sm font-medium opacity-70">Add Doctor Photo</p>
                  <p className="text-[#0096c7]/50 text-xs">/public/doctor.jpg</p>
                </div>
                {/* Name overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#012d5a]/95 via-[#012d5a]/80 to-transparent px-6 py-5">
                  <p
                    className="text-white font-bold text-lg leading-tight"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Dr. Prince Hirdesh Sharma
                  </p>
                  <p className="text-[#90e0ef] text-sm mt-0.5">MBBS, MS — ENT Specialist</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="flex gap-0.5">
                      {[1,2,3,4].map((i) => (
                        <svg key={i} viewBox="0 0 20 20" width="13" height="13" fill="#fbbf24"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      ))}
                      <svg viewBox="0 0 20 20" width="13" height="13" fill="#fbbf24" opacity="0.5"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    </div>
                    <span className="text-[#caf0f8] text-xs">4.2 (125 reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <span className="section-label">Our Doctor</span>
              <h2
                className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 mb-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Dr. Prince Hirdesh Sharma
              </h2>
              <p className="text-[#0096c7] font-semibold mb-5 text-sm tracking-wide">
                MBBS, MS (ENT) — ENT Surgeon & Specialist · Khanpur, New Delhi
              </p>

              <div className="space-y-4 mb-6">
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Dr. Prince Hirdesh Sharma is a highly skilled ENT (Ear, Nose & Throat) Surgeon based in Khanpur, New Delhi. He holds an MBBS degree and a Master of Surgery (MS) specializing in Otorhinolaryngology — making him one of the most qualified ENT specialists in South Delhi.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Over the years, he has successfully treated thousands of patients — from ear infections and hearing loss to complex sinus surgeries and vertigo management. His clinic, Fornix Clinic, has become a trusted healthcare destination in the Khanpur area.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Patients consistently praise his quick, accurate diagnosis, compassionate counselling, and affordable treatment. The clinic operates 24 hours a day — ensuring quality ENT care is accessible at any time.
                </p>
              </div>

              {/* Qualifications */}
              <div className="mb-7">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Medical Qualifications
                </p>
                <div className="flex flex-col gap-3">
                  {qualifications.map((q) => (
                    <div
                      key={q.deg}
                      className="flex items-center gap-3 bg-[#f0f9ff] rounded-xl px-4 py-3 border border-[#90e0ef]/30"
                    >
                      <span className={`text-xs font-extrabold px-3 py-1.5 rounded-lg flex-shrink-0 ${q.color}`}>
                        {q.deg}
                      </span>
                      <span className="text-slate-700 text-sm">{q.full}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key strengths inline */}
              <div className="flex flex-wrap gap-2 mb-7">
                {["15+ Years Experience","Quick Diagnosis","Affordable Care","Open 24/7","Walk-ins Welcome"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[#e0f7fd] text-[#0077b6] font-semibold px-3 py-1.5 rounded-full border border-[#90e0ef]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919711430836"
                  className="primary-btn"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z"/>
                  </svg>
                  Book Appointment
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 border-2 border-[#00b4d8] text-[#00b4d8] font-semibold px-5 py-2.5 rounded-full hover:bg-[#00b4d8] hover:text-white transition-all text-sm"
                >
                  View Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#f0f9ff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Why Patients Choose Us</span>
            <h2
              className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              The Fornix Clinic Difference
            </h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="mt-4 text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
              Here's why hundreds of patients in South Delhi trust Dr. Prince Hirdesh Sharma for their ENT care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-hover group flex gap-4 items-start"
              >
                <div className="w-11 h-11 rounded-xl bg-[#e0f7fd] group-hover:bg-[#00b4d8] text-[#0096c7] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-200">
                  {item.icon}
                </div>
                <div>
                  <h3
                    className="font-bold text-slate-900 mb-1 text-[15px]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clinic Info ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Our Clinic</span>
            <h2
              className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              About Fornix Clinic
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left: Info + description */}
            <div>
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                Fornix Clinic is a dedicated ENT specialty clinic located in Khanpur, South Delhi. Equipped with modern diagnostic and treatment tools — including nasal endoscopes, audiometry equipment, and ear microsurgery instruments — it delivers world-class ENT care at affordable rates.
              </p>
              <p className="text-slate-600 leading-relaxed mb-7 text-sm sm:text-base">
                The clinic also houses{" "}
                <strong className="text-slate-800">Dr. Pinki Skin Care</strong> — a dedicated dermatology department — making Fornix Clinic a one-stop medical facility for the whole family.
              </p>

              {/* Info list with icons */}
              <div className="space-y-3">
                {clinicInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-3 bg-[#f8fcff] rounded-xl px-4 py-3 border border-[#90e0ef]/25"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#e0f7fd] text-[#0096c7] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {info.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider mb-0.5">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-700 text-sm font-semibold hover:text-[#00b4d8] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-700 text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="tel:+919711430836"
                  className="primary-btn text-sm"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z"/>
                  </svg>
                  Call Now
                </a>
                <a
                  href="https://maps.google.com/?q=Fornix+Clinic+D1+Devli+Rd+Khanpur+New+Delhi+110080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#00b4d8] text-[#00b4d8] font-semibold px-5 py-2.5 rounded-full hover:bg-[#00b4d8] hover:text-white transition-all text-sm"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>

            {/* Right: Facilities card */}
            <div className="bg-[#f0f9ff] rounded-3xl p-7 sm:p-8 border border-[#90e0ef]/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-[#00b4d8] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </span>
                <h3
                  className="font-bold text-slate-900 text-lg"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Clinic Facilities
                </h3>
              </div>

              <ul className="space-y-3">
                {facilities.map((facility, idx) => (
                  <li
                    key={facility}
                    className="flex items-center gap-3 text-slate-700 text-sm group"
                  >
                    <span className="w-6 h-6 rounded-lg bg-[#00b4d8]/10 border border-[#00b4d8]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00b4d8] group-hover:border-[#00b4d8] transition-all">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#00b4d8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {facility}
                    {facility.includes("Dr. Pinki") && (
                      <span className="ml-auto text-[10px] bg-[#00b4d8]/10 text-[#0077b6] font-bold px-2 py-0.5 rounded-full">
                        Skin Care
                      </span>
                    )}
                    {facility.includes("24/7") && (
                      <span className="ml-auto text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">
                        Always Open
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Bottom note */}
              <div className="mt-6 pt-5 border-t border-[#90e0ef]/30 flex items-start gap-3">
                <span className="text-xl flex-shrink-0">ℹ️</span>
                <p className="text-slate-500 text-xs leading-relaxed">
                  All facilities are available at the clinic premises. Emergency ENT care is available 24 hours — walk-ins are always welcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="hero-gradient text-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-[#caf0f8] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open 24 Hours · Walk-ins Welcome
          </div>
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to Visit Fornix Clinic?
          </h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto leading-relaxed">
            Get expert ENT care from Dr. Prince Hirdesh Sharma — no referral needed, affordable charges, and genuine compassionate care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919711430836"
              className="primary-btn text-base justify-center"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z"/>
              </svg>
              📞 Call Now: 97114 30836
            </a>
            <Link
              href="/contact"
              className="outline-btn text-base justify-center"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Find Us on Map
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}