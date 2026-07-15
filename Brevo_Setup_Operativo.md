# Brevo — Setup Operativo Form & Welcome Email

> Documento di lavoro: contiene il copy dei 3 form, il copy delle 3 welcome email e le istruzioni step-by-step per completare la configurazione su Brevo (Karakter Coaching School).

**Account Brevo:** Karakter Coaching School
**Dominio mittente:** `info@karakter.it` (autenticato DKIM + DMARC, sender già verificato)
**Liste create:**
- `#5` Iscritti K-Lab
- `#6` Quiz Karakter
- `#7` Lead Reiss

**Schema campi (uguale per i 3 form):**
1. Nome → attributo `NOME`
2. Cognome → attributo `COGNOME` (se non esiste, creare: "Crea attributo" → "Cognome" → tipo "Testo")
3. Email → già presente di default
4. Telefono → attributo `SMS` (richiede prefisso paese) oppure crearne uno nuovo "TELEFONO" tipo "Testo"

---

## FORM 1 — K-Lab (già aperto in editor)

### Copy
| Campo | Testo |
|---|---|
| Titolo | Iscriviti gratis al K-Lab |
| Sottotitolo | Le 5 Competenze Chiave per trasformare le tue capacità in una professione certificata. 2 serate online: 3 e 4 giugno, ore 21:00. |
| Label Email | Email |
| Placeholder Email | la-tua-email@esempio.it |
| CTA bottone | PRENOTA IL POSTO |

### Messaggio post-iscrizione (success message)
> Iscrizione confermata. Tra pochi minuti ricevi via email tutti i dettagli per partecipare al K-Lab. Ci vediamo il 3 giugno alle 21:00.

