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
   QUIZ ENGINE — 20 affermazioni, Likert 1–6
══════════════════════════════════════════ */
var TRAITS={BUSSOLA:{name:"La Bussola"},FUOCO:{name:"Il Fuoco"},MAPPA:{name:"La Mappa"},FILO:{name:"Il Filo"},RADICE:{name:"La Radice"},ONDA:{name:"L'Onda"},SCUDO:{name:"Lo Scudo"},PALCO:{name:"Il Palco"},PONTE:{name:"Il Ponte"},RITMO:{name:"Il Ritmo"},LENTE:{name:"La Lente"},VENTO:{name:"Il Vento"}};

/* 20 affermazioni — ogni affermazione mappa a 1 tratto */
var STATEMENTS=[
  {text:"Fatico a ignorare qualcosa che sento sbagliato, anche quando intorno a me tutti tacciono.",trait:"BUSSOLA"},
  {text:"Ho bisogno di capire davvero come funziona una cosa prima di muovermi.",trait:"MAPPA"},
  {text:"Quando credo in un obiettivo, sono disposto/a a metterci tutto, anche pi\u00f9 di quanto sarebbe ragionevole.",trait:"FUOCO"},
  {text:"Mi accorgo quasi subito quando qualcuno nel gruppo sta male, anche se non lo dice.",trait:"FILO"},
  {text:"Preferisco costruire qualcosa che dura piuttosto che andare veloce e aggiustare dopo.",trait:"RADICE"},
  {text:"Ho bisogno di muovermi fisicamente, camminare, uscire, staccare, per pensare meglio.",trait:"ONDA"},
  {text:"Nelle situazioni di tensione o crisi, tendo ad abbassare la voce mentre gli altri la alzano.",trait:"SCUDO"},
  {text:"Ci tengo a come si presenta il mio lavoro, non solo a cosa contiene.",trait:"PALCO"},
  {text:"Quello che faccio deve avere un impatto che va oltre il mio vantaggio personale.",trait:"PONTE"},
  {text:"Il mio corpo mi dice con precisione quando sono in forma e quando no, e mi fido di quei segnali.",trait:"RITMO"},
  {text:"Trovo spesso l'errore nel ragionamento che tutti gli altri hanno gi\u00e0 dato per buono.",trait:"LENTE"},
  {text:"Non riesco a seguire una regola o una procedura se non capisco perch\u00e9 esiste.",trait:"VENTO"},
  {text:"Prima di accettare un impegno importante, mi chiedo se \u00e8 davvero coerente con quello in cui credo.",trait:"BUSSOLA"},
  {text:"Ricordo a lungo quando qualcuno non ha riconosciuto il mio contributo, non per rancore, ma come dato.",trait:"FUOCO"},
  {text:"Faccio fatica a buttare via quello che ho costruito, un progetto, una relazione, un metodo, senza un motivo solido.",trait:"RADICE"},
  {text:"Quasi sempre trovo un modo diverso da quello standard per fare le cose, e spesso funziona meglio.",trait:"VENTO"},
  {text:"Quando spiego qualcosa, ho bisogno di partire dal quadro generale prima di entrare nei dettagli.",trait:"MAPPA"},
  {text:"Nelle relazioni importanti, sono io che faccio il primo passo per chiarire un malinteso.",trait:"FILO"},
  {text:"Quando presento un'idea, penso sempre a come renderla memorabile per chi ascolta.",trait:"PALCO"},
  {text:"Se il mio ritmo naturale viene forzato troppo a lungo, lo sento nel corpo prima che nella testa.",trait:"RITMO"}
];

var currentQ=0;
var answers=new Array(STATEMENTS.length).fill(null);
var AUTO_ADVANCE_DELAY=600;

