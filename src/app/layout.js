"use client";
import "./globals.css";
import { useState, createContext } from "react";
import { DM_Mono } from "next/font/google";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

// TODO ABACATE
export const metadata = {
  title: "Lucas Contini",
  description: "Music & Photography & Lifestyle",
};
export const UserContext = createContext(null);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmMono.className}>{children}</body>
    </html>
  );
}
