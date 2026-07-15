# Brevo — Copy Welcome Email Pronto da Incollare

> **Stato:** Le 3 automation Welcome (K-Lab, Quiz, Reiss) sono **attive** e usano il **logo Karakter** ufficiale (caricato e applicato via Brand Library). Manca solo il body custom, che è scritto qui sotto pronto da incollare.
>
> **Tempo necessario per applicare tutto:** ~15 minuti (5 per email).

---

## Come applicare (procedura uguale per le 3 email)

1. Brevo → **Automazioni** → click su `Welcome K-Lab` (o Quiz, o Reiss)
2. Click sul blocco grande verde **"Invia un'email"** (in basso del flow)
3. Click sul bottone **"Modifica"** nel pannello che si apre a sinistra
4. Nell'editor visuale che si apre:
   - **Click sul titolo** "Hey {{NOME}}, benvenuto a bordo!" → cancella e incolla il **TITOLO** indicato sotto. Tieni il `{{contact.NOME}}` se vuoi personalizzare con nome
   - **Click sull'immagine placeholder grigia** → click sull'icona cestino rossa per eliminarla (o sostituiscila con una foto di Marco e Alessandra)
   - **Click sul testo "Siamo entusiasti..."** → seleziona tutto (Ctrl+A) → incolla il **BODY** indicato sotto
   - **Click sul bottone "Scopri i nostri articoli"** → cambia testo nel **CTA TEXT** indicato + cambia link nel **CTA URL**
   - **Click sul testo finale "Siamo qui per rendere..."** → seleziona tutto → incolla il **FOOTER MESSAGE** indicato
5. Click in alto a destra **"Usa questo design nelle automazioni"**
6. Click su **"Salva"** nel pannello automation

---

## Colori brand da usare (incolla negli editor di colore quando serve)

| Nome | HEX | Quando usarlo |
|---|---|---|
| Blu Navy | `#0B1F3A` | Titoli, testo importante, sfondo bottone |
| Azzurro | `#2F80ED` | Link, accenti, evidenziazioni secondarie |
| Lime | `#A3E635` | Highlight chiave, badge "Gratuito", sfondo CTA secondaria |
| Grigio Ghiaccio | `#D9E1E8` | Sfondi sezioni, bordi |

**Per cambiare colore di un testo nell'editor Brevo:** seleziona il testo → barra strumenti in alto → icona "A" colorata → inserisci HEX.

---

# EMAIL 1 — Welcome K-Lab

**Mittente:** Karakter Coaching School `<info@karakter.it>`
**Oggetto** (già impostato): `La tua iscrizione al K-Lab è confermata`
**Preheader** (da aggiungere nel campo "Testo di anteprima"): `2 serate online: 3 e 4 giugno, ore 21:00. Qui i dettagli e cosa portare.`

### TITOLO (sostituisci "Hey NOME, benvenuto a bordo!")

```
Ci vediamo al K-Lab, {{contact.NOME}}.
```

**Colore titolo:** Blu Navy `#0B1F3A` / **Allineamento:** Centro

### BODY (sostituisci "Siamo entusiasti...")

```
La tua iscrizione è confermata.
Il K-Lab è in diretta su Zoom — 3 e 4 giugno, ore 21:00.

────────────────

COSA VEDREMO INSIEME

📅 Day 1 — Martedì 3 giugno, 21:00
Le prime 3 delle 5 competenze chiave del coaching professionale, con un esercizio lab dal vivo per sperimentare il sistema dei Tratti Karakter.

📅 Day 2 — Mercoledì 4 giugno, 21:00
Le altre 2 competenze, inclusa "la competenza invisibile" — quella che fa la differenza tra un coach e un coach certificato.

Conducono: Marco Angeletti & Alessandra Abbattista

────────────────

COSA FARE ORA

→ Salva questa email: il link Zoom te lo mandiamo il giorno stesso, qualche ora prima
→ Segnati le date in calendario
→ Arriva 5 minuti prima e con le cuffie: il K-Lab è interattivo, useremo chat ed esercizi rapidi

Se non puoi esserci in diretta, partecipa comunque: chi è iscritto riceve il link al rewatch riservato il giorno dopo (non comunicato pubblicamente).
```

**Formattazione consigliata:**
- "Cosa vedremo insieme" e "Cosa fare ora" → **grassetto + Blu Navy**
- "Day 1" e "Day 2" → **grassetto**
- Le frecce `→` → puoi sostituirle con bullet point se preferisci

### CTA TEXT (cambia "Scopri i nostri articoli")

