import Image from "next/image";

type Partner = {
  name: string;
  description: string;
  logo: string;
};

const PartnerCard = ({ partner }: { partner: Partner }) => {
  return (
    <div className="aspect-square bg-custom-gray-900 border border-custom-gray-800 rounded-3xl flex flex-col items-center justify-center p-2 lg:p-6 h-[150px] w-[150px] lg:h-[300px] lg:w-[300px] max-w-xs  shadow-md hover:border-custom-gray-600">
      <Image
        src={partner.logo}
        alt={partner.name + " logo"}
        width={100}
        height={100}
        className="rounded-full mb-2 lg:mb-4 aspect-square object-cover hidden lg:block"
      />
      <Image
        src={partner.logo}
        alt={partner.name + " logo"}
        width={50}
        height={50}
        className="rounded-full mb-2 lg:mb-4 aspect-square object-cover block lg:hidden"
      />
      <h3 className="bodyStyle lg:h3Style mb-2 text-center">{partner.name}</h3>
      <p className="footnoteStyle lg:bodyStyle  text-center line-clamp-2">
        {partner.description}
      </p>
    </div>
  );
};

export default PartnerCard;
