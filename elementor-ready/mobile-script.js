/* ══ NAV SCROLL ══ */
(function(){
  var nav=document.getElementById('k-nav'),last=0;
  window.addEventListener('scroll',function(){
    var y=window.scrollY||window.pageYOffset;
    if(y>80)nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
    last=y;
  },{passive:true});
})();

/* ══ SCROLL REVEAL ══ */
(function(){
  var els=document.querySelectorAll('.rv');
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);}
    });
  },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(el){obs.observe(el);});
})();

/* ══ HERO TYPEWRITER ══ */
(function(){
  var phrases=["Qual è il mio tratto dominante?","Come prendo le decisioni importanti?","Perché faccio quello che faccio?","Cosa mi spinge nei momenti difficili?"];
  var el=document.getElementById('hero-typewriter');
  if(!el)return;
  var pi=0,ci=0,deleting=false,wait=0;
  function tick(){
    if(wait>0){var w=wait;wait=0;setTimeout(tick,w);return;}
    var phrase=phrases[pi];
    if(!deleting){
      el.textContent=phrase.substring(0,ci+1);ci++;
      if(ci>=phrase.length){deleting=true;wait=2000;}
    }else{
      el.textContent=phrase.substring(0,ci-1);ci--;
      if(ci<=0){deleting=false;pi=(pi+1)%phrases.length;wait=500;}
    }
    setTimeout(tick,deleting?30:55);
  }
  setTimeout(tick,800);
})();

