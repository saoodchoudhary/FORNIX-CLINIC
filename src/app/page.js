import Link from "next/link";

const services = [
  {
    icon: "👂",
    title: "Ear Disorders",
    desc: "Ear infections, hearing loss, ear cleaning, tinnitus, and microsurgery.",
  },
  {
    icon: "👃",
    title: "Nose & Sinuses",
    desc: "Sinusitis, nasal polyps, deviated septum, allergic rhinitis treatment.",
  },
  {
    icon: "🫁",
    title: "Throat Conditions",
    desc: "Tonsillitis, sore throat, voice disorders, and laryngeal problems.",
  },
  {
    icon: "🌀",
    title: "Vertigo & Balance",
    desc: "Diagnosis and management of vertigo, dizziness, and balance disorders.",
  },
  {
    icon: "😴",
    title: "Snoring & Sleep Apnea",
    desc: "Evaluation and surgical/non-surgical treatment for snoring and OSA.",
  },
  {
    icon: "🔊",
    title: "Hearing Assessment",
    desc: "Audiometry, hearing aids consultation, and pediatric hearing tests.",
  },
];

const reviews = [
  {
    name: "Raizu Keditsu",
    stars: 5,
    text: "Had a very wonderful experience with Dr. Prince Hirdesh Sharma. I had an infection in my ear and within 2 minutes he figured out the problem and cleaned it for me. He is very caring, friendly, and the best Doctor I have ever met. Highly recommended!",
    time: "4 years ago",
  },
  {
    name: "Mehvish Khan",
    stars: 5,
    text: "Best ENT services in Delhi, must visit for ear, nose, throat, vertigo. I showed myself for ear discharge — he treated me very well. Thank you sir for all the help.",
    time: "2 years ago",
  },
  {
    name: "Leena Sharma",
    stars: 5,
    text: "I visited for my chronic ear problem and I'm really satisfied with the treatment and the way he counselled me. I got rid of my problem. I will strongly recommend all friends and family to visit Dr. Prince for any ENT problem.",
    time: "5 years ago",
  },
  {
    name: "Joy Ezeuka",
    stars: 5,
    text: "Thank you so much for the treatment and the discount. Very satisfactory. Much recommended.",
    time: "7 months ago",
  },
];

function StarRating({ count }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                ENT Specialist • New Delhi
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Dr. Prince Hirdesh Sharma
                <span className="block text-cyan-300 text-xl sm:text-2xl font-medium mt-1">
                  MBBS, MS (ENT)
                </span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Expert care for Ear, Nose & Throat conditions at FORNIX CLINIC, Khanpur, New Delhi.
                Trusted by hundreds of patients — compassionate, precise, and affordable.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919711430836"
                  className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm sm:text-base shadow-lg"
                >
                  📞 Call: 97114 30836
                </a>
                <Link
                  href="/services"
                  className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                  Our Services →
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                  <span className="text-yellow-400 font-bold">★ 4.2</span>
                  <span className="text-blue-100 text-xs">Google Rating (125+ reviews)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span className="text-blue-100 text-xs">Open 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Doctor image placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden bg-blue-800/40 border-2 border-white/20 flex items-center justify-center">
                {/* Replace src with actual doctor image when available */}
                <div className="text-center text-white/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm">Doctor Image</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">Dr. Prince Hirdesh Sharma</p>
                  <p className="text-blue-200 text-xs">ENT Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Strip */}
      <section className="bg-blue-50 border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-blue-800">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>1st Floor, D1, Devli Rd, Khanpur, New Delhi – 110080</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+919711430836" className="font-semibold hover:underline">+91 97114 30836</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">●</span>
              <span className="text-green-700 font-medium">Open 24 Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">What We Treat</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Our ENT Services</h2>
            <div className="section-divider mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm card-hover"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* About Doctor Brief */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-700 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "5000+", label: "Happy Patients" },
                  { number: "4.2★", label: "Google Rating" },
                  { number: "24/7", label: "Clinic Hours" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-bold text-white">{stat.number}</p>
                    <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Meet the Doctor</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Dr. Prince Hirdesh Sharma
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. Prince Hirdesh Sharma is a qualified ENT (Ear, Nose & Throat) specialist holding MBBS and MS degrees. With years of dedicated practice at Fornix Clinic, he has earned the trust of thousands of patients across New Delhi.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Known for his quick diagnosis, compassionate approach, and reasonable consultation charges, Dr. Sharma is the go-to ENT specialist in Khanpur and surrounding areas.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 hover:text-white transition-colors"
              >
                Learn More About Dr. Sharma →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Patient Feedback</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">What Our Patients Say</h2>
            <div className="section-divider mx-auto mt-4"></div>
            <p className="mt-3 text-gray-500">Rated <strong>4.2/5</strong> on Google with 125+ reviews</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 card-hover">
                <StarRating count={review.stars} />
                <p className="mt-3 text-gray-600 text-sm leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="hero-gradient text-white py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Book Your Consultation Today</h2>
          <p className="text-blue-100 mb-8 text-base sm:text-lg">
            Visit Fornix Clinic for expert ENT care. Open 24 hours, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919711430836"
              className="bg-white text-blue-800 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
            >
              📞 +91 97114 30836
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              📍 Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

