# Riepilogo Match Zoom ↔ CRM Brevo

## Dati di partenza
- **Riunione 03/06/2026**: 42 partecipanti unici (esclusi host e duplicati di rientro)
- **Riunione 04/06/2026**: 33 partecipanti unici
- **Partecipanti unici totali (combinati)**: ~57
- **Contatti totali estratti dal CRM Brevo**: 563

## Risultati match

### Match ALTA confidenza (nome+cognome combaciano): 27
Persone con identità certa nel CRM. Pronti per follow-up mirato.

### Match MEDIA confidenza (solo nome combacia): 7
Da verificare manualmente — possibile match ma cognome non riportato in CRM.

### Match DA_VERIFICARE (nome generico con multiple corrispondenze): 7 partecipanti
- `chiara` → 11 candidati Chiara in CRM
- `Francesca` → 15+ candidati Francesca
- `elena` → 10 candidati Elena (escluso Elena Tanasa già matchato)
- `Ilaria` → 2 candidati
- `Cristina` → 5 candidati
- `Roberta` → 3 candidati
- `Emanuela coach` → 2 candidati

### NON_TROVATO nel CRM: 12 partecipanti
- Gianluca Pes
- Dr Luca Vitale
- Patrizia Trentani
- Veronica Larosa
- Sara Ferrantini
- maria grazia Falbo
- Mari Mari
- Patrizia Manuela Rottigni
- roberto gamalerio c c lombardia
- giulia sarda
- Elena Andruta Cristea
- Andrea Bortone

## Stima conversione Zoom → CRM
- **~28 partecipanti** sono **certamente** già nel tuo CRM
- **~7 partecipanti** sono **probabilmente** nel CRM ma da verificare il nome
- **~7 partecipanti hanno nome troppo generico** per identificarli univocamente (multipli match)
- **~12 partecipanti NON sono nel tuo CRM** → questi sono i lead nuovi da aggiungere

## Note metodologiche
- Match basato su normalizzazione (lowercase, rimozione accenti)
- Doppio passaggio: matching strict (token-based) + permissive (substring su email local-part)
- I "DA_VERIFICARE" richiedono input umano: chi è "Chiara" che ha partecipato? Confrontare con timing/email se disponibili.
- Per chi è "NON_TROVATO" suggerisco import nel CRM con tag "Zoom_03_06_2026" o "Zoom_04_06_2026"

## Output file
- `partecipanti_zoom_match_crm_brevo.csv` — tabella completa con tutti i match
