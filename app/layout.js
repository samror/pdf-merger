import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "MergePDF",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
