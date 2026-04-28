export const metadata = {
  title: "Contact Fornix Clinic | Dr. Prince Hirdesh Sharma, Khanpur, New Delhi",
  description:
    "Contact Fornix Clinic at 1st Floor, D1, Devli Rd, Khanpur, New Delhi. Call Dr. Prince Hirdesh Sharma at +91 97114 30836. Open 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Visit Fornix Clinic
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              We are located in Khanpur, New Delhi and open 24 hours a day. Walk in or call us to book your ENT consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "📞",
                title: "Call Us",
                value: "+91 97114 30836",
                action: { href: "tel:+919711430836", label: "Call Now" },
                bg: "bg-blue-50 border-blue-200",
              },
              {
                icon: "📍",
                title: "Our Location",
                value: "1st Floor, D1, Devli Rd, Krishna Park Colony, Khanpur, New Delhi – 110080",
                action: {
                  href: "https://maps.google.com/?q=Fornix+Clinic+Khanpur+New+Delhi",
                  label: "Get Directions",
                  external: true,
                },
                bg: "bg-cyan-50 border-cyan-200",
              },
              {
                icon: "🕐",
                title: "Working Hours",
                value: "Open 24 Hours — 7 Days a Week",
                sub: "Including Sundays & Public Holidays",
                bg: "bg-green-50 border-green-200",
              },
            ].map((card) => (
              <div key={card.title} className={`rounded-2xl border p-6 text-center card-hover ${card.bg}`}>
                <div className="text-4xl mb-3">{card.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{card.value}</p>
                {card.sub && <p className="text-gray-500 text-xs mb-3">{card.sub}</p>}
                {card.action && (
                  <a
                    href={card.action.href}
                    target={card.action.external ? "_blank" : undefined}
                    rel={card.action.external ? "noopener noreferrer" : undefined}
                    className="inline-block bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-800 transition-colors"
                  >
                    {card.action.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Map + Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map Embed */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Us on Map</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.183!2d77.245!3d28.516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce17b2e4b32ad%3A0x7f2e3a6e3bfb4c73!2sFornix%20Clinic!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fornix Clinic Location Map"
                ></iframe>
              </div>
              <a
                href="https://maps.google.com/?q=Fornix+Clinic+Khanpur+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-blue-700 text-sm font-medium hover:underline"
              >
                📍 Open in Google Maps →
              </a>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Clinic Information</h2>

              <div className="space-y-5">
                <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Address</h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      Fornix Clinic, 1st Floor, D1, Devli Road,<br />
                      Krishna Park Colony, Khanpur,<br />
                      New Delhi, Delhi – 110080
                    </p>
                    <p className="text-gray-400 text-xs mt-1">Plus Code: G65J+CW New Delhi, Delhi</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Phone</h3>
                    <a href="tel:+919711430836" className="text-blue-700 font-semibold text-base mt-1 block hover:underline">
                      +91 97114 30836
                    </a>
                    <p className="text-gray-400 text-xs mt-1">Available 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-700 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Working Hours</h3>
                    <div className="mt-2 space-y-1">
                      {[
                        { day: "Monday – Sunday", time: "Open 24 Hours" },
                        { day: "Public Holidays", time: "Open 24 Hours" },
                        { day: "Emergency Care", time: "Always Available" },
                      ].map((h) => (
                        <div key={h.day} className="flex justify-between text-sm">
                          <span className="text-gray-600">{h.day}</span>
                          <span className="text-green-600 font-medium">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-700 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Consulting Doctor</h3>
                    <p className="text-gray-800 font-medium text-sm mt-1">Dr. Prince Hirdesh Sharma</p>
                    <p className="text-gray-500 text-xs">MBBS, MS — ENT (Ear, Nose & Throat)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🚌", mode: "By Bus", desc: "Take buses towards Khanpur. Stop at Devli Road." },
              { icon: "🚇", mode: "By Metro", desc: "Nearest metro: Khanpur. Take auto/cab from there." },
              { icon: "🚗", mode: "By Car / Auto", desc: "D1, Devli Rd, Krishna Park Colony, Khanpur. Use Google Maps." },
            ].map((t) => (
              <div key={t.mode} className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                <div className="text-2xl mb-2">{t.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{t.mode}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready for Your Consultation?</h2>
          <p className="text-blue-100 mb-8">Call us anytime — we are open 24 hours, 7 days a week.</p>
          <a
            href="tel:+919711430836"
            className="bg-white text-blue-800 font-semibold px-10 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg text-lg"
          >
            📞 +91 97114 30836
          </a>
        </div>
      </section>
    </>
  );
}
