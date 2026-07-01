# Karakter — Prompt immagini (pronti da copiare)

**Motori consigliati:** Midjourney v6 `--style raw` oppure Flux 1.1 pro. Evita i modelli "lisci" che generano lo stock.
**Su Flux / ChatGPT / Ideogram:** togli i flag `--ar/--no/--style raw` e aggiungi a parole "formato 16:9" (o 4:5).
**Coerenza:** genera prima HERO, poi usalo come style reference (Midjourney `--sref <url_hero>`) sulle altre foto.

---

## 1 · HERO — foto (slot: sezione hero) → file: hero.jpg [16:9]
Over-the-shoulder reportage of a real coaching session in a warm minimalist Roman studio, a woman in her 40s listening with genuine focus to a client across a wooden table, soft late-afternoon window light raking across the room, out-of-focus foreground, intimate and quiet, editorial magazine feel, shot on 35mm film Kodak Portra 400, natural available light, visible film grain, candid unposed documentary, shallow depth of field f/1.8, cinematic grade with deep navy shadows and warm highlights, subtle teal and lime practical lights in background --ar 16:9 --style raw --no stock photo, smiling at camera, thumbs up, hands holding smartphone, app UI screen, potted plant on desk, coffee cup cliche, white background, plastic skin, HDR, oversaturation, lens flare, watermark, text

## 1b · HERO alternativo — arte astratta senza persone → file: hero.jpg [16:9]
A flowing sculptural ribbon of light curving through dark space, gradient from deep navy #0B1F3A to electric azure #2F80ED to lime #A3E635, matte glass material, soft studio reflections, volumetric light, subtle film grain, minimal premium brand artwork, octane render, editorial, cinematic --ar 16:9 --style raw --no people, text, logo, watermark, stock, clipart, oversaturation

## 2 · REISS — arte astratta 3D (slot: sezione Reiss) → file: reiss.jpg [4:5]
Abstract 3D data sculpture representing 16 human motivations, sixteen luminous vertical glass rods of different heights standing in a dark navy void, gradient from deep blue to electric azure to lime along their length, soft studio reflections, volumetric haze, premium editorial render, octane, minimal, cinematic, subtle grain, background color #060E1A --ar 4:5 --style raw --no phone, smartphone, hands, people, app UI, text, logo, watermark, clipart, stock

## 3 · METODO · SCOPRI (slot: step 01) → file: metodo-scopri.jpg [16:9]
Intimate close portrait of a person alone in thought beside a window, half in shadow, writing in a notebook, contemplative and calm, cinematic chiaroscuro, shot on 35mm film Kodak Portra 400, natural light, visible grain, candid unposed, shallow depth of field, deep navy shadows warm highlights --ar 16:9 --style raw --no smiling at camera, thumbs up, smartphone, app UI, potted plant, coffee cup cliche, white background, plastic skin, HDR, watermark, text

## 4 · METODO · COMPRENDI (slot: step 02) → file: metodo-comprendi.jpg [16:9]
Candid documentary of a small coaching workshop, five adults sitting in a circle mid discussion, one gesturing while others listen, warm Roman interior, natural imperfect light, film grain, unposed, editorial reportage, shot on 35mm Kodak Portra 400, shallow depth of field, cinematic navy and warm grade --ar 16:9 --style raw --no smiling at camera, thumbs up, smartphone, app UI, stock photo, white background, plastic skin, HDR, watermark, text

## 5 · METODO · FAI CRESCERE (slot: step 03) → file: metodo-crescere.jpg [16:9]
Two people in authentic dialogue, one nodding while the other speaks with hands in mid gesture, warm bokeh background, emotional but restrained, Kinfolk-style editorial, shot on 35mm film, natural window light, grain, candid, shallow depth of field f/1.8, deep navy shadows warm skin --ar 16:9 --style raw --no smiling at camera, thumbs up, smartphone, app UI, potted plant, coffee cup, white background, plastic skin, HDR, watermark, text

## 6 · K-LAB — evento dal vivo (slot: card K-Lab, sfuma in basso) → file: klab.jpg [4:5]
Cinematic wide shot of a live workshop seen from the back of a dim room, audience silhouettes facing a lit stage and screen, warm key light with subtle blue and lime rim glow, atmospheric haze, bottom of the frame darker and moody, concert-documentary feel, shot on film, grain --ar 4:5 --style raw --no bright lighting, stock photo, smiling faces at camera, clipart, text, logo, watermark, HDR

## 7 · CTA FINALE — community (slot: sezione finale, spazio a sinistra) → file: cta.jpg [16:9]
Wide cinematic shot of a diverse small group leaving a training room together, partly turned away, genuine candid laughter, warm dusk light, negative space on the left third for text, shot on 35mm film Kodak Portra 400, grain, unposed documentary, deep navy shadows warm highlights --ar 16:9 --style raw --no smiling at camera, thumbs up, smartphone, stock photo, white background, plastic skin, HDR, watermark, text

## 8 · FONDATORI (meglio foto reali; solo se servono placeholder) → file: marco.jpg / alessandra.jpg [1:1]
Editorial studio portrait of a professional in their 50s, three-quarter view, soft Rembrandt lighting, calm authoritative and warm expression, dark navy background, shot on 35mm film, natural grain, no smile at camera, cinematic --ar 1:1 --style raw --no white background, plastic skin, thumbs up, HDR, watermark, text

---

### Come agganciarle al sito (quando le hai)
Metti i file nella cartella `skillfunnel-clone/` con i nomi sopra. Poi si sostituiscono così:
- Foto dentro un box: sull'elemento `.ph` corrispondente → `style="background-image:url('hero.jpg');background-size:cover"` (e togli il `data-ph`).
- K-Lab: imposta `background-image` su `.card--klab .card__bg`.
- Posso farlo io in 2 minuti: dimmi "aggancia le immagini" quando i file sono nella cartella.

---

## THUMBNAIL PERCORSI (serie coerente, 16:9) — Reiss / Master / Reiss Master
Stile comune (incolla in coda a tutti e 3):
> abstract 3D render, dark navy background color #060E1A, matte glass and light, gradient from deep blue #2F80ED to lime #A3E635, soft studio reflections, volumetric glow, minimal premium editorial, octane render, cinematic, subtle grain, centered composition --ar 16:9 --style raw --no people, text, logo, watermark, stock photo, clipart, UI screen, phone, hands

### → file: reiss.jpg  (Test Reiss Motivation Profile)
Sixteen luminous vertical rods of different heights arranged in a row like a glowing equalizer of human motivation, floating in dark navy space, gradient blue to lime, soft reflections on a dark glossy floor

### → file: master.jpg  (Master K-Coach)
An ascending staircase of glowing glass platforms rising from dark to light, culminating in a radiant summit, sense of progression and mastery, navy to azure to lime gradient, cinematic depth

### → file: reissmaster.jpg  (Reiss Master · Certificazione RMP)
A glowing circular emblem made of concentric light rings with a central key-like shard, sense of certification and authority, navy background, azure to lime gradient, premium seal of expertise

### → file: klab.jpg  (card K-Lab, GIÀ collegato)
Usa la foto reale dell'evento (quella che mi hai mostrato). Salvala come `klab.jpg` nella cartella: si aggancia da sola.
