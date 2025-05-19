import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import { Providers } from "@/providers/_providers";

export const metadata: Metadata = {
  title: "beFUNDR | Trust and Fund Your Community on Solana",
  description:
    "beFUNDR is the Trust Layer for Solana builders, backed by communities. An incubator where trust is a mechanism, not a bottleneck. Get early access to promising projects and contribute to their growth.",
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
    title: "beFUNDR | The Decentralized Incubator on Solana",
    description:
      "beFUNDR is the Trust Layer for Solana builders, backed by communities. An incubator where trust is a mechanism, not a bottleneck. Get early access to promising projects and contribute to their growth.",
    type: "website",
    locale: "en_US",
    siteName: "beFUNDR",
  },
  twitter: {
    card: "summary_large_image",
    title: "beFUNDR | The Decentralized Incubator on Solana",
    description:
      "beFUNDR is the Trust Layer for Solana builders, backed by communities. An incubator where trust is a mechanism, not a bottleneck. Get early access to promising projects and contribute to their growth.",
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
