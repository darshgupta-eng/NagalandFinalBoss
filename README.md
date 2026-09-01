# Nagaland, 1832 to 2026

A layered interactive timeline of Nagaland. Three parallel records run along a
single axis: the colonial administration, the Indian state, and the Naga
national movement. Each can be switched on or off independently. Every event
with a known location is plotted on an OpenStreetMap base map, and six
reference maps are linked from the events they belong to.

Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4 and
react-leaflet 5.

---

## Run it locally

Requires Node 18.18 or newer. Node 20+ recommended.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
```

The first build downloads the Newsreader and IBM Plex Sans webfonts from Google
Fonts, so it needs network access. Everything else builds offline.

---

## How it works

| Path | What it does |
| --- | --- |
| `data/events.ts` | Every event. This is the only file you need to touch to change the content. |
| `lib/types.ts` | `TimelineEvent`, `Layer`, `PlateId` and friends. |
| `lib/layers.ts` | Layer colours, which side of the line each layer sits on, reference-map metadata, date sorting. |
| `components/TimelineExplorer.tsx` | Owns all state: active layers, current event, open reference map, keyboard navigation. |
| `components/Timeline.tsx` | The horizontal axis, the dots, and the anchored bubble. |
| `components/NagalandMap.tsx` | Leaflet map. Loaded browser-side only, because Leaflet touches `window` on import. |
| `public/maps/` | The six reference map images. |

Events are sorted by date at runtime, so the order in the array does not
matter. The `side` field in `lib/layers.ts` is what puts the Naga record above
the central line and the two state records below it. Change one word there and
the whole layout follows.

### Interaction

- Click any dot to open its event. Click it again to close.
- Previous and Next step one event at a time through the currently visible
  sequence, skipping anything on a hidden layer.
- Left and right arrow keys do the same, unless focus is in a form control.
- Selecting an event centres it in the scroller and flies the map to its
  marker.
- Clicking a map marker selects that event on the timeline.
- Below the tablet breakpoint the bubble becomes a card stacked under the
  timeline, since there is not enough width to anchor it.

---

## Adding or editing events

Open `data/events.ts` and add an object to the array. Nothing else needs
changing.

```ts
{
  id: "khonoma-peace-1880",          // unique slug, lowercase, hyphenated
  date: "1880-03-27",                // "1880", "1880-03" or "1880-03-27"
  displayDate: "27 Mar 1880",        // what gets printed
  title: "Khonoma falls, but signs nothing",
  description:
    "Three to five lines, roughly 45 to 75 words. This is what appears in the bubble.",
  layer: "british",                  // "british" | "indian" | "naga"
  location: {                        // optional
    lat: 25.6486,
    lng: 94.0139,
    place: "Khonoma",
    approximate: false,              // true for anything you are estimating
  },
  plate: "afspa-districts",          // optional, see below
}
```

Notes:

- `date` is used only for sorting. Partial dates sort to the start of their
  period, so an event recorded as `"1957"` lands before `"1957-03"`.
- `displayDate` is free text. Use whatever reads correctly: `"1832"`,
  `"Dec 1850 – Jan 1851"`, `"26–28 Jun 1947"`.
- Omit `location` entirely for events with no meaningful single point. The card
  says "No mapped location" and the map counter accounts for it.
- Keep descriptions to three to five lines. Longer text will still render, but
  the bubble is sized for that length.

### Changing the layer scheme

Colours, labels and sides live in `LAYERS` in `lib/layers.ts`:

```ts
naga: {
  label: "Naga / underground",
  side: "above",        // "above" | "below" the central line
  color: "#b4302b",     // dot, stem, card rule, map marker
  softColor: "#f7e7e5", // toggle background, selected halo
  borderColor: "#e0b7b3",
},
```

Adding a fourth layer means adding it to the `Layer` union in `lib/types.ts`,
to `LAYERS`, and to `LAYER_ORDER`. The components read from those and need no
edits.

### Layer convention used in the sample data

Layers are assigned by **actor**, not by method:

- `british` — the colonial state and its officers.
- `indian` — the Union government and the state of Nagaland.
- `naga` — Naga organisations pressing a claim on the state. This includes the
  NNC, the FGN and the NSCN factions, and also the NPC and ENPO, even though
  both worked entirely constitutionally.

Agreements signed by the government therefore sit on the `indian` layer even
where a Naga organisation signed alongside, with the Naga side's response filed
separately where it diverged. The Shillong Accord (1975) is `indian`; the FGN's
rejection of two of its three clauses that December is `naga`. If you read the
actors differently, each reclassification is one word.

### Reference maps

The six images in `public/maps/` are registered in `PLATES` in `lib/layers.ts`.
To add one:

1. Drop the image in `public/maps/`.
2. Add its id to the `PlateId` union in `lib/types.ts`.
3. Add an entry to `PLATES` with `src`, `width`, `height`, `title` and
   `caption`. The width and height must be the real pixel dimensions, because
   `next/image` uses them to reserve layout space.
4. Add the id to `PLATE_ORDER` so it appears in the gallery.

Attach it to an event with `plate: "your-id"`. A button appears in that event's
card and opens the image full size.

### Coordinates

Village-level sites from the nineteenth and mid-twentieth century are marked
`approximate: true` and shown with an "(approx.)" note. Kohima, Khonoma, Wokha,
Mokokchung, Tuensang and the metropolitan locations are reliable. Süpao,
Phensinyu, Kikrüma, Pulomi, Lao Konyak and the Heimi region are estimates
placed in the right district.

Events sharing a location are automatically spread around a small ring on the
map so each stays clickable. Twelve events share Kohima and eleven share New
Delhi.

---

## Push to GitHub

From the project folder:

```bash
git init
git add .
git commit -m "Nagaland timeline"
git branch -M main
```

Create an empty repository on GitHub (no README, no .gitignore, since you
already have both), then:

```bash
git remote add origin https://github.com/YOUR-USERNAME/nagaland-timeline.git
git push -u origin main
```

If you have the GitHub CLI installed, the last two steps collapse into one:

```bash
gh repo create nagaland-timeline --public --source=. --push
```

`node_modules`, `.next` and `.vercel` are already in `.gitignore`. The six map
images in `public/maps/` are about 9 MB in total and are committed
deliberately, since the app needs them.

---

## Deploy on Vercel

### Through the dashboard

1. Go to vercel.com and sign in with GitHub.
2. Click **Add New** then **Project**.
3. Import `nagaland-timeline` from your repositories.
4. Leave every setting alone. Vercel detects Next.js and fills in the framework
   preset, build command (`next build`), output directory and install command
   by itself.
5. Click **Deploy**.

There are no environment variables to set. The first build takes about a
minute. Every push to `main` redeploys automatically, and every pull request
gets its own preview URL.

### Through the CLI

```bash
npm i -g vercel
vercel          # preview deployment, answers default correctly
vercel --prod   # production deployment
```

### If the build fails on Vercel

The one likely cause is the webfont fetch. `next/font/google` downloads
Newsreader and IBM Plex Sans at build time. If Google Fonts is unreachable the
build stops. To remove that dependency, delete the two `next/font/google`
imports from `app/layout.tsx`, drop the `className` from the `<html>` tag, and
change the two font tokens in `app/globals.css` to system stacks:

```css
--font-display: Georgia, "Times New Roman", serif;
--font-sans: ui-sans-serif, system-ui, sans-serif;
```

---

## Sources

Events are drawn from a research compilation on Nagaland's history, law and
politics, which draws in turn on Jelle J.P. Wouters, *In the Shadows of Naga
Insurgency*; Sanjoy Hazarika, *Strangers No More*; and Sudeep Chakravarti, *The
Eastern Gate*, alongside government records, UN Peacemaker texts and press
reporting.

Base map tiles © OpenStreetMap contributors.
