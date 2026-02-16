"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animated?: boolean;
  colors?: string[];
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

/**
 * Gradient Text Component
 * Texto con gradiente animado estilo Linear.app
 *
 * @param animated - Si true, el gradiente se anima (default: true)
 * @param colors - Array de colores para el gradiente (opcional)
 * @param as - Elemento HTML a renderizar (default: span)
 */
export function GradientText({
  children,
  className,
  animated = true,
  colors = ["#6366f1", "#a78bfa", "#6366f1"],
  as: Component = "span",
}: GradientTextProps) {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${colors.join(", ")})`,
    backgroundSize: animated ? "200% 200%" : "100% 100%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <Component
      className={cn(animated && "animate-gradient-shift", className)}
      style={gradientStyle}
    >
      {children}
    </Component>
  );
}
