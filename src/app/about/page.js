import Link from "next/link";

export const metadata = {
  title: "About Dr. Prince Hirdesh Sharma | Fornix Clinic",
  description:
    "Learn about Dr. Prince Hirdesh Sharma, MBBS MS — ENT Specialist at Fornix Clinic, Khanpur, New Delhi. Expert in ear, nose, throat, and vertigo treatment.",
};

const qualifications = [
  { year: "MBBS", desc: "Bachelor of Medicine & Bachelor of Surgery" },
  { year: "MS", desc: "Master of Surgery — ENT (Ear, Nose & Throat)" },
];

const highlights = [
  { icon: "🎓", title: "Highly Qualified", desc: "MBBS + MS (ENT) with years of post-graduate clinical experience." },
  { icon: "💡", title: "Quick Diagnosis", desc: "Known for identifying problems precisely and quickly, saving patients time and money." },
  { icon: "❤️", title: "Compassionate Care", desc: "Treats every patient with warmth, patience, and thorough counselling." },
  { icon: "💰", title: "Affordable Treatment", desc: "Reasonable charges without compromising on the quality of care." },
  { icon: "🌙", title: "24/7 Availability", desc: "Fornix Clinic is open round the clock for emergency and regular care." },
  { icon: "🏆", title: "Trusted by Thousands", desc: "Rated 4.2★ on Google with 125+ positive patient reviews." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="hero-gradient text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Meet Dr. Prince Hirdesh Sharma
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              A dedicated ENT specialist committed to providing the highest standard of care for Ear, Nose, and Throat conditions in New Delhi.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Placeholder */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-xl">
                {/* Replace with actual doctor image: <Image src="/doctor.jpg" fill alt="Dr. Prince Hirdesh Sharma" className="object-cover" /> */}
                <div className="text-center text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm font-medium text-blue-500">Doctor&rsquo;s Photo</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 p-5">
                  <p className="text-white font-bold text-lg">Dr. Prince Hirdesh Sharma</p>
                  <p className="text-blue-200 text-sm">MBBS, MS — ENT Specialist</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-400 text-sm">★★★★</span>
                    <span className="text-yellow-300 text-sm">★</span>
                    <span className="text-blue-200 text-xs ml-1">4.2 (125 reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Our Doctor</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Dr. Prince Hirdesh Sharma
              </h2>
              <p className="text-blue-700 font-medium mb-5">MBBS, MS (ENT) | Surgeon & ENT Specialist</p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. Prince Hirdesh Sharma is a highly skilled and compassionate ENT (Ear, Nose & Throat) Surgeon based in Khanpur, New Delhi. He completed his MBBS and went on to pursue a Master of Surgery (MS) specializing in Otorhinolaryngology (ENT).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over the years, he has treated thousands of patients for a wide range of ENT conditions — from ear infections and hearing loss to complex sinus surgeries and vertigo management. His clinic, Fornix Clinic, has become a trusted healthcare destination in South Delhi.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Patients appreciate his ability to quickly diagnose problems, explain treatment options in a simple and reassuring way, and provide effective, affordable care. The clinic operates 24 hours a day, ensuring patients can access care whenever they need it.
              </p>

              {/* Qualifications */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Qualifications</h3>
                <div className="flex flex-col gap-2">
                  {qualifications.map((q) => (
                    <div key={q.year} className="flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded-full">{q.year}</span>
                      <span className="text-gray-600 text-sm">{q.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="tel:+919711430836"
                className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition-colors"
              >
                📞 Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Why Patients Choose Us</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">The Fornix Clinic Difference</h2>
            <div className="section-divider mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Our Clinic</span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900 mb-4">About Fornix Clinic</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fornix Clinic is a dedicated ENT specialty clinic located in Khanpur, New Delhi. Established to serve patients in South Delhi with world-class ENT care at affordable rates, the clinic is equipped with modern diagnostic and treatment equipment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The clinic also houses a skin care department — Dr. Pinki Skin Care — offering comprehensive dermatological services alongside ENT treatment, making it a one-stop medical facility for families.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Address", value: "1st Floor, D1, Devli Rd, Krishna Park Colony, Khanpur, New Delhi – 110080" },
                  { label: "Phone", value: "+91 97114 30836" },
                  { label: "Timings", value: "Open 24 Hours, 7 Days a Week" },
                  { label: "Speciality", value: "ENT (Ear, Nose & Throat)" },
                ].map((info) => (
                  <div key={info.label} className="flex gap-3">
                    <span className="text-blue-700 font-semibold text-sm min-w-20">{info.label}:</span>
                    <span className="text-gray-600 text-sm">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 text-xl mb-6">Clinic Facilities</h3>
              <ul className="space-y-3">
                {[
                  "Advanced Ear Microscopy & Cleaning",
                  "Audiometry & Hearing Assessment",
                  "Nasal Endoscopy",
                  "Throat & Laryngeal Examination",
                  "Vertigo & Balance Assessment",
                  "Minor Surgical Procedures",
                  "Emergency ENT Care (24/7)",
                  "Skin Care Department (Dr. Pinki)",
                ].map((facility) => (
                  <li key={facility} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Visit Fornix Clinic?</h2>
          <p className="text-blue-100 mb-8">Get expert ENT care from Dr. Prince Hirdesh Sharma today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919711430836" className="bg-white text-blue-800 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
              📞 Call Now
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              📍 Find Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
