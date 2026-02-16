"use client";

import { cn } from "@/lib/utils";

interface DotGridProps {
  className?: string;
  dotSize?: number;
  dotColor?: string;
  spacing?: number;
}

/**
 * Dot Grid Background Effect
 * Crea un patrón de puntos que da profundidad al diseño
 * Inspirado en Linear.app
 */
export function DotGrid({
  className,
  dotSize = 1,
  dotColor = "rgba(99, 102, 241, 0.1)",
  spacing = 24,
}: DotGridProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
      style={{
        backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
      aria-hidden="true"
    />
  );
}
