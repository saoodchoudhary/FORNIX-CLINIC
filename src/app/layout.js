import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Fornix Clinic | Dr. Prince Hirdesh Sharma — ENT Specialist, New Delhi",
  description:
    "Fornix Clinic — Expert ENT care by Dr. Prince Hirdesh Sharma, MBBS, MS. Khanpur, New Delhi. Open 24/7. Call +91 97114 30836.",
  keywords:
    "ENT doctor Delhi, ear nose throat specialist, Fornix Clinic Khanpur, Dr Prince Hirdesh Sharma, ENT Khanpur New Delhi, vertigo treatment Delhi, sinusitis doctor Delhi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}