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
        <div className="mb-6">
          <SectionLabel>{FAMILY.elders.label}</SectionLabel>
          <div className="text-sm text-primary/80 leading-7">
            {FAMILY.elders.members.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

         {/* Tahuko */}
        <div className="px-2 mb-6">
          <SectionLabel>ટહુકો</SectionLabel>
          <p className="text-primary/80 text-base italic leading-8 whitespace-pre-line">
            {TAHUKO}
          </p>
        </div>

        {/* Cousins */}
        <div className="mb-6">
          <SectionLabel>{FAMILY.cousins.label}</SectionLabel>
          <p className="text-sm text-secondary/70">{FAMILY.cousins.members}</p>
        </div>

        {/* Kids */}
        <div className="mb-6">
          <SectionLabel>{FAMILY.kids.label}</SectionLabel>
          <div className="text-sm text-secondary/70 leading-7">
            {FAMILY.kids.groups.map((group) => (
              <p key={group.label}>
                <span className="text-primary/80 font-medium">
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
