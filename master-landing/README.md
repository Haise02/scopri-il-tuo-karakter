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

## ⚠️ Da fare prima di pubblicare

1. **Form Brevo** — nel file cerca `>>> FORM BREVO <<<` (sezione `#richiedi`): incolla l'embed Brevo dentro `<div class="brevo-slot" id="masterBrevo">` ed **elimina** il `<div class="brevo-ph">`. Serve una lista dedicata (es. "Lead Master K-Coach").
2. **Video** — nella sezione `#video` c'è il commento `▸▸▸ VIDEO`: quando il video è pronto, caricalo nel repo (`master-landing/img/master-intro.mp4` + poster) e decommentando il tag `<video>` sostituisci il placeholder. Finché non c'è, il play scrolla al form.
3. **Testimonianze** — le 3 card in `#voci` hanno testi placeholder con `[Nome Cognome]` e `[anno]`: sostituire con recensioni reali degli alumni.
4. **Privacy** — collegare il link alla privacy policy reale nel micro-testo sotto il form.

## Come usarla in Elementor

1. Pagina in **Elementor Canvas** (nav e footer sono interni alla LP).
2. Widget **HTML** → incolla tutto `master-elementor.html`.
3. Push del repo (cartella `master-landing/` inclusa) → asset serviti da:
   `https://cdn.jsdelivr.net/gh/Haise02/scopri-il-tuo-karakter@main/master-landing/`
   Dopo ogni modifica a CSS/JS ricordarsi che jsDelivr cachea: usare `@<commit-hash>` o purge.
