"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroWatermarkProps {
  src: string;
  alt: string;
  size?: number;
}

export function HeroWatermark({ src, alt, size = 300 }: HeroWatermarkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = containerRef.current?.parentElement;
    if (!section) return;

    const onEnter = () => setActive(true);
    const onLeave = () => setActive(false);

    section.addEventListener("mouseenter", onEnter);
    section.addEventListener("mouseleave", onLeave);

    return () => {
      section.removeEventListener("mouseenter", onEnter);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block"
    >
      <motion.img
        src={src}
        alt={alt}
        draggable={false}
        className="absolute select-none object-contain"
        style={{
          width: size,
          height: size,
          right: 0,
          top: 0,
        }}
        animate={
          active
            ? {
                opacity: 0.45,
                scale: 1.04,
                filter:
                  "drop-shadow(0 0 50px rgba(99,102,241,0.6)) drop-shadow(0 0 20px rgba(139,92,246,0.4))",
              }
            : {
                opacity: [0.04, 0.07, 0.04],
                scale: [1, 1.02, 1],
                filter: "drop-shadow(0 0 0px rgba(99,102,241,0))",
              }
        }
        transition={
          active
            ? { duration: 0.4, ease: "easeOut" }
            : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
      />
    </div>
  );
}
