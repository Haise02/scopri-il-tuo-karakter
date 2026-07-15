# Prompt di avvio — Nuova chat · Karakter Homepage Redesign

> Copia-incolla questo blocco in una nuova chat per ripartire con pieno contesto.

---

## Chi sono io e come voglio lavorare

Sono **Byup**, Full Stack Marketing. Lavoro sul rebranding e marketing di **Karakter Coaching School**. Ho competenze marketing complete: non perdere tempo a spiegarmi i fondamentali. Voglio un collega collaboratore, non un assistente.

**Come collaborare con me:**
- Ragionamento lungo, risposte precise, professionali ma informali
- Analisi onesta e critica, non rassicurante
- Apprezzo soluzioni creative non ovvie
- Quando proponi qualcosa, fai vedere che ci hai pensato a fondo
- Quando hai dubbi, chiedimi 2-3 cose alla fine — non assumere

---

## Il cliente — Karakter Coaching School

Scuola di coaching professionale fondata a **Roma nel 2011** da **Marco Angeletti** (ICF PCC, Program Owner) e **Alessandra Abbattista**. Accreditata **ICF Level 2** (144 ore ACSTH). 170 ore totali nel Master K-Coach Professionisti. **500+ coach formati**. Sede a Roma (Viale G. Rossini), anche online.

**Asset differenziante unico in Italia:** il **Reiss Motivation Profile** integrato nel percorso formativo. Il Reiss misura 16 motivazioni fondamentali.

**Sito attuale (vecchio):** https://www.karaktercoaching.it — WordPress + Elementor stratificato dal 2019-2021. Logo vecchio, foto stock, menu da 30+ voci, zero gerarchia, zero conversion path. Da rifare la sola **homepage** (le altre pagine restano com'è).

---

## Identità visiva nuova (maggio 2026 — già confermata)

**Palette:**
- Blu Navy `#0B1F3A` — primario, testi, sfondi istituzionali
- Azzurro `#2F80ED` — secondario, accenti, CTA
- Lime `#A3E635` — energia, highlight, accento vitale
- Grigio Ghiaccio `#D9E1E8` — neutri
- Sfondo dark `#060E1A`

**Gradiente identitario:** navy → azzurro → lime ("dal blu profondo all'energia della crescita")

**Logo:**
- `karakter-logo-orizzontale-gradient-rgb.svg` (colori)
- `karakter-logo-orizzontale-bianco.svg` (per sfondi scuri)
- File nella workspace `C:\Users\nilga\Desktop\Progetti\Karakter\`

**Font:** Halfre per headline (TTF in workspace) + Fraunces (serif editoriale) + Inter (sans).

**Sistema di brand:**
- Territory: **"Ogni persona è un Karakter"**
- Sistema in 3 step: **Scopri → Comprendi → Fai Crescere**
- Archetipo: **Il Saggio con Carattere**
- 3 pilastri: Profondità Scientifica / Formazione che parte dal Sé / Ogni Karakter Conta
- **12 Tratti Karakter**: Bussola, Fuoco, Mappa, Filo, Radice, Onda, Scudo, Palco, Ponte, Ritmo, Lente, Vento
- Posizionamento: quadrante "Istituzionale + Caldo" (spazio vuoto nel mercato)
- Tono visivo: istituzionale ma vivo. Mai corporate freddo, mai motivazionale chiassoso.

---

## Cosa sto facendo ora — Homepage redesign

**Scope:** una **single-page vetrina** (onepage), separata dai funnel (quiz, K-Lab, ecc.). Header e footer di Elementor restano. Tutte le altre pagine del sito restano come sono.

**Stack tecnico:**
- Sviluppo in **locale** (vanilla HTML + CSS + JS) nella cartella `C:\Users\nilga\Desktop\Progetti\Karakter\karakter-homepage\`
- Output finale: 3 file (`index.html` + `styles.css` + `app.js` + cartella `assets/`)
- Verrà incollato in Elementor come **HTML widget singolo** (in pagina Canvas)
- Librerie via **CDN**: GSAP 3.12 + ScrollTrigger, Lenis 1.1, SplitType 0.3
- Niente repo GitHub per ora, niente build, niente framework
- Possibile fallback futuro: GitHub Pages + iframe, ma per ora sviluppo locale

**Approccio design:**
- **Dark-first cinematografico** (sfondo `#060E1A`)
- Tipografia editoriale, ritmo respirato (riferimenti: Linear, Vercel, Stripe, Apple)
- Tutti i trend frontend 2026: scroll-triggered storytelling, kinetic typography, stacking cards, magnetic cursor, mesh gradient animati, tilt 3D
- Custom cursor sottile (sì, già confermato)
- Niente suoni (rischio fastidioso per target pro)
- Mobile: experience progressivamente alleggerita, `prefers-reduced-motion` rispettato
- Lighthouse target: 90+ Performance, 100 Accessibility, 100 SEO

