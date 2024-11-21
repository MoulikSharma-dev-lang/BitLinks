import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "BitLinks - Your own Url shortener",
  description: "BitLinks is a very straight forward url shortener made for anyone having an internet connection . ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-black bg-white font-sans`}
      >
        <Navbar />
        <div className="min-h-[90vh]">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
