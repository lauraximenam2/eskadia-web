"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  intensity?: number;
  priority?: boolean;
}

/**
 * Parallax Image Component
 * Imagen que se mueve a diferente velocidad que el scroll
 * Efecto tipo Stripe.com
 *
 * @param intensity - Intensidad del efecto parallax (default: 0.3)
 * @param priority - Si true, carga la imagen con prioridad
 */
export function ParallaxImage({
  src,
  alt,
  className,
  intensity = 0.3,
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Detectar scroll progress del elemento
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transformar scroll a translateY
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-100 * intensity, 100 * intensity]
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
      </motion.div>
    </div>
  );
}
