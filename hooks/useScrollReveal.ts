"use client";

import { useState, useEffect, useRef } from "react";

export function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, []);

  return { ref, isVisible };
}
