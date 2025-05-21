"use client";

import { useGetAllCollections } from "@/hooks/dbData/useCollection";
import { AnimatedBlock } from "./displayElements/AnimatedBlock";
import CarouselPartner from "./carousel/CarouselPartner";

const PartnerSection = () => {
  const { data: collections } = useGetAllCollections();

  if (!collections) return null;

  return (
    <AnimatedBlock className="relative flex flex-col w-full lg:max-w-6xl  overflow-hidden">
      <div className="container mx-auto flex flex-col justify-center items-center gap-6 py-16 px-4 relative z-10">
        <h1 className="h1Style text-center">
          Supported by{" "}
          <strong className="text-accent">leading web3 players</strong>
        </h1>
        <p className="bodyStyle mb-6 text-center">
          From web3 DAOs, to VCs ; from technical to legal or marketing partners
        </p>

        <CarouselPartner />
        <h3 className="bodyStyle w-full md:w-2/3 text-center mt-6">
          Our partners play a fundamental role in{" "}
          <strong className="text-accent">the selection and success</strong> of
          projects{" "}
        </h3>
        <h3 className="bodyStyle w-full md:w-2/3 text-center mt-6">
          They provide continuous,{" "}
          <strong className="!text-accent">strategic support</strong> throughout
          the incubation
        </h3>
      </div>
    </AnimatedBlock>
  );
};

export default PartnerSection;
