import { MapPin } from "lucide-react";
import { DaySchedule, Event } from "@/types";

function EventRow({ time, title }: Event) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-3 last:border-0 border-b border-dashed border-red-950/20 text-lg`}
    >
      <span className="font-medium text-primary/90">{title}</span>
      <span className="text-secondary/80 text-base">{time}</span>
    </div>
  );
}

export function DayScheduleCard({ schedule }: { schedule: DaySchedule }) {
  return (
    <div className="border mb-8 p-6 rounded-xl border-red-950/20 bg-white/30 backdrop-blur-sm">
      <div className="mb-4">
        <p className="text-2xl font-semibold text-primary">
          {schedule.date}
          <span className="text-secondary/80 ml-3 text-xl font-normal">{schedule.day}</span>
        </p>

        <p className="text-base text-secondary/80 flex items-center justify-center gap-2 mt-3 font-medium">
          <MapPin size={16} aria-hidden="true" />
          {schedule.venue}
        </p>
      </div>
      <div className="space-y-3">
        {schedule.events.map((event, index) => (
          <EventRow key={index} {...event} />
        ))}
      </div>
    </div>
  );
}
