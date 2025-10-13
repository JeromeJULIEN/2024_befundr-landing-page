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
          A social layer where trust is a mechanism, not a bottleneck
        </p>
        <p className="bodyStyle w-full md:w-2/3 text-center -mt-8">
          <strong className="!text-accent">Communities</strong> are the ones who
          make it possible
        </p>
        <CarouselCommunity />

        <p className="bodyStyle w-full md:w-2/3 text-center">
          Want to launch on beFUNDR? One rule: Be a Solana{" "}
          <strong className="!text-accent">OG community member</strong>
        </p>
        <p className="bodyStyle w-full md:w-2/3 text-center">
          Authentic builders, legit opportunities,{" "}
          <strong className="!text-accent">Pure Alpha</strong>{" "}
        </p>
        <h1 className="h1Style text-center mt-28">
          Supported by{" "}
          <strong className="text-accent">leading web3 players</strong>
        </h1>
        <p className="bodyStyle mb-6 text-center">
          Trusted projects are supported by the best partners in the space.
          <br />
          <strong className="text-accent">Accelerate!</strong>{" "}
        </p>

        <CarouselPartner />
        <h3 className="bodyStyle w-full md:w-2/3 text-center mt-6">
          beFUNDR selects the best partners to provide{" "}
          <strong className="text-accent">support and expertise</strong> to the
          endorsed projects.{" "}
        </h3>
      </div>
    </AnimatedBlock>
  );
};

export default PartnerSection;
