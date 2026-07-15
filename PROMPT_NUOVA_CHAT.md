# PROMPT PER NUOVA CHAT — Landing Page Quiz Karakter v4

Copia e incolla questo prompt in una nuova chat. Allega questi file dalla cartella Karakter:
1. `Karakter_LP_ScopriIlTuoKarakter.html` — **QUESTO È IL FILE BASE v3.1, non toccarne la struttura se non dove indicato**
2. `karakter v1.3.pdf` — brand guidelines
3. `Quiz_ScopriIlTuoKarakter.docx` — domande e scoring
4. `Karakter_LP_ScopriIlTuoKarakter_v1.docx` — copy landing page
5. (Opzionale) Il file font Halfre `.woff2` o `.otf` se ce l'hai

---

## IL PROMPT

Ho un file HTML (`Karakter_LP_ScopriIlTuoKarakter.html`) che è una landing page per un quiz funnel. È un widget Elementor Canvas — tutto dentro `<div id="karakter-app">`, nessun tag `<html>/<head>/<body>`.

Il file allegato è la versione v3.1 che FUNZIONA e ha la UI/UX corretta. Devi applicare SOLO le modifiche elencate sotto. NON cambiare nient'altro. Se non menziono una sezione, lasciala identica.

**REGOLA D'ORO:** Ogni sezione che non menziono deve restare IDENTICA — stesso HTML, stesso CSS, stesso copy, stesso design. Le modifiche sono chirurgiche.

---

## MODIFICHE DA APPLICARE

### 1. FONT HEADLINE
Sostituisci `Barlow Condensed` con il font **Halfre**.
- Se ho allegato il file font, caricalo con `@font-face` (formato woff2/otf)
- Se NON ho allegato il font, chiedimelo. Nel frattempo usa **Outfit** da Google Fonts come placeholder temporaneo (poi basta cambiare una riga CSS)
- Aggiorna `--font-headline` e il link Google Fonts di conseguenza
- **Tutto il resto del sistema font resta identico:** DM Sans (body), DM Mono (labels), Old Standard TT (editorial)

### 2. HERO — Modifiche puntuali

**2a. Preheadline** — Aggiungi SOPRA la headline `<h1>`:
```
Quanto conosci davvero cosa ti spinge a fare delle scelte?
```
Stile: font body (DM Sans), font-size 14px, color var(--k-gray-400), font-weight 500, letter-spacing .04em, text-transform uppercase, margin-bottom 16px.

**2b. Headline** — La struttura HTML resta identica (`hero-headline` con "Scopri il tuo" + "Karakter"). Modifica:
- "KARAKTER" deve essere significativamente più grande: `font-size: clamp(64px, 12vw, 130px)` (attualmente è clamp 56-110px, tutto insieme). Separa le due righe dando a "Scopri il tuo" un font-size più piccolo tipo `clamp(32px, 5vw, 48px)` con font-weight 700
- Il blocco highlight ambra dietro "Karakter" (`hero-highlight-bg`) resta identico
- **AGGIUNGI pallino animato gradient** DOPO la parola "Karakter": un `<span>` inline con `width: 14px; height: 14px; border-radius: 50%; background: var(--k-gradient); display: inline-block; margin-left: 4px; vertical-align: baseline; animation: pulse-dot 2s ease-in-out infinite;` — lo stesso pallino che c'è nel logo nav `.k-nav-dot` ma più grande

**2c. Subhead** — Cambia SOLO il testo a:
```
24 domande e una mappa delle <mark>12 motivazioni</mark> che guidano ogni scelta che fai.
```
Aggiungi al CSS: `mark{background:rgba(242,183,5,.18);padding:0 4px;border-radius:3px;color:inherit;}`

**2d. CTA, social proof ("1.200+ persone..."), e tutto il resto della hero** — IDENTICI. Non toccare.

