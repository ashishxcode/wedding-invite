"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function NavigationControls() {
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  useEffect(() => {
    const container = document.querySelector("main.snap-container");
    if (!container) return;

    const checkScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      // Use a small threshold to account for rounding errors
      setCanScrollUp(scrollTop > 10);
      setCanScrollDown(scrollTop + clientHeight < scrollHeight - 10);
    };

    // Initial check
    checkScroll();

    container.addEventListener("scroll", checkScroll);
    return () => container.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "up" | "down") => {
    const container = document.querySelector("main.snap-container");
    if (!container) return;

    const offset = direction === "up" ? -container.clientHeight : container.clientHeight;
    container.scrollBy({ top: offset, behavior: "smooth" });
  };

  return (
    <div className="absolute bottom-6 right-6 z-50 flex gap-4">
      <button
        onClick={() => scroll("up")}
        disabled={!canScrollUp}
        className="text-primary/40 hover:text-primary transition-colors disabled:opacity-0"
        aria-label="Scroll up"
      >
        <ChevronUp size={24} />
      </button>
      <button
        onClick={() => scroll("down")}
        disabled={!canScrollDown}
        className="text-primary/40 hover:text-primary transition-colors disabled:opacity-0"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
}
