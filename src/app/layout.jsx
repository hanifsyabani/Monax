import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import NextTopLoader from "nextjs-toploader";
import { Providers } from "@/app/providers";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Monax",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        <Providers>
          <NextTopLoader />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
