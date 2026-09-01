"use client";

import dynamic from "next/dynamic";
import type { TimelineEvent } from "@/lib/types";

/**
 * Leaflet touches `window` on import, so the map is loaded in the browser only.
 */
const NagalandMap = dynamic(() => import("./NagalandMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[440px] w-full items-center justify-center bg-[#e8eae3] lg:h-[540px]">
      <p className="text-[13px] text-graphite">Loading map</p>
    </div>
  ),
});

interface Props {
  events: TimelineEvent[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function MapPanel({ events, selectedId, onSelect }: Props) {
  const mapped = events.filter((e) => e.location);
  const selected = events.find((e) => e.id === selectedId) ?? null;

  return (
    <section className="isolate">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="font-display text-[22px] leading-tight font-medium">
          Where it happened
        </h2>
        <p className="text-[12.5px] text-graphite">
          {mapped.length} of {events.length} events are placed.{" "}
          {selected && !selected.location
            ? "The current event has no single location."
            : "Click a marker to open its event."}
        </p>
      </div>

      <div className="overflow-hidden rounded-[3px] border border-rule">
        <NagalandMap events={mapped} selectedId={selectedId} onSelect={onSelect} />
      </div>

      <p className="mt-2 text-[11.5px] leading-relaxed text-graphite">
        Village-level sites from the nineteenth and mid-twentieth century are
        placed approximately. Markers for events sharing a location are spread
        around it so each stays clickable.
      </p>
    </section>
  );
}
