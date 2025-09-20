"use client";

import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Props = {
  items: ReactNode[];
  className?: string;
  trackClassName?: string;
  gapClassName?: string; // e.g. "gap-4"
  speedPxPerSec?: number; // default 60 px/s
  pauseOnHover?: boolean;
  style?: CSSProperties;
  fadeEdges?: boolean;
  fadeWidthPx?: number; // default 48
  fadeColor?: string; // default var(--custom-gray-900)
};

const MIN_COPIES = 2;

const Infinitecarousel: React.FC<Props> = ({
  items,
  className,
  trackClassName,
  gapClassName = "gap-4",
  speedPxPerSec = 60,
  pauseOnHover,
  style,
  fadeEdges = true,
  fadeWidthPx = 48,
  fadeColor = "black",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentWidth, setContentWidth] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  // Measure sizes
  useEffect(() => {
    const measure = () => {
      const ctn = containerRef.current;
      const cnt = contentRef.current;
      if (!ctn || !cnt) return;
      setContainerWidth(ctn.clientWidth);
      setContentWidth(cnt.scrollWidth);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    if (contentRef.current) ro.observe(contentRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Decide how many copies we need to ensure no gap
  const copies = useMemo(() => {
    if (contentWidth === 0 || containerWidth === 0) return MIN_COPIES;
    // Ensure at least viewport * 2 worth of content to avoid gaps
    const required = Math.ceil((containerWidth * 2) / contentWidth);
    return Math.max(MIN_COPIES, required);
  }, [contentWidth, containerWidth]);

  // Duration for one full cycle (shift by exactly one content width)
  const durationSeconds = useMemo(() => {
    if (speedPxPerSec <= 0) return 30;
    return contentWidth / speedPxPerSec;
  }, [contentWidth, speedPxPerSec]);

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Attendre que les dimensions soient calculées
    if (contentWidth > 0 && containerWidth > 0) {
      setIsAnimating(true);
    }
  }, [contentWidth, containerWidth]);

  const cssVars: React.CSSProperties = {
    // distance for one loop
    // @ts-expect-error custom property
    "--carousel-distance": `${contentWidth}px`,
    "--carousel-duration": `${durationSeconds}s`,
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className ?? ""}`}
      style={style}
    >
      <div
        className={`flex ${gapClassName} w-max ${
          isAnimating ? "carousel-animate" : ""
        } ${pauseOnHover ? "carousel-paused-on-hover" : ""} ${
          trackClassName ?? ""
        }`}
        style={cssVars}
      >
        {/* Reference copy (measured width) */}
        <div ref={contentRef} className={`flex ${gapClassName}`}>
          {items.map((node, idx) => (
            <div key={`m0-${idx}`}>{node}</div>
          ))}
        </div>
        {/* Additional copies to fill viewport and ensure no gap */}
        {Array.from({ length: copies - 1 }).map((_, cIdx) => (
          <div
            key={`copy-${cIdx + 1}`}
            className={`flex ${gapClassName}`}
            aria-hidden="true"
          >
            {items.map((node, idx) => (
              <div key={`m${cIdx + 1}-${idx}`}>{node}</div>
            ))}
          </div>
        ))}
      </div>
      {fadeEdges && (
        <>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10"
            style={{
              width: `${fadeWidthPx}px`,
              background: `linear-gradient(to right, ${fadeColor}, transparent)`,
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10"
            style={{
              width: `${fadeWidthPx}px`,
              background: `linear-gradient(to left, ${fadeColor}, transparent)`,
            }}
          />
        </>
      )}
    </div>
  );
};

export default Infinitecarousel;
