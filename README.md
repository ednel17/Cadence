# Cadence — Mock Planner & Calendar Store (Routed, Mobile-First, Premium Preview)

A polished, front-end-only mock e-commerce store for **Cadence**, a (fictional) premium brand built around **rhythm**. Cadence sells **physical, digital, and hybrid** planning systems. Shoppers browse a real multi-page storefront, **flip through the exact pre-made product** before buying, and **customize that same system** in a dedicated Preview Studio — comfortably on a phone or a desktop.

> *Find your rhythm. A calm, flexible system you can actually keep.*

Plain **HTML, CSS, and JavaScript** — no frameworks, no build step, no backend. All data is mock data in `script.js`. A single-file `cadence-store-preview.html` (CSS + JS inlined) is included for one-click previewing.

---

## ✅ Mobile blank-screen fix (latest pass)

**Symptom:** on phones the site showed only the navigation and then a blank page.
**Root cause:** the page had `overflow-x:hidden` on `html`/`body` *and* an always-on `backdrop-filter` (blur) on the sticky top nav. On iOS WebKit that exact combination can fail to paint and leaves the content area blank until a repaint — a CSS rendering bug, not the routing. (Desktop Chrome/Firefox don't hit it, which is why desktop looked fine.)

**Fixes:**
- On mobile the chrome is now solid and blur-free (`backdrop-filter:none` for the nav and overlays ≤768px), and the route entrance animation was removed — so the active page always paints.
- The router was hardened to the reliable pattern: a fixed `VALID_ROUTES` list, **default to `#/home`** when the hash is missing **or invalid** (with the URL normalized via `history.replaceState`), a **never-blank failsafe** that forces the home page active if nothing matches, and an immediate render on load (not only on `DOMContentLoaded`).
- The mobile bottom nav now uses **consistent inline SVG icons** (home, shop, studio, cart) instead of mixed emoji, with an **un-clipped cart badge** and 44px+ touch targets, plus `env(safe-area-inset-bottom)` padding.

Verified with automated DOM tests across no-hash / `#/home` / `#/shop` / `#/studio` / invalid `#/broken` loads: homepage renders by default, invalid routes fall back to home, exactly one page is always active (no blank state), the cart opens from the bottom nav, and there are no JS errors on load. Desktop is unchanged.

---

## ⭐ What's new in this version (final polish pass)

### 1. Real multi-page architecture (hash routing) — no more endless scroll
The site is now a small **single-page app with hash routes**, so it feels like a real multi-page store instead of one giant landing page:

| Route | Page |
|---|---|
| `#/home` | Short homepage — hero, benefit strip, category teaser, best-seller rail, "Why Cadence" + CTA cards |
| `#/shop` | Full shop — search, filters, sort, product grid |
| `#/studio` | Preview Studio (Build Your Rhythm) + Build-My-System quiz + digital companion |
| `#/club` | Cadence Club membership |
| `#/gifts` | Gift bundles & cards |
| `#/reviews` | Transformation, testimonials, and the email signup |

- Each page is a `.page-view[data-page]`; the router toggles `.active` (`display:none/block`) — the DOM is never destroyed and recreated.
- **Nav switches views** instead of jumping down a long page. **Browser back/forward works**, the **document title and active nav state update**, and **deep links work** (open `#/shop` or `#/studio` directly).
- **Customize Current System** routes to `#/studio`, preloads the product's defaults, and scrolls to the top.
- A persistent top nav (Home · Shop · Preview Studio · Club · Gifts · Reviews · Cart) plus a **mobile bottom nav** (Home · Shop · Studio · Cart).

### 2. Balanced, intentional planner spreads (no more dead left page)
Every two-page physical spread is composed so **both pages have a reason to exist** — no accidental emptiness:

- **Cover** → a real **product shot**: the cover at an angle on a soft desk surface, a **peek of page edges** stacked behind it, depth shadow, and a **detail card** (format · start month · page count · included sections). No more a tiny cover floating in a huge empty frame.
- **Monthly** → grid + month tabs (left) · goals, important dates, notes, habit strip, reset prompt (right).
- **Weekly** → seven balanced layouts (vertical AM/PM/EVE, horizontal + dashboard, dashboard boxes, family columns, time-blocked, minimal, daily) — both pages always carry days, focus, habits, meals, or notes.
- **Daily** → focus, top-3, hourly schedule (left) · meals, water, movement, reflection (right).
- **Habit** → 31-day grid with month label, **consistency score**, **legend**, streak, and reflection.
- **Meal** → weekly menu + water goal (left) · categorized grocery, prep day, rotation, leftovers (right).
- **Budget** → income, bills calendar, fixed costs (left) · variable bars, sinking funds, savings, debt, no-spend (right).
- **Fitness** → weekly schedule + recovery (left) · measurements, progress, nutrition, reflection (right).
- **Notes** → Cornell + meeting notes (left) · dot-grid brain-dump + grid reflection (right), with handwriting samples in example mode.

The binding still lives in a **protected center gutter** (twin coil + aligned holes), so content never sits under the spine.

### 3. Mobile-first throughout
Rebuilt to feel native on a phone (tested conceptually at 375 / 390 / 414 / 768px):

- **No horizontal overflow** (`overflow-x:hidden` guard + every mockup, rail, modal capped to `max-width:100%`).
- **Compact header + bottom nav**; 44px+ tap targets; obvious active page.
- **Home**: hero stacks, mockup scales in, full-width CTAs, 2-column categories, **best-sellers as a horizontal swipe rail**.
- **Shop**: sticky search, **filters collapse into a drawer**, 1–2 column grid, product actions **stack** (View System / Customize / Add) — never three tiny buttons in a row.
- **Product viewer** (the big one): becomes a **full-screen product page** — fixed close button, compact title/price, full-width stage, thumb-sized flip arrows, **thumbnails as a horizontal rail**, **scrollable tabs**, a **sticky bottom action bar** (Add / Customize), and a **"View full page"** zoom.
- **Preview Studio**: **accordion controls (one open at a time)**, preview-first, horizontal thumbnail strip, **sticky summary bar**, and a **"View larger" full-screen preview** with a **Done** button.
- **Cart**: near full-screen with large quantity steppers and a **sticky checkout** button.
- Body text 15–17px, generous padding, reduced-motion respected, real `<button>`s with visible focus and ARIA labels.

---

## Core features (all preserved)
- **View Current System** — interactive product viewer showing the **exact product as sold**: Prev/Next page flip, clickable page thumbnails, page labels + count, included list, and Details / View / What's included / Reviews tabs. Each product has its **own page sequence**.
- **Customize Current System** — loads the product's defaults into the Studio (routes to `#/studio`).
- **Preview Studio** — build live: format (physical/digital/hybrid/wall/desk), 9 page types, 7 weekly layouts, start month, 8 palettes, 5 fonts, name/title, 12 add-on pages, Blank / Example / **Before-After** modes, **Why this rhythm fits**, **Help me choose** guided flow, and **Save / Copy share link** (localStorage + route-aware URL hash).
- **Shop** — search, format filter, category filter, sort. **Cart drawer** — add / remove / quantity / subtotal (in-memory; checkout is mock-only). **Build My System** quiz, Cadence Club, gift bundles, and the 7-Day Rhythm Reset email signup.

## Code map (`script.js`)
- **Router:** `route()`, `navigate()`, `currentRoute()`, `setActiveNav()` + `hashchange` listener.
- **Planner engine:** `renderPlannerPage(cfg)` → `pageInner` → `frameSpread` / `frameTablet` / `frameWall` / `frameDesk`; page bodies `ppMonth/ppWeek/ppDay/ppHabit/ppMeal/ppBudget/ppFitness/ppNotes/ppCover/ppCoverShot/ppCompanion` (each returns balanced left/right content).
- **Product viewer:** `openModal`, `pvwShell`, `pvwRenderStage`, `pvwGo`, `pvwThumb`, `pvwTab`, `templateCfg`, `productSequence`.
- **Mobile:** full-screen preview (`openFsPreview`/`closeFsPreview`), bottom-nav cart, shop filter drawer, one-open accordions.
- **Data:** `PRODUCT_TEMPLATES`, `PRODUCTS`, `PALETTE`, `FONT`, `SAMPLE`, `BEFORE`.

### Make it yours
Edit `PRODUCT_TEMPLATES` for per-product defaults & page sequences, `PRODUCTS` for the catalog, `PALETTE`/`FONT` for themes, `SAMPLE` for example entries. Page sections live in `index.html` inside `.page-view[data-page]` wrappers.

*Mock store for demonstration only — no real checkout, payments, or shipping. The cart is in-memory (a refresh clears it).*
