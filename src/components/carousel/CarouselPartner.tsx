import { useGetAllPartners } from "@/hooks/dbData/usePartner";
import PartnerCard from "../cards/PartnerCard";
import { motion } from "framer-motion";

const CarouselPartner = () => {
  const { data: partners } = useGetAllPartners();

  if (!partners) return null;

  // Dupliquer les partenaires pour créer un effet infini
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="relative w-full lg:max-w-6xl overflow-hidden">
      {/* Gradient de fondu à gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />

      <motion.div
        className="flex gap-4"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
            delay: 1,
          },
        }}
      >
        {duplicatedPartners.map((partner, idx) => (
          <div key={idx} className="flex-shrink-0">
            <PartnerCard partner={partner.data} />
          </div>
        ))}
      </motion.div>

      {/* Gradient de fondu à droite */}
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />
    </div>
  );
};

export default CarouselPartner;
