import { MapPin } from "lucide-react";
import { DaySchedule, Event } from "@/types";

function EventRow({ time, title }: Event) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-2 last:border-0 border-b border-dashed border-red-950/20 `}
    >
      <span>{title}</span>
      <span>{time}</span>
    </div>
  );
}

export function DayScheduleCard({ schedule }: { schedule: DaySchedule }) {
  return (
    <div className="border mb-8 p-4 rounded-xl border-red-950/20">
      <div className="mb-2">
        <p className="text-xl font-medium text-primary">
          {schedule.date}
          <span className="text-secondary/70 ml-2">{schedule.day}</span>
        </p>

        <p className="text-sm text-secondary/70 flex items-center justify-center gap-1 mt-2">
          <MapPin size={14} aria-hidden="true" />
          {schedule.venue}
        </p>
      </div>
      <div className="space-y-2">
        {schedule.events.map((event, index) => (
          <EventRow key={index} {...event} />
        ))}
      </div>
    </div>
  );
}
