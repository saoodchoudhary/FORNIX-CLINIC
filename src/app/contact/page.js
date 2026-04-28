import Link from "next/link";

export const metadata = {
  title: "Contact Fornix Clinic | ENT Specialist, Khanpur, New Delhi",
  description:
    "Contact Fornix Clinic — Khanpur, New Delhi. Call Dr. Prince Hirdesh Sharma, ENT Specialist at +91 97114 30836. Open 24 hours, 7 days a week.",
};

const placeLink =
  "https://www.google.com/maps/place/Dr.+Prince+Hirdesh+Sharma,+MBBS,+MS+(Ear+Nose+Throat+Doctor)+FORNIX+CLINIC/@28.5085319,77.2323599,17z";

const directionsLink =
  "https://www.google.com/maps/dir/?api=1&destination=28.5085319,77.2323599&destination_place_id=ChIJV5HsuboezDkRJi8tIRASuGg&travelmode=driving";

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Address",
    value: "1st Floor, D1, Devli Road, Krishna Park Colony, Khanpur, New Delhi – 110080",
    link: placeLink,
    linkLabel: "Open in Google Maps →",
    external: true,
    accent: "bg-[#e0f7fd] text-[#0096c7]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 97114 30836",
    link: "tel:+919711430836",
    linkLabel: "Tap to Call Now",
    external: false,
    accent: "bg-green-50 text-green-700",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Clinic Hours",
    value: "Open 24 Hours — 7 Days a Week",
    sublabel: "Including Sundays & Public Holidays",
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="m16 8 5 5v4h-5V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    label: "Nearest Metro",
    value: "Khanpur / Badarpur Station",
    sublabel: "Delhi Metro Violet Line",
    accent: "bg-blue-50 text-blue-700",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    label: "Parking",
    value: "Street parking available",
    sublabel: "On Devli Road near the clinic",
    accent: "bg-slate-100 text-slate-600",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge mb-5 block w-fit">Get in Touch</span>
            <h1
              className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Contact Fornix Clinic
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Reach Dr. Prince Hirdesh Sharma directly — call or walk in anytime. No appointment needed. Open <strong className="text-white">24 hours, 7 days a week</strong>.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919711430836"
                className="inline-flex items-center gap-2 bg-white text-[#023e8a] font-bold px-5 py-3 rounded-full hover:bg-[#caf0f8] transition-colors shadow text-sm"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                </svg>
                Call: 97114 30836
              </a>

              <a
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-5 py-3 rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">Reach Us</span>
              <h2
                className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 mb-7"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Clinic Details
              </h2>

              <div className="space-y-3.5">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5 group hover:border-[#90e0ef]/60 hover:bg-[#f0f9ff] transition-all"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.accent}`}>
                      {item.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-slate-900 font-semibold text-sm sm:text-base leading-snug">
                        {item.value}
                      </p>
                      {item.sublabel && (
                        <p className="text-slate-500 text-xs mt-0.5">{item.sublabel}</p>
                      )}
                      {item.link && (
                        <a
                          href={item.link}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-1 text-[#00b4d8] text-xs font-semibold mt-1.5 hover:underline"
                        >
                          {item.linkLabel}
                          <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:+919711430836" className="primary-btn">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                  </svg>
                  Call Now
                </a>

                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#00b4d8] text-[#00b4d8] font-semibold px-5 py-2.5 rounded-full hover:bg-[#00b4d8] hover:text-white transition-all text-sm"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Get Directions
                </a>
              </div>

              <div className="mt-7 relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white p-5">
                <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute -right-2 -bottom-6 w-16 h-16 rounded-full bg-white/5" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🚨</span>
                    <p className="font-bold text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      ENT Emergency?
                    </p>
                  </div>
                  <p className="text-red-100 text-sm mb-4 leading-relaxed">
                    Fornix Clinic is open <strong className="text-white">24 hours a day</strong>. Walk in directly or call — no referral, no appointment needed.
                  </p>
                  <a
                    href="tel:+919711430836"
                    className="inline-flex items-center gap-2 bg-white text-red-600 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-red-50 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                    </svg>
                    Emergency: +91 97114 30836
                  </a>
                </div>
              </div>
            </div>

            <div>
              <span className="section-label">Location</span>
              <h2
                className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Find Us on the Map
              </h2>

              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.456984123!2d77.22978499999999!3d28.5085319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a2b9ec9157%3A0x68b81210212d2f26!2sDr.%20Prince%20Hirdesh%20Sharma%2C%20MBBS%2C%20MS%20(Ear%20Nose%20Throat%20Doctor)%20FORNIX%20CLINIC!5e0!3m2!1sen!2sin!4v1714327200000!5m2!1sen!2sin"
                  width="100%"
                  height="380"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fornix Clinic — Dr. Prince Hirdesh Sharma, Khanpur, New Delhi"
                />
              </div>

              <div className="mt-3 flex items-center justify-between px-1 gap-3">
                <p className="text-slate-400 text-xs">
                  D1, 1st Floor, Devli Rd, Khanpur, New Delhi – 110080
                </p>
                <a
                  href={placeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00b4d8] text-xs font-semibold hover:underline whitespace-nowrap flex items-center gap-1"
                >
                  View larger map
                  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </a>
              </div>

              <div className="mt-6 bg-[#f0f9ff] border border-[#90e0ef]/40 rounded-2xl p-5">
                <h3
                  className="font-bold text-slate-900 text-base mb-4"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  How to Reach Us
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: "🚇",
                      mode: "By Metro",
                      desc: "Take the Violet Line to Khanpur or Badarpur station. The clinic is a short auto/e-rickshaw ride from either station.",
                    },
                    {
                      icon: "🚗",
                      mode: "By Car / Auto",
                      desc: "Use the Get Directions button for direct turn-by-turn navigation to Fornix Clinic on Google Maps.",
                    },
                    {
                      icon: "🚌",
                      mode: "By Bus",
                      desc: "Several DTC routes pass through Khanpur. Get down near Devli Road and continue by walking or auto.",
                    },
                  ].map((route) => (
                    <div key={route.mode} className="flex gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">{route.icon}</span>
                      <div>
                        <p className="text-slate-900 font-semibold text-sm">{route.mode}</p>
                        <p className="text-slate-500 text-xs leading-relaxed mt-0.5">{route.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 bg-[#00b4d8] text-white font-semibold px-5 py-3 rounded-full hover:bg-[#0096c7] transition-colors text-sm"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Open Directions in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-gradient text-white py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to Visit Fornix Clinic?
          </h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto text-sm sm:text-base">
            No appointment needed. Walk in anytime — 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919711430836" className="primary-btn text-base justify-center">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
              </svg>
              Call: +91 97114 30836
            </a>
            <a
              href={directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn text-base justify-center"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}