/* ══ SMOOTH SCROLL NAV ══ */
document.querySelectorAll('.k-nav-links a').forEach(function(a){
  a.addEventListener('click',function(e){
    e.preventDefault();
    var t=document.querySelector(this.getAttribute('href'));
    if(t)t.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

/* ══ FAQ ══ */
function toggleFaq(el){
  var item=el.closest('.faq-item');
  var wasOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(function(f){f.classList.remove('open');});
  if(!wasOpen)item.classList.add('open');
}
function filterFaq(cat,btn){
  document.querySelectorAll('.faq-tab').forEach(function(t){t.classList.remove('active');});
  btn.classList.add('active');
  document.querySelectorAll('.faq-item').forEach(function(item){
    if(cat==='all'||item.dataset.cat===cat){item.style.display='';}
    else{item.style.display='none';}
  });
}

/* ══ WIDGET BAR ANIMATION ══ */
(function(){
  var bars=document.querySelectorAll('.wr-bar-fill');
  if(!bars.length)return;
  setInterval(function(){
    bars.forEach(function(b){
      var w=Math.floor(Math.random()*55)+40;
      b.style.width=w+'%';
      b.style.transition='width .8s cubic-bezier(.16,1,.3,1)';
    });
  },1000);
})();

/* ══ COMMAND PALETTE CYCLE ══ */
(function(){
  var items=document.querySelectorAll('.widget-cmd-item');
  if(!items.length)return;
  var idx=0;
  setInterval(function(){
    items.forEach(function(it){it.classList.remove('active');});
    idx=(idx+1)%items.length;
    items[idx].classList.add('active');
  },1500);
})();

/* ══ FALLING OBJECTS ══ */
(function(){
  var container=document.getElementById('falling-container');
  if(!container)return;
  var items=[];
  var shapes=[
    {color:'#ffc200',pattern:'grid'},
    {color:'#c4a0e8',pattern:'plus'},
    {color:'#e8e048',pattern:'squares'},
    {color:'#6cd47e',pattern:'triangles'},
    {color:'#7ec8e3',pattern:'dots'},
    {color:'#3a3a3a',pattern:'cross'},
    {color:'#f5a623',pattern:'grid'},
    {color:'#b88be8',pattern:'plus'},
    {color:'#ffc200',pattern:'squares'},
    {color:'#6cd47e',pattern:'dots'},
    {color:'#7ec8e3',pattern:'cross'},
    {color:'#3a3a3a',pattern:'triangles'}
  ];
  function createCloverSVG(color,pattern,size){
    var r=size/2;var lr=r*0.42;
    var patId='p'+Math.random().toString(36).substr(2,6);
    var patternSVG='';
    if(pattern==='grid')patternSVG='<pattern id="'+patId+'" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="'+color+'"/><path d="M0 0h8v1H0zM0 0v8h1V0z" fill="rgba(0,0,0,.12)"/></pattern>';
    else if(pattern==='plus')patternSVG='<pattern id="'+patId+'" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="'+color+'"/><path d="M5 3v4M3 5h4" stroke="rgba(0,0,0,.15)" stroke-width=".8" fill="none"/></pattern>';
    else if(pattern==='squares')patternSVG='<pattern id="'+patId+'" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="'+color+'"/><rect x="1" y="1" width="5" height="5" rx="1" fill="rgba(0,0,0,.1)"/></pattern>';
    else if(pattern==='triangles')patternSVG='<pattern id="'+patId+'" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="'+color+'"/><path d="M0 10L5 0l5 10z" fill="rgba(0,0,0,.08)"/></pattern>';
    else if(pattern==='dots')patternSVG='<pattern id="'+patId+'" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="'+color+'"/><circle cx="3" cy="3" r="1.2" fill="rgba(0,0,0,.12)"/></pattern>';
    else patternSVG='<pattern id="'+patId+'" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="'+color+'"/><path d="M5 2v6M2 5h6" stroke="rgba(255,255,255,.1)" stroke-width="1" fill="none"/></pattern>';
    var cx=r,cy=r;
    var path='M'+cx+','+(cy-lr)+
      ' C'+(cx+lr*0.55)+','+(cy-lr)+' '+(cx+lr)+','+(cy-lr*0.55)+' '+(cx+lr)+','+cy+
      ' C'+(cx+lr)+','+(cy+lr*0.55)+' '+(cx+lr*0.55)+','+(cy+lr)+' '+cx+','+(cy+lr)+
      ' C'+(cx-lr*0.55)+','+(cy+lr)+' '+(cx-lr)+','+(cy+lr*0.55)+' '+(cx-lr)+','+cy+
      ' C'+(cx-lr)+','+(cy-lr*0.55)+' '+(cx-lr*0.55)+','+(cy-lr)+' '+cx+','+(cy-lr)+'Z';
    var offsets=[{dx:0,dy:-lr},{dx:lr,dy:0},{dx:0,dy:lr},{dx:-lr,dy:0}];
    var lobes='';
    offsets.forEach(function(o){
      var lcx=cx+o.dx,lcy=cy+o.dy;
      lobes+='<circle cx="'+lcx+'" cy="'+lcy+'" r="'+lr+'" fill="url(#'+patId+')"/>';
    });
    return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 '+size+' '+size+'" xmlns="http://www.w3.org/2000/svg"><defs>'+patternSVG+'</defs>'+lobes+'<circle cx="'+cx+'" cy="'+cy+'" r="'+(lr*0.7)+'" fill="url(#'+patId+')"/></svg>';
  }
  var cW,cH;
  function init(){
    cW=container.offsetWidth;cH=container.offsetHeight;
    shapes.forEach(function(s,i){
      var size=180+Math.floor(Math.random()*180);
      var el=document.createElement('div');
      el.innerHTML=createCloverSVG(s.color,s.pattern,size);
      el.style.cssText='position:absolute;width:'+size+'px;height:'+size+'px;user-select:none;cursor:grab;';
      container.appendChild(el);
      var x=Math.random()*(cW-size),y=-(Math.random()*400+80);
      var vx=(Math.random()-0.5)*2,vy=Math.random()*1.5+0.5;
      var rot=Math.random()*360,vr=(Math.random()-0.5)*3;
      items.push({el:el,x:x,y:y,vx:vx,vy:vy,w:size,h:size,rot:rot,vr:vr,dragging:false});
      el.style.left=x+'px';el.style.top=y+'px';el.style.transform='rotate('+rot+'deg)';
      el.addEventListener('pointerdown',function(e){
        e.preventDefault();var p=items[i];p.dragging=true;
        p.dragOffX=e.clientX-p.x;p.dragOffY=e.clientY-container.getBoundingClientRect().top-p.y;
        el.setPointerCapture(e.pointerId);el.style.cursor='grabbing';
      });
      el.addEventListener('pointermove',function(e){
        var p=items[i];if(!p.dragging)return;
        p.x=e.clientX-p.dragOffX;p.y=e.clientY-container.getBoundingClientRect().top-p.dragOffY;
        p.vx=(Math.random()-0.5)*4;p.vy=0;
      });
      el.addEventListener('pointerup',function(){
        var p=items[i];p.dragging=false;p.vy=1;el.style.cursor='grab';
      });
    });
    loop();
  }
  function loop(){
    items.forEach(function(p){
      if(p.dragging){p.el.style.left=p.x+'px';p.el.style.top=p.y+'px';return;}
      p.vy+=0.3;p.x+=p.vx;p.y+=p.vy;p.rot+=p.vr;
      if(p.y+p.h>cH){p.y=cH-p.h;p.vy*=-0.45;p.vr*=0.8;if(Math.abs(p.vy)<0.5)p.vy=0;}
      if(p.x<0){p.x=0;p.vx*=-0.6;}
      if(p.x+p.w>cW){p.x=cW-p.w;p.vx*=-0.6;}
      p.vx*=0.997;p.vr*=0.995;
      p.el.style.left=p.x+'px';p.el.style.top=p.y+'px';p.el.style.transform='rotate('+p.rot+'deg)';
    });
    requestAnimationFrame(loop);
  }
  var triggered=false;
  var fObs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting&&!triggered){
        triggered=true;
        container.style.opacity='1';container.style.transform='translateY(0)';
        init();
        fObs.unobserve(container);
      }
    });
  },{threshold:0.1});
  fObs.observe(container);
})();

/* ══ COUNTUP ANIMATION ══ */
(function(){
  var els=document.querySelectorAll('[data-count]');
  if(!els.length)return;
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting)return;
      var el=e.target;
      var target=parseInt(el.dataset.count,10);
      var suffix=el.dataset.suffix||'';
      var start=0,duration=1500,t0=null;
      function step(ts){
        if(!t0)t0=ts;
        var p=Math.min((ts-t0)/duration,1);
        var eased=1-Math.pow(1-p,3);
        el.textContent=Math.round(start+(target-start)*eased)+suffix;
        if(p<1)requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  },{threshold:0.3});
  els.forEach(function(el){obs.observe(el);});
})();

