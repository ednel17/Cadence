# Cadence — Mock Planner & Calendar Store (Routed, Mobile-First, Premium Preview)

A polished, front-end-only mock e-commerce store for **Cadence**, a (fictional) premium brand built around **rhythm**. Cadence sells **physical, digital, and hybrid** planning systems. Shoppers browse a real multi-page storefront, **flip through the exact pre-made product** before buying, and **customize that same system** in a dedicated Preview Studio — comfortably on a phone or a desktop.

> *Find your rhythm. A calm, flexible system you can actually keep.*

Plain **HTML, CSS, and JavaScript** — no frameworks, no build step, no backend. All data is mock data in `script.js`. A single-file `cadence-store-preview.html` (CSS + JS inlined) is included for one-click previewing.

> **Note:** the cart is in-memory only and checkout is a mock flow — nothing is stored, sent, or charged.

---

## ✦ Editorial pass — Studio simplified for mobile (latest)

Acting on a detailed mobile design review, this pass **subtracts and refines** rather than adding — the goal being *“see the planner, customize it, buy it,”* not *“scroll through a lot of interface.”*

**1 · Simpler Studio flow.** On mobile the **live preview now leads**, with the controls below it instead of a settings dashboard up top. The redundant dark **“Build my system” quiz has been removed** from the Studio entirely — the inline **“Not sure where to start?”** guided card (collapsed by default, inside the controls) already does that job, and the two “Build My System” entry points (home + footer) now open *that* card directly.

**2 · One dominant, persistent CTA.** A single **buy bar sits directly under the preview** — *Your design · $price · ⤢ Full screen · Add design* — so the next step is always obvious. The duplicate “add to cart” button that used to live in the summary was removed; the buy-bar price stays in sync as you customize.

**3 · Stronger preview inspection.** The full-screen **“⤢ View larger”** affordance under the stage is now prominent (it was easy to miss), because the planner preview *is* the product.

**4 · Shorter page.** Removing the dark quiz, **relocating the “Write it on paper” companion section to the home page**, and tightening the Studio intro cut a large amount of vertical scroll out of the customizer.

**5 · More contrast, less beige-on-beige.** Cards now lift off a slightly deeper studio backdrop with real borders and shadows; the page-thumbnail active state, the primary CTA weight, and section separation are all stronger.

**Plus:** a roomier mobile header (clearer wordmark + cart badge), a **shorter announcement bar** on phones, and a **compact two-column footer** (down from one long stacked list).

> ⚠️ **Verification note:** this environment runs headless DOM tests only (jsdom) — no layout, CSS media queries, sticky/contrast rendering, or real viewport. The restructure, routing, buy-bar wiring, and guided-card behavior were verified via jsdom + direct CSS review; please confirm the *look and feel* on the deployed site in a real mobile browser.

---

## 📱 Mobile navigation simplified to a single top-header + hamburger model (latest pass)

The mobile **bottom tab bar has been removed entirely.** Earlier it could mis-render in some in-app webviews — appearing pinned to the top and covering the real Cadence header — and a `position:fixed; bottom:0` bar should never be able to cover the page like that. Rather than keep two competing navigations on mobile, the site now uses **one clean system:**

- **Top header (mobile + desktop):** menu button · **Cadence** logo · search · cart.
- **Hamburger menu** now holds **every route** — Home, Shop, Preview Studio, Club, Gifts, Reviews, and Help / FAQ — not just secondary links.
- **Cart** opens from the **top cart icon** (the only cart badge now).

Removed: the `.bottom-nav` HTML, all `.bottom-nav` / `.bn-item` / `.bn-ic` / `.bn-l` CSS, the mobile `body` padding that only existed to clear the bar, the duplicated bottom-nav cart badge (`#cartCountB`), and every JS reference to `#bottomNav` / `#bnCart`. Result: the header is never clipped, the wordmark is fully visible, and announce bar → header → hero stack normally with nothing covering content.

**Mobile hero tightened** in the same pass: reduced top/bottom padding, a slightly smaller headline with tighter line-height, smaller gaps between eyebrow → headline → lede → CTAs, and a scaled-down hero artwork — so the **primary CTA appears far sooner** without excessive scrolling. The warm gradient background and premium typography are unchanged.

> ⚠️ **Verification note:** this environment can only run headless DOM tests (jsdom), which do not compute layout, CSS media queries, or `position:fixed` placement. The single-nav model, routing, cart, hamburger, and hero changes were verified via jsdom + direct CSS review; please confirm the final look on the deployed site in a real mobile browser.

---

## ✅ The blank mobile screen — actual root cause (finally found & fixed)

After several wrong theories (iOS `backdrop-filter`, caching), an on-screen diagnostic on the real device revealed the truth: **the page was never blank — it was hidden behind the bottom nav.**

The inline SVG icons in the mobile bottom nav had a `viewBox` but **no intrinsic `width`/`height`**. On the device the CSS meant to size them (`.bn-ic svg{width:23px}`) wasn't constraining them, so each SVG rendered at the SVG default size and stretched the `position:fixed` bottom bar to **470px tall — taller than the whole viewport** — covering the entire screen with its cream background. All the real content (announce bar, nav, hero, product grid) was rendering correctly underneath the whole time. Automated DOM tests never caught it because jsdom does not compute layout or SVG sizing.

**Fix:**
- Every inline icon SVG now carries explicit **`width="22" height="22"` attributes** (honored natively by the browser, independent of any CSS cascade) — the real fix.
- Plus a defensive CSS cap: `.bn-ic svg,.cta-ic svg{width:22px!important;height:22px!important;max-width:22px;max-height:22px}`, `overflow:hidden` on the icon wrappers, and `max-height` on the bottom nav, so an unsized icon can never blow up the layout again.

