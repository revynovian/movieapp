import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";

import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Layar - Movie Database",
  description: "Movie Database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
