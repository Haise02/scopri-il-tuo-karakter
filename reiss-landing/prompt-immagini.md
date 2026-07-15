# Landing Test Reiss — Prompt immagini (pronti da copiare)

**Dove vanno:** i 3 placeholder tratteggiati nella sezione **"Per chi è"** (card su fondo scuro navy, formato **16:9**).
**Motori consigliati:** Midjourney v6 `--style raw` oppure Flux 1.1 pro (evita i modelli "lisci" da stock).
**Flux / ChatGPT / Ideogram:** togli i flag `--ar/--no/--style raw` e scrivi a parole "formato 16:9".
**Coerenza serie:** genera prima **Privati**, poi usalo come style reference (`--sref <url>`) su Coach e Aspiranti — così le 3 card sembrano una serie.
**Nota:** stanno su card scure, quindi tenere ombre navy profonde e un tocco di luce azzurra/lime sullo sfondo le fa incastrare col design.

---

## 1 · PRIVATI · "Per te, come persona" → file: `privati.jpg` [16:9]
Candid reportage of a person in their late 30s sitting alone by a large window in a warm minimalist room, lost in thought, quietly reflecting on life and career choices, soft directional daylight, introspective and calm mood, editorial magazine feel, shot on 35mm film Kodak Portra 400, natural available light, visible film grain, candid unposed documentary, shallow depth of field f/1.8, cinematic grade with deep navy #0B1F3A shadows and warm highlights, subtle azure #2F80ED and lime #A3E635 practical glow in the background --ar 16:9 --style raw --no smiling at camera, thumbs up, app UI screen, smartphone, potted plant cliche, coffee cup cliche, white background, plastic skin, HDR, oversaturation, lens flare, watermark, text

## 2 · COACH E PROFESSIONISTI · "Per coach e professionisti" → file: `coach.jpg` [16:9]
Over-the-shoulder reportage of a professional coach in her 40s in genuine dialogue with a client across a wooden table in a warm Roman studio, active listening with a focused calm expression, a subtle motivational profile chart and notes on the table, late-afternoon window light, intimate editorial documentary feel, shot on 35mm film Kodak Portra 400, natural light, visible film grain, candid unposed, shallow depth of field f/1.8, cinematic grade deep navy #0B1F3A shadows and warm highlights, subtle azure #2F80ED and lime #A3E635 accents in background --ar 16:9 --style raw --no smiling at camera, thumbs up, smartphone, app UI, stock photo, white background, plastic skin, HDR, oversaturation, watermark, text

## 3 · ASPIRANTI COACH · "Per chi vuole diventare coach" → file: `aspiranti.jpg` [16:9]
Candid documentary of a young adult in their late 20s in a small coaching training workshop, taking notes with focused aspiration while a few others discuss in a warm circle slightly out of focus behind, sense of learning and a new beginning, natural imperfect Roman interior light, editorial reportage, shot on 35mm film Kodak Portra 400, visible film grain, unposed, shallow depth of field, cinematic navy #0B1F3A and warm grade, subtle lime #A3E635 rim light --ar 16:9 --style raw --no smiling at camera, thumbs up, smartphone, app UI, stock photo, white background, plastic skin, HDR, watermark, text

## 4 · THUMBNAIL CTA FINALE (sostituisce il video) → file: `cta-reiss.jpg` [3:2 orizzontale]
Sta dietro al testo "Pronto a scoprire cosa ti muove?" con un forte gradiente scuro sopra, quindi deve essere **atmosferica e scura** (i dettagli si vedono in trasparenza). Due opzioni:

**4a · Astratta (consigliata, coerente col profilo Reiss):**
Abstract 3D data sculpture of sixteen luminous vertical glass rods of different heights, like a glowing equalizer of human motivation, floating in a deep navy void, gradient from electric azure #2F80ED to lime #A3E635 along their length, soft reflections on a dark glossy floor, volumetric haze, premium editorial render, octane, cinematic, subtle film grain, moody low-key lighting, background color #060E1A --ar 3:2 --style raw --no people, phone, hands, app UI, text, logo, watermark, clipart, stock, bright lighting, oversaturation

**4b · Fotografica (se vuoi calore umano):**
Cinematic wide reportage of a calm one-to-one coaching moment in a dim warm Roman studio at dusk, two people in quiet conversation seen from a distance, atmospheric and moody, deep navy #0B1F3A shadows dominating the frame, small warm key light and subtle azure #2F80ED / lime #A3E635 rim glow, shot on 35mm film Kodak Portra 400, heavy film grain, unposed documentary, low-key --ar 3:2 --style raw --no smiling at camera, thumbs up, smartphone, app UI, stock photo, white background, plastic skin, HDR, bright lighting, watermark, text

> Nota: il pannello ha già un **gradiente navy→azzurro di fallback**, quindi anche senza immagine non è mai vuoto. Appena metti `cta-reiss.jpg` nella cartella, compare da sola.

---

## Extra (opzionali, se ti servono)

### A · Immagine social / OG (condivisione link) → file: `og-reiss.jpg` [1.91:1]
Abstract 3D data sculpture of sixteen luminous vertical glass rods of different heights, like a glowing equalizer of human motivation, floating in a dark navy void, gradient from deep blue #2F80ED to lime #A3E635 along their length, soft reflections on a dark glossy floor, volumetric haze, premium editorial render, octane, cinematic, subtle grain, empty space on the left for title overlay, background color #060E1A --ar 1.91:1 --style raw --no people, phone, hands, app UI, text, logo, watermark, clipart, stock, oversaturation

### B · Sfondo hero alternativo (se un giorno vuoi una foto al posto dell'aurora) → file: `hero-bg.jpg` [16:9]
A flowing sculptural ribbon of light curving through dark navy space, gradient from deep navy #0B1F3A to electric azure #2F80ED to lime #A3E635, matte glass material, soft studio reflections, volumetric light, subtle film grain, minimal premium brand artwork, octane render, editorial, cinematic --ar 16:9 --style raw --no people, text, logo, watermark, stock, clipart, oversaturation

---

## Come agganciarle (quando hai i file)
Metti `privati.jpg`, `coach.jpg`, `aspiranti.jpg` nella cartella `reiss-landing/`, poi nel markup sostituisci ogni placeholder:

```html
<!-- da -->
<div class="ph ph--wide" data-label="Immagine · Privati"></div>
<!-- a -->
<div class="ph ph--wide" style="background-image:url('privati.jpg');background-size:cover;background-position:center;border:none"></div>
```

(il `border:none` toglie il tratteggio del placeholder). Se preferisci, dimmi **"aggancia le immagini"** quando i file sono nella cartella e lo faccio io in un minuto, gestendo anche la versione Elementor con l'URL CDN.
