"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { LAYERS, yearOf } from "@/lib/layers";
import type { PlateId, TimelineEvent } from "@/lib/types";
import EventCard from "./EventCard";

const COL = 152; // px allotted to each event
const PAD = 56; // px of runway at each end
const HEIGHT = 560; // px, total scroller height
const CARD_W = 348;

interface Props {
  events: TimelineEvent[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onClear: () => void;
  onOpenPlate: (plate: PlateId) => void;
}

export default function Timeline({
  events,
  selectedId,
  onSelect,
  onClear,
  onOpenPlate,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentWidth = Math.max(events.length * COL + PAD * 2, 640);
  const selectedIndex = events.findIndex((e) => e.id === selectedId);
  const selected = selectedIndex >= 0 ? events[selectedIndex] : null;

  // Keep the current event centred as the reader steps through the sequence.
  useEffect(() => {
    if (selectedIndex < 0 || !scrollRef.current) return;
    const el = scrollRef.current;
    const target = PAD + selectedIndex * COL + COL / 2 - el.clientWidth / 2;
    el.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [selectedIndex]);

  if (events.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-[3px] border border-dashed border-rule">
        <p className="text-center text-[14px] leading-relaxed text-graphite">
          Every layer is switched off.
          <br />
          Turn one on to read that record.
        </p>
      </div>
    );
  }

  // Bubble geometry: the card sits in the half opposite its marker, with a
  // notch pointing back across the woven line to the dot.
  let cardStyle: CSSProperties = {};
  let notchOffset = CARD_W / 2;
  let cardAbove = false;

  if (selected) {
    const dotX = PAD + selectedIndex * COL + COL / 2;
    const cardLeft = Math.min(
      Math.max(dotX - CARD_W / 2, 8),
      Math.max(contentWidth - CARD_W - 8, 8),
    );
    notchOffset = Math.min(Math.max(dotX - cardLeft, 26), CARD_W - 26);
    cardAbove = LAYERS[selected.layer].side === "below";
    cardStyle = { left: cardLeft, width: CARD_W };
    if (cardAbove) {
      cardStyle.bottom = "calc(50% + 22px)";
    } else {
      cardStyle.top = "calc(50% + 22px)";
    }
  }

  return (
    <div
      ref={scrollRef}
      className="timeline-scroll overflow-x-auto overflow-y-hidden overscroll-x-contain"
    >
      <div className="relative" style={{ width: contentWidth, height: HEIGHT }}>
        {/* the central line */}
        <div className="axis-band absolute top-1/2 right-0 left-0 h-[9px] -translate-y-1/2" />

        {events.map((event, i) => {
          const layer = LAYERS[event.layer];
          const above = layer.side === "above";
          const left = PAD + i * COL;
          const isSelected = event.id === selectedId;
          const stem = i % 2 === 0 ? 38 : 74;
          const year = yearOf(event.date);
          const showYear = i === 0 || yearOf(events[i - 1].date) !== year;

          const markerStyle: CSSProperties = {
            left,
            width: COL,
            flexDirection: above ? "column" : "column-reverse",
            opacity: selectedId && !isSelected ? 0.62 : 1,
          };
          if (above) {
            markerStyle.bottom = "50%";
            markerStyle.paddingBottom = 6;
          } else {
            markerStyle.top = "50%";
            markerStyle.paddingTop = 6;
          }

          return (
            <div key={event.id}>
              {showYear && (
                <span
                  className="absolute z-10 -translate-y-1/2 rounded-[2px] bg-paper px-1 font-display text-[11px] tabular-nums text-graphite"
                  style={{ left: left - 4, top: "50%" }}
                >
                  {year}
                </span>
              )}

              <button
                type="button"
                onClick={() => (isSelected ? onClear() : onSelect(event.id))}
                aria-pressed={isSelected}
                className="absolute flex items-center text-center transition-opacity duration-200"
                style={markerStyle}
              >
                <span className="block w-[128px] px-1">
                  <span
                    className="block font-display text-[12px] leading-tight italic"
                    style={{ color: isSelected ? layer.color : "#5a6167" }}
                  >
                    {event.displayDate}
                  </span>
                  <span
                    className="clamp-2 mt-0.5 block text-[12px] leading-[1.3]"
                    style={{
                      color: isSelected ? "#16191b" : "#5a6167",
                      fontWeight: isSelected ? 600 : 400,
                    }}
                  >
                    {event.title}
                  </span>
                </span>

                <span
                  className="block w-px transition-all duration-200"
                  style={{
                    height: stem,
                    backgroundColor: isSelected ? layer.color : "#c2c6bc",
                  }}
                />

                <span
                  className="block rounded-full transition-all duration-200"
                  style={{
                    width: isSelected ? 17 : 12,
                    height: isSelected ? 17 : 12,
                    backgroundColor: layer.color,
                    boxShadow: isSelected
                      ? `0 0 0 4px ${layer.softColor}, 0 0 0 5px ${layer.color}`
                      : "0 0 0 2.5px #eeefea",
                  }}
                />
              </button>
            </div>
          );
        })}

        {selected && (
          <div className="absolute z-20 hidden md:block" style={cardStyle}>
            <EventCard
              event={selected}
              notch={cardAbove ? "bottom" : "top"}
              notchOffset={notchOffset}
              onOpenPlate={onOpenPlate}
              onClose={onClear}
            />
          </div>
        )}
      </div>
    </div>
  );
}