/* ══ BLUR TEXT REVEAL ══ */
(function(){
  var headlines=document.querySelectorAll('.sec-headline, .feat2-text h3');
  headlines.forEach(function(el){
    // Skip if already processed
    if(el.dataset.blurDone)return;
    el.dataset.blurDone='1';
    // Get the HTML content and split by words while preserving HTML tags
    var html=el.innerHTML;
    // We need to wrap text nodes in spans word-by-word
    // Simple approach: process text between tags
    var result='';
    var wordIdx=0;
    var inTag=false;
    var buffer='';
    for(var i=0;i<html.length;i++){
      var c=html[i];
      if(c==='<'){
        // Flush buffer as words
        if(buffer.trim()){
          var words=buffer.split(/(\s+)/);
          words.forEach(function(w){
            if(w.trim()){
              result+='<span class="blur-word" style="animation-delay:'+((wordIdx*0.08))+'s">'+w+'</span>';
              wordIdx++;
            }else{
              result+=w;
            }
          });
          buffer='';
        }else if(buffer){
          result+=buffer;buffer='';
        }
        inTag=true;result+=c;
      }else if(c==='>'){
        inTag=false;result+=c;
      }else if(inTag){
        result+=c;
      }else{
        buffer+=c;
      }
    }
    // Flush remaining buffer
    if(buffer.trim()){
      var words=buffer.split(/(\s+)/);
      words.forEach(function(w){
        if(w.trim()){
          result+='<span class="blur-word" style="animation-delay:'+((wordIdx*0.08))+'s">'+w+'</span>';
          wordIdx++;
        }else{
          result+=w;
        }
      });
    }else if(buffer){
      result+=buffer;
    }
    el.innerHTML=result;
    // Initially hide all blur-words, reveal on scroll
    var spans=el.querySelectorAll('.blur-word');
    spans.forEach(function(s){s.style.animationPlayState='paused';});
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          var sp=e.target.querySelectorAll('.blur-word');
          sp.forEach(function(s){s.style.animationPlayState='running';});
          obs.unobserve(e.target);
        }
      });
    },{threshold:0.15});
    obs.observe(el);
  });
})();

