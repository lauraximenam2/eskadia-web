"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CursorSpotlightProps {
  className?: string;
  size?: number;
}

/**
 * Cursor Spotlight Effect
 * Un gradiente radial que sigue el cursor del mouse
 * Efecto tipo Linear.app para el Hero section
 */
export function CursorSpotlight({
  className,
  size = 600,
}: CursorSpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Actualizar posición del spotlight
      spotlight.style.background = `radial-gradient(${size}px circle at ${clientX}px ${clientY}px, rgba(99, 102, 241, 0.15), transparent 40%)`;
    };

    // Agregar event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size]);

  return (
    <div
      ref={spotlightRef}
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 transition-opacity duration-300",
        className
      )}
      aria-hidden="true"
    />
  );
}
