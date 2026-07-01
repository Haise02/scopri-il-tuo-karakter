# Come mettere la home su Elementor (e perché prima non caricava)

## Perché su Elementor "non carica nulla dello stile"
Un widget **HTML di Elementor NON è una pagina**: tiene solo il contenuto del `<body>` e
**scarta `<head>`, i `<link rel="stylesheet">` e a volte gli `<script>`**.
Quindi incollando tutto `index.html` (o `index.elementor.html`) perdi CSS, JS e il video resta fermo.

## Soluzione consigliata: IFRAME (funziona al 100%)
Si ospita la pagina vera da qualche parte e la si incorpora con un iframe.
Dentro l'iframe la pagina è "completa" → CSS, JS, animazioni e video funzionano identici.

### Passo 1 — Pubblica i file su GitHub (dalla cartella del progetto)
```bash
cd "C:\Users\nilga\Desktop\Progetti\Karakter"
git add skillfunnel-clone
git commit -m "Karakter homepage: build aggiornata + video 1080p"
git push origin main
```

### Passo 2 — Attiva GitHub Pages
GitHub → repo `scopri-il-tuo-karakter` → **Settings → Pages** →
"Build and deployment" → Source: **Deploy from a branch** → Branch: **main** / **/(root)** → Save.
Dopo 1-2 minuti la pagina sarà a questo indirizzo:
```
https://haise02.github.io/scopri-il-tuo-karakter/skillfunnel-clone/index.html
```
(apri questo link nel browser per verificare che tutto giri: video incluso)

### Passo 3 — In Elementor, widget HTML, incolla SOLO questo:
```html
<iframe
  src="https://haise02.github.io/scopri-il-tuo-karakter/skillfunnel-clone/index.html"
  style="width:100%;height:100vh;border:0;display:block;overflow:hidden"
  loading="lazy" title="Karakter">
</iframe>
```
Regola `height` se serve (es. `height:6000px` per pagina intera senza scroll interno, oppure lascia `100vh` con scroll).

## Il video finale
- Sulla **pagina vera** (Pages/iframe) il video parte da solo: è `muted/loop/playsinline`, ora è **1080p 188KB** (prima era 4K e i browser non lo riproducevano).
- In **locale** (doppio click su index.html) alcuni browser bloccano l'autoplay finché non fai uno scroll/click: è normale, online parte da solo.

## Nota su jsDelivr (solo se NON usi l'iframe)
`index.elementor.html` ha i link assoluti jsDelivr. jsDelivr però mette in cache `@main` ~12h:
dopo un push, per forzare l'aggiornamento apri una volta
`https://purge.jsdelivr.net/gh/Haise02/scopri-il-tuo-karakter@main/skillfunnel-clone/styles.css`
(e uguale per app.js, reiss-bg.mp4, ecc.). Ma con l'IFRAME non ti serve: usi direttamente la pagina su Pages.

## Riassunto: cosa caricare
Carichi su GitHub **tutta la cartella `skillfunnel-clone/`** (index.html, styles.css, app.js, tutte le immagini, la cartella `loghi/`, `reiss-bg.mp4`). Poi incolli in Elementor solo l'iframe qui sopra.
