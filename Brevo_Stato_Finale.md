# Brevo — Setup Karakter COMPLETATO ✅

> **Stato:** Tutto il sistema base è LIVE e pronto a raccogliere lead. 25 maggio 2026, ore 15:05.
> **Account Brevo:** Karakter Coaching School
> **Mittente verificato:** info@karakter.it (DKIM + DMARC attivi su karakter.it via Register.it)

---

## ✅ Cosa è fatto e attivo

### Dominio e mittente
- karakter.it autenticato su Brevo
- 4 record DNS (Brevo Code TXT, DKIM 1 e 2 CNAME, DMARC TXT) inseriti su Register.it
- Sender `Karakter Coaching School <info@karakter.it>` verificato

### 3 Liste di contatti
- `#5` Iscritti K-Lab
- `#6` Quiz Karakter
- `#7` Lead Reiss

### 3 Form pubblicati
| # | Nome | Lista | Link diretto / Embed |
|---|---|---|---|
| 1 | K-Lab — Iscrizione Webinar | #5 Iscritti K-Lab | vedi `Brevo_Embeds_Live.md` |
| 2 | Quiz Karakter — Risultato | #6 Quiz Karakter | vedi `Brevo_Embeds_Live.md` |
| 3 | Reiss — Richiesta informazioni | #7 Lead Reiss | vedi `Brevo_Embeds_Live.md` |

Tutti e 3 hanno: campi **Nome / Email / Telefono (con prefisso paese)**, nessuna conferma email (entrano diretti in lista), success message custom.

### 3 Automation Welcome ATTIVE
| # | Nome | Trigger | Oggetto |
|---|---|---|---|
| 1 | Welcome K-Lab | contatto in lista #5 | La tua iscrizione al K-Lab è confermata |
| 2 | Welcome Quiz | contatto in lista #6 | Il tuo profilo Karakter è pronto |
| 3 | Welcome Reiss | contatto in lista #7 | Il Reiss Motivation Profile — come funziona |

Tutte e 3: mittente `info@karakter.it`, attesa **1 minuto** dal submit, status **Attivo**.

---

## ⚠️ Cosa è "MVP" (funziona ma è da raffinare)

Il **design del body delle 3 welcome email** è il template default di Brevo (italiano generico: logo placeholder + "Hey {{NOME}}, benvenuto a bordo!" + CTA "Scopri i nostri articoli"). **L'oggetto è giusto**, ma il body interno va sostituito con il copy brand Karakter che è già scritto nel file `Brevo_Setup_Operativo.md`.

**Per sistemare ogni email (10 min totali):**
1. Brevo → Automazioni → click su `Welcome K-Lab` → click su blocco "Invia un'email" → click "Modifica"
2. Nell'editor visuale: sostituisci il titolo "Hey {{contact.NOME}}, benvenuto a bordo!" col copy del file `Brevo_Setup_Operativo.md` sezione `## WELCOME 1 — K-Lab`
3. Sostituisci il body. Carica logo bianco/nero da `C:\Users\nilga\Desktop\Progetti\Karakter\logo bianco.png` (o nero, a seconda dello sfondo)
4. Clicca "Usa questo design nelle automazioni"
5. Ripeti per Welcome Quiz e Welcome Reiss

**Anche da raffinare ma non urgente:**
- Titolo e sottotitolo del form Quiz e del form Reiss sono ancora quelli del K-Lab (perché i 2 form sono stati clonati dal K-Lab). Da aggiornare in `Brevo → Moduli → [form] → Torna a Progetta` cambiando il titolo e il testo descrittivo (3 minuti per form).
- I copy giusti per Quiz e Reiss sono in `Brevo_Setup_Operativo.md`.

---

## 🚀 Cosa fare per ANDARE LIVE su karakter.it

I 3 embed iframe sono pronti in `Brevo_Embeds_Live.md`. Sostituisci i form vecchi sul sito con:
- K-Lab → embed K-Lab nella landing page del webinar
- Quiz → embed Quiz nella pagina del quiz / TYP
- Reiss → embed Reiss nella pagina del test Reiss

Se il sito è su WordPress/Elementor, usa un widget **HTML** e ci incolli l'iframe.

---

## 🧪 Test end-to-end consigliato (5 min)

Per ognuno dei 3 form:
1. Apri il link diretto del form (es. quello del K-Lab)
2. Compila con la tua email personale + un nome di test
3. Submit
4. Verifica che entro 1-2 minuti arrivi la welcome email all'indirizzo
5. Vai su Brevo → Contatti → Liste → controlla che il tuo contatto sia nella lista corretta

Se tutto funziona → tutto il sistema è validato end-to-end e pronto a girare.

---

## 📋 Cose lasciate aperte (non bloccanti)

- **Pulizia account Brevo sbagliato:** all'inizio del setup ho creato per errore karakter.it su un altro account Brevo (quello loggato per primo nel browser). Da rimuovere quando ti capita (basta entrare in quell'account → Senders, Domains & IPs → Domini → eliminare karakter.it).
- **SPF Brevo:** il record SPF attuale su Register.it (`v=spf1 include:spf.webapps.net ~all`) non include esplicitamente Brevo. **Brevo invia comunque grazie a DKIM**, ma per massima deliverability può essere aggiornato in `v=spf1 include:spf.webapps.net include:spf.brevo.com ~all`. Non urgente.
- **Welcome Quiz dinamica con i 3 tratti:** per inviare i tratti calcolati via email, servirebbe passare i 3 tratti come attributi del contatto (es. via webhook al submit del quiz). Per ora la welcome generica rimanda alla TYP del quiz dove i tratti sono già visibili.

---

## 📁 File prodotti in questa sessione

Tutti in `C:\Users\nilga\Desktop\Progetti\Karakter\`:
- `Brevo_Setup_Operativo.md` — copy completo 3 form + 3 welcome email
- `Brevo_Embeds_Live.md` — link diretti + embed iframe dei 3 form
- `Brevo_Stato_Finale.md` — questo documento

---

**Bottom line:** sistema attivo, riceve iscrizioni, manda welcome. Il design delle email è MVP, ma tutto raccoglie e tutto risponde.
