# Landing Test Reiss · Karakter — Richiesta Informazioni (DESIGN v3)

Landing verticale (lead gen) sul **Test Reiss Motivation Profile**.
Obiettivo unico: **richiesta informazioni**. Prezzo nascosto (solo lead).

**Design v3:** bande alternate **CHIARO-first** (chiaro → scuro → chiaro → scuro…), palette Karakter
(unica cosa mantenuta), font **Space Grotesk + Inter**, nav flottante, hero con struttura
occhiello → headline-promessa → sub corta, facsimile Reiss come card scura sul chiaro.
**Ogni banda ha uno sfondo diverso** (aurore, griglia, dots, warm, split, glow, grana) — niente navy piatto.
**Zero librerie esterne** (JS vanilla).

## File

| File | A cosa serve |
|---|---|
| `index.html` | **Preview standalone.** Doppio click per vederla girare (CSS/JS/asset locali). |
| `reiss-elementor.html` | **Da incollare in Elementor** (widget HTML). CSS/JS/asset via CDN. |
| `reiss-style.css` | Stili, **scoped sotto `#reiss-app`** + sistema bande (`.band--dark` / `.band--light` / `.band--hero`). |
| `reiss-script.js` | Reveal, facsimile Reiss, contatori, accordion, form demo. Vanilla, nessuna dipendenza. |
| `reiss-bg.mp4`, `loghi/`, `*.svg`, `marco/alessandra.png`, `icf-logo.png` | Asset reali già inclusi. |

## Bande (alternanza CHIARO-first)

Hero **(chiaro)** → Problema (scuro) → Cos'è **(chiaro)** → 16 motivazioni (scuro) → Come funziona **(chiaro)** → Per chi (scuro) → Benefici **(chiaro)** → Autorità (scuro) → Recensioni **(chiaro)** → FAQ (scuro) → CTA+Form **(chiaro, con pannello scuro + video)** → Footer (scuro).
Sfondi tutti diversi (classi `dec-*`: `dec-hero`, `dec-l-soft/warm/dots/split`, `dec-d-glowA/glowB/grid/deep`, `dec-cta`). Due strisce **marquee** (lime/blu) come raccordo. Il trust dei loghi è in fondo all'hero.

## 🖼️ Immagini placeholder (da generare)

I box tratteggiati con etichetta sono **placeholder** — le immagini le generiamo dopo.
Attualmente 3 nelle card "Per chi è": `Immagine · Privati`, `Immagine · Coach`, `Immagine · Aspiranti coach` (formato 16/9).
Per aggiungerne altri: `<div class="ph ph--wide" data-label="Descrizione"></div>` (`ph--tall` 4/5, `ph--sq` 1/1).
Sono già reali: loghi partner, logo Karakter, foto fondatori, video CTA.

## ⚠️ Form: sostituire il demo con Brevo

Il form è un **placeholder demo** (mostra solo conferma, non invia). Nel file cerca **`>>> FORM BREVO <<<`** (sezione `#richiedi`):

1. Incolla l'embed/iframe Brevo dentro `<div id="reissBrevo"> … </div>`.
2. **Elimina** il blocco demo `<form id="reissForm"> … </form>` per non avere due form.

## Come usarla in Elementor

1. Pagina in **Elementor Canvas** (senza header/footer del tema: la nav è interna).
2. Widget **HTML** → incolla tutto `reiss-elementor.html`.
3. Asset + CSS/JS via **jsDelivr → GitHub**. Base URL usata:
   `https://cdn.jsdelivr.net/gh/Haise02/scopri-il-tuo-karakter@main/reiss-landing/`
   Carica questa cartella `reiss-landing/` nel repo. Se usi repo/branch diverso, find-and-replace di quella base.
   jsDelivr ha cache: dopo un push usa `@commit-hash` invece di `@main` per forzare l'aggiornamento.

## Note

- Tutto **scoped sotto `#reiss-app`**: nessun conflitto col tema.
- Facsimile Reiss = **esempio**: i valori sono in `data-v` (0–1) e `data-side` (p/n) su ogni `.frow__b`.
- Animazioni disattivate con `prefers-reduced-motion` e su touch dove opportuno.
- Responsive: 4→2→1 colonne, hero/form in colonna singola sotto 1080px, CTA flottante su mobile.

## Da personalizzare prima del live

- [ ] Form Brevo al posto del demo.
- [ ] Generare le 3 immagini "Per chi è".
- [ ] Verificare email `info@karakter.it` nel footer.
- [ ] Recensioni reali Google quando disponibili.
