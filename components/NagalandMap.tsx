"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LAYERS } from "@/lib/layers";
import type { TimelineEvent } from "@/lib/types";

interface Props {
  events: TimelineEvent[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

interface Placed {
  event: TimelineEvent;
  lat: number;
  lng: number;
}

/**
 * Kohima and New Delhi carry a dozen events each. Spread co-located markers
 * around a small ring so every one of them stays clickable.
 */
function spread(events: TimelineEvent[]): Placed[] {
  const groups = new Map<string, TimelineEvent[]>();

  for (const event of events) {
    if (!event.location) continue;
    const key = `${event.location.lat.toFixed(2)},${event.location.lng.toFixed(2)}`;
    const bucket = groups.get(key);
    if (bucket) bucket.push(event);
    else groups.set(key, [event]);
  }

  const placed: Placed[] = [];
  for (const bucket of groups.values()) {
    bucket.forEach((event, i) => {
      const { lat, lng } = event.location!;
      if (bucket.length === 1) {
        placed.push({ event, lat, lng });
        return;
      }
      const angle = (2 * Math.PI * i) / bucket.length;
      const radius = 0.055 + Math.floor(i / 8) * 0.04;
      placed.push({
        event,
        lat: lat + radius * Math.sin(angle),
        lng: lng + radius * Math.cos(angle),
      });
    });
  }
  return placed;
}

/** Moves the view when the reader picks an event on the timeline. */
function FlyTo({ target }: { target: Placed | null }) {
  const map = useMap();

  useEffect(() => {
    if (!target) return;
    map.flyTo([target.lat, target.lng], Math.max(map.getZoom(), 8), {
      duration: 0.9,
    });
  }, [target, map]);

  return null;
}

export default function NagalandMap({ events, selectedId, onSelect }: Props) {
  const placed = useMemo(() => spread(events), [events]);
  const target = placed.find((p) => p.event.id === selectedId) ?? null;

  return (
    <MapContainer
      center={[25.9, 94.3]}
      zoom={7}
      scrollWheelZoom={false}
      className="h-[440px] w-full lg:h-[540px]"
      style={{ backgroundColor: "#e8eae3" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={18}
      />

      <FlyTo target={target} />

      {placed.map(({ event, lat, lng }) => {
        const layer = LAYERS[event.layer];
        const isSelected = event.id === selectedId;

        return (
          <CircleMarker
            key={event.id}
            center={[lat, lng]}
            radius={isSelected ? 11 : 6}
            pathOptions={{
              color: isSelected ? "#16191b" : "#ffffff",
              weight: isSelected ? 2 : 1.5,
              fillColor: layer.color,
              fillOpacity: isSelected ? 1 : 0.82,
            }}
            eventHandlers={{ click: () => onSelect(event.id) }}
          >
            <Tooltip direction="top" offset={[0, -8]} opacity={1}>
              <span style={{ fontWeight: 600 }}>{event.displayDate}</span>
              <br />
              {event.title}
              <br />
              <span style={{ opacity: 0.7 }}>{event.location?.place}</span>
            </Tooltip>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
