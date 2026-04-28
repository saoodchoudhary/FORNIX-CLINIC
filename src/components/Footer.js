import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-800 font-bold text-lg">F</span>
              <div>
                <p className="font-bold text-white text-lg leading-none">FORNIX CLINIC</p>
                <p className="text-blue-200 text-sm">ENT Specialist Clinic</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              Expert care for Ear, Nose, and Throat conditions by Dr. Prince Hirdesh Sharma, MBBS, MS. Serving patients with compassion and precision.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://maps.app.goo.gl/example"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-600 text-white text-xs px-3 py-1.5 rounded-full transition-colors"
              >
                📍 Get Directions
              </a>
              <a
                href="tel:+919711430836"
                className="bg-white text-blue-800 hover:bg-blue-50 text-xs px-3 py-1.5 rounded-full transition-colors font-medium"
              >
                📞 Call Now
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Doctor</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex gap-2">
                <span>📍</span>
                <span>1st Floor, D1, Devli Rd, Krishna Park Colony, Khanpur, New Delhi - 110080</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <a href="tel:+919711430836" className="hover:text-white transition-colors">+91 97114 30836</a>
              </li>
              <li className="flex gap-2">
                <span>🕐</span>
                <span>Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Fornix Clinic. All rights reserved.</p>
          <p>Dr. Prince Hirdesh Sharma, MBBS, MS — ENT Specialist</p>
        </div>
      </div>
    </footer>
  );
}
