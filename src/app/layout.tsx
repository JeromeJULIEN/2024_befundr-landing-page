import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import { Providers } from "@/providers/_providers";

export const metadata: Metadata = {
  title: "beFUNDR | Where trust kickstarts Web3 moonshot",
  description:
    "beFUNDR flips web3 communities into on-chain cred badge: Builders drop transparent launches, communities ape in with confidence, and experts contribute from the ground up.",
  keywords: [
    "solana incubator",
    "web3 trust layer",
    "community funding",
    "solana builders",
    "web3 incubator",
    "decentralized funding",
    "community-backed projects",
    "solana ecosystem",
    "web3 trust mechanism",
    "builder incubator",
    "community validation",
    "solana projects",
    "web3 growth",
    "trust-based funding",
    "community-driven incubator",
    "solana startup",
    "web3 community",
    "builder support",
    "trust mechanism",
    "community validation",
    "solana development",
    "web3 innovation",
    "builder platform",
    "community investment",
    "solana trust layer",
  ].join(", "),
  openGraph: {
    title: "beFUNDR | Where trust kickstarts Web3 moonshot",
    description:
      "beFUNDR flips web3 communities into on-chain cred badge: Builders drop transparent launches, communities ape in with confidence, and experts contribute from the ground up.",
    type: "website",
    locale: "en_US",
    siteName: "beFUNDR",
  },
  twitter: {
    card: "summary_large_image",
    title: "beFUNDR | Where trust kickstarts Web3 moonshot",
    description:
      "beFUNDR flips web3 communities into on-chain cred badge: Builders drop transparent launches, communities ape in with confidence, and experts contribute from the ground up.",
  },
  icons: {
    icon: [
      { url: "/icon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/icon-dark.png",
    apple: "/icon-dark.png",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
