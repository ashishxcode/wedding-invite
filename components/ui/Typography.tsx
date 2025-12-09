import { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xl tracking-wide text-primary mb-3">{children}</p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-3xl text-primary mb-6">{children}</h2>;
}

export function DeityText({ children }: { children: ReactNode }) {
  return <p className="text-sm text-secondary/70 mb-4">{children}</p>;
}
