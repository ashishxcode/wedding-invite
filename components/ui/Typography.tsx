import { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-2xl tracking-wide text-primary mb-3">{children}</p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-4xl text-primary mb-6">{children}</h2>;
}

export function DeityText({ children }: { children: ReactNode }) {
  return <p className="text-base text-secondary/70 mb-4 font-medium">{children}</p>;
}
