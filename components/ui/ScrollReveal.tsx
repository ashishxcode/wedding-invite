"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ScrollReveal({ children }: { children: ReactNode }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-[opacity,transform] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
}
