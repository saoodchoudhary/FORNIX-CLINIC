import Link from "next/link";
import { services, reviews, clinicInfo } from "@/lib/data";

function StarRating({ count }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true">
    <path fill="#4285F4" d="M47.53 24.56c0-1.56-.14-3.06-.4-4.5H24v8.51h13.22c-.57 2.93-2.3 5.41-4.9 7.08l7.9 6.13c4.62-4.27 7.31-10.56 7.31-17.22z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.15 15.9-5.82l-7.9-6.13c-2.15 1.44-4.9 2.29-8 2.29-6.16 0-11.38-4.16-13.24-9.76l-8.1 6.26C6.15 42.72 14.44 48 24 48z" />
    <path fill="#FBBC05" d="M10.76 28.58A13.89 13.89 0 0 1 10 24c0-1.59.27-3.13.76-4.58L2.66 13.16A23.94 23.94 0 0 0 0 24c0 3.86.92 7.5 2.66 10.84l8.1-6.26z" />
    <path fill="#EA4335" d="M24 9.5c3.46 0 6.58 1.19 9.03 3.52l6.77-6.77C35.93 2.36 30.49 0 24 0 14.44 0 6.15 5.28 2.66 13.16l8.1 6.26C12.62 13.66 17.84 9.5 24 9.5z" />
  </svg>
);

const reviewLink =
  "https://www.google.com/maps/place/Dr.+Prince+Hirdesh+Sharma,+MBBS,+MS+(Ear+Nose+Throat+Doctor)+FORNIX+CLINIC/@28.5085319,77.229785,17z/data=!3m1!5s0x390ce1a27bd468c7:0x959eb427bc7904b5!4m8!3m7!1s0x390ce1a2b9ec9157:0x68b81210212d2f26!8m2!3d28.5085319!4d77.2323599!9m1!1b1!16s%2Fg%2F1pp2tjgxg?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D";

const heroImage =
  "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80";

const fallbackServices = [
  {
    id: 1,
    title: "Ear Disorders",
    shortDesc: "Treatment for ear pain, wax blockage, hearing issues, infection, discharge, and tinnitus.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Doctor consulting patient in clinic",
    conditions: ["Ear infection", "Hearing loss", "Ear wax"],
  },
  {
    id: 2,
    title: "Nose & Sinus Care",
    shortDesc: "Expert care for sinus blockage, allergy, deviated septum, nasal polyps, and chronic cold issues.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Modern clinic consultation room",
    conditions: ["Sinusitis", "Nasal blockage", "Allergy"],
  },
  {
    id: 3,
    title: "Throat & Voice",
    shortDesc: "Consultation for throat pain, tonsils, swallowing difficulty, hoarseness, and voice-related concerns.",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Medical doctor in hospital environment",
    conditions: ["Tonsillitis", "Sore throat", "Voice disorder"],
  },
];

