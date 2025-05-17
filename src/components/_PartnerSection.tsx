"use client";

import { useGetAllCollections } from "@/hooks/dbData/useCollection";
import { useGetAllPartners } from "@/hooks/dbData/usePartner";
import { AnimatedBlock } from "./displayElements/AnimatedBlock";
import CarouselPartner from "./carousel/CarouselPartner";

const PartnerSection = () => {
  const { data: collections } = useGetAllCollections();
  const { data: partners } = useGetAllPartners();

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
      </div>
    </AnimatedBlock>
  );
};

export default PartnerSection;
