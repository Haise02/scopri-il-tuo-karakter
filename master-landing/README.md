# Landing Master K-Coach · Karakter — Richiesta Informazioni (DESIGN "MONUMENT" v1)

LP verticale lead-gen sul **Master K-Coach Professionisti** (ICF Level 2, 170h).
Obiettivo unico: **richiesta informazioni** → programma via email + call conoscitiva.
Prezzo **nascosto** (agevolazioni citate, cifra solo in call). Edizione di riferimento: **Ottobre 2026**.

**Design "MONUMENT":** l'opposto di tutto ciò che abbiamo fatto finora — niente dark-editorial (quiz/K-Lab), niente carta Atlante (Mappa), niente bande alternate (Reiss). Pagina quasi tutta **bianca**, tipografia **Inter Tight** monumentale (tracking stretto, corpi enormi), hairline navy 1px, **lime solo come evidenziatore** (sweep animato sulle parole chiave), azzurro per dettagli e hover. Una sola inversione navy (sezione Problema) + pannello CTA finale navy con form bianco. Pattern editoriale: ogni sezione ha hairline + numero `01–09` + label.

## File

| File | A cosa serve |
|---|---|
| `index.html` | **Preview standalone.** Doppio click per vederla (asset locali). |
| `master-elementor.html` | **Da incollare in Elementor** (widget HTML, pagina Canvas). Asset/CSS/JS via jsDelivr. |
| `master-style.css` | Stili, **scoped sotto `#master-app`**. |
| `master-script.js` | Reveal, marker sweep, progress bar, count-up, FAQ, radar Reiss 16 punte, smooth scroll. Vanilla. |
| `img/` | Logo, foto fondatori, loghi partner (già reali). |

## Struttura (ordine sezioni)

Topbar sticky (logo + edizione + CTA, progress bar gradiente) → **Hero** (occhiello → headline-promessa con marker lime → sub → CTA lime + ghost video → meta-riga 4 dati) → **Video** (placeholder 16:9) → Trust loghi → Numeri count-up (2011 · 500+ · 170 · 16) → **01 Problema** (navy) → **02 Cosa ottieni** → **03 A chi è rivolto** → **04 Metodo** (Scopri→Comprendi→Fai Crescere + radar Reiss) → **05 Percorso** (timeline 5 fasi, colonna sticky con facts) → **06 Fondatori** → **07 Social proof** → **08 FAQ** → **09 CTA finale + form** → Footer.

## Aggiornamenti v5 (14/07) — aula reale + sequenza email

- Inserita la **foto reale dell'aula** (`img/aula-karakter.jpg`, crop 16:10 via CSS): non ci sono più placeholder in pagina.
- Confermato il poster video (`img/video-poster.png`) come placeholder fino al girato.
- Creata la **sequenza email** del funnel: `Karakter_Master_EmailSequence.docx` (root del repo). 3 email: conferma+programma (immediata) → nurture coaching (giorno +2) → scadenza early bird con CTA Master e P.S. Reiss (giorno +5). Segnaposto da sostituire: [LINK PROGRAMMA], [LINK VIDEO], [LINK CALL / CALENDARIO], [LINK REISS], [DATA SCADENZA].

## Aggiornamenti v4 (13/07 notte) — immagini reali + Thank You Page

- **6 illustrazioni + poster video inseriti** (da `img richiesta landing/`, rinominati in `img/`): `benefit-icf`, `benefit-reiss`, `benefit-sessione`, `benefit-community`, `perchi-percorsi`, `problema-scelta`, `video-poster`. Manca solo **l'aula di Roma** (prompt n.6): il suo placeholder è ancora in pagina.
- Il frame video ora mostra il poster reale con overlay play; finché non c'è il video, il play scrolla al form.
- **Nuova Thank You Page dedicata**: `grazie-master.html` (preview) + `grazie-master-elementor.html` (per Elementor). Struttura: conferma con check animato + nota spam → "Cosa succede adesso" in 3 step → video → 2 card esplorazione (quiz + Test Reiss, **sostituire `INCOLLA_URL_QUIZ` e `INCOLLA_URL_REISS`**) → footer. `noindex`.
- ⚠️ Nel form Brevo impostare il **redirect post-submit** alla pagina della TYP (es. `/grazie-master/`).

