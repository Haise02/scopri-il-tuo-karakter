  // ══ TRAIT DATA ══
  var TRAIT_DATA = {
    BUSSOLA: { name:"La Bussola", emoji:"🧭", desc:"Sai già cosa è giusto per te. Il problema non è mai capire cosa vuoi — è trovare contesti che non ti chiedano di scendere a compromessi su quello che per te non è negoziabile. Sei il tipo di persona di cui ci si ricorda: non per quello che dici, ma perché quello che dici e quello che fai coincidono sempre. Quando qualcosa non è allineato con i tuoi valori, lo senti subito — e non riesci a ignorarlo." },
    FUOCO: { name:"Il Fuoco", emoji:"🔥", desc:"Ti muovi per lasciare il segno. Non ti basta essere presente — vuoi contare, incidere, fare la differenza in modo che si veda. Quella spinta non è ambizione nel senso banale del termine: è la tua energia motrice. Quando la usi bene, trascini tutto e tutti con te. Il rischio è bruciare chi ti sta vicino quando il ritmo diventa solo il tuo." },
    MAPPA: { name:"La Mappa", emoji:"🗺️", desc:"Non agisci prima di capire. Per te, saltare la fase di comprensione non è velocità — è un errore che si paga dopo. Sei quello che fa le domande giuste nel momento in cui tutti danno le cose per scontate. La tua capacità di analisi è il tuo superpotere — a patto che non diventi un modo per rimandare l'azione." },
    FILO: { name:"Il Filo", emoji:"🧵", desc:"Per te le relazioni non sono il contorno del lavoro. Sono il lavoro. Leggi le persone prima ancora di leggere i progetti, e sai quando qualcuno ha bisogno di essere visto anche se non lo dice. Hai una sensibilità che ti rende indispensabile nei gruppi — e vulnerabile quando non viene riconosciuta." },
    RADICE: { name:"La Radice", emoji:"🌳", desc:"Costruisci per durare. Non ti piace il provvisorio, non ti piace l'approssimazione. Quando ti metti su qualcosa, lo fai con una cura che gli altri notano anche quando non la nominano. Il tuo contributo si vede nel tempo, non nel momento. La sfida è accettare che non tutto può essere costruito con la stessa solidità." },
    ONDA: { name:"L'Onda", emoji:"🌊", desc:"Hai bisogno di spazio per funzionare — spazio fisico, mentale, di tempo. Quando ce l'hai, sei capace di adattamenti e soluzioni che altri non vedrebbero nemmeno. Il movimento è il tuo modo di pensare. Se qualcuno prova a bloccarti in uno schema rigido, perdi energia invece di guadagnarla." },
    SCUDO: { name:"Lo Scudo", emoji:"🛡️", desc:"Tieni il campo quando gli altri vacillano. Non perché tu non senta l'imprevisto — lo senti eccome. Ma hai imparato che la reazione emotiva immediata non è sempre la risposta più utile. Questo ti rende prezioso nei momenti difficili. La sfida è non trasformare la stabilità in distacco." },
    PALCO: { name:"Il Palco", emoji:"🎭", desc:"Hai un rapporto diretto con la qualità e con il riconoscimento: non sono optional per te, sono nutrimento. Curi i dettagli che gli altri saltano, alzi il livello di quello che tocchi. Quando il tuo lavoro non viene notato, non è indifferenza quello che senti — è una frustrazione che può diventare motore o freno." },
    PONTE: { name:"Il Ponte", emoji:"🌉", desc:"Non ti basta che le cose funzionino — devono avere senso. Scegli i progetti in cui credi, i contesti in cui senti che il tuo lavoro serve a qualcosa che va oltre il risultato immediato. La tua motivazione cresce quando vedi l'impatto — e si spegne quando il lavoro diventa solo esecuzione." },
    RITMO: { name:"Il Ritmo", emoji:"🎵", desc:"Ascolti il corpo prima che la testa abbia finito di ragionare. Sai quando sei fuori ritmo — e sai che quando succede, tutto il resto ne risente. Il tuo equilibrio fisico non è un lusso — è la condizione base. Quando lo rispetti, tutto il resto fluisce. Quando lo ignori, anche le cose semplici diventano pesanti." },
    LENTE: { name:"La Lente", emoji:"🔍", desc:"Vedi le cose che gli altri non si sono fermati a guardare. La contraddizione nel ragionamento, il dato che non torna, il dettaglio che cambia tutto. Non ti accontenti di capire 'abbastanza'. Il rischio è che la ricerca di precisione diventi un modo per non chiudere mai." },
    VENTO: { name:"Il Vento", emoji:"💨", desc:"Non ti lasci definire dagli altri — né dalle aspettative, né dalle convenzioni. Cerchi il tuo modo di fare le cose non per differenziarti, ma perché credi che ci sia quasi sempre un approccio migliore di quello standard. La sfida è distinguere tra indipendenza autentica e resistenza al cambiamento." }
  };

  var TRAIT_COLORS = {
    BUSSOLA:"#0B1F3A", FUOCO:"#2F80ED", MAPPA:"#1A365D", FILO:"#2B6CB0",
    RADICE:"#065F46", ONDA:"#3182CE", SCUDO:"#4A5568", PALCO:"#A3E635",
    PONTE:"#2C7A7B", RITMO:"#553C9A", LENTE:"#2D3748", VENTO:"#38A169"
  };

  // ══ UTILITIES ══
  function decodeBase64Json(str) { try { return JSON.parse(atob(str)); } catch(e) { return null; } }
  function getUrlParam(p) { return new URLSearchParams(window.location.search).get(p); }
  function getLS(k) { try { return localStorage.getItem(k) || ''; } catch(e) { return ''; } }

  function showSuccess(msg) {
    var el = document.getElementById('success-message');
    el.textContent = msg; el.classList.remove('hidden');
    setTimeout(function(){ el.classList.add('hidden'); }, 5000);
  }

  function scrollToForm(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior:'smooth' });
  }

  function openReissModal() {
    document.getElementById('reiss-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeReissModal() {
    document.getElementById('reiss-modal').classList.remove('active');
    document.body.style.overflow = '';
  }

  // ══ INIT ══
  function initPage() {
    var encoded = getUrlParam('d');
    var quizData = { top3:['BUSSOLA','FUOCO','MAPPA'], scores:{}, sorted:[] };
    if (encoded) { var d = decodeBase64Json(encoded); if (d) quizData = d; }

    // Pre-fill form from localStorage
    var name = getLS('kQuizName');
    var email = getLS('kQuizEmail');
    var phone = getLS('kQuizPhone');
    if (name) document.getElementById('nome').value = name;
    if (email) document.getElementById('email').value = email;
    if (phone) document.getElementById('telefono').value = phone;

    renderTraitBadges(quizData.top3);
    renderTraitCards(quizData.top3);

    document.getElementById('hubspot-form').addEventListener('submit', submitForm);
    window.addEventListener('scroll', updateFloatingCta);

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Scroll reveal
    initScrollReveal();
  }

  function renderTraitBadges(traits) {
    var c = document.getElementById('traits-badges-container');
    c.innerHTML = '';
    traits.forEach(function(trait) {
      if (!TRAIT_DATA[trait]) return;
      var d = TRAIT_DATA[trait];
      var b = document.createElement('div');
      b.className = 'trait-badge';
      b.innerHTML = '<span class="trait-badge-emoji">' + d.emoji + '</span><span class="trait-badge-name">' + d.name + '</span>';
      c.appendChild(b);
    });
  }

  function renderTraitCards(traits) {
    var c = document.getElementById('traits-cards-container');
    c.innerHTML = '';
    traits.forEach(function(trait, idx) {
      if (!TRAIT_DATA[trait]) return;
      var d = TRAIT_DATA[trait];
      var color = TRAIT_COLORS[trait];
      var card = document.createElement('div');
      card.className = 'trait-card';
      card.style.setProperty('--card-color', color);
      card.style.animationDelay = (idx * 0.15) + 's';
      card.innerHTML =
        '<div class="trait-card-inner">' +
          '<div class="trait-card-header">' +
            '<div class="trait-card-emoji" style="background:' + color + ';">' + d.emoji + '</div>' +
            '<div class="trait-card-meta">' +
              '<div class="trait-card-number">Tratto ' + (idx + 1) + '</div>' +
              '<div class="trait-card-name">' + d.name + '</div>' +
            '</div>' +
          '</div>' +
          '<p class="trait-card-description">' + d.desc + '</p>' +
        '</div>';
      c.appendChild(card);
    });
  }

  function updateCountdown() {
    var target = new Date('2026-05-26T20:45:00+02:00').getTime();
    var now = Date.now();
    var diff = target - now;
    var el = document.getElementById('countdown');
    if (diff > 0) {
      var days = Math.floor(diff / 864e5);
      var hours = Math.floor((diff % 864e5) / 36e5);
      var mins = Math.floor((diff % 36e5) / 6e4);
      var secs = Math.floor((diff % 6e4) / 1000);
      el.innerHTML =
        '<span class="klab-cd-label">Inizia tra</span>' +
        '<div class="klab-cd-item"><span class="klab-cd-num">' + days + '</span><span class="klab-cd-unit">GG</span></div>' +
        '<div class="klab-cd-item"><span class="klab-cd-num">' + hours + '</span><span class="klab-cd-unit">Ore</span></div>' +
        '<div class="klab-cd-item"><span class="klab-cd-num">' + mins + '</span><span class="klab-cd-unit">Min</span></div>' +
        '<div class="klab-cd-item"><span class="klab-cd-num">' + secs + '</span><span class="klab-cd-unit">Sec</span></div>';
    } else {
      el.innerHTML = '<span class="klab-cd-label">L\'evento è in corso!</span>';
    }
  }

  function updateFloatingCta() {
    var cta = document.getElementById('floating-cta');
    var footer = document.getElementById('block-footer');
    if (!footer) return;
    if (window.scrollY + window.innerHeight > footer.offsetTop + footer.offsetHeight - 50) {
      cta.classList.add('hidden');
    } else {
      cta.classList.remove('hidden');
    }
  }

  function registerKLab() {
    var btn = document.getElementById('klab-cta-btn');
    if (btn.disabled) return;

    var name = getLS('kQuizName') || 'Partecipante';
    var email = getLS('kQuizEmail') || '';
    var phone = getLS('kQuizPhone') || '';
    var url = '/klab-registrazione/?nome=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&tel=' + encodeURIComponent(phone);

    // Success toast (green)
    var el = document.getElementById('success-message');
    el.textContent = 'Registrazione inviata! Ti contatteremo presto.';
    el.style.background = '#10B981';
    el.classList.remove('hidden');
    setTimeout(function(){ el.classList.add('hidden'); }, 5000);

    // Disable button
    btn.disabled = true;
    btn.textContent = 'GRAZIE PER ESSERTI REGISTRATO!';
    btn.style.background = 'rgba(255,255,255,0.12)';
    btn.style.color = 'rgba(255,255,255,0.4)';
    btn.style.cursor = 'default';
    btn.style.transform = 'none';
    btn.style.boxShadow = 'none';

    // window.location.href = url;
  }

  function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('telefono').value;
    localStorage.setItem('kQuizName', name);
    localStorage.setItem('kQuizEmail', email);
    localStorage.setItem('kQuizPhone', phone);
    showSuccess('Richiesta inviata! Ti contatteremo presto.');
    closeReissModal();
    document.getElementById('hubspot-form').reset();
  }

  function toggleFaq(el) { el.parentElement.classList.toggle('active'); }

  // Scroll reveal observer
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.rv').forEach(function(el) { obs.observe(el); });
  }

  // Close modal on overlay click
  document.addEventListener('click', function(e) {
    if (e.target.id === 'reiss-modal') closeReissModal();
  });
  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeReissModal();
  });

  // ══ BOOT ══
  document.addEventListener('DOMContentLoaded', initPage);
