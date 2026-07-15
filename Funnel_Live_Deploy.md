# Funnel Karakter — Deploy LIVE su karaktercoaching.it

> **Stato:** 3 file HTML aggiornati con embed Brevo + meccanismo single-click webinar dalla TYP.
> **Cosa funziona:** form Brevo che POSTano direttamente (no iframe esterno, mantengono il design custom).
> **Tempo per andare LIVE:** 15-30 minuti (caricare i file su WordPress + Elementor).

---

## File aggiornati pronti da caricare

### 1. `KLab_LP_v1.html` (Landing Page K-Lab)
**Cosa è cambiato:** il form di registrazione (sezione `#registro`) ora POSTa direttamente alla lista Brevo `Iscritti K-Lab` (#5) attraverso un iframe nascosto. Lo styling è invariato. Dopo il submit appare un messaggio di successo verde.

### 2. `elementor-ready-v2/thankyou-v2.html` (Thank You Page Quiz)
**Cosa è cambiato:**
- **Bottone K-Lab "ISCRIVITI GRATUITAMENTE"**: ora è collegato a un form nascosto che POSTa alla lista K-Lab #5 con dati pre-popolati. Al click si scrive automaticamente nella lista e mostra success message verde.
- **Modal Reiss "Richiedi Info"**: il form ora POSTa direttamente alla lista Brevo `Lead Reiss` (#7). Dopo submit mostra success message dentro al modal.
- **Script JavaScript aggiunto**: legge dati utente da URL params (es. `?email=`) oppure da `localStorage` come fallback (se il quiz ha salvato i dati lì prima del redirect).

### 3. `elementor-ready-v2/unified-elementor-v2.html` (LP Quiz)
**Cosa è cambiato:** aggiunto uno script invisibile che intercetta il submit del form quiz (con 3 strategie: classic submit, click button, beforeunload) e salva i dati utente (`email`, `nome`, `cognome`, `sms`) in `localStorage`. Così la TYP può leggerli e pre-popolare il bottone K-Lab.

---

## Configurazione fatta su Brevo

✅ **Form Quiz Karakter**: dopo il submit redirige a `https://karaktercoaching.it/grazie-quiz`
  *(URL semplice perché Brevo non supporta variabili `{{contact.X}}` nei query params. I dati arrivano alla TYP via localStorage)*

---

## Come fare il deploy su WordPress

1. **Login a WP-admin** di karaktercoaching.it
2. Apri le 3 pagine corrispondenti in Elementor:
   - Landing K-Lab → carica il contenuto di `KLab_LP_v1.html`
   - Landing Quiz → carica il contenuto di `unified-elementor-v2.html`
   - Thank You Quiz → carica il contenuto di `thankyou-v2.html`
3. In ogni pagina:
   - Modalità Elementor → widget **HTML** (in genere è già così)
   - Cancella il contenuto attuale del widget
   - Copia-incolla il contenuto del file aggiornato (apri il file .html in un editor, Ctrl+A, Ctrl+C → incolla nel widget HTML di Elementor)
   - Aggiorna
4. Verifica gli URL pubblici:
   - LP Quiz: `https://karaktercoaching.it/scopri-il-tuo-karakter` (o quello che è)
   - TYP Quiz: `https://karaktercoaching.it/grazie-quiz` ← deve corrispondere all'URL redirect impostato su Brevo
   - LP K-Lab: `https://karaktercoaching.it/k-lab` (o quello che è)

---

## Come funziona il flusso completo (end-to-end)

```
Utente arriva su LP Quiz
        ↓
Compila i campi e submit
        ↓
Lo script intercetta i dati → localStorage["karakterQuizUser"] = {email, nome, cognome, sms}
Lo script GitHub/Brevo aggiunge il contatto alla lista Quiz Karakter (#6)
        ↓
Welcome Email Quiz parte (1 minuto dopo)
        ↓
Brevo redirige a https://karaktercoaching.it/grazie-quiz
        ↓
TYP: legge localStorage e pre-popola i campi nascosti del form K-Lab
Utente vede:
  - Risultato del quiz (3 tratti)
  - Sezione Reiss con bottone "Richiedi Info"
  - Sezione K-Lab con bottone "ISCRIVITI GRATUITAMENTE"
        ↓
Se utente clicca "ISCRIVITI GRATUITAMENTE":
  → POST automatico al form Brevo K-Lab con email/nome già popolati
  → Contatto aggiunto a lista Iscritti K-Lab (#5)
  → Welcome Email K-Lab parte (1 minuto dopo)
  → Sulla TYP appare "✅ Iscrizione confermata!"
        ↓
Se utente clicca "Richiedi Info sul Test Reiss":
  → Si apre modal con form 3 campi (pre-popolato se localStorage presente)
  → Compila + submit
  → Contatto aggiunto a lista Lead Reiss (#7)
  → Welcome Email Reiss parte (1 minuto dopo)
  → Modal mostra "✅ Richiesta ricevuta"
```

---

## Test end-to-end (5 min)

1. Apri in incognito `https://karaktercoaching.it/scopri-il-tuo-karakter`
2. Compila il quiz fino al form lead, inserisci una tua email di test
3. Submit → vieni rediretto a `/grazie-quiz`
4. Sulla TYP, clicca "ISCRIVITI GRATUITAMENTE" del K-Lab
5. Dovresti vedere "✅ Iscrizione confermata!"
6. Entro 1-2 minuti devono arrivarti **2 email** all'indirizzo di test:
   - Welcome Quiz (dal form quiz)
   - Welcome K-Lab (dal click sul bottone webinar)
7. Vai su Brevo → Contatti → Liste → il tuo contatto deve essere in entrambe le liste Quiz Karakter (#6) e Iscritti K-Lab (#5)

---

## Caveat / Limitazioni

**Il single-click webinar funziona se** il form Quiz è renderizzato direttamente nel DOM della LP (non in iframe esterno). Lo script JS che ho aggiunto a `unified-elementor-v2.html` intercetta il submit con 3 strategie (event submit, click button, beforeunload) — funziona nella maggior parte dei casi.

**Se il form Quiz è in un iframe Brevo esterno** (su `sibforms.com`), localStorage del parent non viene popolato (cross-domain). In quel caso:
- Il bottone K-Lab della TYP non avrà dati pre-popolati
- Cliccando si apre il form K-Lab standalone in nuova tab (fallback già implementato nello script)

**Se vuoi single-click 100% garantito anche con form iframe:**
Servirebbe modificare il JS GitHub `unified-script-v2.js` per salvare in localStorage DOPO che il form ha submitted con successo, prima del redirect. Posso scriverlo se mi dai accesso al repo `Haise02/scopri-il-tuo-karakter`.

---

## Cosa è ancora da fare (manuale, ~10 minuti)

1. **Carica i 3 file su WordPress/Elementor** (vedi sezione deploy sopra)
2. **Personalizza Welcome Email Quiz e Reiss** con il copy dal file `Brevo_Copy_Email_Pronto.md` (la K-Lab è già personalizzata)
3. **Test end-to-end** con la tua email per verificare che il flusso funzioni
4. **Aggiorna il branding del sito** (eventualmente): i file HTML usano i nuovi colori brand (Blu Navy #0B1F3A, Lime #A3E635) ma se il resto del sito è ancora rosso, c'è un mismatch visivo
5. **Crea una sezione Reiss su una pagina dedicata** (es. `/reiss-motivation-profile`) con embed del form Reiss — opzionale, oggi il Reiss è solo nel modal della TYP

---

## Riferimenti rapidi

| Asset | Valore |
|---|---|
| Form Brevo K-Lab — URL POST | `https://b9cb86d9.sibforms.com/serve/MUIFAFbQK30u1W7mWImEDCRTWUilDAVeYUpYZ6clJHb-RHtd9lc-qMRGwKbmlZnrxXH5H_fN75vTXeJEXzslCU0aPEHZ34ZlFq_CpNyJbMVSQAlNVpzXSFEO_rU3eD9v5w5xRe3S31bpPyFMv2cOCV1hVMoO_OoRXPxQbfrs6lpH4tOMRTTcWVayMaUHIT8YUJdEgAo3h6vNNx6Eow==` |
| Form Brevo Quiz — URL POST | `https://b9cb86d9.sibforms.com/serve/MUIFAHUF6dGBz672Z_JbuTbl4lUty66op4G4-8ywUhKjqJRkNouKmEtCs2963pvbqAmLV4CXkh6jBSs8blSRfLjVftvCp3Pb9dnpozKi1u_1yXRQhr76qTGNV9CXtwYXgVrRO17BRLMpvX5yXWTvrblH9j5xyEYTZE9DemyPFemuBzrb8Hr0NyL4BKhJgjFw2CIMexRM5sHfluNsDw==` |
| Form Brevo Reiss — URL POST | `https://b9cb86d9.sibforms.com/serve/MUIFAB3fYR9IkRmRaHpll1o9pGfhvezTcYheb4tKV8xDcDNlSRBFsXjQe0VPzOTUCrAZ80BNACtIdvr3Mnw_Wle05NBand8IlLr14lHt1GabfAnobb-lF1RLhe_dxRGLSQto9ruDBZn34qzjn1LN3JgOjWKEmrT2AbT0CB-zqm_w6d0YJGb7flLIM3-Jq4WcNZ40Ecupsd6QNed_sA==` |
| Liste Brevo (ID) | Iscritti K-Lab `#5`, Quiz Karakter `#6`, Lead Reiss `#7` |
| Variabile localStorage | `karakterQuizUser` con shape `{email, nome, cognome, sms}` |

---

**File modificati (puoi diffare con git per vedere i cambi esatti):**
- `C:\Users\nilga\Desktop\Progetti\Karakter\KLab_LP_v1.html`
- `C:\Users\nilga\Desktop\Progetti\Karakter\elementor-ready-v2\thankyou-v2.html`
- `C:\Users\nilga\Desktop\Progetti\Karakter\elementor-ready-v2\unified-elementor-v2.html`
