import PartnerCard from "../cards/PartnerCard";
import Infinitecarousel from "./InfiniteCarousel";
import { PARTNERS } from "@/data/partners";

const CarouselPartner = () => {
  return (
    <Infinitecarousel
      gapClassName="gap-4"
      speedPxPerSec={60}
      fadeEdges
      items={
        PARTNERS?.map((partner, idx) => (
          <PartnerCard partner={partner} key={idx} />
        )) ?? []
      }
    />
  );
};

export default CarouselPartner;
