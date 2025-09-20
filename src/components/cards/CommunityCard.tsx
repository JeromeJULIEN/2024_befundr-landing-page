import Image from "next/image";
import CardLayout from "./CardLayout";

const CommunityCard = ({ community }: { community: Community }) => {
  return (
    <CardLayout className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] items-center justify-center aspect-square">
      <Image
        src={community.image}
        alt={community.name + " logo"}
        width={100}
        height={100}
        className="rounded-full mb-4 aspect-square object-cover"
      />
      <h3 className="h4Style md:h3Style mb-2 w-full line-clamp-2 md:line-clamp-1 text-center">
        {community.name}
      </h3>
      <p className="bodyStyle hidden md:block text-center w-[190px] md:w-[290px] line-clamp-1 md:line-clamp-2 whitespace-pre-line">
        {community.description}
      </p>
    </CardLayout>
  );
};

export default CommunityCard;
