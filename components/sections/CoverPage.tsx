import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Divider } from "@/components/ui/Divider";
import { DeityText } from "@/components/ui/Typography";
import { COUPLE, WEDDING_DATE, INVITER, VENUE, CONTACT } from "@/lib/constants";

export function CoverPage() {
  return (
    <Section
      header={
        <div className="flex items-center justify-between">
          <DeityText>॥ શ્રી બ્રહ્માણી માં ॥</DeityText>
          <DeityText>॥ શ્રી ગણેશાય નમઃ ॥</DeityText>
          <DeityText>॥ શ્રી ખોડીયાર માં ॥</DeityText>
        </div>
      }
      footer={<Divider />}
    >
      <ScrollReveal>
        <div className="min-h-[60vh] flex flex-col justify-center">
          <p className="text-secondary/80 text-3xl tracking-[0.3em] mb-8 font-medium">
            શુભ વિવાહ
          </p>

          {/* Names with decorative border */}
          <div className="relative py-12 px-6 mb-12">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-tl-3xl rounded-br-3xl" />
            <div className="absolute inset-2 border border-primary/10 rounded-tl-2xl rounded-br-2xl" />
            
            <div className="relative z-10">
              <h1 className="text-6xl text-primary font-bold drop-shadow-sm">{COUPLE.groom.name}</h1>
              <div className="flex items-center justify-center gap-4 my-6 opacity-80">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <span className="text-secondary/80 text-2xl font-medium">weds</span>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              </div>
              <h1 className="text-6xl text-primary font-bold drop-shadow-sm">{COUPLE.bride.name}</h1>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center justify-center gap-2 text-primary text-2xl mb-10 font-medium">
            <span>{WEDDING_DATE.display}</span>
          </div>

          {/* Inviter */}
          <div className="mb-8">
            <p className="text-base text-secondary/60 tracking-widest mb-2 font-medium">
              {INVITER.label}
            </p>
            <p className="text-xl text-primary font-semibold">{INVITER.name}</p>
          </div>

          {/* Venue & Contact */}
          <address className="text-base text-secondary/70 leading-relaxed not-italic">
            <p>{VENUE.primary.short}</p>
            <p className="mt-2 font-medium">મો. {CONTACT.displayPhone}</p>
          </address>

          <div className="text-secondary/40 mt-6">
            <ChevronDown
              size={24}
              className="mx-auto animate-bounce"
              aria-hidden="true"
            />
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
