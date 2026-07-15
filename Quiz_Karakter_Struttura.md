# Quiz "Scopri il tuo Karakter" — Struttura tecnica

> Documento di specifica per sviluppo HTML/landing page.  
> Versione: 2.0 — 16 domande, scala Likert 1–6

---

## Formato generale

Il quiz è composto da **16 affermazioni** in prima persona.  
L'utente indica quanto ogni affermazione lo descrive su una scala da 1 a 6.

**Non ci sono risposte giuste o sbagliate.**  
Il risultato finale mostra i 3 Tratti Karakter con il punteggio normalizzato più alto.

---

## Scala di risposta (Likert 1–6)

Scala a 6 punti — nessun punto neutro, forza una direzione.

| Valore | Label breve | Label estesa |
|--------|-------------|--------------|
| 1 | Per niente | Non mi descrive per niente |
| 2 | Quasi mai | Mi capita raramente |
| 3 | A volte | Mi capita qualche volta |
| 4 | Spesso | Mi ci ritrovo spesso |
| 5 | Quasi sempre | È quasi sempre così per me |
| 6 | Sempre | Mi descrive perfettamente |

**UX consigliata:** slider orizzontale o 6 bottoni affiancati con label agli estremi ("Per niente" / "Perfettamente").

---

## Le 16 affermazioni

Ogni affermazione è collegata a un Tratto Karakter.  
4 tratti hanno 2 affermazioni (indicate con `×2`), 8 tratti ne hanno 1 (`×1`).

---

### Blocco A — Affermazioni 1–8

**1.** Fatico a ignorare qualcosa che sento sbagliato, anche quando intorno a me tutti tacciono.
→ **Tratto: BUSSOLA** `×2`

---

**2.** Ho bisogno di capire davvero come funziona una cosa prima di muovermi.
→ **Tratto: MAPPA** `×1`

---

**3.** Quando credo in un obiettivo, sono disposto/a a metterci tutto — anche più di quanto sarebbe ragionevole.
→ **Tratto: FUOCO** `×2`

---

**4.** Mi accorgo quasi subito quando qualcuno nel gruppo sta male, anche se non lo dice.
→ **Tratto: FILO** `×1`

---

**5.** Preferisco costruire qualcosa che dura piuttosto che andare veloce e aggiustare dopo.
→ **Tratto: RADICE** `×2`

---

**6.** Ho bisogno di muovermi fisicamente — camminare, uscire, staccare — per pensare meglio.
→ **Tratto: ONDA** `×1`

---

**7.** Nelle situazioni di tensione o crisi, tendo ad abbassare la voce mentre gli altri la alzano.
→ **Tratto: SCUDO** `×1`

---

**8.** Ci tengo a come si presenta il mio lavoro, non solo a cosa contiene.
→ **Tratto: PALCO** `×1`

---

### Blocco B — Affermazioni 9–16

**9.** Quello che faccio deve avere un impatto che va oltre il mio vantaggio personale.
→ **Tratto: PONTE** `×1`

---

**10.** Il mio corpo mi dice con precisione quando sono in forma e quando no — e mi fido di quei segnali.
→ **Tratto: RITMO** `×1`

---

**11.** Trovo spesso l'errore nel ragionamento che tutti gli altri hanno già dato per buono.
→ **Tratto: LENTE** `×1`

---

**12.** Non riesco a seguire una regola o una procedura se non capisco perché esiste.
→ **Tratto: VENTO** `×2`

---

**13.** Prima di accettare un impegno importante, mi chiedo se è davvero coerente con quello in cui credo.
→ **Tratto: BUSSOLA** `×2`

---

**14.** Ricordo a lungo quando qualcuno non ha riconosciuto il mio contributo — non per rancore, ma come dato.
→ **Tratto: FUOCO** `×2`

---

**15.** Faccio fatica a buttare via quello che ho costruito — un progetto, una relazione, un metodo — senza un motivo solido.
→ **Tratto: RADICE** `×2`

---

**16.** Quasi sempre trovo un modo diverso da quello standard per fare le cose — e spesso funziona meglio.
→ **Tratto: VENTO** `×2`

---

## Logica di scoring

### Tratti e numero di affermazioni

| Tratto | Affermazioni | Max grezzo |
|--------|-------------|------------|
| LA BUSSOLA | 1, 13 | 12 |
| IL FUOCO | 3, 14 | 12 |
| LA RADICE | 5, 15 | 12 |
| IL VENTO | 12, 16 | 12 |
| LA MAPPA | 2 | 6 |
| IL FILO | 4 | 6 |
| L'ONDA | 6 | 6 |
| LO SCUDO | 7 | 6 |
| IL PALCO | 8 | 6 |
| IL PONTE | 9 | 6 |
| IL RITMO | 10 | 6 |
| LA LENTE | 11 | 6 |

### Formula di normalizzazione

Per ogni tratto, calcola la **media** delle affermazioni collegate:

```
score_tratto = somma(risposte) / numero_affermazioni
```

Questo porta tutti i tratti su una scala 1–6, indipendentemente da quante affermazioni hanno.

**Esempio:**
- BUSSOLA: risposte 5 e 4 → score = (5+4)/2 = **4.5**
- MAPPA: risposta 6 → score = 6/1 = **6.0**
- RITMO: risposta 3 → score = 3/1 = **3.0**

### Output finale

Ordina i 12 tratti per score decrescente.  
**I 3 con score più alto = Tratti dominanti dell'utente.**

In caso di parità esatta tra due tratti, favorisce quello che ha più affermazioni (×2 > ×1).

---

## Copy UI — testi interfaccia

### Intro (pre-quiz)
> **Scopri il tuo Karakter.**  
> 16 affermazioni. 3 minuti. Nessuna risposta giusta.  
> Indica quanto ogni frase ti descrive — e scopri quali forze motivazionali ti guidano davvero.

### Label pulsante start
> Inizia il quiz →

### Istruzione sopra ogni affermazione
> *Quanto ti descrive questa affermazione?*

### Label scala (estremi)
- Sinistra: `Per niente`
- Destra: `Perfettamente`

### Pulsante avanzamento
> Continua →  *(attivo solo dopo aver selezionato un valore)*

### Messaggio fine quiz (loading risultati)
> *Stiamo elaborando il tuo profilo Karakter…*

### Copy risultati
> **I tuoi 3 Tratti dominanti:**  
> [NOME TRATTO 1] · [NOME TRATTO 2] · [NOME TRATTO 3]  
>
> Questi sono i motori che guidano le tue scelte, il tuo modo di lavorare, le tue relazioni.  
> Vuoi capire come usarli meglio? →  *[CTA verso karakter.it]*

---

## Note per il developer

- **Ordine affermazioni:** randomizzare l'ordine dei due blocchi (A e B) è opzionale, ma non randomizzare affermazioni dello stesso tratto (potrebbero sembrare ripetitive in sequenza).
- **Salvataggio progressivo:** salvare in localStorage per non perdere il progresso se si cambia tab.
- **Mobile first:** la scala a 6 bottoni deve essere tappabile comodamente — minimo 44px per bottone.
- **Animazioni:** transizione slide tra affermazioni (non reload di pagina).
- **Progress bar:** visibile in alto, avanza 1/16 per ogni risposta.
- **Nessun "indietro":** semplifica l'esperienza e riduce il rimuginio; l'utente non può tornare alla domanda precedente.
- **Tempo stimato:** mostrare "~3 minuti" nell'intro aumenta il completion rate.

---

*Struttura quiz — Karakter Coaching School — karakter.it — uso riservato*