### Configurazione (sezioni successive dell'editor)
- **Iscrivi i nuovi contatti a queste liste**: selezionare `Iscritti K-Lab` (#5)
- **Conferma email**: scegliere "Conferma semplice" (no double opt-in per non rallentare iscrizione webinar)
- **Reindirizzamento**: nessuno (mostra messaggio di conferma inline)

### Embed code
A fine setup, sezione "Condividi" → copiare il codice HTML iframe e incollarlo nella pagina karakter.it dove serve.

---

## FORM 2 — Quiz Karakter (da creare nuovo)

### Setup base
- **Nome modulo**: `Quiz Karakter — Risultato`
- **Tipo**: Pagina intera/integrato

### Copy
| Campo | Testo |
|---|---|
| Titolo | Ricevi il tuo profilo Karakter |
| Sottotitolo | Inserisci i tuoi dati per ricevere via email il risultato completo del quiz: i 3 Tratti Karakter che ti definiscono. |
| CTA bottone | SCOPRI IL TUO PROFILO |

### Messaggio post-iscrizione
> Grazie. Stiamo elaborando il tuo profilo Karakter: tra pochi minuti lo ricevi nella tua email.

### Configurazione
- **Lista destinazione**: `Quiz Karakter` (#6)
- **Conferma email**: Conferma semplice
- **Reindirizzamento**: a Thank You Page del quiz (URL della TYP esistente con i 3 tratti)

---

## FORM 3 — Richiesta Info Reiss (da creare nuovo)

### Setup base
- **Nome modulo**: `Reiss — Richiesta informazioni`
- **Tipo**: Pagina intera/integrato

### Copy
| Campo | Testo |
|---|---|
| Titolo | Scopri il tuo Reiss Motivation Profile |
| Sottotitolo | Il test che misura 16 motivazioni fondamentali — unico in Italia integrato in un percorso di coaching. Lascia i tuoi dati: ti contattiamo entro 24h per spiegarti come funziona e fissare la restituzione. |
| CTA bottone | RICHIEDI INFO |

### Messaggio post-iscrizione
> Richiesta ricevuta. Ti ricontattiamo entro 24h dal team Karakter. Intanto controlla l'email: ti abbiamo già inviato una panoramica del test.

### Configurazione
- **Lista destinazione**: `Lead Reiss` (#7)
- **Conferma email**: Conferma semplice

---

# Welcome Email — Configurazione automation

Per ogni form bisogna creare un'**Automation Brevo** che si triggera quando un contatto entra nella lista corrispondente e gli manda la welcome email.

**Percorso:** `Brevo → Automazioni → Crea automazione → Punto di partenza: "Contatto aggiunto a una lista"`

**Mittente da usare in tutte:** `Karakter Coaching School <info@karakter.it>`

---

## WELCOME 1 — K-Lab

**Trigger**: contatto aggiunto a lista `Iscritti K-Lab` (#5)

**Da**: Karakter Coaching School `<info@karakter.it>`
**A**: `{{ contact.EMAIL }}`
**Oggetto**: La tua iscrizione al K-Lab è confermata
**Preheader**: 2 serate online il 3 e 4 giugno, ore 21:00 — qui dentro il link e il programma

### Body (HTML/visual editor)

```
Ciao {{ contact.NOME }},

la tua iscrizione al K-Lab è confermata. Ci vediamo online il **3 e 4 giugno alle 21:00**, due serate da circa 90 minuti.

Ecco cosa vedremo insieme:

**Day 1 — 3 giugno, ore 21:00**
Le prime 3 delle 5 competenze chiave del coaching professionale, più un esercizio lab dal vivo per sperimentare il sistema dei Tratti Karakter.

**Day 2 — 4 giugno, ore 21:00**
Le altre 2 competenze, inclusa "la competenza invisibile" che fa la differenza tra un coach e un coach certificato.

---

**Come partecipare**

Il link Zoom te lo mandiamo il giorno stesso, qualche ora prima. Salvati questa email così non la perdi.

Se non puoi esserci in diretta, partecipa comunque: nessun replay pubblico, ma chi è iscritto riceve il link al rewatch riservato il giorno dopo.

---

**Una cosa che ti chiediamo**

Arriva 5 minuti prima e con cuffie. Le serate sono interattive, useremo la chat e qualche esercizio rapido. Il K-Lab funziona meglio se ti dai il permesso di esserci davvero.

Ci vediamo il 3 giugno.

Marco Angeletti & Alessandra Abbattista
Karakter Coaching School

PS — Se hai un amico o un collega a cui può servire, mandagli il link [URL form K-Lab]. Le iscrizioni sono ancora aperte.
```

### Note tecniche
- Personalizzare `{{ contact.NOME }}` con il nome che vede nei contatti Brevo
- Cambiare link form K-Lab quando ottieni l'URL pubblico (da sezione "Condividi" del form)

---

## WELCOME 2 — Quiz Karakter

**Trigger**: contatto aggiunto a lista `Quiz Karakter` (#6)

**Da**: Karakter Coaching School `<info@karakter.it>`
**A**: `{{ contact.EMAIL }}`
**Oggetto**: Il tuo profilo Karakter è pronto
**Preheader**: I 3 Tratti che ti definiscono — apri per vedere il tuo risultato

### Body

```
Ciao {{ contact.NOME }},

grazie per aver fatto il quiz "Scopri il tuo Karakter".

Ogni persona è un Karakter — un mix unico di motivazioni, valori e modi di stare nel mondo. Il quiz prende le 12 dimensioni del nostro modello (i 12 Tratti) e ti restituisce i 3 che oggi ti definiscono di più.

**Vai al tuo risultato completo qui:**
→ [Link alla TYP del quiz con risultato in btoa, o link generico al risultato]

---

**Cosa fare con il tuo profilo**

I 3 tratti che ti escono non sono un'etichetta: sono uno specchio. Servono per:
- riconoscere come ti muovi quando le cose vanno bene
- vedere dove tendi a inciampare quando le cose si fanno difficili
- capire cosa amplifica davvero la tua energia e cosa la disperde

Se ti incuriosisce esplorare più a fondo questi temi, abbiamo qualcosa che fa per te.

---

**Il K-Lab — 3 e 4 giugno, ore 21:00**

Due serate online gratuite in cui Marco Angeletti e Alessandra Abbattista mostrano le 5 competenze chiave del coaching professionale, usando proprio il sistema dei Tratti Karakter come mappa di lavoro.

È pensato per chi vuole capire cosa significa, in concreto, trasformare le proprie capacità in una professione certificata.

→ [PRENOTA IL POSTO AL K-LAB] (link al form K-Lab)

---

A presto,
Marco Angeletti & Alessandra Abbattista
Karakter Coaching School
```

### Note
- Per inviare il risultato dinamico con i 3 tratti calcolati, in futuro: passare i 3 tratti come attributi del contatto (es. `TRATTO_1`, `TRATTO_2`, `TRATTO_3`) e usarli con `{{ contact.TRATTO_1 }}` nel body. Per ora link a TYP.

---

## WELCOME 3 — Reiss

**Trigger**: contatto aggiunto a lista `Lead Reiss` (#7)

**Da**: Karakter Coaching School `<info@karakter.it>`
**A**: `{{ contact.EMAIL }}`
**Oggetto**: Il Reiss Motivation Profile — come funziona
**Preheader**: Ti spiego cos'è, quanto dura, cosa cambia. Ti contattiamo entro 24h.

### Body

```
Ciao {{ contact.NOME }},

grazie per aver chiesto informazioni sul Reiss Motivation Profile.

Te lo presento in 4 punti, così quando ti chiamiamo sei già dentro il discorso.

**1. Cos'è davvero**
Il Reiss misura 16 motivazioni fondamentali — non 4 macro-categorie come gli strumenti più diffusi. È nato dal lavoro del Prof. Steven Reiss alla Ohio State University, validato su decine di migliaia di soggetti. È uno dei pochissimi test motivazionali con base scientifica solida.

**2. Cosa scopri**
Quali sono le motivazioni che ti spingono davvero (e non solo quelle che pensi). Dove la tua vita personale e professionale è allineata, e dove invece stai sprecando energia su obiettivi che non ti appartengono.

**3. Come si svolge**
- Compili online un questionario (circa 25 minuti)
- Ricevi un report completo del tuo profilo
- Hai una **sessione di restituzione di 1h** con un Master Coach Karakter certificato all'uso del Reiss

**4. Investimento**
300€ + IVA, restituzione inclusa.

---

**Cosa succede ora**

Ti contattiamo entro 24h (lun-ven) per:
- rispondere alle tue domande
- capire se il Reiss è la cosa giusta per te in questo momento
- fissare la sessione di restituzione

Se nel frattempo hai domande, rispondi a questa email.

A presto,
Marco Angeletti & Alessandra Abbattista
Karakter Coaching School
```

---

# Checklist completamento setup

**Form (per ognuno dei 3):**
- [ ] Titolo + sottotitolo inseriti
- [ ] 4 campi presenti (Nome, Cognome, Email, Telefono)
- [ ] CTA bottone customizzata
- [ ] Lista di destinazione collegata
- [ ] Messaggio di conferma inline impostato
- [ ] Form "Pubblicato" (status verde)
- [ ] Embed code copiato e inserito su karakter.it

**Welcome email (per ognuna delle 3):**
- [ ] Automazione creata in `Automazioni → Crea`
- [ ] Trigger: "Contatto aggiunto alla lista [X]"
- [ ] Step: "Invia un'email" → con il template scritto sopra
- [ ] Mittente: Karakter Coaching School <info@karakter.it>
- [ ] Oggetto + preheader inseriti
- [ ] Variabili dinamiche `{{ contact.NOME }}` testate
- [ ] Automazione attivata (toggle on)

**Test end-to-end (per ognuno):**
- [ ] Compilare il form con una tua email di test
- [ ] Verificare arrivo della welcome entro 1-2 minuti
- [ ] Verificare che il contatto sia nella lista corretta in Brevo
- [ ] Verificare che il nome venga personalizzato correttamente

---

# Note finali

**Da fare separatamente:**
- SPF: aggiornare il record TXT esistente su Register.it includendo Brevo. Cambiare da `v=spf1 include:spf.webapps.net ~all` a `v=spf1 include:spf.webapps.net include:spf.brevo.com ~all`. Migliora deliverability ma non bloccante.
- Welcome Quiz dinamica: per inviare i 3 tratti calcolati via email serve passare i risultati del quiz come attributi del contatto (es. via webhook o integrazione custom). Per ora la mail rimanda alla TYP.
- Pulizia: rimuovere `karakter.it` dall'altro account Brevo (quello sbagliato del primo tentativo).
