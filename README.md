# Cadence — Mock Planner & Calendar Store (with Preview Studio)

A polished, front-end-only mock e-commerce store for **Cadence**, a (fictional) premium brand built around **rhythm**. Cadence sells **physical, digital, and hybrid** planning systems — and lets shoppers *see every page become theirs* before buying, in the **Cadence Preview Studio**.

> *Find your rhythm. No guessing. No imagination required. The customer sees the planner become theirs.*

Plain **HTML, CSS, and JavaScript** — no frameworks, no build step, no backend. All data is mock data in `script.js`.

---

## Run it

1. Keep all four files together in `cadence-store/`.
2. Open **`index.html`** in any modern browser.

A single-file `cadence-store-preview.html` (CSS + JS inlined) is included for one-click previewing.

---

## ⭐ Cadence Preview Studio

The studio (the `#build` section) renders the *inside* of the planner with pure CSS — no images — and everything updates in real time. It is designed to reduce uncertainty and build emotional ownership, like a planner consultant you can click through.

### Guided "Help me choose" flow
A **"Not sure where to start?"** card opens a 3-question guided panel — *what you're getting under control* (family / health / money / school-work / focus / habits), *how you like to plan* (paper / digital / both), and *how much structure* (light / balanced / highly structured). Answering configures the whole studio automatically and shows "Here's the rhythm we'd start with." (This is separate from the homepage "Build My System" quiz; this one lives inside the studio and drives it directly.)

### Controls
- **Format** — Physical (open-book spread), Digital (tablet), Hybrid (book + tablet), Wall, Desk. The preview container changes.
- **Pages** — Cover, Monthly, Weekly, Daily, Habits, Meals, Budget, Fitness, Notes — each a distinct, real mock page; plus **Weekly layout** (Vertical, Horizontal, Dashboard, Daily Focus, Minimal Grid, Family Columns, Time Blocked) and **Start month** (real 2026 dates).
- **Style** — 8 color palettes that recolor the cover, tabs, calendar headers, highlighted dates, and page accents; 5 fonts (Serif, Sans, Rounded, Editorial, Handwritten) applied to the cover name, headings, and handwritten notes.
- **Personalize** — name on cover + planner title, typed live.
- **Add-on pages** — 12 toggles (Habit Tracker, Meal Planning, Budget, Fitness, Family Schedule, Assignment Tracker, Prayer / Reflection, Business Goals, Social Media Calendar, Notes, Stickers, Digital Companion). Each adds a colored section tab, a summary badge, +$4, and jumps to that page.
- **Preview mode** — **Blank**, **Example**, or **Before / After** (see below).
- **Save & share** — save the design or copy a share link (see below).

On desktop, all control groups are open. On **mobile**, they collapse into tap-to-open **accordions** (Format · Pages · Style · Personalize · Add-ons · Save & Share) with larger touch targets, a horizontally scrolling page-thumbnail strip, and a **sticky add-to-cart** summary.

### Before / After comparison mode
"Before / After" renders **two visibly different pages side by side**: a messy, unstructured *"Before Cadence"* page (scattered sticky notes, vague goals, missed tasks) next to the same life area organized as an *"After Cadence"* system. The content adapts to your selection — choose **Fitness** and "Before" shows *"workout?", "eat better", missed weigh-in*; choose **Budget** and it shows *"pay bills?", "where did money go?"*; choose **Family** and it shows *scattered appointments, forgotten school event*. The transformation is shown, not just described.

### "Why this rhythm fits"
A consultative panel that updates from your format, layout, add-ons, and page — e.g. family columns + family schedule explains the household-coordination case; budget pages explain "money gets a calendar, not just a list"; hybrid explains "the ritual of paper with the convenience of digital." It reads like advice, not a spec sheet.

### Rich hybrid (paper + digital companion)
In Hybrid, the preview shows the **paper page on the left and a digital companion of the *same* page on the right** — Habits → a streak dashboard, Budget → a spending summary, Fitness → a progress dashboard, Week → a synced agenda. *"Write it down. Carry it forward."*

