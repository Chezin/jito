import "./globals.css";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmMono.className}>{children}</body>
    </html>
  );
}
