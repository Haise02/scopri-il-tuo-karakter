# Skillfunnel - Clone (Reference Build)  •  v2 (Karakter palette)

Riproduzione in **vanilla HTML/CSS/JS** del template Framer *Skillfunnel* di Flowcub
(`https://skillfunnel.framer.website/`), re-skinnata con la **palette brand Karakter**
e arricchita di animazioni avanzate. Nessun framework, nessun build step.

## File
- `index.html` — struttura completa, 13 sezioni
- `styles.css` — design system Karakter + stili (token in `:root`)
- `app.js` — animazioni e interazioni

## Stack (CDN, già linkati)
GSAP 3.12.5 + ScrollTrigger · Lenis 1.0.42 · SplitType 0.3.4 · Font Hanken Grotesk.

## Come vederlo
Doppio click su `index.html` (serve connessione per le CDN). Per Elementor: incolla in
un widget HTML singolo.

## Palette Karakter (token in :root)
- Sfondo `#060E1A`, surface navy `#0d1c33`
- Azzurro `#2F80ED` (accent primario, bottoni)
- Lime `#A3E635` (accent 2: check, dot, stelle "after")
- Ghiaccio `#D9E1E8` (testo soft, card form a contrasto)
- Gradiente identitario navy→azzurro→lime su hero title, rail storytelling, frame-scrub

## Animazioni
- **Hero video 3D**: parte inclinato in prospettiva (rotateX 42°) al 120%, allo scroll
  si raddrizza e scende al 100% (scrubbed).
- **Scroll stacking**: le recensioni sono card sticky che si impilano.
- **Custom scrollbar storytelling**: rail verticale con gradiente + dot milestone,
  al centro delle sezioni Before/After e Form (`[data-story]`).
- **Frame-by-frame scrub**: canvas nella card "templates" che costruisce i frame allo
  scroll (48 frame procedurali — sostituibili con una vera image sequence: vedi punto
  9 in app.js, disegna `img[frame]` al posto delle celle).
- Reveal char blur/slide, text-highlight scrub sulle bio, count-up stats, marquee loghi,
  nav sticky + scrollspy, pricing card sticky, accordion, tilt 3D, custom cursor, parallax.

## Placeholder immagini — DA SOSTITUIRE
Box neutri `.ph` con aspect-ratio corretto: `.ph--video` (hero), `.ph--portrait` (mentor),
`.ph--avatar`, `.ph--bg` (CTA). Il canvas frame-scrub è procedurale e sostituibile.

## Contenuti
Copy identico al template originale (inglese): da adattare a Karakter in un secondo momento.
