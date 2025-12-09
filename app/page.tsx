"use client";

import { CoverPage } from "@/components/sections/CoverPage";
import { InvitationPage } from "@/components/sections/InvitationPage";
import { EventsPage } from "@/components/sections/EventsPage";
import { FamilyPage } from "@/components/sections/FamilyPage";
import { RSVPPage } from "@/components/sections/RSVPPage";
import { NavigationControls } from "@/components/ui/NavigationArrow";
import { MandalaPattern } from "@/components/ui/Decorations";

export default function WeddingInvite() {
  return (
    <div className="fixed inset-0 h-dvh w-full overflow-hidden flex items-center justify-center p-4">
      {/* Card Container - Fixed Frame */}
      <div className="relative w-full max-w-md h-[calc(100dvh-2rem)] bg-background shadow-2xl border-x-4 border-primary/10 overflow-hidden rounded-xl">
        
        {/* Fixed Decorations */}
        <MandalaPattern />
        <NavigationControls />

        {/* Scrollable Content */}
        <main className="snap-container h-full overflow-y-scroll snap-y snap-mandatory relative z-10">
          <CoverPage />
          <InvitationPage />
          <EventsPage />
          <FamilyPage />
          <RSVPPage />
        </main>
      </div>
    </div>
  );
}