```
SALVA LE DATE IN CALENDARIO
```

**Colore bottone:** Blu Navy `#0B1F3A` / **Colore testo bottone:** bianco
**URL CTA:** lascia vuoto o metti `https://calendar.google.com/` (link al tuo evento Google Calendar quando creato)

### FOOTER MESSAGE (sostituisci "Siamo qui per rendere...")

```
Ci vediamo il 3 giugno.

Marco & Alessandra
Karakter Coaching School

P.S. Se hai un amico o un collega a cui può servire, condividi questo link — le iscrizioni sono ancora aperte: [LINK FORM K-LAB]
```

---

# EMAIL 2 — Welcome Quiz

**Mittente:** Karakter Coaching School `<info@karakter.it>`
**Oggetto** (già impostato): `Il tuo profilo Karakter è pronto`
**Preheader:** `I 3 Tratti che ti definiscono — apri per vedere il tuo risultato`

### TITOLO

```
Il tuo profilo è pronto, {{contact.NOME}}.
```

**Colore:** Blu Navy `#0B1F3A` / **Allineamento:** Centro

### BODY

```
Grazie per aver fatto il quiz "Scopri il tuo Karakter".

Ogni persona è un Karakter — un mix unico di motivazioni, valori e modi di stare nel mondo. Il quiz prende le 12 dimensioni del nostro modello (i 12 Tratti) e ti restituisce i 3 che oggi ti definiscono di più.

────────────────

I TUOI 3 TRATTI KARAKTER

Vai al tuo risultato completo cliccando il bottone qui sotto.
Ci troverai una scheda dettagliata per ciascuno dei tre tratti — cosa significano, come si manifestano, dove ti fanno brillare e dove ti fanno inciampare.

────────────────

E ADESSO?

I tratti che ti escono non sono un'etichetta: sono uno specchio.
Servono per:

→ riconoscere come ti muovi quando le cose vanno bene
→ vedere dove tendi a inciampare quando si fanno difficili
→ capire cosa amplifica la tua energia e cosa la disperde

Se ti incuriosisce esplorare più a fondo, abbiamo qualcosa che fa per te:

Il K-Lab — 3 e 4 giugno, ore 21:00.
Due serate online gratuite con Marco Angeletti e Alessandra Abbattista, in cui mostriamo le 5 competenze chiave del coaching professionale usando proprio il sistema dei Tratti Karakter come mappa di lavoro.

È pensato per chi vuole capire cosa significa, in concreto, trasformare le proprie capacità in una professione certificata.
```

**Formattazione:**
- "I TUOI 3 TRATTI KARAKTER", "E ADESSO?", "Il K-Lab" → **grassetto + Blu Navy**
- "K-Lab" e date → puoi evidenziare in Azzurro `#2F80ED`

### CTA TEXT

```
VEDI IL TUO RISULTATO COMPLETO
```

**Colore bottone:** Blu Navy `#0B1F3A`
**URL CTA:** [URL della Thank You Page del quiz con i 3 tratti, in btoa] — chiedimi quando hai l'URL esatto

### Bottone secondario (aggiungere se possibile, opzionale)

Sotto al bottone principale, aggiungere un secondo bottone:

```
PRENOTA IL POSTO AL K-LAB
```

**Colore bottone:** Lime `#A3E635` / **Testo:** Blu Navy `#0B1F3A`
**URL:** [URL form K-Lab da Brevo_Embeds_Live.md]

### FOOTER MESSAGE

```
A presto,
Marco & Alessandra
Karakter Coaching School
```

---

# EMAIL 3 — Welcome Reiss

**Mittente:** Karakter Coaching School `<info@karakter.it>`
**Oggetto** (già impostato): `Il Reiss Motivation Profile — come funziona`
**Preheader:** `Te lo spiego in 4 punti. Ti contattiamo entro 24h.`

### TITOLO

```
Il Reiss — in 4 punti, {{contact.NOME}}.
```

**Colore:** Blu Navy `#0B1F3A` / **Allineamento:** Centro

### BODY