const safeServices =
  Array.isArray(services) && services.length > 0 ? services : fallbackServices;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden hero-gradient text-white">
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background:
              "linear-gradient(135deg, rgba(2,62,138,0.08) 0%, rgba(0,180,216,0.12) 100%)",
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-white/95">
                  ENT Specialist · Khanpur · New Delhi
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Advanced ENT Care for
                <span className="block text-[#90e0ef]">Ear, Nose & Throat Problems</span>
              </h1>

              <p className="text-[#caf0f8] font-semibold text-sm sm:text-base mb-4 tracking-wide">
                Dr. Prince Hirdesh Sharma · MBBS, MS (ENT)
              </p>

              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                FORNIX CLINIC offers dedicated ENT consultation, diagnosis, and treatment in
                Khanpur, New Delhi. Patients visit for trusted care, direct doctor access,
                and convenient support with extended clinic availability.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center mb-8">
                <a href={clinicInfo.phoneHref} className="primary-btn justify-center sm:justify-start">
                  📞 Call: {clinicInfo.phone}
                </a>
                <Link href="/services" className="outline-btn justify-center sm:justify-start">
                  Explore Services →
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-xl">
                {[
                  { value: clinicInfo.rating || "4.1", label: "Google Rating" },
                  { value: clinicInfo.reviewCount || "125+", label: "Reviews" },
                  { value: "24/7", label: "Support" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm px-3 py-3 text-center"
                  >
                    <p
                      className="text-lg sm:text-xl font-extrabold text-white"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.value}
                    </p>
                    <p className="text-[11px] sm:text-xs text-blue-100 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl bg-white/10 backdrop-blur-sm">
                <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                  <img
                    src={heroImage}
                    alt="Professional medical clinic consultation"
                    width={1200}
                    height={1400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#023e8a]/90 via-[#023e8a]/35 to-transparent" />
                  <div className="absolute left-5 right-5 bottom-5">
                    <div className="rounded-2xl bg-white/12 backdrop-blur-md border border-white/15 p-4">
                      <p
                        className="text-white font-bold text-lg"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {clinicInfo.doctor}
                      </p>
                      <p className="text-[#caf0f8] text-sm">
                        {clinicInfo.qualifications} · {clinicInfo.specialty}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                        <span className="rounded-full bg-white/15 px-3 py-1 text-white/95">
                          Trusted ENT Care
                        </span>
                        <span className="rounded-full bg-white/15 px-3 py-1 text-white/95">
                          Walk-ins Welcome
                        </span>
                        <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-200">
                          Open 24 Hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="absolute -bottom-4 -left-2 sm:-left-5 rounded-2xl bg-white text-slate-800 shadow-xl border border-slate-100 px-4 py-3">
                <div className="flex items-center gap-2">
                  <GoogleIcon />
                  <span className="font-bold text-sm">{clinicInfo.rating || "4.1"}/5 Rating</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Based on clinic review listings [web:78][web:59]
                </p> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#caf0f8] border-y border-[#90e0ef]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-[#023e8a]">
            <div className="flex items-center gap-2">
              <span className="text-[#0096c7]">📍</span>
              <span className="font-medium text-xs sm:text-sm">{clinicInfo.addressShort}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#0096c7]">📞</span>
              <a href={clinicInfo.phoneHref} className="font-bold hover:underline text-xs sm:text-sm">
                {clinicInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold animate-pulse">●</span>
              <span className="font-semibold text-green-700 text-xs sm:text-sm">
                Open 24 Hours · 7 Days a Week
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">What We Treat</span>
            <h2
              className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our ENT Services
            </h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
              The clinic provides ENT consultation and treatment support for ear, nose, throat,
              sinus, and related concerns. Listings also show the clinic as an ENT and skin care
              center in Khanpur, New Delhi. 
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {safeServices.map((s, idx) => (
              <div
                key={s.id ?? s.title ?? idx}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.image || heroImage}
                    alt={s.imageAlt || s.title || "ENT service"}
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#023e8a]/80 via-[#023e8a]/20 to-transparent" />
                  <h3
                    className="absolute bottom-3 left-4 right-4 text-white font-bold text-xl leading-tight"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                </div>

                <div className="p-5">
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {s.shortDesc ||
                      s.desc ||
                      "Professional diagnosis and treatment support for common and advanced ENT conditions."}
                  </p>

                  {Array.isArray(s.conditions) && s.conditions.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {s.conditions.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-100 px-2.5 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 text-[#00b4d8] font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <span className="text-[10px] text-slate-400 font-medium bg-slate-50 px-2 py-1 rounded-full">
                      {Array.isArray(s.conditions) ? s.conditions.length : "Multiple"} conditions
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#00b4d8] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#0096c7] transition-colors shadow-md hover:shadow-lg"
            >
              View All Services & Procedures
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#023e8a] py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 sm:divide-x sm:divide-white/20">
            {[
              { value: clinicInfo.experience, unit: "+", label: "Experience" },
              { value: clinicInfo.patients, unit: "+", label: "Happy Patients" },
              { value: clinicInfo.rating, unit: "/5", label: "Google Rating" },
              { value: "24", unit: "/7", label: "Clinic Hours" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:px-6">
                <p
                  className="text-3xl sm:text-4xl font-extrabold text-white leading-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {stat.value}
                  <span className="text-[#90e0ef]">{stat.unit}</span>
                </p>
                <p className="text-[#90e0ef] text-xs sm:text-sm mt-1.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
                  alt="Doctor consultation in clinic"
                  width={1200}
                  height={900}
                  className="w-full h-[340px] sm:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 max-w-[210px]">
                <p className="text-[#0096c7] text-xs font-bold uppercase tracking-wider mb-2">
                  Qualifications
                </p>
                <div className="space-y-2">
                  <span className="inline-flex bg-[#caf0f8] text-[#0077b6] text-[10px] font-bold px-2.5 py-1 rounded-full">
                    MBBS
                  </span>
                  <br />
                  <span className="inline-flex bg-[#caf0f8] text-[#0077b6] text-[10px] font-bold px-2.5 py-1 rounded-full">
                    MS (ENT)
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2">
                  <span className="text-amber-400 text-sm">★★★★★</span>
                  <span className="text-slate-400 text-[10px]">{clinicInfo.rating}/5</span>
                </div>
              </div>
            </div>

            <div>
              <span className="section-label">Meet the Doctor</span>
              <h2
                className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {clinicInfo.doctor}
              </h2>
              <p className="text-[#0096c7] font-semibold mb-5 text-sm">
                {clinicInfo.qualifications} · {clinicInfo.specialty}
              </p>

              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                Dr. Prince Hirdesh Sharma practices at FORNIX CLINIC in Khanpur, New Delhi,
                where patients can reach the clinic directly on the listed contact number.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                Third-party listings describe the clinic as an ENT-focused facility with patient
                reviews and regular public visibility, which supports its local trust presence.
              </p>

              <ul className="space-y-2.5 mb-8">
                {[
                  "Quick and focused ENT consultation",
                  "Clear communication with patients",
                  "Support for ear, nose and throat conditions",
                  "Accessible location in Khanpur, New Delhi",
                  "Direct phone support for appointments",
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-[#00b4d8] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">
                      ✓
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a href={clinicInfo.phoneHref} className="primary-btn">
                  📞 Book Appointment
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border-2 border-[#00b4d8] text-[#00b4d8] font-semibold px-6 py-2.5 rounded-full hover:bg-[#00b4d8] hover:text-white transition-colors text-sm"
                >
                  About Dr. Sharma →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Patient Voices</span>
            <h2
              className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              What Our Patients Say
            </h2>
            <div className="section-divider mx-auto mt-4" />
            <div className="mt-4 flex items-center justify-center gap-2">
              <GoogleIcon />
              <p className="text-slate-500 text-sm">
                Review-related clinic listings show public patient feedback for Fornix Clinic.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="relative bg-[#f8fafc] border border-slate-100 rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span
                  className="absolute top-5 right-6 text-6xl text-[#caf0f8] leading-none select-none font-serif"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <StarRating count={r.stars} />
                <p className="mt-4 text-slate-600 text-sm leading-relaxed relative z-10">
                  &ldquo;{r.text}&rdquo;
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#0077b6] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{r.name}</p>
                      <p className="text-slate-400 text-xs">Google Review · {r.time}</p>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={reviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00b4d8] font-semibold text-sm hover:underline"
            >
              Read Google reviews for Fornix Clinic
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="relative hero-gradient text-white py-16 sm:py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-5">
            Walk-ins Welcome · No Referral Needed
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Book Your ENT Consultation Today
          </h2>
          <p className="text-blue-100 mb-8 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Visit Fornix Clinic in Khanpur, New Delhi for ENT consultation and clinic support.
            Public listings show the clinic phone number as 9711430836.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={clinicInfo.phoneHref} className="primary-btn text-base justify-center">
              📞 {clinicInfo.phone}
            </a>
            <Link href="/contact" className="outline-btn text-base justify-center">
              📍 Get Directions
            </Link>
          </div>

          <p className="mt-8 text-blue-200 text-sm opacity-85">{clinicInfo.address}</p>
        </div>
      </section>
    </>
  );
}