"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InfiniteScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
}

/**
 * Infinite Scroll Component
 * Loop infinito horizontal sin saltos
 * Usado para logos en Social Proof
 *
 * @param speed - Velocidad en segundos (default: 30)
 * @param pauseOnHover - Si true, pausa al hacer hover
 */
export function InfiniteScroll({
  children,
  className,
  speed = 30,
  pauseOnHover = true,
}: InfiniteScrollProps) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        pauseOnHover && "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      {/* Primera copia */}
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-8",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `scroll-left ${speed}s linear infinite`,
        }}
      >
        {children}
      </div>

      {/* Segunda copia (para seamless loop) */}
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-8",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `scroll-left ${speed}s linear infinite`,
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
