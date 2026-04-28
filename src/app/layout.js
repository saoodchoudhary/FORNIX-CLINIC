import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Fornix Clinic | Dr. Prince Hirdesh Sharma - ENT Specialist, New Delhi",
  description:
    "Fornix Clinic — Expert ENT (Ear, Nose & Throat) care by Dr. Prince Hirdesh Sharma, MBBS, MS. Located in Khanpur, New Delhi. Open 24 hours. Call +91 97114 30836.",
  keywords:
    "ENT doctor Delhi, ear nose throat specialist, Fornix Clinic Khanpur, Dr Prince Hirdesh Sharma, ENT Khanpur New Delhi, vertigo treatment Delhi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
