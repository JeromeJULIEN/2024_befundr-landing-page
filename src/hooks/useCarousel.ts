import { useEffect, useRef } from "react";

export const useCarousel = (speed = 50) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const step = 1;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollAmount += step;
      if (
        scrollAmount >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, speed);

    return () => clearInterval(interval);
  }, [speed]);

  return scrollRef;
};