/* ══ SCORING ══ */
function calcResults(){
  /* Raccogli punteggi per tratto */
  var sums={},counts={};
  Object.keys(TRAITS).forEach(function(k){sums[k]=0;counts[k]=0;});
  answers.forEach(function(val,i){
    if(val!==null){
      var t=STATEMENTS[i].trait;
      sums[t]+=val;
      counts[t]++;
    }
  });
  /* Media normalizzata (scala 1–6) */
  var scores={};
  Object.keys(TRAITS).forEach(function(k){
    scores[k]=counts[k]>0?Math.round((sums[k]/counts[k])*100)/100:0;
  });
  /* Ordina: score desc, parità → tratti con più affermazioni (×2) vincono */
  var traitsWithTwo={BUSSOLA:1,FUOCO:1,RADICE:1,VENTO:1,MAPPA:1,FILO:1,PALCO:1,RITMO:1};
  var sorted=Object.keys(scores).sort(function(a,b){
    if(scores[b]!==scores[a])return scores[b]-scores[a];
    return (traitsWithTwo[b]||0)-(traitsWithTwo[a]||0);
  });
  return{top3:sorted.slice(0,3),scores:scores,sorted:sorted};
}

/* ══ SECTION TOGGLE ══ */
function showSection(id){
  document.querySelectorAll('.page-section').forEach(function(s){
    s.classList.remove('active');
    s.style.display='none';
    s.style.height='0';
    s.style.overflow='hidden';
    s.style.visibility='hidden';
  });
  var target=document.getElementById(id);
  if(!target)return;
  target.classList.add('active');
  target.style.display='block';
  target.style.height='auto';
  target.style.overflow='visible';
  target.style.visibility='visible';
  target.style.minHeight='100vh';
  target.style.position='relative';
  target.style.zIndex='9000';
  target.style.background='var(--k-bg)';
  var el=target;
  while(el.parentElement){
    el=el.parentElement;
    el.style.overflow='visible';
    if(el.scrollTop>0)el.scrollTop=0;
  }
  window.scrollTo(0,0);
  document.documentElement.scrollTop=0;
  document.body.scrollTop=0;
  setTimeout(function(){window.scrollTo(0,0);},50);
}

/* ══ QUIZ FLOW ══ */
function startQuiz(){
  currentQ=0;
  answers=new Array(STATEMENTS.length).fill(null);
  renderStatement();
  showSection('sec-quiz');
  if(typeof gtag==='function')gtag('event','quiz_started',{event_category:'quiz'});
  if(typeof dataLayer!=='undefined')dataLayer.push({event:'quiz_started'});
}

function renderStatement(){
  var s=STATEMENTS[currentQ];
  var pct=Math.round(((currentQ+1)/STATEMENTS.length)*100);
  document.getElementById('prog-label').textContent=(currentQ+1)+' / '+STATEMENTS.length;
  document.getElementById('prog-fill').style.width=pct+'%';
  document.getElementById('q-text').textContent=s.text;
  document.getElementById('q-counter-current').textContent=String(currentQ+1).padStart(2,'0');
  /* Reset dots — force clean state */
  document.querySelectorAll('.likert-dot').forEach(function(d){
    d.classList.remove('selected');
    d.querySelector('span').style.background='';
    d.querySelector('span').style.boxShadow='';
    d.querySelector('span').style.transform='';
  });
  /* If already answered (shouldn't happen — no back), highlight */
  if(answers[currentQ]!==null){
    var sel=document.querySelector('.likert-dot[data-val="'+answers[currentQ]+'"]');
    if(sel)sel.classList.add('selected');
  }
}

function selectLikert(val){
  answers[currentQ]=val;
  /* Visual feedback */
  document.querySelectorAll('.likert-dot').forEach(function(d){
    d.classList.remove('selected');
    d.classList.remove('flash');
  });
  var sel=document.querySelector('.likert-dot[data-val="'+val+'"]');
  if(sel){
    sel.classList.add('selected');
    /* Flash animation */
    void sel.offsetWidth;
    sel.classList.add('flash');
  }
  /* Analytics */
  if(typeof gtag==='function')gtag('event','quiz_answer',{event_category:'quiz',event_label:'q'+(currentQ+1),value:val});
  if(typeof dataLayer!=='undefined')dataLayer.push({event:'quiz_answer',question:currentQ+1,answer:val});
  /* Auto-advance after flash */
  var answeredQ=currentQ;
  setTimeout(function(){
    if(currentQ===answeredQ&&answers[answeredQ]!==null)advanceQuiz();
  },AUTO_ADVANCE_DELAY);
}

