import { Person } from "@/types";

export function PersonCard({ name, parents, relation }: Person) {
  return (
    <div className="mb-4">
      <p className="text-base text-primary/80 mt-1">{parents}</p>
      <p className="text-sm text-secondary/60 mt-1">{relation}</p>
      <h3 className="text-4xl text-primary mt-2">{name}</h3>
    </div>
  );
}
