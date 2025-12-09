import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { RSVPForm } from "@/components/forms/RSVPForm";

export function RSVPPage() {
  return (
    <Section>
      <ScrollReveal>
        <div className="max-w-[300px] mx-auto">
          <h2 className="text-4xl text-primary mb-2">પ્રત્યુત્તર</h2>
          <p className="text-sm text-secondary/60 tracking-wider uppercase mb-8 font-medium">
            RSVP
          </p>
          <RSVPForm />
        </div>
      </ScrollReveal>
    </Section>
  );
}
