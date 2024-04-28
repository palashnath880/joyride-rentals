import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Joyride Rentals",
  description: `Cruise in style with Joyride Rentals! We offer a variety of cars to fit your needs, perfect for exploring the open road or getting around town. Rent yours today and experience the joy of the ride!`,
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
