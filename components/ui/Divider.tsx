export function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 py-4">
      <div className="h-px w-12 bg-linear-to-r from-transparent to-secondary/30" />
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        className="text-secondary/40"
        aria-hidden="true"
      >
        <path
          d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
          fill="currentColor"
        />
      </svg>
      <div className="h-px w-12 bg-linear-to-l from-transparent to-secondary/30" />
    </div>
  );
}
