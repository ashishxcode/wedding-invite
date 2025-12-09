import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Divider } from "@/components/ui/Divider";
import { DeityText } from "@/components/ui/Typography";
import { PersonCard } from "@/components/ui/PersonCard";
import { COUPLE, WEDDING_DATE, VENUE } from "@/lib/constants";

export function InvitationPage() {
  return (
    <Section
      header={<DeityText>॥ શ્રી ગણેશાય નમઃ ॥</DeityText>}
      footer={<Divider />}
    >
      <ScrollReveal>
        <div className="text-primary/80 text-base leading-8">
          <p className="mb-1">સહર્ષ ખુશાલીની સાથે જણાવવાનું કે,</p>
          <p>
            અમારા ઇષ્ટદેવ શ્રી ગોપાલલાલ મહારાજ તથા અમારા કુળદેવી શ્રી બ્રહ્માણી માં તેમજ શ્રી ખોડીયાર માંની અસીમ કૃપાથી
          </p>
        </div>

        <PersonCard {...COUPLE.groom} />
        <p className="text-secondary/60 text-xl my-3">સંગ</p>
        <PersonCard {...COUPLE.bride} />

        <div className="text-primary/80 mt-6">
          <p className="text-lg font-medium text-primary">ના શુભ લગ્ન</p>
          <p className="text-sm text-secondary/70 mt-2">
            {WEDDING_DATE.samvat}
          </p>
          <p className="text-sm text-secondary/70">{WEDDING_DATE.main}</p>
          <p className="text-sm text-secondary/70">
            પંચ પરમેશ્વર તથા પવિત્ર અગ્નિદેવની સાક્ષીએ નિશ્ચિત થયા છે.
          </p>
        </div>

        <div className="mt-6 text-sm text-primary/80 leading-7">
          <p>આ આનંદ પ્રસંગને યાદગાર બનાવવા તથા નવદંપતીને આપના </p>
          <p>
            આશીર્વાદથી સુશોભિત કરવા સોનાણી પરિવાર તરફથી આપ સૌને હાર્દિક આમંત્રણ
            છે.
          </p>
        </div>

        <address className="text-sm text-secondary/70 not-italic mt-6">
          <p className="text-base font-medium text-primary mb-1">સ્થળ :</p>
          <p>{VENUE.primary.address}</p>
          <p>{VENUE.primary.city}</p>
        </address>
      </ScrollReveal>
    </Section>
  );
}
