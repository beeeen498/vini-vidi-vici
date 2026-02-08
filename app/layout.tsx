import type { Metadata } from "next";
import { Playfair_Display, Mona_Sans } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "../styles/main.scss"

export const metadata: Metadata = {
  title: "Veni Vidi Vici",
  description: "Italian restaurant",
  icons: {
    icon: "/images/icon.ico"
  }
};

// heading font
const playfair = Playfair_Display({
  variable: "--heading-font",
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800", "900"],          
  style: ["normal", "italic"], 
});

// body font
const monaSans = Mona_Sans({
  variable: "--body-font",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"], 
})

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${monaSans.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
