"use client";

import { cn } from "@/lib/utils";

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
}

/**
 * Shimmer Button Effect
 * Una línea brillante cruza el botón periódicamente
 * Efecto tipo Vercel.com
 *
 * @param shimmerColor - Color del brillo (default: white)
 */
export function ShimmerButton({
  children,
  className,
  shimmerColor = "rgba(255, 255, 255, 0.3)",
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden transition-all",
        className
      )}
      {...props}
    >
      {/* Efecto shimmer */}
      <span
        className="absolute inset-0 -translate-x-full animate-[shine_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent to-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${shimmerColor}, transparent)`,
        }}
        aria-hidden="true"
      />

      {/* Contenido del botón */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
