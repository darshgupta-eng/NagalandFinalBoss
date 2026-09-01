"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { events as allEvents } from "@/data/events";
import { LAYERS, LAYER_ORDER, byDate } from "@/lib/layers";
import type { Layer, PlateId } from "@/lib/types";
import LayerToggles from "./LayerToggles";
import Timeline from "./Timeline";
import EventCard from "./EventCard";
import MapPanel from "./MapPanel";
import PlateGallery from "./PlateGallery";

export default function TimelineExplorer() {
  const [active, setActive] = useState<Layer[]>([...LAYER_ORDER]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [openPlate, setOpenPlate] = useState<PlateId | null>(null);

  const sorted = useMemo(() => [...allEvents].sort(byDate), []);

  const visible = useMemo(
    () => sorted.filter((e) => active.includes(e.layer)),
    [sorted, active],
  );

  const counts = useMemo(() => {
    const base = { british: 0, indian: 0, naga: 0 } as Record<Layer, number>;
    for (const e of sorted) base[e.layer] += 1;
    return base;
  }, [sorted]);

  const index = visible.findIndex((e) => e.id === selectedId);
  const selected = index >= 0 ? visible[index] : null;

  const toggleLayer = useCallback(
    (layer: Layer) => {
      setActive((current) => {
        const next = current.includes(layer)
          ? current.filter((l) => l !== layer)
          : [...current, layer];
        // Drop a selection that just left the view.
        setSelectedId((id) => {
          if (!id) return id;
          const event = allEvents.find((e) => e.id === id);
          return event && next.includes(event.layer) ? id : null;
        });
        return next;
      });
    },
    [],
  );

  const step = useCallback(
    (direction: -1 | 1) => {
      if (visible.length === 0) return;
      setSelectedId((current) => {
        const i = visible.findIndex((e) => e.id === current);
        if (i < 0) return direction === 1 ? visible[0].id : visible[visible.length - 1].id;
        const next = Math.min(Math.max(i + direction, 0), visible.length - 1);
        return visible[next].id;
      });
    },
    [visible],
  );

  // Arrow keys walk the sequence, as long as focus is not in a form control.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  const atStart = index <= 0;
  const atEnd = index === visible.length - 1;

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-6 border-b border-rule pb-7 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <h1 className="font-display text-[34px] leading-[1.08] font-medium sm:text-[42px]">
              Nagaland, 1832 to 2026
            </h1>
            <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.6] text-graphite">
              The colonial administration, the Indian state and the Naga
              national movement each kept a record of this ground, and they do
              not agree about what happened on it. Switch a layer off to read
              one account on its own.
            </p>
          </div>

          <LayerToggles active={active} onToggle={toggleLayer} counts={counts} />
        </header>

        <section className="pt-7">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
            <p className="max-w-[46ch] text-[12.5px] leading-relaxed text-graphite">
              The Naga record runs above the woven line, the two state records
              below it. Click any dot to open the event, or step through with
              the arrow keys.
            </p>

            <div className="flex items-center gap-2">
              <span className="mr-1 font-display text-[13px] tabular-nums text-graphite">
                {index >= 0 ? `${index + 1} of ${visible.length}` : `${visible.length} events`}
              </span>
              <button
                type="button"
                onClick={() => step(-1)}
                disabled={visible.length === 0 || atStart}
                className="rounded-sm border border-rule bg-surface px-3 py-1.5 text-[13px] transition-colors hover:border-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-rule"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                disabled={visible.length === 0 || atEnd}
                className="rounded-sm border border-rule bg-surface px-3 py-1.5 text-[13px] transition-colors hover:border-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-rule"
              >
                Next
              </button>
            </div>
          </div>

          <Timeline
            events={visible}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onClear={() => setSelectedId(null)}
            onOpenPlate={setOpenPlate}
          />

          {/* Below the tablet breakpoint the bubble becomes a stacked card. */}
          {selected && (
            <div className="mt-4 md:hidden">
              <EventCard
                event={selected}
                onOpenPlate={setOpenPlate}
                onClose={() => setSelectedId(null)}
              />
            </div>
          )}
        </section>

        <div className="mt-12 grid gap-12">
          <MapPanel
            events={visible}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />

          <PlateGallery
            openPlate={openPlate}
            onOpen={setOpenPlate}
            onClose={() => setOpenPlate(null)}
          />
        </div>

        <footer className="mt-14 border-t border-rule pt-5">
          <p className="max-w-[80ch] text-[12px] leading-relaxed text-graphite">
            Events are drawn from a research compilation on Nagaland&rsquo;s
            history, law and politics, which draws in turn on Jelle J.P.
            Wouters, Sanjoy Hazarika and Sudeep Chakravarti alongside government
            records, UN Peacemaker texts and press reporting. Layer assignment
            follows the actor, so agreements signed by the government sit on the
            Indian layer even where a Naga organisation signed alongside.
            Coordinates for pre-1950 village sites are approximate. Base map
            &copy; OpenStreetMap contributors.
          </p>
          <p className="mt-2 text-[12px] text-graphite">
            {LAYER_ORDER.map((id, i) => (
              <span key={id}>
                {i > 0 && <span className="opacity-40"> / </span>}
                <span style={{ color: LAYERS[id].color }}>
                  {LAYERS[id].label} {counts[id]}
                </span>
              </span>
            ))}
            <span className="opacity-40"> / </span>
            <span>{allEvents.length} in total</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
