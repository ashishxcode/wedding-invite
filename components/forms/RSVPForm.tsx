"use client";

import { useState, ReactNode } from "react";
import { CONTACT } from "@/lib/constants";

function AttendanceButton({
  children,
  selected,
  onClick,
}: {
  children: ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 py-4 rounded-xl text-base font-medium flex items-center justify-center gap-2 transition-all ${
        selected
          ? "bg-primary text-background shadow-md"
          : "bg-background text-secondary/70 border-2 border-primary/20"
      }`}
      aria-pressed={selected}
    >
      {children}
    </button>
  );
}

export function RSVPForm() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(true);

  const handleSubmit = () => {
    if (!name.trim()) return;

    const message = `પ્રત્યુત્તર (RSVP)\n\nનામ: ${name}\nહાજરી: ${
      attending ? "હા, આવીશ" : "નહીં આવી શકું"
    }`;
    const url = `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm text-secondary/70 mb-2">
          તમારું નામ
        </label>
        <input
          type="text"
          placeholder="અહીં લખો..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-background border-2 border-primary/20 p-4 text-lg focus:outline-none focus:border-primary/50 rounded-xl text-center text-primary placeholder:text-secondary/30 transition-colors"
          aria-label="તમારું નામ"
        />
      </div>

      <div>
        <label className="block text-sm text-secondary/70 mb-2">
          શું તમે આવી શકશો?
        </label>
        <div className="flex gap-3" role="group" aria-label="હાજરી">
          <AttendanceButton
            selected={attending}
            onClick={() => setAttending(true)}
          >
            આવીશ
          </AttendanceButton>
          <AttendanceButton
            selected={!attending}
            onClick={() => setAttending(false)}
          >
            ક્ષમા કરશો
          </AttendanceButton>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!name.trim()}
        className="w-full py-4 bg-primary text-background text-base tracking-wide rounded-xl hover:bg-secondary transition-all disabled:opacity-40 disabled:cursor-not-allowed mt-2"
      >
        WhatsApp પર મોકલો
      </button>
    </div>
  );
}