**2e. Hero widget** — L'HTML delle card e della search bar resta IDENTICO. Modifiche solo CSS:
- Cambia lo sfondo del contenitore `.hero-media-bg` da `var(--k-amber-light)` a `#234456`
- Il dot-pattern `::before` diventa: `background-image: radial-gradient(circle, rgba(255,255,255,.08) .8px, transparent .8px);` (dots chiari su sfondo scuro)
- Le card `.hero-float-card` e la `.hero-search-bar` mantengono sfondo bianco — solo il contenitore cambia
- **Più grande:** `.hero-media { max-width: 1100px; }` (era 900px)
- Le animazioni float sulle card restano identiche
- Centra verticalmente il contenuto nelle card: `.hero-float-card { display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }`

**2f. Typewriter** — Il JS è già stato fixato nella v3.1. NON toccarlo.

### 3. FEATURE CARDS (sezione "Come funziona")
La headline "TUTTO IN TRE PASSI", la label `// come funziona`, e il sub restano identici. Le 5 card con i testi originali restano identiche.

Modifica SOLO il layout delle card:
- Trasformale da scroll orizzontale a **carousel continuo** che mostra 3 card alla volta su desktop, 1 su mobile
- Auto-scroll ogni ~4 secondi con CSS animation smooth
- **Fade laterale**: gradiente ai bordi sinistro e destro che dissolve nel colore dello sfondo (`var(--k-white)`)
- Loop infinito (duplica le card nel DOM come già fatto per i testimonial)

### 4. WIDGET ANIMATI (sezione "Cosa scoprirai")
I 3 blocchi feat2 con testi e widget restano identici (HTML + CSS + copy). Aggiungi SOLO queste animazioni JS:

**4a. Barre dei tratti** (`.wr-bar-fill`): Ogni 3 secondi le 4 barre cambiano `width` verso valori random tra 40% e 95%, con `transition: width 1.2s cubic-bezier(.16,1,.3,1)`. NON mostrare percentuali.

**4b. Command palette** (`.widget-cmd-item`): Auto-cicla la classe `.active` ogni 1.5 secondi attraverso i 4 item. L'item attivo ha `background: var(--k-amber-pale)`.

### 5. STATS GRID (terzo widget feat2)
Il widget `.widget-stats` con le 4 card (12 tratti, 220 combinazioni, 24 domande, 5 min) resta ma arricchiscilo:
- Aggiungi piccola icona SVG inline in ogni card (bussola, griglia, chat bubble, orologio)
- Aggiungi bordo sinistro colorato `border-left: 3px solid VAR` (ambra, teal, green, petrol)
- Sfondo card con gradiente sottilissimo invece di bianco piatto: `background: linear-gradient(135deg, rgba(X,.03) 0%, var(--k-white) 100%)`

### 6. BLOCCO DIFFERENZA ("La Differenza")
Il copy resta identico. Modifiche:
- `max-width` del `.diff` uguale al widget hero: 1100px (attualmente segue `.sec-inner` 1060px — piccola differenza)
- **Aggiungi CTA** dopo il body text e prima delle stats: `<button class="btn-main" onclick="startQuiz()" style="margin-top:28px;">Scopri il tuo Karakter <svg...arrow></button>`
- **Aggiungi placeholder immagine** a destra: trasforma `.diff` in grid `grid-template-columns: 1fr 1fr` con a destra un rettangolo arrotondato `border: 2px dashed rgba(255,255,255,.2); border-radius: 20px; display:flex; align-items:center; justify-content:center; color: rgba(255,255,255,.2); font-size: 14px;` con testo "Immagine"
- Le `.diff-stats` vanno sotto, fuori dal grid, su tutta la larghezza

### 7. TESTIMONIALS
Le card, il carousel infinito CSS, gli avatar, i nomi — tutto resta identico. Aggiungi SOLO:
- **5 stelle ambra** `★★★★★` sopra ogni citazione: `<div style="color:var(--k-amber);font-size:14px;margin-bottom:12px;letter-spacing:2px;">★★★★★</div>`
- **Bold su frasi chiave** nelle citazioni con `<strong>`: es. "**Tre tratti su dodici**", "**non mi ha classificato**", "**il mio tratto dominante**"

