import CommunityCard from "../cards/CommunityCard";
import Infinitecarousel from "./InfiniteCarousel";
import { COMMUNITIES } from "@/data/communities";

const CarouselCommunity = () => {
  return (
    <Infinitecarousel
      gapClassName="gap-4"
      speedPxPerSec={60}
      fadeEdges
      items={
        COMMUNITIES?.map((community, idx) => (
          <CommunityCard community={community} key={idx} />
        )) ?? []
      }
    />
  );
};

export default CarouselCommunity;
