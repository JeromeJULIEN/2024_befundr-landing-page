"use client";

import { AnimatedBlock } from "./displayElements/AnimatedBlock";
import CarouselPartner from "./carousel/CarouselPartner";
import CarouselCommunity from "./carousel/CarouselCommunity";

const PartnerSection = () => {
  return (
    <AnimatedBlock className="relative flex flex-col w-full lg:max-w-6xl  overflow-hidden">
      <div className="container mx-auto flex flex-col justify-center items-center gap-6 py-16 px-4 relative z-10">
        <h2 className="h1Style text-textColor-main text-center">
          Support <strong className="!text-accent font-bold">trusted </strong>
          people
        </h2>
        <p className="bodyStyle w-full md:w-2/3 text-center">
          An incubator where trust is a mechanism, not a bottleneck
        </p>
        <p className="bodyStyle w-full md:w-2/3 text-center -mt-8">
          <strong className="!text-accent">Communities</strong> are the ones who
          make it possible
        </p>
        <CarouselCommunity />

        <p className="bodyStyle w-full md:w-2/3 text-center">
          Want to launch your project on beFUNDR? There is only one requirement:
          be part of one of Solana&apos;s{" "}
          <strong className="!text-accent">OG communities</strong>
        </p>
        <p className="bodyStyle w-full md:w-2/3 text-center">
          In doing so, ensure supporting projects from real builders and{" "}
          <strong className="!text-accent">empower communities</strong>{" "}
        </p>
        <h1 className="h1Style text-center mt-28">
          Supported by{" "}
          <strong className="text-accent">leading web3 players</strong>
        </h1>
        <p className="bodyStyle mb-6 text-center">
          Incubated projects are supported by the best partners in the space.
          <br />
          <strong className="text-accent">Accelerate!</strong>{" "}
        </p>

        <CarouselPartner />
        <h3 className="bodyStyle w-full md:w-2/3 text-center mt-6">
          beFUNDR selects the best partners to provide{" "}
          <strong className="text-accent">support and expertise</strong> to
          incubated projects.{" "}
        </h3>
      </div>
    </AnimatedBlock>
  );
};

export default PartnerSection;
