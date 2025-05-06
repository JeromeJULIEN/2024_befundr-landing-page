"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import communities from "../../public/communities.png";
import funds from "../../public/funds.png";
import process from "../../public/process.png";
import background from "../../public/background.png";
import team from "../../public/team.png";
import { FaChevronDown } from "react-icons/fa";
import MainButtonLabel from "@/component/MainButtonLabel";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AnimatedBlockProps {
  children: ReactNode;
  className?: string;
}

const AnimatedBlock = ({ children, className = "" }: AnimatedBlockProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={background}
          alt="background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-start w-full min-h-screen gap-10 relative">
        {/* first block white bg */}
        <AnimatedBlock className="flex flex-col justify-center items-center h-screen gap-10 px-4 md:px-0 w-full pt-20 md:pt-0 ">
          <div className="relative w-full md:w-2/3 max-w-[600px]">
            <Image alt="logo" src={logo} className="w-full h-auto" />
          </div>
          <h1 className="textStyle-subtitle  md:textStyle-title text-center -mt-10">
            <strong className="text-accent">Fund the Alpha</strong> of your
            community
          </h1>
          {/* <a
            href="https://app.befundr.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MainButtonLabel label="Launch App" />
          </a> */}
          <h3 className="textStyle-headline w-full md:w-2/3 text-center">
            The blockchain/Web3 has been compromised by untrustworthy
            individuals…
            <br />
            …we need to restore trust in the system
          </h3>
          <h3 className="textStyle-headline w-full md:w-2/3 text-center !font-bold">
            With beFUNDR, back and support people you trust, keep control of
            your funds and get rewarded
          </h3>
          <FaChevronDown size={30} className="text-accent animate-bounce" />
        </AnimatedBlock>
        {/* second block */}
        <AnimatedBlock className="flex flex-col justify-center items-center w-full gap-10 py-10 pb-20 px-4 md:px-0">
          <h2 className="textStyle-subtitle text-textColor-main text-center">
            Back <strong className="!text-accent font-bold">trusted </strong>
            people
          </h2>
          <div className="relative w-full max-w-[400px] aspect-square">
            <Image
              src={communities}
              alt="communities"
              fill
              className="object-contain"
            />
          </div>
          <p className="textStyle-headline w-full md:w-2/3 text-center">
            beFUNDR is built by and for Solana&apos;s{" "}
            <strong className="!text-accent">OG communities</strong>
          </p>
          <p className="textStyle-headline w-full md:w-2/3 text-center">
            On beFUNDR, project founders must be part of one of the OG Solana
            communities. <br />
            <br />
            This way, you can be sure that the project you are supporting comes
            from a real builder, committed to the Solana ecosystem.
          </p>
          <p className="textStyle-headline w-full md:w-2/3 text-center">
            In addition, it values communities&apos; assets (tokens and/or NFTs)
            and provides real-time data on the building activity of their
            members!
          </p>
        </AnimatedBlock>
        {/* second block black bg */}
        <AnimatedBlock className="flex flex-col justify-start items-center gap-10 mb-20 px-4 md:px-0 w-full">
          <h2 className="textStyle-subtitle text-center">
            <strong className="!text-accent !font-bold">Control</strong> the
            funds
          </h2>
          <div className="relative w-full max-w-[600px] aspect-[3/2]">
            <Image src={funds} alt="funds" fill className="object-contain" />
          </div>
          <div className="flex flex-col items-center gap-6">
            <h3 className="textStyle-headline w-full md:w-2/3 text-center">
              Trust may not be enough, so we decentralized it with a
              milestone-based fund release process
            </h3>
            <p className="textStyle-headline w-full md:w-2/3 text-center">
              From the Web3 community, we&apos;re creating project communities
              where all contributors will vote on whether to approve or deny the
              fund release requested by the project founder.
            </p>
            <p className="textStyle-headline w-full md:w-2/3 text-center">
              As a serious builder, it&apos;s the best way to foster a strong
              community!
            </p>
          </div>
        </AnimatedBlock>
        {/* third block */}
        <AnimatedBlock className="flex flex-col justify-center items-center w-full gap-10 py-10 pb-20 px-4 md:px-0">
          <h2 className="textStyle-subtitle text-textColor-main text-center">
            Your new{" "}
            <strong className="!text-accent font-bold">funding tool </strong>
            in your founder journey
          </h2>
          <div className="relative w-full max-w-[600px] aspect-[3/2]">
            <Image
              src={process}
              alt="process"
              fill
              className="object-contain"
            />
          </div>
          <p className="textStyle-headline w-full md:w-2/3 text-center">
            beFUNDR helps serious builders turn{" "}
            <strong className="!text-accent">
              early traction into real growth
            </strong>
          </p>
          <p className="textStyle-headline w-full md:w-2/3 text-center">
            While getting a small grant can be a good start, it&apos;s not
            enough to build a strong project and reach a structured startup
            status.
          </p>
          <p className="textStyle-headline w-full md:w-2/3 text-center">
            beFUNDR <strong className="!text-accent">fills the gap</strong> from
            early wins to professional investors.
          </p>
        </AnimatedBlock>
        {/* fourth block */}
        <AnimatedBlock className="flex flex-col justify-start items-center gap-10 mb-20 px-4 md:px-0 w-full">
          <h2 className="textStyle-subtitle text-center">
            Launch your project on beFUNDR{" "}
            <strong className="!text-accent !font-bold">by 2025</strong>
          </h2>
          <div className="relative w-full max-w-[600px] aspect-[3/2]">
            <Image src={team} alt="team" fill className="object-contain" />
          </div>
          <div className="flex flex-col items-center gap-6">
            <h3 className="textStyle-headline w-full md:w-2/3 text-center">
              There&apos;s a lot to do, but we&apos;re working hard!
            </h3>
            <p className="textStyle-headline w-full md:w-2/3 text-center">
              Proudly supported by{" "}
              <strong className="!text-accent">Superteam France</strong>!
            </p>
            <p className="textStyle-headline w-full text-center">
              If you don&apos;t want to miss any updates or contact us, as a
              founder or a community
            </p>

            <p className="scale-150">👇</p>
            <a
              href="https://x.com/befundr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MainButtonLabel label="Contact us on X" />
            </a>
            {/* <a
              href="https://t.me/+VdmvjEpKrjlkOTFk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MainButtonLabel label="Join us on telegram" />
            </a> */}
          </div>
        </AnimatedBlock>

        {/* Footer */}
        <div className="w-full py-6 text-center">
          <p className="text-textColor-second text-sm font-light">
            © {new Date().getFullYear()} beFUNDR. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
