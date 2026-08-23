# PUP VANH portfolio

Persoonlijke portfolio-site voor Pepijn Vanhauwere (Puppy).  
Gebouwd met **Astro** — deploybaar op **Vercel**.

---

## Wat is dit?

Statische portfolio-site met:
- Homepage met typewriter, dark mode, grain-textuur, easter eggs
- Volledig responsive (mobiel + desktop)
- Geen backend, geen database — puur static
- Zero build-time dependencies buiten Astro zelf

---

## Voor Stijn — deploy in 4 stappen

### 1. Lokaal testen (optioneel maar aangeraden)

```bash
npm install
npm run dev
```

Open http://localhost:4321 in je browser.

### 2. GitHub-repo aanmaken

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<jouw-username>/pupvanh.git
git push -u origin main
```

### 3. Vercel koppelen

1. Ga naar https://vercel.com/new
2. Klik "Import Git Repository" en kies de pupvanh-repo
3. Vercel detecteert automatisch dat het Astro is — geen extra config nodig
4. Klik **Deploy**

De site staat online binnen 30 seconden op een `*.vercel.app` URL.

### 4. Custom domein koppelen (pupvanh.pixelslaves.com)

1. In het Vercel-project → **Settings** → **Domains**
2. Voeg toe: `pupvanh.pixelslaves.com`
3. Vercel toont welke DNS-record je moet aanmaken bij pixelslaves.com — normaal een **CNAME** die wijst naar `cname.vercel-dns.com`
4. Voeg die CNAME toe in het DNS-beheer van pixelslaves.com
5. Wacht 5-30 minuten (soms 24u) — Vercel regelt automatisch SSL

Klaar.

---

## Nog te vervangen (placeholders)

### Foto's

De site gebruikt momenteel gradient-blokken als placeholders. Vervang deze door echte foto's zodra Pepijn ze bezorgt. Plaats ze in `public/images/` en pas de referenties aan in de betreffende component-bestanden:

| Waar | Component | Naam |
|------|-----------|------|
| Hero rechts (groot) | `src/components/Hero.astro` | `hero-1.jpg` |
| Hero rechts (klein) | `src/components/Hero.astro` | `hero-2.jpg` |
| Featured this week | `src/components/FeaturedSplit.astro` | `featured.jpg` |
| Index thumbnail 01 | `src/components/FeedIndex.astro` | `thumb-ostend.jpg` |
| Index thumbnail 03 | `src/components/FeedIndex.astro` | `thumb-popups.jpg` |
| Index thumbnail 05 | `src/components/FeedIndex.astro` | `thumb-ghent.jpg` |

Om een gradient te vervangen door een foto: verander de CSS `background: linear-gradient(...)` naar `background: url('/images/hero-1.jpg') center/cover no-repeat`.

### Contact-email en social links

Nog te vervangen op deze plekken (nu allemaal placeholders):
- `src/components/ContactSection.astro` → `hello@pupvanh.com`
- `src/components/Footer.astro` → Instagram/TikTok/Are.na links en email

---

## Later toe te voegen (nog niet gebouwd)

De homepage linkt naar `/index-all`, `/about`, `/bookmarks`, `/blog`. Die pagina's bestaan nog niet — geen probleem voor de eerste release, maar de links werken dus (nog) niet.

Pepijn heeft ook plannen voor:
- `/nachtwerk` (verstopte pagina met gedicht)
- `/now` (met een klein art-detail)
- Bench-PR lijntje op de about-pagina
- Volledige projectpagina's voor po.pups, FC Ariba, darts league, deze website

Die worden in fase 2 toegevoegd — voor nu volstaat de homepage.

---

## Design-referentie

**Kleuren**  
Bg #F4F0E8 · Text #18211E · Muted #6B6B66  
Alpine Teal #0E6B6F · Champagne Gold #C8A35F · Ember Orange #E85D2F  
Deep forest #1E3A34 · Deepest forest #122522

**Fonts** (Google Fonts, al gelinkt in Layout.astro)  
Inter (400/500/600/700/800) — body & display  
JetBrains Mono (400/500) — labels & meta-tekst

**Easter eggs** (moeten blijven werken):
1. Hover 1 seconde op "PUP VANH" logo → 🐕 loopt over de nav
2. Tussen 21u–06u verschijnt "· working late again?" in de hero-meta
3. Hover contact-knop → tekst wisselt naar "🧙 you shall not pass. (unless you email)"

---

## Vragen?

Contacteer Pepijn voor design-vragen of content-aanpassingen.
