import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Divider } from "@/components/ui/Divider";
import { DeityText, SectionTitle } from "@/components/ui/Typography";
import { DayScheduleCard } from "@/components/ui/DayScheduleCard";
import { SCHEDULE } from "@/lib/constants";

export function EventsPage() {
  return (
    <Section
      header={<DeityText>॥ શ્રી બ્રહ્માણી માં ॥</DeityText>}
      footer={<Divider />}
    >
      <ScrollReveal>
        <SectionTitle>માંગલિક કાર્યક્રમો</SectionTitle>

        {SCHEDULE.map((schedule) => (
          <DayScheduleCard key={schedule.date} schedule={schedule} />
        ))}
      </ScrollReveal>
    </Section>
  );
}