```
Grazie per aver chiesto informazioni sul Reiss Motivation Profile.
Te lo presento velocemente, così quando ti chiameremo sei già dentro al discorso.

────────────────

1 — COS'È DAVVERO

Il Reiss misura 16 motivazioni fondamentali — non 4 macro-categorie come gli strumenti più diffusi. È nato dal lavoro del Prof. Steven Reiss alla Ohio State University, validato scientificamente su decine di migliaia di soggetti.

In Italia è integrato in un percorso di coaching solo da Karakter.

2 — COSA SCOPRI

Quali sono le motivazioni che ti spingono davvero (e non solo quelle che pensi).
Dove la tua vita personale e professionale è allineata, e dove stai sprecando energia su obiettivi che non ti appartengono.

3 — COME SI SVOLGE

→ Compili online un questionario (~25 minuti)
→ Ricevi un report completo del tuo profilo
→ Hai una sessione di restituzione di 1 ora con un Master Coach Karakter certificato all'uso del Reiss

4 — INVESTIMENTO

300€ + IVA, restituzione inclusa.

────────────────

COSA SUCCEDE ORA

Ti contattiamo entro 24h (lun-ven) per:

→ rispondere alle tue domande
→ capire se il Reiss è la cosa giusta per te in questo momento
→ fissare la sessione di restituzione

Se nel frattempo hai domande, rispondi a questa email.
```

**Formattazione:**
- "1 — COS'È DAVVERO", "2 — COSA SCOPRI", "3 — COME SI SVOLGE", "4 — INVESTIMENTO" e "COSA SUCCEDE ORA" → **grassetto + Blu Navy `#0B1F3A`** (questi sono i "doppi livelli di lettura" per chi scorre veloce)
- "300€ + IVA, restituzione inclusa." → **grassetto + Azzurro `#2F80ED`**
- "Karakter" nel punto 1 → puoi mettere in Blu Navy grassetto

### CTA TEXT (opzionale, puoi anche rimuovere il bottone)

```
RISPONDI A QUESTA EMAIL CON LE TUE DOMANDE
```

**Colore bottone:** Blu Navy `#0B1F3A`
**URL:** `mailto:info@karakter.it?subject=Domande%20sul%20Reiss%20Motivation%20Profile`

### FOOTER MESSAGE

```
A presto,
Marco & Alessandra
Karakter Coaching School
```

---

# Note tecniche di Brevo

**Variabili dinamiche disponibili:**
- `{{contact.NOME}}` — nome del contatto
- `{{contact.COGNOME}}` — cognome
- `{{contact.EMAIL}}` — email
- `{{contact.SMS}}` — telefono con prefisso

Per inserirle nell'editor: in barra strumenti del testo, click sull'icona `{}` → seleziona attributo. Brevo le sostituisce automaticamente al momento dell'invio.

**Se vuoi sostituire l'immagine placeholder grigia con una foto di Marco e Alessandra:**
1. Click sull'immagine placeholder
2. Pannello sinistro → "Cambia immagine"
3. Carica la foto (jpg/png, max 2MB raccomandato)
4. La foto si applica automaticamente

**Per cambiare lo sfondo dell'email:**
- Pannello sinistro → tab **"Stile"** → "Sfondo del modulo" → applica `#D9E1E8` (grigio ghiaccio) per uno sfondo brand-coerente
- Oppure lascia bianco per massima leggibilità

---

# Riepilogo finale stato sistema Brevo Karakter

| Componente | Stato | Note |
|---|---|---|
| Dominio karakter.it autenticato | ✅ | DKIM + DMARC su Register.it |
| Sender info@karakter.it | ✅ | Verificato |
| Logo Karakter brand | ✅ | Caricato e applicato a tutte le email |
| Colore Blu Navy brand | ✅ | Salvato in Brand Library |
| Form K-Lab | ✅ Live | Embed pronto in `Brevo_Embeds_Live.md` |
| Form Quiz | ✅ Live | Embed pronto |
| Form Reiss | ✅ Live | Embed pronto |
| Automation Welcome K-Lab | ✅ Attiva | Body da personalizzare con copy sopra |
| Automation Welcome Quiz | ✅ Attiva | Body da personalizzare con copy sopra |
| Automation Welcome Reiss | ✅ Attiva | Body da personalizzare con copy sopra |

**Cosa funziona già adesso senza altre azioni:**
- Compili un form → entri nella lista → ricevi welcome email con logo Karakter (body generico ma logo+oggetto+brand corretti)

**Cosa richiede i tuoi 15 minuti:**
- Sostituire body delle 3 email con il copy custom qui sopra

---

# File del progetto Brevo

Tutti in `C:\Users\nilga\Desktop\Progetti\Karakter\`:
- `Brevo_Setup_Operativo.md` — prima versione copy + istruzioni setup
- `Brevo_Embeds_Live.md` — link diretti + embed dei 3 form
- `Brevo_Stato_Finale.md` — riepilogo stato setup
- `Brevo_Copy_Email_Pronto.md` ← **questo file, il più aggiornato per le email**