/* ══════════════════════════════════════════
   QUIZ ENGINE — 24 domande, 12 tratti
══════════════════════════════════════════ */
var TRAITS={BUSSOLA:{name:"La Bussola"},FUOCO:{name:"Il Fuoco"},MAPPA:{name:"La Mappa"},FILO:{name:"Il Filo"},RADICE:{name:"La Radice"},ONDA:{name:"L'Onda"},SCUDO:{name:"Lo Scudo"},PALCO:{name:"Il Palco"},PONTE:{name:"Il Ponte"},RITMO:{name:"Il Ritmo"},LENTE:{name:"La Lente"},VENTO:{name:"Il Vento"}};
var SCORING=[["PONTE","FUOCO","LENTE","BUSSOLA"],["MAPPA","FILO","FUOCO","ONDA"],["PALCO","PONTE","SCUDO","LENTE"],["SCUDO","MAPPA","LENTE","FILO"],["RADICE","ONDA","SCUDO","VENTO"],["MAPPA","RADICE","SCUDO","BUSSOLA"],["PONTE","VENTO","PALCO","RITMO"],["LENTE","SCUDO","FILO","FUOCO"],["MAPPA","RITMO","RADICE","SCUDO"],["PALCO","FUOCO","LENTE","FILO"],["RITMO","ONDA","MAPPA","PONTE"],["MAPPA","FILO","RADICE","BUSSOLA"],["PALCO","PONTE","SCUDO","BUSSOLA"],["RITMO","BUSSOLA","FUOCO","VENTO"],["PALCO","VENTO","MAPPA","LENTE"],["ONDA","PALCO","VENTO","SCUDO"],["ONDA","BUSSOLA","FILO","PONTE"],["FILO","MAPPA","RADICE","LENTE"],["RADICE","ONDA","VENTO","LENTE"],["BUSSOLA","FUOCO","RITMO","RADICE"],["VENTO","PALCO","ONDA","RITMO"],["BUSSOLA","PONTE","FILO","RITMO"],["FUOCO","ONDA","VENTO","RADICE"],["PALCO","RITMO","FUOCO","PONTE"]];
var QUESTIONS=[
{block:1,tag:"Vita quotidiana",text:"Stai per iniziare un nuovo progetto con un team che non conosci. Il primo briefing dura venti minuti. Come arrivi alla prima riunione operativa?",opts:[{l:"A",t:"Hai gia' capito come si collegano i diversi ruoli e hai in testa una proposta su come far fluire meglio il lavoro."},{l:"B",t:"Hai identificato chi ha piu' influenza nel gruppo e stai gia' pensando a come posizionarti per guidare le decisioni chiave."},{l:"C",t:"Hai fatto ricerche su ogni componente del team e sul contesto del progetto — vuoi capire prima di muoverti."},{l:"D",t:"Sai gia' se il progetto ti sembra coerente con quello in cui credi. Se non lo e', comincerai a chiederti quanto ci vuole ad allinearlo."}]},
{block:1,tag:"Vita quotidiana",text:"Un collega ti chiede aiuto con un problema che non e' di tua competenza, ma che sai risolvere. Sei nel mezzo di qualcos'altro. Come reagisci?",opts:[{l:"A",t:"Ti fermi un attimo, ascolti e valuti se puoi capire la radice del problema prima di rispondere."},{l:"B",t:"Lo aiuti, ma anche perche' il legame con lui conta — sai che la prossima volta si ricordera'."},{l:"C",t:"Ti interessa capire se e' un problema che vale la pena risolvere davvero, o se e' un sintomo di qualcosa di piu' grande."},{l:"D",t:"Ti alzi, vai a vederlo di persona, e se puoi lo risolvi in cinque minuti — stare fermi a parlarne ti sembra uno spreco."}]},
{block:1,tag:"Vita quotidiana",text:"Devi presentare i risultati di sei mesi di lavoro a un pubblico misto: colleghi, clienti, management. Hai due ore per prepararti. Dove le passi?",opts:[{l:"A",t:"Lavori sulla forma: struttura delle slide, tono della narrazione, i dettagli che rendono la presentazione memorabile."},{l:"B",t:"Pensi prima a chi sara' in sala e a come ogni persona recepira' il messaggio — costruisci una storia su misura."},{l:"C",t:"Costruisci uno schema solido: punti chiave, dati di supporto, possibili domande difficili — vuoi sentirti preparato."},{l:"D",t:"Controlli che i dati reggano e che non ci siano contraddizioni — preferiresti avere piu' tempo, ma ti concentri sui punti critici."}]},
{block:1,tag:"Vita quotidiana",text:"Una mattina scopri che un processo su cui lavori da settimane verra' cambiato radicalmente, con poco preavviso. Come gestisci il momento?",opts:[{l:"A",t:"Ascolti, poi tieni il campo: non ti scomponi davanti agli altri, ma dentro stai gia' analizzando i rischi."},{l:"B",t:"Fai subito domande per capire cosa cambia nel concreto — hai bisogno di sapere come adattarti rapidamente."},{l:"C",t:"Ti prendi il tempo di capire l'impatto sul lavoro degli altri, non solo sul tuo — e se vedi qualcosa di storto, lo dici."},{l:"D",t:"Chiedi i dettagli tecnici: vuoi ricostruire il quadro completo prima di formarti un'opinione."}]},
{block:1,tag:"Vita quotidiana",text:"Il tuo team lavora da mesi su un obiettivo comune. Siete quasi arrivati, ma mancano ancora alcune settimane. Qual e' il tuo atteggiamento?",opts:[{l:"A",t:"Tieni il ritmo — sai che la coerenza nelle ultime settimane e' quello che spesso fa la differenza tra un buon lavoro e un ottimo lavoro."},{l:"B",t:"Senti l'energia salire: la fase finale ti piace, sei abituato a tirare fuori il meglio quando c'e' qualcosa in gioco."},{l:"C",t:"Ti assicuri che tutto sia ancora in equilibrio — e' il momento in cui si tendono a tagliare le fondamenta per correre."},{l:"D",t:"Preferiresti avere piu' liberta' su come usare queste ultime settimane — la struttura rigida ti pesa un po'."}]},
{block:1,tag:"Vita quotidiana",text:"Stai valutando se accettare un incarico nuovo e interessante, ma con qualche punto di ambiguita'. Cosa pesa di piu' nella tua decisione?",opts:[{l:"A",t:"Vuoi capire a fondo il contesto — non riesci a decidere senza avere un quadro chiaro di cosa stai davvero facendo."},{l:"B",t:"Valuti la solidita': quanto durera', cosa c'e' dietro, se e' qualcosa su cui vale la pena costruire nel tempo."},{l:"C",t:"Ti chiedi se hai le energie per gestire l'incertezza — l'ambiguita' non ti spaventa, ma vuoi essere lucido."},{l:"D",t:"Ti chiedi se il progetto ha senso per te — non e' una questione di soldi, e' una questione di dove ti porta."}]},
{block:1,tag:"Vita quotidiana",text:"Sei a una conferenza professionale. Tra i partecipanti ci sono persone che ammiri. Come vivi la giornata?",opts:[{l:"A",t:"Ascolti molto, connetti le idee con cio' in cui credi — se senti qualcosa di importante per la tua causa, lo segni e lo porti avanti."},{l:"B",t:"Ti muovi liberamente: una sessione ti annoia, esci, vai a parlare con qualcuno fuori dalla sala — il format non ti vincola."},{l:"C",t:"Ti preoccupi di come ti presenti — vuoi che la tua presenza lasci un segno, non un'impressione anonima."},{l:"D",t:"Vivi la giornata seguendo un ritmo che funziona per te: sessioni scelte con cura, pause vere, nessuna sovrastimolazione."}]},
{block:1,tag:"Vita quotidiana",text:"Il tuo team ha appena preso una decisione che ritieni discutibile. Non e' stata chiesta la tua opinione. Come ti comporti?",opts:[{l:"A",t:"La analizzi in dettaglio: cosa potrebbe andare storto, quali dati mancavano, dove si e' ragionato in modo approssimativo."},{l:"B",t:"Non ti spaventa — sai che spesso le decisioni si correggono in corsa, e hai gia' visto scenari peggiori."},{l:"C",t:"Parli con qualcuno di fiducia — non per lamentarti, ma per capire se anche gli altri hanno visto quello che hai visto tu."},{l:"D",t:"Torni sulla decisione con dati alla mano: non lo fai per avere ragione, ma perche' non riesci a lasciar passare qualcosa che non ti sembra giusto."}]},
{block:2,tag:"Relazioni e sfide",text:"Una persona che lavora con te da mesi ti chiede un feedback sincero. Sai che alcune cose non funzionano. Come gestisci la conversazione?",opts:[{l:"A",t:"Prepari il feedback con cura: vuoi che le osservazioni siano precise, documentate, comprensibili — non improvvisi."},{l:"B",t:"Prima di parlare, ti assicuri di stare bene: una conversazione difficile richiede energia e presenza."},{l:"C",t:"Sei diretto, ma costruttivo — sai che il feedback vero e' quello che aiuta, non quello che fa sentire bene chi lo da'."},{l:"D",t:"Ascolti prima: vuoi capire il suo punto di vista prima di portare il tuo — spesso il problema e' diverso da come sembra."}]},
{block:2,tag:"Relazioni e sfide",text:"Stai lavorando su qualcosa che hai costruito da zero. Un responsabile suggerisce di cambiare l'impostazione in modo significativo. Come reagisci?",opts:[{l:"A",t:"Ascolti, ma poi fai capire qual e' la tua visione — non ti sottrai al confronto, anzi lo cerchi."},{l:"B",t:"Prendi nota dei dettagli: ti interessa capire se la proposta regge tecnicamente prima di formarti un parere."},{l:"C",t:"Difendi il lavoro fatto, ma non a prescindere — sei disposto a cambiare se le ragioni sono solide."},{l:"D",t:"Prima di rispondere, senti dove ti porta la proposta: hai qualcosa di costruito con cura e non vuoi smontarlo senza un motivo valido."}]},
{block:2,tag:"Relazioni e sfide",text:"Un progetto a cui tieni molto si blocca per ragioni esterne. Sai che riprendera', ma non sai quando. Come vivi l'attesa?",opts:[{l:"A",t:"Sfrutti il tempo per ricaricarti: il corpo e la testa hanno bisogno di pause e questa e' una di quelle."},{l:"B",t:"Ti adatti: inizi a esplorare altre direzioni, non resti fermo ad aspettare — il movimento ti aiuta a pensare meglio."},{l:"C",t:"Usi il tempo per approfondire — leggi, studi, esplori aspetti che non avevi avuto modo di capire a fondo."},{l:"D",t:"Tieni i fili: mantieni i contatti, fai in modo che chi e' coinvolto resti connesso — non vuoi che il progetto si spenga."}]},
{block:2,tag:"Relazioni e sfide",text:"Ti viene proposto un gruppo di lavoro su un tema che conosci bene, con persone nuove. Il tuo contributo sarebbe importante. Cosa valuti?",opts:[{l:"A",t:"Vuoi capire bene il framework prima di entrare — hai bisogno di sapere come lavorano, con quali metodi."},{l:"B",t:"Ti interessa sapere chi c'e': il gruppo funzionera' solo se le persone si fidano tra loro."},{l:"C",t:"Valuti se e' qualcosa che reggera' nel tempo — non vuoi investire energia in un progetto che si smonta dopo tre incontri."},{l:"D",t:"Guardi se c'e' spazio per portare il tuo punto di vista autentico, senza doverlo annacquare."}]},
{block:2,tag:"Relazioni e sfide",text:"Qualcuno ha preso credito per un tuo lavoro, in modo non intenzionale ma evidente. Come gestisci la situazione?",opts:[{l:"A",t:"Non ci passi sopra: trovi il modo di chiarire, senza drammi ma con precisione — il riconoscimento e' importante."},{l:"B",t:"Lo vedi come un dato: questa persona in futuro fara' probabilmente la stessa cosa, e ne terrai conto."},{l:"C",t:"Ti misuri con la sensazione di ingiustizia — non per vanita', ma perche' quel contributo meritava riconoscimento."},{l:"D",t:"Rimani calmo, anche se dentro ti da' fastidio — gestisci la cosa con lucidita', non con reattivita'."}]},
{block:2,tag:"Relazioni e sfide",text:"Stai attraversando un periodo di lavoro intenso. Le giornate sono lunghe, il weekend spesso non esiste. Come stai?",opts:[{l:"A",t:"Il corpo ti sta dando segnali — stai perdendo ritmo, e sai che se non ti fermi, quello che perdi non si recupera in fretta."},{l:"B",t:"Stai dentro, ma monitori: sai dove sei e dove vuoi arrivare — l'intensita' ha senso se e' per qualcosa che vale."},{l:"C",t:"Stai reggendo bene, forse troppo bene — sei abituato a tenere il campo anche quando sarebbe ragionevole rallentare."},{l:"D",t:"L'energia ce l'hai, ma senti il bisogno di spazio — la struttura rigida ti pesa piu' del carico di lavoro."}]},
{block:2,tag:"Relazioni e sfide",text:"Un collega ti mostra qualcosa di cui va molto fiero. Non e' all'altezza di come avrebbe potuto essere. Cosa fai?",opts:[{l:"A",t:"Noti la forma: mancano cura, dettaglio, qualcosa che avrebbe potuto rendere quel lavoro davvero bello. Non riesci a non vederlo."},{l:"B",t:"Trovi qualcosa di genuino su cui essere onesto — non senti il bisogno di adeguarti, ma non vuoi essere gratuito."},{l:"C",t:"Cerchi la struttura che manca: quali passaggi logici non reggono, dove c'e' un salto che non e' stato risolto."},{l:"D",t:"Vedi quello che avrebbe potuto essere e pensi a come aiutarlo a migliorarlo — senza che lo percepisca come una critica."}]},
{block:2,tag:"Relazioni e sfide",text:"Ti viene chiesto di coordinarti con una persona molto diversa da te — metodica dove tu sei fluido. Come vivi la collaborazione?",opts:[{l:"A",t:"Ti adatti fino a un certo punto, poi senti il bisogno di respirare — la struttura troppo rigida ti toglie capacita'."},{l:"B",t:"Apprezzi la cura con cui costruisce le cose — anche se il vostro ritmo e' diverso, c'e' qualcosa da imparare."},{l:"C",t:"Vai per la tua strada dove puoi, e negozi dove devi — non ti interessa convincerlo, vuoi solo lo spazio di farlo."},{l:"D",t:"Tieni la rotta: le differenze di stile sono normali, e non ti scomponi — fai funzionare la collaborazione."}]},
{block:3,tag:"Valori e scelte",text:"Hai davanti una scelta che potrebbe cambiare i prossimi anni: un'opportunita' grande, ma con un costo personale significativo. Come la affronti?",star:true,opts:[{l:"A",t:"Hai bisogno di spazio fisico per pensarci — cammini, ti muovi, e aspetti che il corpo ti dica qualcosa che la testa da sola non riuscira' a dirti."},{l:"B",t:"Torni ai fondamentali: cos'e' che per te non e' negoziabile? Quella risposta guida tutto il resto."},{l:"C",t:"Ne parli con le persone che contano per te — non per delegare la decisione, ma per sentire il loro sguardo."},{l:"D",t:"Pensi all'impatto a lungo termine: non solo su di te, ma su chi ti sta intorno e su cosa stai costruendo."}]},
{block:3,tag:"Valori e scelte",text:"Stai lavorando su qualcosa di importante. Un evento imprevisto mette tutto in dubbio. Dove trovi la risposta?",star:true,opts:[{l:"A",t:"Nelle relazioni: le persone con cui stai costruendo ti diranno molto di piu' di qualsiasi analisi."},{l:"B",t:"Tornando al perche' iniziale: vuoi capire se quell'evento ha cambiato la sostanza o solo la forma."},{l:"C",t:"Nelle fondamenta: se quello che hai costruito e' solido, l'evento diventa un ostacolo, non una fine."},{l:"D",t:"In una lettura precisa della situazione: raccogli i dati, analizzi le variabili, poi decidi."}]},
{block:3,tag:"Valori e scelte",text:"Qualcuno che stimi fa una scelta che non condividi. Non ti riguarda direttamente, ma ti colpisce. Come stai con questa cosa?",star:true,opts:[{l:"A",t:"La archivi: hai delle strutture interiori che ti permettono di tenere le cose al loro posto senza che ti consumino."},{l:"B",t:"Ti muove — non sai ancora dove, ma senti che non puoi comportarti come se non fosse successo."},{l:"C",t:"Cerchi di capire la logica di quella scelta: forse hai perso un pezzo, forse il quadro era diverso."},{l:"D",t:"Osservi i dettagli: cosa ha portato a quella scelta, quali segnali avevi gia' visto, cosa puoi imparare."}]},
{block:3,tag:"Valori e scelte",text:"Hai raggiunto qualcosa a cui tenevi molto. Passata la soddisfazione iniziale, cosa senti?",star:true,opts:[{l:"A",t:"Controlli che sia davvero quello che volevi raggiungere — c'e' qualcosa in te che continua a interrogarsi sul 'perche'."},{l:"B",t:"Vuoi gia' il prossimo obiettivo — il traguardo ti piace, ma la spinta vera viene dal costruire, non dall'essere arrivato."},{l:"C",t:"Hai bisogno di ricaricarti: hai dato tanto, e ora il corpo e la testa chiedono un momento di quiete vera."},{l:"D",t:"Pensi a come consolidare: cosa resta di quello che hai costruito, e come fai si' che non vada disperso."}]},
{block:3,tag:"Valori e scelte",text:"Ti viene proposto un ruolo che corrisponde a molte delle cose che vuoi, ma in un contesto con regole che non senti tue. Come decidi?",star:true,opts:[{l:"A",t:"Valuti fin dove puoi andare senza tradire te stesso — il compromesso e' accettabile, ma non a qualsiasi prezzo."},{l:"B",t:"Guardi se c'e' spazio per lasciare davvero un segno: se il ruolo ti permette di fare qualcosa di cui andare fiero, vale la pena."},{l:"C",t:"Hai bisogno di capire se c'e' autonomia reale — lavori bene solo quando hai spazio per muoverti a modo tuo."},{l:"D",t:"Pensi a cosa ti darebbe quel contesto in termini di crescita, relazioni, possibilita' — non solo al ruolo in se'."}]},
{block:3,tag:"Valori e scelte",text:"In un momento di difficolta' professionale, dove trovi il centro? Cosa ti aiuta a non perdere la rotta?",star:true,opts:[{l:"A",t:"Torni ai tuoi valori: c'e' qualcosa di stabile dentro di te che regge anche quando il contesto non regge."},{l:"B",t:"Pensi a chi conta su di te e a cosa stai costruendo insieme — quella responsabilita' ti da' una direzione."},{l:"C",t:"Ti ancori alle relazioni: le persone con cui hai costruito fiducia sono la tua risorsa piu' solida."},{l:"D",t:"Torni a un ritmo che conosci — qualcosa di concreto e fisico che ti aiuta a riallinearti."}]},
{block:3,tag:"Valori e scelte",text:"Devi scegliere tra due strade ugualmente valide: una piu' sicura ma meno stimolante, una piu' rischiosa ma piu' vicina a quello che sei. Come ti orienti?",star:true,opts:[{l:"A",t:"Scegli la sfida: il rischio controllato e' il tuo territorio naturale."},{l:"B",t:"Ascolti il corpo: c'e' una risposta somatica che precede quella razionale, e hai imparato a fidarti di quella."},{l:"C",t:"Scegli cio' che ti permette di essere davvero te stesso — se devi adattarti troppo, alla lunga non regge."},{l:"D",t:"Pensi alle radici: quale dei due percorsi ti permette di costruire qualcosa che durera' davvero?"}]},
{block:3,tag:"Valori e scelte",text:"Guardi indietro agli ultimi anni. C'e' qualcosa che ti ha reso piu' fiero — non il risultato, ma il modo in cui ci sei arrivato. Cosa e' stato?",star:true,opts:[{l:"A",t:"Qualcosa che hai fatto con cura — che si vedesse, che lasciasse un segno, che parlasse di chi sei davvero."},{l:"B",t:"Un ritmo che hai trovato — un modo di lavorare che ha rispettato le tue energie senza consumarti."},{l:"C",t:"Una vittoria costruita con determinazione — nonostante gli ostacoli, hai tenuto il filo e sei arrivato dove volevi."},{l:"D",t:"Qualcosa che ha servito una causa piu' grande — che ha avuto un impatto su altri, non solo su di te."}]}
];