### 8. FAQ
Tutto identico. Nessuna modifica.

### 9. FOOTER CTA — Tema scuro + Falling Objects
La sezione `.footer-cta` attualmente ha sfondo chiaro con dot-pattern. Modifiche:
- **Sfondo scuro:** `background: var(--k-black)` (#0A0A0A). Testo in bianco. CTA diventa ambra: `background: var(--k-amber); color: var(--k-black);`
- Il copy resta identico, solo i colori si invertono
- Trust badges in grigio chiaro
- **Aggiungi dopo la `.footer-cta-inner`**, dentro la `.footer-cta`, un contenitore falling objects:

```html
<div id="falling-container" style="position:relative;width:100%;max-width:1100px;height:350px;margin:40px auto 0;overflow:hidden;touch-action:none;cursor:grab;"></div>
```

Il JS (nel `<script>` finale) crea 12-15 pill badge con nomi tratti (BUSSOLA, FUOCO, MAPPA, FILO, RADICE, ONDA, SCUDO, PALCO, PONTE, RITMO, LENTE, VENTO + 3 extra) che cadono con fisica custom (gravità, rimbalzo, velocità). Le pill sono colorate (ambra, teal, green, petrol varianti), trascinabili con pointer events. NON serve Matter.js — basta un loop requestAnimationFrame con:
- gravità: `vy += 0.35`
- rimbalzo fondo: `vy *= -0.55` quando `y + h > containerHeight`
- rimbalzo laterale: `vx *= -0.7` ai bordi
- drag con pointerdown/pointermove/pointerup

Le pill: `position:absolute; padding:8px 18px; border-radius:100px; font-size:12px; font-weight:600; letter-spacing:.06em; text-transform:uppercase; font-family:var(--font-mono); color:white; user-select:none; pointer-events:none;` (pointer-events gestiti via JS per il drag)

### 10. DOPPIO LIVELLO DI LETTURA
In tutto il copy della landing page (NON nel quiz), aggiungi `<strong>` o `<mark>` su parole/frasi chiave per creare doppio livello di lettura. Chi scorre veloce legge i bold/highlight.

Applica a: subhead hero (già fatto col mark), feature card descriptions (1-2 parole chiave per card), feat2 text paragraphs, diff body, FAQ answers, footer CTA text.

### 11. NAV
**IDENTICA.** Non cambiare nulla.

### 12. QUIZ ENGINE
**NON TOCCARE NULLA.** Copia il quiz engine JS esattamente dal file allegato: TRAITS, SCORING, QUESTIONS (24 con opts), calcResults, renderQ, selectOpt, quizNext, quizBack, showFormSection, mountHubSpotForm (portalId 140603915, formId 3066a724-8e22-49aa-b93a-3244016cc58d, region eu1), onFormReady con jQuery injection, onFormSubmitted con btoa redirect, keyboard nav, gtag/dataLayer, AUTO_ADVANCE_DELAY=700.

### 13. FORM GATE
**IDENTICA.** Non cambiare nulla.

---

## VERIFICA FINALE
Dopo aver scritto il file, verifica:
- 24 domande (grep `text:`)
- 8 star questions (grep `star:true`)
- 12 tratti tutti presenti
- SCORING 24 righe
- HubSpot portalId/formId/region
- `onFormSubmitted` con `btoa` e redirect `/grazie-quiz/`
- Nav identica a v3.1
- Copy FAQ/Testimonials identico a v3.1
- Nessun `<html>/<head>/<body>` tag

## NOTE
- Il file è ~1200 righe. Output completo, nessun "..." o abbreviazioni
- Salva prima un backup: copia il file come `_v3.1_BACKUP.html` prima di modificare
