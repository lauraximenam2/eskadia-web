"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  animatedBorder?: boolean;
}

/**
 * Glass Card Component
 * Card con glassmorphism, glow hover y borde animado opcional
 * Combina efectos #4, #9 y #12
 *
 * @param hover - Si true, aplica efecto hover (lift + glow)
 * @param glow - Si true, siempre tiene glow activo
 * @param animatedBorder - Si true, tiene borde con gradiente rotante
 */
export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  animatedBorder = false,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn("group relative", className)}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Borde animado (opcional) */}
      {animatedBorder && (
        <div
          className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-primary via-secondary to-primary opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"
          style={{
            animation: "rotate-border 3s linear infinite",
          }}
          aria-hidden="true"
        />
      )}

      {/* Card principal con glassmorphism */}
      <div
        className={cn(
          // Base styles
          "relative h-full rounded-lg border border-white/10 bg-card/60 p-6",
          // Glassmorphism
          "backdrop-blur-xl backdrop-saturate-150",
          // Glow effect
          glow && "shadow-[0_0_20px_rgba(99,102,241,0.3)]",
          hover &&
            "transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]",
          // Borde visible cuando no hay animatedBorder
          !animatedBorder && "border-border"
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