var currentQ=0,answers=new Array(QUESTIONS.length).fill(null);
var AUTO_ADVANCE_DELAY=700;

function calcResults(){
  var scores={},tb={};
  Object.keys(TRAITS).forEach(function(k){scores[k]=0;tb[k]=0;});
  answers.forEach(function(a,i){if(a!==null){var t=SCORING[i][a];scores[t]++;if(QUESTIONS[i].star)tb[t]+=2;}});
  var sorted=Object.keys(scores).sort(function(a,b){return scores[b]!==scores[a]?scores[b]-scores[a]:tb[b]-tb[a];});
  return{top3:sorted.slice(0,3),scores:scores,sorted:sorted};
}
function showSection(id){
  document.querySelectorAll('.page-section').forEach(function(s){s.classList.remove('active');});
  var target=document.getElementById(id);
  target.classList.add('active');
  /* Ensure visibility on mobile — force display and scroll */
  target.style.display='block';
  target.style.minHeight='100vh';
  window.scrollTo({top:0,behavior:'smooth'});
  /* Also scroll Elementor parent containers */
  var el=target;
  while(el.parentElement){
    el=el.parentElement;
    if(el.scrollTop>0)el.scrollTop=0;
  }
  document.documentElement.scrollTop=0;
  document.body.scrollTop=0;
}
function startQuiz(){currentQ=0;answers.fill(null);renderQ();showSection('sec-quiz');if(typeof gtag==='function')gtag('event','quiz_started',{event_category:'quiz'});if(typeof dataLayer!=='undefined')dataLayer.push({event:'quiz_started'});}
function renderQ(){
  var q=QUESTIONS[currentQ],pct=Math.round(((currentQ+1)/QUESTIONS.length)*100);
  var bl=["Blocco 1 — Vita quotidiana","Blocco 2 — Relazioni e sfide","Blocco 3 — Valori e scelte"];
  document.getElementById('prog-label').textContent='Domanda '+(currentQ+1)+' di '+QUESTIONS.length;
  document.getElementById('prog-block').textContent=(q.star?'\u2605 ':'')+'Blocco '+q.block+' / 3';
  document.getElementById('prog-fill').style.width=pct+'%';
  document.getElementById('q-tag').textContent=bl[q.block-1];
  document.getElementById('q-text').textContent=q.text;
  var opts=document.getElementById('q-options');opts.innerHTML='';
  q.opts.forEach(function(o,i){
    var d=document.createElement('div');d.className='quiz-opt'+(answers[currentQ]===i?' selected':'');
    d.innerHTML='<span class="quiz-opt-letter" data-letter="'+o.l+'">'+o.l+'</span><span>'+o.t+'</span>';
    d.addEventListener('click',function(){selectOpt(i);});opts.appendChild(d);
  });
  document.getElementById('btn-back').style.visibility=currentQ===0?'hidden':'visible';
  var btn=document.getElementById('btn-next');btn.textContent=currentQ===QUESTIONS.length-1?'Vedi il tuo Karakter':'Avanti';
  btn.className='btn-quiz-next'+(answers[currentQ]!==null?' active':'');
}
function selectOpt(i){
  answers[currentQ]=i;document.querySelectorAll('.quiz-opt').forEach(function(el,idx){el.className='quiz-opt'+(idx===i?' selected':'');});
  document.getElementById('btn-next').className='btn-quiz-next active';
  if(typeof gtag==='function')gtag('event','quiz_answer',{event_category:'quiz',event_label:'q'+(currentQ+1),value:i});
  if(typeof dataLayer!=='undefined')dataLayer.push({event:'quiz_answer',question:currentQ+1,answer:i});
  setTimeout(function(){if(answers[currentQ]===i)quizNext();},AUTO_ADVANCE_DELAY);
}
function quizNext(){
  if(answers[currentQ]===null)return;
  if(currentQ<QUESTIONS.length-1){var card=document.getElementById('q-card');card.classList.add('exiting');setTimeout(function(){currentQ++;renderQ();card.classList.remove('exiting');card.classList.add('entering');setTimeout(function(){card.classList.remove('entering');},300);},200);}
  else{var results=calcResults();showFormSection(results);}
}
function quizBack(){if(currentQ>0){currentQ--;renderQ();}}
function showFormSection(results){
  var tc=document.querySelector('.score-blur');
  if(tc){var h='';results.top3.forEach(function(t){h+='<span style="background:var(--k-bg-warm);border:1px solid rgba(242,183,5,.3);padding:8px 18px;border-radius:100px;font-weight:600;font-size:13px;">'+TRAITS[t].name+'</span>';});tc.innerHTML=h;}
  showSection('sec-form');mountHubSpotForm(results);
  if(typeof gtag==='function')gtag('event','quiz_completed',{event_category:'quiz'});if(typeof dataLayer!=='undefined')dataLayer.push({event:'quiz_completed'});
}
function mountHubSpotForm(results){
  var c=document.getElementById('hs-form-container');c.innerHTML='';
  function bf(){var f={};f['quiz_tratto_1']=TRAITS[results.top3[0]].name;f['quiz_tratto_2']=TRAITS[results.top3[1]].name;f['quiz_tratto_3']=TRAITS[results.top3[2]].name;Object.keys(results.scores).forEach(function(k){f['quiz_score_'+k.toLowerCase()]=String(results.scores[k]);});QUESTIONS.forEach(function(q,i){f['quiz_q'+(i+1)]=answers[i]!==null?q.opts[answers[i]].l:'';});return f;}
  function inj($f,fields){Object.keys(fields).forEach(function(n){var ex=$f.find('input[name="'+n+'"]');if(ex.length)ex.val(fields[n]);else $f.append('<input type="hidden" name="'+n+'" value="'+fields[n].replace(/"/g,'&quot;')+'">');});}
  if(typeof hbspt!=='undefined'){hbspt.forms.create({portalId:"140603915",formId:"3066a724-8e22-49aa-b93a-3244016cc58d",region:"eu1",target:"#hs-form-container",onFormReady:function($f){inj($f,bf());},onFormSubmitted:function(){var p=btoa(JSON.stringify({top3:results.top3,scores:results.scores,sorted:results.sorted}));window.location.href='/grazie-quiz/?d='+encodeURIComponent(p);}});}
  else{c.innerHTML='<div style="text-align:center;padding:2rem;"><div style="width:28px;height:28px;border:2px solid var(--k-gray-200);border-top-color:var(--k-amber);border-radius:50%;animation:spin .8s linear infinite;margin:0 auto 1rem;"></div><p style="font-size:13px;color:var(--k-gray-400);">Caricamento...</p></div>';setTimeout(function(){mountHubSpotForm(results);},800);}
}
document.addEventListener('keydown',function(e){
  if(!document.getElementById('sec-quiz').classList.contains('active'))return;
  var key=e.key.toUpperCase();
  if(['A','B','C','D'].indexOf(key)!==-1){var idx={'A':0,'B':1,'C':2,'D':3}[key];if(idx<QUESTIONS[currentQ].opts.length)selectOpt(idx);}
  if(e.key==='Enter'&&answers[currentQ]!==null)quizNext();
  if(e.key==='Backspace'){e.preventDefault();quizBack();}
});