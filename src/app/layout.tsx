import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";

export const metadata: Metadata = {
  title: "beFUNDR | Trust and Fund Your Community on Solana",
  description:
    "Back and support people you trust, keep control of your funds and get project rewards with beFUNDR. The community-powered funding platform for Solana builders. Turn early traction into real growth with our decentralized fundraising solution.",
  keywords: [
    "web3 funding platform",
    "crypto startup funding",
    "web3 builders",
    "blockchain startups",
    "solana projects",
    "web3 community",
    "decentralised fundraising",
    "early-stage funding",
    "startup fundraising",
    "pre-seed capital",
    "community-first funding",
    "alternative startup financing",
    "grant to investment bridge",
    "VC alternatives",
    "community-powered fundraising",
    "startup growth support",
    "from builder to founder",
    "build in public",
    "startup validation platform",
    "trust in web3",
    "community funding",
    "decentralized finance",
    "solana ecosystem",
    "web3 trust",
  ].join(", "),
  openGraph: {
    title: "beFUNDR | Trust and Fund Your Community on Solana",
    description:
      "Back and support people you trust, keep control of your funds and get project rewards with beFUNDR. The community-powered funding platform for Solana builders.",
    type: "website",
    locale: "en_US",
    siteName: "beFUNDR",
  },
  twitter: {
    card: "summary_large_image",
    title: "beFUNDR | Trust and Fund Your Community on Solana",
    description:
      "Back and support people you trust, keep control of your funds and get project rewards with beFUNDR. The community-powered funding platform for Solana builders.",
  },
  icons: {
    icon: "/icon.png",
  },
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
    <html lang="en" data-theme="dark">
      <body className={`${lato.className} bg-main flex justify-center`}>
        {children}
      </body>
    </html>
  );
}