## Aggiornamenti v3 (13/07 sera) — copy big promise

- Headline: "Trasforma la tua capacità di capire le persone in una professione certificata."
- Sub più impattante (pain + promessa), CTA UNICA (rimosso "Guarda il video").
- Scarcity: "Solo 30 posti rimanenti · Early bird attivo"; pannello finale "Posti rimanenti: 30" (`data-fill="40"` = % barra riempita).
- Doppio livello di lettura in tutta la LP: `<strong>`, `<em>`, `.acc` (azzurro bold), `.lm` (corsivo con evidenziatore lime; sul navy diventa testo lime).
- Rimossi tutti i trattini lunghi (—) dal copy.
- Fix bug statistiche: il selettore `.stat span` schiacciava anche i numeri; ora label in `<small>` e barra in `<i class="stat-bar">`.
- Nuova immagine emotiva nella sezione Problema (placeholder dark) → prompt n.7.
- `prompt-immagini.md` riscritto: 8 prompt, ognuno completo e copia-incolla pronto.

## Aggiornamenti v2 (13/07)

- Hero compatta: headline ridotta, tutto leggibile above-the-fold; scarcity chip + countdown inline.
- Loghi partner **a colori pieni** in marquee loop infinito con fade bianco laterale (pausa su hover).
- Statistiche ridisegnate: centrate, barra gradiente animata, count-up.
- Fasi percorso più grandi + **icone line-art animate** (stroke che si disegna on-scroll).
- Placeholder immagini in tutta la pagina → prompt pronti in `prompt-immagini.md` (stile illustrato minimal line-art).
- Recensioni: 6 totali (3 + 3 dietro "Leggi altre recensioni"), rating 4,9/5, nomi realistici, avatar colorati.
- CTA finale: countdown grande + barra "posti disponibili 7 su 20".
- Topbar: solo "Edizione Ottobre 2026".

**Config countdown/scarcity:** la deadline è in `data-deadline="2026-10-01T09:00:00"` (2 occorrenze: hero + finale). Posti: testo "7 su 20" + `data-fill="65"` (percentuale barra occupata) nella sezione finale — aggiornare man mano che si riempie.

## ⚠️ Da fare prima di pubblicare

1. **Form Brevo** — ✅ INTEGRATO (14/07): embed ufficiale nel blocco `#masterBrevo`, restilizzato MONUMENT. Nota: i prefissi telefonici sono ridotti ai principali paesi UE+US (il blob Brevo completo ha 200+ option inutili); se serve la lista completa, reincollare il `<select>` originale. Su Brevo restano da configurare: **redirect post-submit** alla TYP `/grazie-master/` e automation email (vedi `Karakter_Master_EmailSequence.docx`).
2. **Video** — nella sezione `#video` c'è il commento `▸▸▸ VIDEO`: quando il video è pronto, caricalo nel repo (`master-landing/img/master-intro.mp4` + poster) e decommentando il tag `<video>` sostituisci il placeholder. Finché non c'è, il play scrolla al form.
3. **Testimonianze** — le 6 card in `#voci` hanno nomi e testi realistici ma inventati: validarli con Marco/Alessandra o sostituirli con recensioni reali appena disponibili. Idem il rating 4,9/5.
3b. **Immagini** — generare le 7 illustrazioni con i prompt in `prompt-immagini.md` e sostituire i placeholder tratteggiati.
4. **Privacy** — collegare il link alla privacy policy reale nel micro-testo sotto il form.

## Come usarla in Elementor

1. Pagina in **Elementor Canvas** (nav e footer sono interni alla LP).
2. Widget **HTML** → incolla tutto `master-elementor.html`.
3. Push del repo (cartella `master-landing/` inclusa) → asset serviti da:
   `https://cdn.jsdelivr.net/gh/Haise02/scopri-il-tuo-karakter@main/master-landing/`
   Dopo ogni modifica a CSS/JS ricordarsi che jsDelivr cachea: usare `@<commit-hash>` o purge.
