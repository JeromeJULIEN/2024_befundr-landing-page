import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";

export const metadata: Metadata = {
  title: "beFundr.",
  description: "Your secured corwdfunding platform",
};

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" href="/logo_32x32.png" sizes="32x32"></link>
      </head>
      <body
        className={`${lato.className} bg-main antialiased flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
