export function CornerDecoration({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const rotation = {
    "top-left": "rotate(0)",
    "top-right": "rotate(90)",
    "bottom-right": "rotate(180)",
    "bottom-left": "rotate(270)",
  };

  const style = {
    transform: rotation[position],
  };

  const className = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
  };

  return (
    <div
      className={`absolute ${className[position]} w-24 h-24 pointer-events-none z-0 opacity-40 text-primary`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        style={style}
        className="w-full h-full"
      >
        <path d="M0 0 L100 0 C60 0 40 20 20 40 C10 60 0 100 0 100 Z" fill="none" />
        {/* Traditional Paisley/Mango Motif simplified */}
        <path
          d="M10,10 Q40,10 50,30 T60,60 T30,80 T10,50 Z"
          fill="currentColor"
          opacity="0.2"
        />
        <path
          d="M0,0 L60,0 Q80,0 80,20 Q80,40 60,40 L40,40 Q20,40 20,60 L20,80 Q20,100 0,100 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="20" cy="20" r="4" fill="currentColor" />
        <circle cx="40" cy="10" r="3" fill="currentColor" />
        <circle cx="10" cy="40" r="3" fill="currentColor" />
        <path
          d="M5,5 L30,5 L30,30 L5,30 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          transform="rotate(45 15 15)"
        />
      </svg>
    </div>
  );
}

export function MandalaPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 200 200"
        className="w-[150%] h-[150%] animate-spin-slow"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="50" />
        <path d="M100 10 L100 190 M10 100 L190 100" />
        <path d="M36 36 L164 164 M36 164 L164 36" />
        {/* Add more intricate patterns if needed */}
        {[...Array(12)].map((_, i) => (
          <path
            key={i}
            d="M100 100 Q120 60 100 20 Q80 60 100 100"
            transform={`rotate(${i * 30} 100 100)`}
          />
        ))}
      </svg>
    </div>
  );
}
