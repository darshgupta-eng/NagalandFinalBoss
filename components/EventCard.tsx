"use client";

import type { CSSProperties } from "react";
import { LAYERS, PLATES } from "@/lib/layers";
import type { PlateId, TimelineEvent } from "@/lib/types";

interface Props {
  event: TimelineEvent;
  /** Which edge of the card carries the pointer notch. */
  notch?: "top" | "bottom" | "none";
  /** Distance in px from the card's left edge to the notch centre. */
  notchOffset?: number;
  onOpenPlate?: (plate: PlateId) => void;
  onClose?: () => void;
}

export default function EventCard({
  event,
  notch = "none",
  notchOffset,
  onOpenPlate,
  onClose,
}: Props) {
  const layer = LAYERS[event.layer];

  const notchStyle: CSSProperties = {
    left: notchOffset ?? "50%",
    marginLeft: notchOffset === undefined ? -6 : -6,
  };
  if (notch === "top") {
    notchStyle.top = -6;
    notchStyle.borderTop = `3px solid ${layer.color}`;
    notchStyle.borderLeft = `3px solid ${layer.color}`;
  } else {
    notchStyle.bottom = -6;
  }

  return (
    <article
      className="relative rounded-[3px] bg-surface p-4 shadow-[0_2px_16px_rgba(22,25,27,0.13)]"
      style={{ borderTop: `3px solid ${layer.color}` }}
    >
      {notch !== "none" && (
        <span
          aria-hidden
          className="absolute h-3 w-3 rotate-45 bg-surface"
          style={notchStyle}
        />
      )}

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-sm text-graphite transition-colors hover:bg-paper hover:text-ink"
          aria-label="Close event"
        >
          <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
            <path
              d="M1 1l9 9M10 1l-9 9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}

      <p className="font-display text-[13px] italic" style={{ color: layer.color }}>
        {event.displayDate}
        <span className="text-graphite not-italic"> · {layer.label}</span>
      </p>

      <h3 className="mt-1 pr-6 font-display text-[19px] leading-snug font-medium text-ink">
        {event.title}
      </h3>

      <p className="mt-2 text-[13.5px] leading-[1.55] text-graphite">
        {event.description}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-rule pt-2.5 text-[12px]">
        {event.location ? (
          <span className="text-graphite">
            {event.location.place}
            {event.location.approximate && <span className="opacity-60"> (approx.)</span>}
          </span>
        ) : (
          <span className="text-graphite opacity-60">No mapped location</span>
        )}

        {event.plate && onOpenPlate && (
          <button
            type="button"
            onClick={() => onOpenPlate(event.plate as PlateId)}
            className="ml-auto rounded-sm px-2 py-1 font-medium transition-colors"
            style={{ color: layer.color, backgroundColor: layer.softColor }}
          >
            {PLATES[event.plate].title}
          </button>
        )}
      </div>
    </article>
  );
}
