import type { Layer, LayerConfig, PlateConfig, PlateId, TimelineEvent } from "./types";

/**
 * Layer definitions. The `side` field is what enforces the spatial rule:
 * the Naga record sits above the central line, the two state records below it.
 */
export const LAYERS: Record<Layer, LayerConfig> = {
  naga: {
    id: "naga",
    label: "Naga / underground",
    blurb: "NNC, FGN, the NSCN factions, ENPO",
    side: "above",
    color: "#b4302b",
    softColor: "#f7e7e5",
    borderColor: "#e0b7b3",
  },
  british: {
    id: "british",
    label: "British",
    blurb: "Expeditions, districts, the Inner Line",
    side: "below",
    color: "#2e6f4e",
    softColor: "#e4efe8",
    borderColor: "#b3cebc",
  },
  indian: {
    id: "indian",
    label: "Indian official",
    blurb: "Union and state acts, accords, elections",
    side: "below",
    color: "#1f4e8c",
    softColor: "#e3eaf5",
    borderColor: "#b4c6e0",
  },
};

/** Fixed display order: toggles, legend and stacking all read from this. */
export const LAYER_ORDER: Layer[] = ["british", "indian", "naga"];

export const PLATES: Record<PlateId, PlateConfig> = {
  "naga-areas-region": {
    id: "naga-areas-region",
    src: "/maps/naga-areas-region.png",
    width: 767,
    height: 1010,
    title: "Naga-inhabited areas of the north-east",
    caption:
      "The shaded belt runs across Nagaland, parts of Arunachal Pradesh, Manipur and the Sagaing region of Myanmar. It is the territory the NSCN-IM claims as Nagalim, and the reason the 2001 ceasefire extension detonated in Manipur.",
  },
  "nagaland-physical": {
    id: "nagaland-physical",
    src: "/maps/nagaland-physical.png",
    width: 1093,
    height: 1007,
    title: "Physical Nagaland",
    caption:
      "The Barail and Patkai ranges, the Doyang and Tizu drainages, and the Japvo massif. Terrain explains most of the administrative history on this timeline, including where colonial control stopped.",
  },
  "nefa-1957": {
    id: "nefa-1957",
    src: "/maps/nefa-1957.jpg",
    width: 2006,
    height: 2048,
    title: "Naga Hills–Tuensang Area, 1957",
    caption:
      "Kohima, Mokokchung and Tuensang shown against the North-East Frontier Agency. Tuensang was moved out of NEFA and joined to the Naga Hills District, creating the administrative unit that became the state of Nagaland in 1963.",
  },
  "afspa-districts": {
    id: "afspa-districts",
    src: "/maps/afspa-districts.png",
    width: 1307,
    height: 1203,
    title: "Districts under AFSPA",
    caption:
      "Nine districts fully notified as disturbed, five partially, three outside the notification. The map shows how a 1958 statute is still drawn onto the state as a live administrative boundary.",
  },
  "assembly-2023": {
    id: "assembly-2023",
    src: "/maps/assembly-2023.png",
    width: 1302,
    height: 1208,
    title: "Assembly election, 2023",
    caption:
      "NDPP 25, BJP 12, with the rest spread across seven parties and four independents. Every party in the house went on to support the government, producing an assembly with no organised opposition.",
  },
  "lok-sabha-2024-boycott": {
    id: "lok-sabha-2024-boycott",
    src: "/maps/lok-sabha-2024-boycott.png",
    width: 2298,
    height: 2738,
    title: "Lok Sabha election, 2024",
    caption:
      "The twenty blacked-out segments are the six eastern districts, where ENPO's boycott produced zero recorded votes across 738 polling stations. Abstention used as leverage, and it worked.",
  },
};

export const PLATE_ORDER: PlateId[] = [
  "naga-areas-region",
  "nagaland-physical",
  "nefa-1957",
  "afspa-districts",
  "assembly-2023",
  "lok-sabha-2024-boycott",
];

/**
 * Turns "1947", "1947-08" or "1947-08-14" into a comparable "19470814" style
 * key. Partial dates sort to the beginning of their period, which is what you
 * want for events recorded only by year.
 */
export function sortKey(date: string): number {
  const [year = "0", month = "01", day = "01"] = date.split("-");
  return Number(`${year.padStart(4, "0")}${month.padStart(2, "0")}${day.padStart(2, "0")}`);
}

export function byDate(a: TimelineEvent, b: TimelineEvent): number {
  return sortKey(a.date) - sortKey(b.date);
}

export function yearOf(date: string): string {
  return date.slice(0, 4);
}
