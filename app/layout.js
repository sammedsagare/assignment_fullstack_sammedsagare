"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
