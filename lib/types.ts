/**
 * Core types for the Nagaland timeline.
 *
 * Everything the app renders is derived from `TimelineEvent` objects in
 * `data/events.ts`. Adding an event never requires touching a component.
 */

/** The three parallel records the timeline overlays. */
export type Layer = "british" | "indian" | "naga";

/** Identifiers for the scanned/drawn reference maps in `public/maps`. */
export type PlateId =
  | "naga-areas-region"
  | "nagaland-physical"
  | "nefa-1957"
  | "afspa-districts"
  | "assembly-2023"
  | "lok-sabha-2024-boycott";

export interface EventLocation {
  lat: number;
  lng: number;
  /** Human-readable place name shown in the map popup. */
  place: string;
  /**
   * True when the coordinate is a best estimate rather than a surveyed point.
   * Many nineteenth-century village sites have no reliable modern fix.
   */
  approximate?: boolean;
}

export interface TimelineEvent {
  /** Stable, URL-safe slug. Used as a React key and for deep links. */
  id: string;
  /**
   * Machine-sortable date. Accepts "1832", "1947-08", or "1947-08-14".
   * Partial dates sort to the start of the period.
   */
  date: string;
  /** How the date is printed on the axis and in the card. */
  displayDate: string;
  title: string;
  /** Three to five lines of prose. Keep it under about 75 words. */
  description: string;
  layer: Layer;
  /** Omit when the event has no meaningful single point on a map. */
  location?: EventLocation;
  /** Optional reference map shown alongside the event card. */
  plate?: PlateId;
}

export interface LayerConfig {
  id: Layer;
  label: string;
  /** One line of context shown under the toggle. */
  blurb: string;
  /** Which side of the central line this layer sits on. */
  side: "above" | "below";
  color: string;
  softColor: string;
  borderColor: string;
}

export interface PlateConfig {
  id: PlateId;
  src: string;
  /** Intrinsic pixel size, required by next/image for a static import path. */
  width: number;
  height: number;
  title: string;
  caption: string;
}
