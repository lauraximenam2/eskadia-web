"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroWatermarkProps {
  src: string;
  alt: string;
  size?: number;
}

export function HeroWatermark({ src, alt, size = 420 }: HeroWatermarkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = containerRef.current?.parentElement;
    if (!section) return;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      if (spotlightRef.current) {
        const gradient = `radial-gradient(circle 300px at ${x}% ${y}%, black 0%, transparent 75%)`;
        spotlightRef.current.style.webkitMaskImage = gradient;
        spotlightRef.current.style.maskImage = gradient;
      }
    };

    const onEnter = () => setActive(true);
    const onLeave = () => setActive(false);

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseenter", onEnter);
    section.addEventListener("mouseleave", onLeave);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseenter", onEnter);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Base: K pulsando en la derecha, parcialmente fuera del borde */}
      <motion.img
        src={src}
        alt={alt}
        draggable={false}
        className="absolute select-none object-contain top-1/2 -translate-y-1/2"
        style={{
          width: size,
          height: size,
          right: -(size * 0.18),
        }}
        animate={{
          opacity: [0.05, 0.09, 0.05],
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Spotlight: brillo donde está el cursor */}
      <div
        ref={spotlightRef}
        className="absolute inset-0"
        style={{
          opacity: active ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="absolute select-none object-contain top-1/2 -translate-y-1/2"
          style={{
            width: size,
            height: size,
            right: -(size * 0.18),
            opacity: 0.32,
            filter:
              "drop-shadow(0 0 60px rgba(99, 102, 241, 0.7)) drop-shadow(0 0 24px rgba(139, 92, 246, 0.5))",
          }}
        />
      </div>
    </div>
  );
}
