"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import funds from "../../public/funds.png";
import process from "../../public/process.png";
import background from "../../public/background.png";
import team from "../../public/team.png";
import MainButtonLabel from "@/components/displayElements/MainButtonLabel";
import { motion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import PartnerSection from "@/components/_PartnerSection";
import CarouselCommunity from "@/components/carousel/CarouselCommunity";
import FaqSection from "@/components/_FaqSection";

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
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVideoVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

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
        <div className="absolute inset-0 bg-black -z-20" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-start w-full min-h-screen gap-6 lg:gap-10 relative">
        {/* first block white bg */}
        <AnimatedBlock className="flex flex-col justify-center items-center h-screen gap-10 px-4 md:px-0 w-full pt-20 md:pt-0 relative">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              src="/videos/video_homepage_compress.mp4"
              autoPlay
              muted
              loop
              playsInline
              className={`w-full h-full object-cover transition-all duration-[1000ms] ease-in-out ${
                videoVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                WebkitBackfaceVisibility: "hidden",
                WebkitPerspective: 1000,
                WebkitTransform: "translate3d(0,0,0)",
              }}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-[1000ms] ease-in-out ${
                videoVisible ? "bg-black/70" : "bg-black/80"
              }`}
            />
            {/* Gradient de fondu en bas */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-10 w-full">
            <div className="relative w-full md:w-2/3 max-w-[600px]">
              <Image alt="logo" src={logo} className="w-full h-auto" priority />
            </div>
            <h3 className="bodyStyle w-full md:w-2/3 text-center text-white">
              While you&apos;re chasing the next Alpha but end up with another
              shitcoin...
              <br />
              ...Real builders either ship without you, or never get the chance
              to.
            </h3>
            <h3 className="bodyStyle w-full md:w-2/3 text-center text-white">
              With beFUNDR, get in early to fund and contribute to the next
              promising projects
            </h3>
            <h3 className="bodyStyle w-full md:w-2/3 text-center text-white">
              beFUNDR is{" "}
              <strong className="text-accent">the Trust Layer</strong>,<br />{" "}
              created for builders, backed by communities
            </h3>
          </div>
        </AnimatedBlock>
        {/* second block */}
        <AnimatedBlock className="flex flex-col justify-center items-center w-full gap-10 py-10 pb-20 px-4 md:px-0">
          <h2 className="h1Style text-textColor-main text-center">
            Support <strong className="!text-accent font-bold">trusted </strong>
            people
          </h2>
          <p className="bodyStyle w-full md:w-2/3 text-center">
            An incubator where trust is a mechanism, not a bottleneck
          </p>
          <p className="bodyStyle w-full md:w-2/3 text-center -mt-8">
            <strong className="!text-accent">Communities</strong> are the ones
            who make it possible
          </p>
          <CarouselCommunity />

          <p className="bodyStyle w-full md:w-2/3 text-center">
            We handpick the most promising projects from the top builders,
            endorsed by Solana&apos;s{" "}
            <strong className="!text-accent">OG communities</strong>
          </p>
          <p className="bodyStyle w-full md:w-2/3 text-center">
            Our mission: help the next wave of killer apps emerge. <br />
            In doing so, we also aim to{" "}
            <strong className="!text-accent">
              empower communities and bring value to their assets
            </strong>{" "}
            — whether tokens or NFTs.
          </p>
        </AnimatedBlock>
        <PartnerSection />
        {/* second block black bg */}
        <AnimatedBlock className="flex flex-col justify-start items-center gap-10 mb-20 px-4 md:px-0 w-full">
          <h2 className="h1Style text-center">
            Easy <strong className="!text-accent !font-bold">kickstart</strong>,
            real <strong className="!text-accent !font-bold">growth</strong>
          </h2>
          <p className="bodyStyle w-full md:w-2/3 text-center">
            The beFUNDR funding process
          </p>
          <div className="relative w-full max-w-[900px] aspect-[3/1]">
            <Image src={funds} alt="funds" fill className="object-contain " />
          </div>
          <div className="flex flex-col items-center gap-6">
            <h3 className="bodyStyle w-full md:w-2/3 text-center">
              beFUNDR helps chosen builders to{" "}
              <strong className="!text-accent">
                seamlessly launch their project
              </strong>{" "}
              thanks to their community, from fundraising to growth
            </h3>
            <p className="bodyStyle w-full md:w-2/3 text-center">
              We start with an initial funding round through an NFT sale,
              providing the founder with{" "}
              <strong className="!text-accent">
                essential kickstart capital
              </strong>
              .
            </p>
            <p className="bodyStyle w-full md:w-2/3 text-center">
              After an incubation phase, the project is ready to scale through a{" "}
              <strong className="!text-accent">
                token or tokenized-equity presale
              </strong>
              .
            </p>
          </div>
        </AnimatedBlock>
        {/* third block */}
        <AnimatedBlock className="flex flex-col justify-center items-center w-full gap-10 py-10 pb-20 px-4 md:px-0">
          <h2 className="h1Style text-textColor-main text-center">
            Builders, your{" "}
            <strong className="!text-accent font-bold">one-stop shop </strong>{" "}
            platform
          </h2>
          <div className="relative w-full max-w-[600px] aspect-[3/2]">
            <Image
              src={process}
              alt="process"
              fill
              className="object-contain"
            />
          </div>
          <p className="bodyStyle w-full md:w-2/3 text-center">
            beFUNDR provides a complete{" "}
            <strong className="!text-accent">
              funding and growth solution
            </strong>{" "}
            for builders.
          </p>
          <p className="bodyStyle w-full md:w-2/3 text-center">
            Along the way, we connect them to{" "}
            <strong className="!text-accent">strategic partners</strong> and
            enable community members to{" "}
            <strong className="!text-accent">
              actively support the project
            </strong>
            , through contributions or promotion.
          </p>
          <p className="bodyStyle w-full md:w-2/3 text-center">
            Our funding process combines a{" "}
            <strong className="!text-accent">seamless launch experience</strong>{" "}
            with{" "}
            <strong className="!text-accent">
              a fair and transparent valuation
            </strong>{" "}
            mechanism.
          </p>
        </AnimatedBlock>
        {/* fourth block */}
        {/* third block */}
        <AnimatedBlock className="flex flex-col justify-center items-center w-full gap-10 py-10 pb-20 px-4 md:px-0">
          <h2 className="h1Style text-textColor-main text-center">
            Partners, support the{" "}
            <strong className="!text-accent font-bold">best projects </strong>
          </h2>
          <p className="bodyStyle w-full md:w-2/3 text-center">
            With carefully selected projects, beFUNDR acts as a{" "}
            <strong className="!text-accent">trusted curator</strong>,
            connecting you with the most promising builders and initiatives.
          </p>
          <p className="bodyStyle w-full md:w-2/3 text-center">
            Cut the noise. Focus on{" "}
            <strong className="!text-accent">builders that matter</strong>.
          </p>
        </AnimatedBlock>
        {/* fifth block */}
        <AnimatedBlock className="flex flex-col justify-start items-center gap-10 mb-20 px-4 md:px-0 w-full">
          <h2 className="h1Style text-center">
            Launch your project on beFUNDR{" "}
            <strong className="!text-accent !font-bold">by 2025</strong>
          </h2>
          <div className="relative w-full max-w-[600px] aspect-[3/2]">
            <Image src={team} alt="team" fill className="object-contain" />
          </div>
          <div className="flex flex-col items-center gap-6">
            <h3 className="bodyStyle w-full md:w-2/3 text-center">
              There&apos;s a lot to do, but we&apos;re working hard!
            </h3>
            <p className="bodyStyle w-full md:w-2/3 text-center">
              Proudly supported by{" "}
              <strong className="!text-accent">Superteam France</strong>!
            </p>
            <p className="bodyStyle w-full text-center">
              If you don&apos;t want to miss any updates or contact us, as a
              founder, partner or a community
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
        <FaqSection />

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
