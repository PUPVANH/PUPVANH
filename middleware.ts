// Vercel Edge Middleware — werkt op platform-niveau, los van Astro's eigen output-mode.
// Dit bestand hoort in de ROOT van de repo (naast package.json), NIET in src/.
//
// Doel: bezoekers op een subdomein zoals fcariba.pupvanh.com krijgen transparant
// de content van /ariba te zien, zonder dat de URL in hun browser verandert.

import { next, rewrite } from '@vercel/edge';

// Koppel elk subdomein-prefix aan het bestaande pad in de site
const SUBDOMAIN_MAP: Record<string, string> = {
  fcariba: '/ariba',
  flags: '/flags',
  pups: '/pups',
};

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const host = request.headers.get('host') || '';

  // Haal het subdomein-gedeelte eruit, bv. "fcariba" uit "fcariba.pupvanh.com"
  const sub = host.split('.')[0];
  const targetPath = SUBDOMAIN_MAP[sub];

  if (targetPath) {
    // Voeg het doelpad toe, tenzij het al op de hoofd-URL zit
    // (bv. fcariba.pupvanh.com/  →  intern /ariba/)
    const rewrittenUrl = new URL(url);
    rewrittenUrl.pathname = targetPath + (url.pathname === '/' ? '' : url.pathname);
    return rewrite(rewrittenUrl);
  }

  // Geen bekend subdomein → normale afhandeling (pupvanh.com, www.pupvanh.com, .vercel.app)
  return next();
}

export const config = {
  // Draait op elk verzoek, behalve statische assets (afbeeldingen, CSS, JS zelf)
  matcher: [
    '/((?!_astro|favicon|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js|ico|xml|txt|woff|woff2)).*)',
  ],
};
