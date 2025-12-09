import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function Section({
  children,
  header,
  footer,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`min-h-full flex flex-col px-6 py-8 snap-start snap-always text-center ${className}`}
    >
      {/* Header */}
      <div className="shrink-0">{header}</div>

      {/* Content - centered */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {children}
      </div>

      {/* Footer */}
      <div className="shrink-0">{footer}</div>
    </section>
  );
}
