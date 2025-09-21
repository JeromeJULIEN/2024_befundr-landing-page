import Image from "next/image";
import CardLayout from "./CardLayout";

const PartnerCard = ({ partner }: { partner: Partner }) => {
  return (
    <CardLayout className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] items-center justify-center aspect-square">
      <Image
        src={partner.logo}
        alt={partner.name + " logo"}
        width={100}
        height={100}
        className="rounded-full mb-4 aspect-square"
      />
      <h3 className="h4Style md:h3Style mb-2 text-center">{partner.name}</h3>
      <p className="hidden md:block bodyStyle text-center w-[190px] md:w-[290px] line-clamp-1 md:line-clamp-2">
        {partner.description}
      </p>
    </CardLayout>
  );
};

export default PartnerCard;
