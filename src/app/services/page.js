import Link from "next/link";
import { services, visitSteps, serviceFaqs } from "@/lib/services-data";

export const metadata = {
  title: "ENT Services | Fornix Clinic — Dr. Prince Hirdesh Sharma",
  description:
    "Complete ENT services at Fornix Clinic: ear infections, hearing loss, sinusitis, tonsillitis, vertigo, snoring, and audiometry care. Khanpur, New Delhi.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="hero-gradient text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge mb-5 block w-fit">Our Services</span>
            <h1
              className="text-3xl sm:text-5xl font-extrabold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Comprehensive ENT Care
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              From routine consultations to advanced procedures — Fornix Clinic
              provides focused care for ear, nose, throat, vertigo, hearing, and
              sleep-related conditions, available <strong className="text-white">24 hours a day</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">What We Treat</span>
            <h2
              className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Specialized ENT Services
            </h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              All consultations are handled by Dr. Prince Hirdesh Sharma, MBBS,
              MS (ENT) — treatment tailored for both adults and children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <article
                key={service.id}
                className="rounded-3xl border border-[#90e0ef]/40 bg-[#f0f9ff] overflow-hidden card-hover"
              >
                {/* Service Image */}
                <div className="w-full h-48 sm:h-52 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={`${service.title} treatment at Fornix Clinic`}
                    width={600}
                    height={280}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Gradient overlay at bottom of image */}
                  <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#f0f9ff] to-transparent" />
                  {/* Icon badge on image */}
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-2xl shadow-md">
                    {service.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                  <h3
                    className="text-xl font-bold text-slate-900 mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Conditions */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        Conditions Treated
                      </h4>
                      <ul className="space-y-2">
                        {service.conditions.map((condition) => (
                          <li
                            key={condition}
                            className="text-sm text-slate-700 flex items-start gap-2"
                          >
                            <span className="text-[#00b4d8] mt-0.5 flex-shrink-0 font-bold leading-none">
                              •
                            </span>
                            <span>{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Procedures */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        Procedures Available
                      </h4>
                      <ul className="space-y-2">
                        {service.procedures.map((procedure) => (
                          <li
                            key={procedure}
                            className="text-sm text-slate-700 flex items-start gap-2"
                          >
                            <span className="text-green-500 mt-0.5 flex-shrink-0">
                              ✓
                            </span>
                            <span>{procedure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Book CTA per card */}
                  <div className="mt-6 pt-5 border-t border-[#90e0ef]/40">
                    <a
                      href="tel:+919711430836"
                      className="inline-flex items-center gap-2 text-[#00b4d8] font-semibold text-sm hover:text-[#0096c7] transition-colors"
                    >
                      📞 Book consultation for {service.title} →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit Steps ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#f8fcff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">How It Works</span>
            <h2
              className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Your Visit to Fornix Clinic
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visitSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center card-hover"
              >
                <span className="inline-block bg-[#00b4d8] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {item.step}
                </span>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3
                  className="font-bold text-slate-900 mb-2 text-sm"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">FAQ</span>
            <h2
              className="mt-2 text-3xl font-bold text-slate-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {serviceFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6"
              >
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                  <span className="text-[#00b4d8] flex-shrink-0 mt-0.5">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────── */}
      <section className="hero-gradient text-white py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Need ENT Consultation?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
            Visit Fornix Clinic in Khanpur, New Delhi — walk-ins welcome, open
            24 hours, no referral needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919711430836"
              className="primary-btn text-base justify-center"
            >
              📞 +91 97114 30836
            </a>
            <Link
              href="/contact"
              className="outline-btn text-base justify-center"
            >
              📍 Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}