"use client";
import "../scss/main.scss";
import { Open_Sans } from "next/font/google";

// const roboto = Roboto({
//   weight: ["500", "700"],
//   subsets: ["latin"],
//   variable: "--font-roboto",
// });

const openSans = Open_Sans({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-opensans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={openSans.className + " bg-dark"}>
        {children}
      </body>
    </html>
  );
}