This was verified by reading the actual rendered dimensions from the device (viewport 360×469, content `scrollHeight` 5408, every element measured visible, bottom nav reduced from 470px to a normal bar).

---

## 🩺 Deploying notes

The source renders correctly in automated DOM tests **and** as the standalone `cadence-store-preview.html` (home page active, all products, modal, routing, zero JS errors). If the **deployed** `ednel17.github.io` still shows only the nav and a blank page, the usual cause is a **stale or partial deploy** — the browser/GitHub Pages serving an *older cached* `styles.css` or `script.js`, or those files not being pushed alongside `index.html`. Three safeguards were added:

1. **Cache-busting** — `index.html` now loads `styles.css?v=5` and `script.js?v=5`, so a redeploy forces browsers to fetch the new files instead of cached old ones.
2. **On-screen error reporter** — a tiny script in `<head>` catches any runtime/script error and shows it in a red banner at the top of the page. If the live site is blank because of a device-specific JS error, **the banner will show the message — please screenshot it.**
3. **Boot watchdog** — after load, it forces the home page active if nothing is active, and shows a hint if the content area is empty (typically a cached old version).

**To test definitively:** open or deploy **`cadence-store-preview.html`** — it has CSS + JS inlined into one file, so there are no separate assets to cache or miss. If that file renders but the multi-file site doesn't, the problem is the deploy/cache, not the code. When deploying the four files, push **all** of `index.html`, `styles.css`, and `script.js` to the same folder, then hard-refresh (or use a private tab) on your phone to bypass the cache.

---

## 🧱 Cleanup & product-modal rebuild (latest pass)

This pass was discipline, not new features — make Cadence read like a real store and clean up the codebase.

**Product modal — root cause fixed & rebuilt.** The old modal was visually broken because a leftover rule (`@media (min-width:600px){ .modal-body{grid-template-columns:1fr 1.15fr} }`) forced the new viewer's children into an accidental two-column grid. All obsolete modal CSS (`.modal-body` grid, `.mb-*`, `.mbc-*`, and the old `.pvw-*` viewer styles) was removed, and the modal was rebuilt as a dedicated product-page overlay with its own `.pm-*` styles:
- **Desktop:** left **decision panel** (name, price, rating, format badge, start month, a product-specific value prop, a “Best for” line, tabs for *Overview / View pages / What’s included / Reviews*, benefits, and the View-vs-Customize explanation) and a right **interactive viewer** that is always visible (large stage, page title + count, prev/next, clickable thumbnails). A **sticky footer** keeps *Customize* and *Add — $XX* visible at all times.
- **Mobile:** the same modal becomes a **full-screen product page** — compact sticky header (name + price + close), viewer first, tappable thumbnail rail, product info, and a **sticky bottom action bar**. No nested scrollbars, 44px+ targets.

**Product-specific selling copy.** Every product now has its own pitch and “Best for” audience (a teacher planner reads differently from a budget or ADHD planner).

**Code cleanliness.** Removed **11 duplicate function definitions** (using an AST pass, not “last wins”) so there is exactly **one canonical** `productCard`, `openModal`, `customizeFrom`, `route`, `currentRoute`, `renderMainPreview`, `templateCfg`, `pageInner`, `bumpCount`, and `gotoShop`.

**Premium polish.** Homepage CTA-card icons are now inline **SVG** (no emoji in core UI); the **hamburger** holds the full route set (Home, Shop, Preview Studio, Club, Gifts, Reviews, Help / FAQ) and is the single mobile nav alongside the top header; **product cards** have a clearer action hierarchy (a prominent *View system* with “Flip through what’s included”, then *Customize* / *Add to cart*, stacked on mobile); and the **product-shot** mockups gained paper-thickness edges, a peeking tab, a directional shadow, and a soft contact shadow.

**Verification.** Automated DOM tests pass with zero errors: all six routes plus invalid→home with exactly one page active; the rebuilt modal opens for the Teacher, Student, Family, 90-Day, Budget, and ADHD products with a live viewer, populated info panel, working tabs, page-flip, and thumbnails; *Customize* routes to the Studio and preloads the product template; *Add* puts the correct product in the cart; and the Studio, cart, search, filters, sort, save/share, before/after, guided flow, and email signup still work. (As before, real-device iOS couldn't be launched in this environment — verified via DOM tests + CSS reasoning.)

---

## ✅ Mobile blank-screen fix (earlier pass)

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
- A persistent top header (menu · **Cadence** · search · cart) on every screen; on mobile the **hamburger menu** carries the full route set (no separate bottom nav).

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
- **Compact top header + hamburger menu** (single mobile nav); 44px+ tap targets; obvious active page.
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
- **Mobile:** full-screen preview (`openFsPreview`/`closeFsPreview`), top-header cart, hamburger menu, shop filter drawer, one-open accordions.
- **Data:** `PRODUCT_TEMPLATES`, `PRODUCTS`, `PALETTE`, `FONT`, `SAMPLE`, `BEFORE`.

### Make it yours
Edit `PRODUCT_TEMPLATES` for per-product defaults & page sequences, `PRODUCTS` for the catalog, `PALETTE`/`FONT` for themes, `SAMPLE` for example entries. Page sections live in `index.html` inside `.page-view[data-page]` wrappers.

*Mock store for demonstration only — no real checkout, payments, or shipping. The cart is in-memory (a refresh clears it).*
