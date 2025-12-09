import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Divider } from "@/components/ui/Divider";
import { DeityText, SectionLabel } from "@/components/ui/Typography";
import { FAMILY, TAHUKO } from "@/lib/constants";

export function FamilyPage() {
  return (
    <Section
      header={<DeityText>॥ શ્રી ખોડીયાર માં ॥</DeityText>}
      footer={<Divider />}
    >
      <ScrollReveal>
        {/* Elders */}
        {/* Elders */}
        <div className="mb-8">
          <SectionLabel>{FAMILY.elders.label}</SectionLabel>
          <div className="text-base text-primary/80 leading-8 font-medium">
            {FAMILY.elders.members.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

         {/* Tahuko */}
        <div className="px-2 mb-8">
          <SectionLabel>ટહુકો</SectionLabel>
          <p className="text-primary/80 text-lg italic leading-9 whitespace-pre-line font-medium">
            {TAHUKO}
          </p>
        </div>

        {/* Cousins */}
        <div className="mb-8">
          <SectionLabel>{FAMILY.cousins.label}</SectionLabel>
          <p className="text-base text-secondary/80 leading-7">{FAMILY.cousins.members}</p>
        </div>

        {/* Kids */}
        <div className="mb-8">
          <SectionLabel>{FAMILY.kids.label}</SectionLabel>
          <div className="text-base text-secondary/80 leading-8">
            {FAMILY.kids.groups.map((group) => (
              <p key={group.label}>
                <span className="text-primary/80 font-semibold">
                  {group.label}
                </span>{" "}
                {group.members}
              </p>
            ))}
          </div>
        </div>

       
      </ScrollReveal>
    </Section>
  );
}
