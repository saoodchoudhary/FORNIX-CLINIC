import Link from "next/link";

export const metadata = {
  title: "ENT Services | Fornix Clinic — Dr. Prince Hirdesh Sharma",
  description:
    "Fornix Clinic offers expert ENT services including ear infections, hearing loss, sinusitis, tonsillitis, vertigo, and more in Khanpur, New Delhi.",
};

const services = [
  {
    icon: "👂",
    title: "Ear Disorders",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
    conditions: [
      "Ear Infections (Otitis Media & Externa)",
      "Ear Wax Removal & Ear Cleaning",
      "Hearing Loss & Deafness",
      "Tinnitus (Ringing in Ears)",
      "Eardrum Perforation",
      "Ear Discharge (Otorrhoea)",
      "Otosclerosis",
      "Mastoiditis",
    ],
    procedures: ["Ear Microsurgery", "Myringoplasty", "Mastoidectomy", "Grommet Insertion"],
  },
  {
    icon: "👃",
    title: "Nose & Sinus",
    color: "bg-cyan-50 border-cyan-200",
    iconBg: "bg-cyan-100",
    conditions: [
      "Sinusitis (Acute & Chronic)",
      "Nasal Polyps",
      "Deviated Nasal Septum",
      "Allergic Rhinitis",
      "Nasal Blockage",
      "Nose Bleeds (Epistaxis)",
      "Smell Disorders",
      "Nasal Fractures",
    ],
    procedures: ["FESS (Endoscopic Sinus Surgery)", "Septoplasty", "Turbinoplasty", "Nasal Polyp Removal"],
  },
  {
    icon: "🫁",
    title: "Throat & Voice",
    color: "bg-indigo-50 border-indigo-200",
    iconBg: "bg-indigo-100",
    conditions: [
      "Tonsillitis & Adenoiditis",
      "Sore Throat & Pharyngitis",
      "Voice Disorders & Hoarseness",
      "Laryngitis",
      "Throat Infections",
      "Acid Reflux (LPR/GERD)",
      "Snoring",
      "Swallowing Difficulties",
    ],
    procedures: ["Tonsillectomy", "Adenoidectomy", "Microlaryngoscopy", "UPPP for Snoring"],
  },
  {
    icon: "🌀",
    title: "Vertigo & Balance",
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100",
    conditions: [
      "BPPV (Benign Positional Vertigo)",
      "Labyrinthitis",
      "Meniere's Disease",
      "Vestibular Neuritis",
      "Dizziness & Imbalance",
      "Motion Sickness",
    ],
    procedures: ["Epley Maneuver", "Vestibular Rehabilitation", "Balance Testing"],
  },
  {
    icon: "😴",
    title: "Snoring & Sleep Apnea",
    color: "bg-rose-50 border-rose-200",
    iconBg: "bg-rose-100",
    conditions: [
      "Obstructive Sleep Apnea (OSA)",
      "Chronic Snoring",
      "Upper Airway Obstruction",
      "Pediatric Sleep Problems",
    ],
    procedures: ["Sleep Study Referral", "UPPP Surgery", "Adenotonsillectomy", "Lifestyle Counselling"],
  },
  {
    icon: "🔊",
    title: "Hearing & Audiometry",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
    conditions: [
      "Conductive Hearing Loss",
      "Sensorineural Hearing Loss",
      "Sudden Hearing Loss",
      "Pediatric Hearing Problems",
      "Age-Related Hearing Loss",
    ],
    procedures: ["Pure Tone Audiometry", "Tympanometry", "Hearing Aid Prescription", "Pediatric Hearing Screening"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              Our Services
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Comprehensive ENT Care
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              From routine ear cleaning to complex ENT surgeries — Dr. Prince Hirdesh Sharma provides complete Ear, Nose & Throat care at Fornix Clinic.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">What We Treat</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Our ENT Services</h2>
            <div className="section-divider mx-auto mt-4"></div>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              We offer a full spectrum of ENT services for adults and children. All consultations are with Dr. Prince Hirdesh Sharma, MBBS, MS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className={`rounded-2xl border p-6 card-hover ${service.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${service.iconBg}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Conditions Treated</h4>
                    <ul className="space-y-1">
                      {service.conditions.map((c) => (
                        <li key={c} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Procedures</h4>
                    <ul className="space-y-1">
                      {service.procedures.map((p) => (
                        <li key={p} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Your Visit to Fornix Clinic</h2>
            <div className="section-divider mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: "📞", title: "Book Appointment", desc: "Call us at +91 97114 30836 or walk in directly. No prior appointment needed." },
              { step: "02", icon: "🩺", title: "Consultation", desc: "Dr. Sharma will listen to your concerns and conduct a thorough ENT examination." },
              { step: "03", icon: "🔬", title: "Diagnosis", desc: "Using advanced tools like endoscopy and audiometry for accurate diagnosis." },
              { step: "04", icon: "💊", title: "Treatment", desc: "Personalized treatment plan — medical or surgical — with full counselling." },
            ].map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center card-hover">
                <span className="inline-block bg-blue-700 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-3">{step.step}</span>
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="section-divider mx-auto mt-4"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need a referral to see Dr. Prince Hirdesh Sharma?",
                a: "No, you do not need a referral. You can directly visit Fornix Clinic or call to book a consultation.",
              },
              {
                q: "What conditions does an ENT doctor treat?",
                a: "An ENT specialist treats disorders of the ear (infections, hearing loss), nose (sinusitis, polyps), throat (tonsillitis, voice problems), and related structures like the head and neck.",
              },
              {
                q: "Is the clinic open on Sundays and holidays?",
                a: "Yes, Fornix Clinic is open 24 hours a day, 7 days a week, including Sundays and public holidays.",
              },
              {
                q: "Are consultation charges affordable?",
                a: "Yes, Dr. Sharma is well-known for providing high-quality care at reasonable and affordable rates.",
              },
              {
                q: "Does the clinic treat children as well?",
                a: "Absolutely. Dr. Sharma treats patients of all ages, including infants, children, and elderly patients.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">Q: {faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Need ENT Consultation?</h2>
          <p className="text-blue-100 mb-8">Visit Fornix Clinic in Khanpur, New Delhi or call us now.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919711430836" className="bg-white text-blue-800 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
              📞 +91 97114 30836
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              📍 Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
