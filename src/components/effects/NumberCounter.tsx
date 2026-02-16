"use client";

import { useEffect, useRef } from "react";
import { useInView, useSpring, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NumberCounterProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

/**
 * Number Counter Component
 * Números que cuentan desde 0 hasta el valor final
 * Efecto tipo Linear.app
 *
 * @param value - Valor final del contador
 * @param duration - Duración de la animación en segundos (default: 2)
 * @param suffix - Texto después del número (ej: "+", "%")
 * @param prefix - Texto antes del número (ej: "$")
 * @param decimals - Número de decimales (default: 0)
 */
export function NumberCounter({
  value,
  duration = 2,
  className,
  suffix = "",
  prefix = "",
  decimals = 0,
}: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Spring animado
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: duration * 1000,
  });

  // Transformar el valor del spring a número formateado
  const display = useTransform(spring, (current) =>
    (Math.floor(current * Math.pow(10, decimals)) / Math.pow(10, decimals))
      .toFixed(decimals)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
