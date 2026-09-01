"use client";

import { LAYERS, LAYER_ORDER } from "@/lib/layers";
import type { Layer } from "@/lib/types";

interface Props {
  active: Layer[];
  onToggle: (layer: Layer) => void;
  counts: Record<Layer, number>;
}

export default function LayerToggles({ active, onToggle, counts }: Props) {
  return (
    <fieldset className="w-full sm:w-auto">
      <legend className="mb-2 font-display text-[13px] italic text-graphite">
        Layers on view
      </legend>

      <div className="flex flex-col gap-1.5">
        {LAYER_ORDER.map((id) => {
          const layer = LAYERS[id];
          const isOn = active.includes(id);

          return (
            <label
              key={id}
              className="group flex cursor-pointer items-start gap-2.5 rounded-sm px-2 py-1.5 transition-colors duration-150 hover:bg-surface"
              style={{
                backgroundColor: isOn ? layer.softColor : undefined,
              }}
            >
              <input
                type="checkbox"
                checked={isOn}
                onChange={() => onToggle(id)}
                className="mt-[3px] h-3.5 w-3.5 shrink-0 cursor-pointer appearance-none rounded-[2px] border transition-colors duration-150"
                style={{
                  borderColor: layer.color,
                  backgroundColor: isOn ? layer.color : "transparent",
                }}
                aria-label={`${layer.label} layer, ${counts[id]} events`}
              />
              <span className="min-w-0">
                <span
                  className="block text-[13px] leading-tight font-medium"
                  style={{ color: isOn ? layer.color : "#5a6167" }}
                >
                  {layer.label}
                  <span className="ml-1.5 font-normal tabular-nums opacity-60">
                    {counts[id]}
                  </span>
                </span>
                <span className="mt-0.5 block text-[11.5px] leading-snug text-graphite">
                  {layer.blurb}
                </span>
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