function advanceQuiz(){
  if(answers[currentQ]===null)return;
  if(currentQ<STATEMENTS.length-1){
    var card=document.getElementById('q-card');
    card.classList.add('exiting');
    setTimeout(function(){
      currentQ++;
      renderStatement();
      card.classList.remove('exiting');
      card.classList.add('entering');
      setTimeout(function(){card.classList.remove('entering');},300);
    },200);
  }else{
    /* Quiz completed */
    var results=calcResults();
    showFormSection(results);
  }
}

function showFormSection(results){
  /* Show loading screen first */
  showSection('sec-loading');
  var bar=document.getElementById('loading-bar');
  if(bar){bar.style.animation='none';bar.offsetHeight;bar.style.animation='gradientShift 4s ease infinite,loadingFill 2.4s cubic-bezier(.4,0,.2,1) forwards';}
  if(typeof gtag==='function')gtag('event','quiz_completed',{event_category:'quiz'});
  if(typeof dataLayer!=='undefined')dataLayer.push({event:'quiz_completed'});
  /* After loading animation, show form */
  setTimeout(function(){
    var tc=document.querySelector('.score-blur');
    if(tc){
      var h='';
      results.top3.forEach(function(t){
        h+='<span style="background:var(--k-bg-warm);border:1px solid rgba(242,183,5,.3);padding:8px 18px;border-radius:100px;font-weight:600;font-size:13px;">'+TRAITS[t].name+'</span>';
      });
      tc.innerHTML=h;
    }
    showSection('sec-form');
    mountEmailForm(results);
  },2800);
}

/* ══ EMAIL FORM PLACEHOLDER ══
   Sostituisci questa funzione con la tua integrazione form.
   results contiene: results.top3, results.scores, results.sorted
   Al submit, redirect a: /grazie-quiz/?d= + encodeURIComponent(btoa(JSON.stringify({...})))
*/
function mountEmailForm(results){
  var c=document.getElementById('email-form-container');
  if(!c)return;
  c.innerHTML='<form id="quiz-email-form" style="text-align:left;">'
    +'<label style="font-size:13px;color:var(--k-gray-500);font-weight:500;margin-bottom:6px;display:block;">Email</label>'
    +'<input type="email" id="quiz-email" required placeholder="la-tua@email.com" style="width:100%;background:var(--k-gray-50);border:1.5px solid var(--k-gray-200);border-radius:12px;padding:14px 16px;font-family:var(--font-body);font-size:15px;color:var(--k-black);outline:none;transition:all .2s;margin-bottom:14px;box-sizing:border-box;">'
    +'<button type="submit" style="width:100%;background:var(--k-black);color:var(--k-white);font-family:var(--font-body);font-size:15px;font-weight:600;border:none;border-radius:100px;padding:16px 24px;cursor:pointer;margin-top:8px;transition:all .2s;">Scopri il tuo Karakter</button>'
    +'</form>';
  document.getElementById('quiz-email-form').addEventListener('submit',function(e){
    e.preventDefault();
    var email=document.getElementById('quiz-email').value;
    /* PLACEHOLDER: invia dati al tuo backend/CRM */
    console.log('Form submitted — email:',email,'results:',results);
    var p=btoa(JSON.stringify({top3:results.top3,scores:results.scores,sorted:results.sorted}));
    window.location.href='/grazie-quiz/?d='+encodeURIComponent(p);
  });
}

/* ══ LIKERT DOT CLICK HANDLERS ══ */
(function(){
  document.querySelectorAll('.likert-dot').forEach(function(dot){
    dot.addEventListener('click',function(){
      var val=parseInt(this.getAttribute('data-val'),10);
      selectLikert(val);
    });
  });
})();

/* ══ KEYBOARD NAV ══ */
document.addEventListener('keydown',function(e){
  if(!document.getElementById('sec-quiz'))return;
  if(!document.getElementById('sec-quiz').classList.contains('active'))return;
  var key=e.key;
  /* 1–6 per selezionare */
  if(['1','2','3','4','5','6'].indexOf(key)!==-1){selectLikert(parseInt(key,10));}
  /* Enter per avanzare */
  if(key==='Enter'&&answers[currentQ]!==null)advanceQuiz();
});