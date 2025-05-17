import { useGetAllCollections } from "@/hooks/dbData/useCollection";
import CommunityCard from "../cards/CommunityCard";
import { motion } from "framer-motion";

const CarouselCommunity = () => {
  const { data: collections } = useGetAllCollections();

  if (!collections) return null;

  // Dupliquer les collections pour créer un effet infini
  const duplicatedCollections = [...collections, ...collections];

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
          },
        }}
      >
        {duplicatedCollections.map((collection, idx) => (
          <div key={idx} className="flex-shrink-0">
            <CommunityCard collection={collection.data} />
          </div>
        ))}
      </motion.div>

      {/* Gradient de fondu à droite */}
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />
    </div>
  );
};

export default CarouselCommunity;