### Confidence builders + "What you'll use this for"
Next to **Add this design to cart**, small reassurance chips adjust by format (digital → *instant download, iPad/GoodNotes, print-friendly*; physical → *printed & shipped, personalized cover, gift-ready*; hybrid → *planner + companion, save/share*). Below the summary, a generated **"What you'll use this for"** paragraph reflects your exact choices (start month, layout, add-ons).

### Save / share / restore
- **Save this design** stores the full configuration in `localStorage` ("come back to this design anytime on this device").
- **Copy share link** encodes the configuration into the URL hash and copies it ("anyone with this link can open this design").
- On page load, a saved config (localStorage) or a shared link (`#design=…`) **restores the studio automatically**, with the share link taking priority.

### Realistic interior details
Pure-CSS touches make the pages feel like real products: spiral rings **and** hole punches, page shadows, subtle paper texture, side section tabs, month index tabs, page numbers, highlighted dates, top-3 priorities, progress dots, checkbox states, tiny handwritten entries, sticky notes, soft dividers, contextual icons (meals, water, movement, money), and lined / dot-grid / blank / calendar-grid backgrounds.

### Micro-animations (tactile, not flashy)
Pages fade as they change, the price pops, new section tabs slide in, the palette washes across the preview, and the "what changed?" message gently flashes. All of it respects `prefers-reduced-motion`.

---

## Product modals — "Preview inside"

Every product modal has **Details** and **Preview inside** tabs. The preview tab has **four mini-tabs — Month · Week · Add-on · Digital companion** — each a small live mockup in that product's palette, with **product-specific copy** (e.g. the 90-Day Weight Loss Cadence and Family Command Center each get tailored lines per tab). The CTA **"Customize this exact system →"** preloads the Preview Studio with that product's best configuration and scrolls to it.

---

## The rest of the store

- **Homepage:** announcement bar, sticky nav + mobile menu, hero (planner + tablet mock), trust strip, 8 category cards, best-sellers rail.
- **Shop:** 16 products with search, format filter (physical / digital / hybrid / accessories), category filter, and sort.
- **Build My System quiz**, Digital Twin, Cadence Club ($9 / $19 / $29), Transformation, identity testimonials, gift bundles, 7-Day Rhythm Reset email signup, footer.
- **Cart drawer:** add / remove / quantity / live subtotal. Cart is in-memory (no persistence) and refreshing resets it; checkout is mock-only.

---

## Code organization (`script.js`)

A single `PV` (previewState) object holds `format, view, layout, month, palette, font, name, title, addons, mode, sample, price`. Focused functions keep it maintainable:

`renderPreviewStudio()` orchestrates → `renderMainPreview()` (which branches to `renderComparisonPreview()` and `renderHybridPreview()`), `renderPageThumbnails()`, `renderSummary()` (+ `confidenceHTML()`), `renderWhyThisFits()`, `renderUseCaseSummary()`, `calculatePreviewPrice()`. Per-page renderers: `monthHTML`, `weekHTML`, `dayHTML`, `habitHTML`, `mealHTML`, `budgetHTML`, `fitnessHTML`, `notesHTML`, plus `companionHTML` (digital) and `beforeHTML` (the messy "before"). Save/share: `savePreviewState`, `restorePreviewState`, `encodePreviewState`, `decodePreviewState`. Guided flow: `applyGuidedRecommendation`. Setup: `setupStudio`, `setupGuided`, `setupSaveShare`, `setupAccordions`.

### Make it yours
- **Products:** `PRODUCTS`. **Palettes / fonts:** `PALETTE`, `FONT`. **Per-product preload & modal copy:** `PRELOAD`, `PREVIEW_COPY`. **Example entries:** `SAMPLE`. **"Before" content:** `BEFORE`. **Confidence chips:** `CONFIDENCE`. **Guided recommendations:** `GUIDED_REC`. **Add-on price/behavior:** `FMT_BASE`, `ADDON_VIEW`, `ADDON_COLOR`.

*Mock store for demonstration only — no real checkout, payments, or shipping.*
