"use client";

import { useEffect } from "react";
import Image from "next/image";
import { PLATES, PLATE_ORDER } from "@/lib/layers";
import type { PlateId } from "@/lib/types";

interface Props {
  openPlate: PlateId | null;
  onOpen: (plate: PlateId) => void;
  onClose: () => void;
}

export default function PlateGallery({ openPlate, onOpen, onClose }: Props) {
  useEffect(() => {
    if (!openPlate) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openPlate, onClose]);

  const plate = openPlate ? PLATES[openPlate] : null;

  return (
    <section>
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="font-display text-[22px] leading-tight font-medium">
          Reference maps
        </h2>
        <p className="text-[12.5px] text-graphite">
          Four of these are linked from events on the timeline.
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {PLATE_ORDER.map((id) => {
          const p = PLATES[id];
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => onOpen(id)}
                className="group block w-full text-left"
              >
                <span className="block overflow-hidden rounded-[3px] border border-rule bg-surface">
                  <Image
                    src={p.src}
                    alt={p.title}
                    width={p.width}
                    height={p.height}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="h-[132px] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </span>
                <span className="mt-1.5 block text-[12px] leading-snug text-graphite group-hover:text-ink">
                  {p.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {plate && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-ink/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={plate.title}
          onClick={onClose}
        >
          <div
            className="max-h-full w-full max-w-4xl overflow-y-auto rounded-[3px] bg-surface p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-[20px] leading-tight font-medium">
                  {plate.title}
                </h3>
                <p className="mt-1 max-w-2xl text-[13px] leading-relaxed text-graphite">
                  {plate.caption}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-sm border border-rule px-2.5 py-1 text-[12px] text-graphite transition-colors hover:bg-paper hover:text-ink"
              >
                Close
              </button>
            </div>
            <Image
              src={plate.src}
              alt={plate.title}
              width={plate.width}
              height={plate.height}
              sizes="(max-width: 896px) 100vw, 896px"
              className="h-auto w-full rounded-[2px]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
