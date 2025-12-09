export interface Event {
  time: string;
  title: string;
  highlight?: boolean;
}

export interface DaySchedule {
  date: string;
  day: string;
  note?: string;
  venue: string;
  events: Event[];
}

export interface Person {
  name: string;
  residence: string;
  parents: string;
  relation: string;
}