---

## Architettura one-page (13 sezioni totali)

1. **Loader** — K che si disegna + counter 0→500+ (1.5 sec)
2. **Hero immersivo** — mesh gradient animato, headline kinetica SplitText, custom cursor magnetico, marquee facts
3. **Intro + Numeri** — chi siamo condensato, 4 stat con counter animato
4. **Sticky storytelling Scopri / Comprendi / Fai Crescere** — pin 300vh, glow che cambia colore
5. **Stacking cards "3 promesse"** — sticky CSS, scale crescente
6. **12 Tratti — griglia interattiva** — tilt 3D, click expand (modal)
7. **Reiss Motivation Profile** — radar 16 punte stroke animato
8. **Scrollytelling video** — video scrubbing alla Apple (placeholder per ora)
9. **Numeri & accreditamenti** — counter + loghi greyscale/colore
10. **Eventi prossimi** — card grande con video preview hover, countdown live, gestiti via JSON
11. **Prodotti — horizontal scroll** — 4 card (Master / One-to-One / Aziende / Reiss)
12. **Testimonianze — magnetic carousel** — foto, quote, tratto Karakter dominante
13. **Partner marquee + CTA finale + Newsletter + Footer**

---

## Stato attuale del lavoro (al 30 giugno 2026)

**✅ Già sviluppate** (file in `karakter-homepage/`):
- Loader animato
- Hero (mesh gradient, SplitText, marquee, custom cursor, magnetic buttons)
- Intro + 4 stat counter
- Sticky storytelling (3 step pinned con SVG diversi)
- Stacking cards (3 promesse)
- Griglia 12 Tratti (tilt 3D, popolazione via JS)

**File pronti:**
- `index.html` (~412 righe)
- `styles.css` (~1030 righe, 200 regole)
- `app.js` (~370 righe, vanilla JS modulare in IIFE)
- `assets/halfre.ttf`, `assets/logo-white.svg`, `assets/logo-gradient.svg`

**⬜ Da sviluppare (prossime ondate):**
- Reiss radar visualization
- Video scrubbing (placeholder per ora — niente girato disponibile)
- Prodotti horizontal scroll (4 card)
- Testimonianze carousel
- Eventi prossimi card con countdown
- Marquee partner doppia riga
- CTA finale + Newsletter form
- Footer completo

---

## Asset disponibili e mancanti

**Disponibili in workspace:**
- Logo gradient + bianco (SVG)
- Font Halfre (TTF)
- Documenti strategici (`Karakter_Direzione_Strategica_v2.docx`, `Tratti_Karakter_12_Schede.docx`, brand book PDF, ecc.)

**Mancanti — uso placeholder (gradient/SVG generati al volo):**
- Foto Marco + Alessandra
- Foto sede + classe + studenti
- Video b-roll
- Loghi accreditamenti in SVG
- Icone dei 12 tratti (per ora ne ho generate di line-style in SVG)
- Foto diplomati per testimonianze
- Lista eventi (servirebbe `events.json`)

---

## Cose da NON fare

- ❌ Non rifare il sito intero. Solo homepage onepage.
- ❌ Non usare WordPress/Elementor nativo. Solo codice custom da iniettare.
- ❌ Non aggiungere suoni. Target professionale.
- ❌ Non usare framework (React, Vue, ecc.). Vanilla.
- ❌ Non usare tono motivazionale/corporate. Istituzionale ma caldo.
- ❌ Non mettere gli eventi nelle prime sezioni. Devono apparire dopo aver fatto storytelling (sezione 10 di 13).

---

## Cosa ti chiedo come prima cosa

Leggi i file già sviluppati nella cartella `karakter-homepage/` (`index.html`, `styles.css`, `app.js`) per capire il linguaggio visivo e tecnico che ho già stabilito. Poi:

1. Aspetta feedback su cosa ho visto cliccando il prototipo v1
2. Quando ho feedback, scaliamo alle 7 sezioni mancanti con la stessa qualità
3. Mantieni la coerenza di palette, tipografia, easing, micro-interazioni

Pronto?
