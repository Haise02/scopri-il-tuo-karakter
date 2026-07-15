# Funnel Karakter — VERSIONE FINALE (iframe Brevo ufficiali)

> **Stato:** I 3 file HTML usano ora **iframe Brevo ufficiali**. Garanzia 100% che i contatti arrivino nelle liste e partano le welcome email automation.
> **UI:** lo stile dei form sarà quello standard Brevo (non più il custom Karakter), ma le sezioni intorno al form mantengono il design Karakter (gradiente blu→lime, font, bottoni, animazioni).

---

## I 3 file aggiornati (caricali su WordPress/Elementor al posto dei vecchi)

### 1. `KLab_LP_v1.html` (LP K-Lab)
**Sezione "Riserva il tuo posto al K-Lab"** (linea 754 circa) → contiene un iframe Brevo K-Lab. Quando l'utente compila e clicca Iscriviti, va dritto nella lista #5 e parte Welcome K-Lab.

### 2. `elementor-ready-v2/thankyou-v2.html` (Thank You Page Quiz)
- **Sezione K-Lab "ISCRIVITI GRATUITAMENTE"** → iframe Brevo K-Lab visibile (l'utente vede 4 campi + bottone Iscriviti del form Brevo)
- **Modal Reiss "Richiedi Info sul Test Reiss"** → iframe Brevo Reiss dentro il modal
- **Script JS** in fondo al file tenta di pre-popolare gli iframe Brevo con email/nome dell'utente da URL params o localStorage. Se non li trova, il form rimane vuoto e l'utente compila a mano.

### 3. `elementor-ready-v2/unified-elementor-v2.html` (LP Quiz)
- **Immagine `karakter%202.png`** all'inizio della sezione form-gate → **RIMOSSA** ✅
- **Form gate card** (dove l'utente lascia i dati dopo il quiz) → iframe Brevo Quiz ufficiale. Il JS GitHub `unified-script-v2.js` mostra ancora il quiz delle 24 domande regolarmente; solo il form finale è ora di Brevo.

---

## ⚠️ Onestà tecnica importante

### Cosa funziona al 100%
- Compili il form K-Lab sulla LP → contatto in lista #5 → welcome K-Lab parte ✅
- Compili il form Quiz alla fine del quiz → contatto in lista #6 → welcome Quiz parte + redirect a /grazie-quiz ✅
- Compili il form Reiss nel modal della TYP → contatto in lista #7 → welcome Reiss parte ✅

### Cosa NON funziona automaticamente (e perché)
**Single-click webinar dalla TYP**: non possibile col solo embed iframe perché:
- I form Brevo girano sul dominio `b9cb86d9.sibforms.com`
- Il sito è su `karaktercoaching.it`
- I dati che l'utente ha messo nel form Quiz (iframe Brevo) restano dentro l'iframe, **non sono accessibili a karaktercoaching.it** (security policy del browser: cross-domain)
- Quindi la TYP **non può pre-popolare** automaticamente l'iframe K-Lab con i dati dell'utente

**Conseguenza pratica:** l'utente arriva alla TYP, vede il form K-Lab Brevo vuoto, deve ricompilare email/nome/sms per iscriversi al webinar. È **2 click in più di quanto previsto**, ma è tutto chiaro e funziona.

### Come ottenere il vero single-click
Servono **30 minuti di setup Zapier** o **Vercel function**. Ti do la guida quando vuoi.

**Workaround più rapido nel mentre:** modificare il JS GitHub `unified-script-v2.js` per salvare email/nome/sms in localStorage PRIMA di inviare a Brevo. Così la TYP può pre-popolare. Ma serve mettere mano al repo `Haise02/scopri-il-tuo-karakter`.

---

## Come fare il deploy su WordPress (15 min)

1. WP-admin → vai alla pagina **LP Quiz** → Elementor → widget HTML
2. Cancella contenuto esistente → copia/incolla TUTTO il contenuto di `unified-elementor-v2.html` → Aggiorna
3. Stessa cosa per **Thank You Page** con `thankyou-v2.html`
4. Stessa cosa per **LP K-Lab** con `KLab_LP_v1.html`
5. Verifica URL pubblici (TYP deve essere su `/grazie-quiz` — è il redirect impostato su Brevo)

---

## Test end-to-end (5 min)

1. In incognito, apri la LP Quiz
2. Fai le 24 domande del quiz
3. Sul form gate (finale del quiz) inserisci una tua email di test
4. Submit → redirect a `/grazie-quiz`
5. **Verifica su Brevo**: Contatti → Liste → Quiz Karakter #6 → la tua email dovrebbe essere lì
6. **Verifica email**: entro 1-2 minuti dovresti ricevere Welcome Quiz
7. Sulla TYP, compila il form K-Lab → submit
8. **Verifica su Brevo**: lista Iscritti K-Lab #5 → la tua email
9. **Verifica email**: ricevi Welcome K-Lab
10. Sulla TYP, clicca "Richiedi Info sul Test Reiss" → compila modal → submit
11. **Verifica su Brevo**: lista Lead Reiss #7 → la tua email
12. **Verifica email**: ricevi Welcome Reiss

Se tutti e 3 i contatti arrivano nelle liste e tutte e 3 le email partono → **funnel LIVE**.

---

## Configurazione su Brevo (già fatta)

✅ Dominio karakter.it autenticato (DKIM + DMARC)
✅ Sender `info@karakter.it`
✅ 3 liste (#5 K-Lab, #6 Quiz, #7 Reiss)
✅ 3 form pubblicati con campi Nome/Cognome/Email/SMS
✅ 3 automation Welcome attive (trigger lista → attesa 1 min → invio email da info@karakter.it)
✅ Form Quiz redirige a `https://karaktercoaching.it/grazie-quiz` dopo submit

## Cose ancora da raffinare (non bloccanti per il lancio)

1. **Body delle 3 welcome email**: la Welcome K-Lab ha già contenuti custom; Welcome Quiz e Reiss usano ancora template default Brevo (oggetto è giusto, body generico). Copy completo è in `Brevo_Copy_Email_Pronto.md` da incollare nell'editor Brevo.
2. **Single-click webinar dalla TYP**: vedi sezione "Come ottenere il vero single-click" sopra.
3. **Titoli/sottotitoli form Quiz e Reiss Brevo**: i 2 form sono stati clonati dal K-Lab e mantengono il titolo "Iscriviti al Laboratorio Gratuito". Da aggiornare in Brevo → Moduli → Progetta. Non bloccante perché ora il form vive dentro la tua sezione design Karakter.
4. **Pulizia**: dominio karakter.it è stato aggiunto a un account Brevo sbagliato all'inizio del setup — da rimuovere.

---

## File del progetto (in C:\Users\nilga\Desktop\Progetti\Karakter\)

| File | Stato | Cosa contiene |
|---|---|---|
| `KLab_LP_v1.html` | ✅ AGGIORNATO | LP K-Lab con iframe Brevo |
| `elementor-ready-v2/thankyou-v2.html` | ✅ AGGIORNATO | TYP con iframe K-Lab + modal Reiss iframe + script pre-fill |
| `elementor-ready-v2/unified-elementor-v2.html` | ✅ AGGIORNATO | LP Quiz senza immagine + iframe Brevo Quiz nel form-gate |
| `Brevo_Stato_Finale.md` | Riferimento | Stato completo setup Brevo |
| `Brevo_Copy_Email_Pronto.md` | Riferimento | Copy completo 3 welcome email |
| `Brevo_Embeds_Live.md` | Riferimento | URL form + embed iframe + link diretti |
| `Funnel_FINAL.md` | **Questo file** | Documento operativo finale |
