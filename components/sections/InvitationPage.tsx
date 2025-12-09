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
        <div className="text-primary/80 text-lg leading-9 font-medium">
          <p className="mb-2">સહર્ષ ખુશાલીની સાથે જણાવવાનું કે,</p>
          <p>
            અમારા ઇષ્ટદેવ શ્રી ગોપાલલાલ મહારાજ તથા અમારા કુળદેવી શ્રી બ્રહ્માણી માં તેમજ શ્રી ખોડીયાર માંની અસીમ કૃપાથી
          </p>
        </div>

        <div className="my-8">
          <PersonCard {...COUPLE.groom} />
          <p className="text-secondary/60 text-2xl my-4 font-medium">સંગ</p>
          <PersonCard {...COUPLE.bride} />
        </div>

        <div className="text-primary/80 mt-8">
          <p className="text-xl font-semibold text-primary">ના શુભ લગ્ન</p>
          <p className="text-base text-secondary/70 mt-3 font-medium">
            {WEDDING_DATE.samvat}
          </p>
          <p className="text-base text-secondary/70 mt-1 font-medium">{WEDDING_DATE.main}</p>
          <p className="text-base text-secondary/70 mt-1">
            પંચ પરમેશ્વર તથા પવિત્ર અગ્નિદેવની સાક્ષીએ નિશ્ચિત થયા છે.
          </p>
        </div>

        <div className="mt-8 text-base text-primary/80 leading-8 font-medium">
          <p>આ આનંદ પ્રસંગને યાદગાર બનાવવા તથા નવદંપતીને આપના </p>
          <p>
            આશીર્વાદથી સુશોભિત કરવા સોનાણી પરિવાર તરફથી આપ સૌને હાર્દિક આમંત્રણ
            છે.
          </p>
        </div>

        <address className="text-base text-secondary/70 not-italic mt-8">
          <p className="text-lg font-semibold text-primary mb-2">સ્થળ :</p>
          <p className="font-medium">{VENUE.primary.address}</p>
          <p className="font-medium">{VENUE.primary.city}</p>
        </address>
      </ScrollReveal>
    </Section>
  );
}
