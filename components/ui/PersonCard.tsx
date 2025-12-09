import { Person } from "@/types";

export function PersonCard({ name, parents, relation }: Person) {
  return (
    <div className="mb-6">
      <p className="text-lg text-primary/80 mt-1 font-medium">{parents}</p>
      <p className="text-base text-secondary/60 mt-1">{relation}</p>
      <h3 className="text-5xl text-primary mt-3 font-bold">{name}</h3>
    </div>
  );
}
