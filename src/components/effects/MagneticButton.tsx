"use client";

import { useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

/**
 * Magnetic Button Effect
 * El elemento se "atrae" hacia el cursor cuando está cerca
 * Inspirado en Stripe.com
 *
 * @param strength - Intensidad del efecto magnetic (default: 0.3)
 */
export function MagneticButton({
  children,
  className,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Springs para movimiento suave
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calcular distancia del cursor al centro del elemento
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;


  };

  const handleMouseLeave = () => {
    // Volver a posición original suavemente
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
