/* ═══════════════════════════════════════════════════════════
   KARAKTER · LP Master K-Coach — script v2
   Reveal on scroll, marker sweep, progress bar, count-up,
   FAQ accordion, radar Reiss 16 punte, countdown, recensioni
   espandibili, barra posti. Vanilla, zero librerie.
   Scoped su #master-app.
   ═══════════════════════════════════════════════════════════ */
(function () {
  var app = document.getElementById('master-app');
  if (!app) return;
  app.classList.add('js-on'); /* senza JS la pagina resta interamente visibile */

  /* ── Reveal on scroll + marker sweep ── */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      e.target.querySelectorAll('.mark').forEach(function (m) { m.classList.add('is-on'); });
      if (e.target.classList.contains('mark')) e.target.classList.add('is-on');
      io.unobserve(e.target);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });

  app.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
  app.querySelectorAll('.mark').forEach(function (el) { io.observe(el); });

  /* ── Progress bar topbar ── */
  var prog = document.getElementById('scrollProgress');
  if (prog) {
    var onScroll = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      prog.style.transform = 'scaleX(' + (max > 0 ? h.scrollTop / max : 0) + ')';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Count-up numeri ── */
  var counters = app.querySelectorAll('[data-count]');
  var cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      var el = e.target, target = parseInt(el.getAttribute('data-count'), 10);
      var start = null, dur = 1400;
      var from = target > 1000 ? target - 90 : 0; /* 2011 parte da 1921, non da 0 */
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(from + (target - from) * eased));
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  counters.forEach(function (el) { cio.observe(el); });

  /* ── FAQ accordion ── */
  app.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var open = item.classList.contains('open');
      app.querySelectorAll('.faq-item.open').forEach(function (o) {
        o.classList.remove('open');
        o.querySelector('.faq-a').style.maxHeight = '0px';
      });
      if (!open) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ── Smooth scroll anchor (compensa topbar) ── */
  app.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (ev) {
      var id = link.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      ev.preventDefault();
      var y = target.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  /* ── Radar Reiss: 16 punte generate via SVG ── */
  var radar = document.getElementById('reissRadar');
  if (radar) {
    var NS = 'http://www.w3.org/2000/svg';
    var cx = 200, cy = 150, R = 118;
    var vals = [.82, .55, .9, .48, .7, .62, .95, .4, .75, .58, .88, .5, .68, .8, .45, .72];
    var g = function (tag, attrs) {
      var el = document.createElementNS(NS, tag);
      for (var k in attrs) el.setAttribute(k, attrs[k]);
      return el;
    };
    [0.33, 0.66, 1].forEach(function (r) {
      radar.appendChild(g('circle', { cx: cx, cy: cy, r: R * r, fill: 'none', stroke: 'rgba(234,241,251,.14)', 'stroke-width': 1 }));
    });
    for (var i = 0; i < 16; i++) {
      var ang = (Math.PI * 2 * i) / 16 - Math.PI / 2;
      radar.appendChild(g('line', {
        x1: cx, y1: cy,
        x2: cx + Math.cos(ang) * R, y2: cy + Math.sin(ang) * R,
        stroke: 'rgba(234,241,251,.1)', 'stroke-width': 1
      }));
    }
    var pts = vals.map(function (v, i) {
      var ang = (Math.PI * 2 * i) / 16 - Math.PI / 2;
      return (cx + Math.cos(ang) * R * v) + ',' + (cy + Math.sin(ang) * R * v);
    }).join(' ');
    var grad = g('linearGradient', { id: 'rg', x1: '0', y1: '0', x2: '1', y2: '1' });
    grad.appendChild(g('stop', { offset: '0%', 'stop-color': '#2F80ED', 'stop-opacity': '.55' }));
    grad.appendChild(g('stop', { offset: '100%', 'stop-color': '#A3E635', 'stop-opacity': '.4' }));
    var defs = g('defs', {}); defs.appendChild(grad); radar.appendChild(defs);
    radar.appendChild(g('polygon', { points: pts, fill: 'url(#rg)', stroke: '#A3E635', 'stroke-width': 1.5, 'stroke-linejoin': 'round' }));
    vals.forEach(function (v, i) {
      var ang = (Math.PI * 2 * i) / 16 - Math.PI / 2;
      radar.appendChild(g('circle', {
        cx: cx + Math.cos(ang) * R * v, cy: cy + Math.sin(ang) * R * v,
        r: 3, fill: '#A3E635'
      }));
    });
    var label = g('text', { x: cx, y: cy + 4, 'text-anchor': 'middle', fill: 'rgba(234,241,251,.85)', 'font-size': '13', 'font-weight': '700', 'letter-spacing': '2', 'font-family': 'Inter Tight, sans-serif' });
    label.textContent = '16 MOTIVAZIONI';
    radar.appendChild(label);
  }

  /* ── Countdown (target in data-deadline, ISO) ── */
  var cds = app.querySelectorAll('.cd[data-deadline]');
  if (cds.length) {
    var pad = function (n) { return n < 10 ? '0' + n : String(n); };
    var tick = function () {
      cds.forEach(function (cd) {
        var diff = new Date(cd.getAttribute('data-deadline')).getTime() - Date.now();
        if (diff < 0) diff = 0;
        var d = Math.floor(diff / 86400000),
            h = Math.floor(diff / 3600000) % 24,
            m = Math.floor(diff / 60000) % 60,
            s = Math.floor(diff / 1000) % 60;
        var set = function (k, v) {
          var el = cd.querySelector('[data-cd="' + k + '"]');
          if (el) el.textContent = v;
        };
        set('d', d); set('h', pad(h)); set('m', pad(m)); set('s', pad(s));
      });
    };
    tick();
    setInterval(tick, 1000);
  }

  /* ── Recensioni: espandi ── */
  var tExpand = document.getElementById('tExpand');
  var tMore = document.getElementById('tMore');
  if (tExpand && tMore) {
    tExpand.addEventListener('click', function () {
      tMore.classList.add('show');
      tMore.querySelectorAll('.rv').forEach(function (el) { el.classList.add('is-in'); });
      tExpand.style.display = 'none';
    });
  }

  /* ── Barra posti disponibili ── */
  var fill = app.querySelector('.seats-fill');
  if (fill) {
    var fio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        fill.style.width = (fill.getAttribute('data-fill') || 60) + '%';
        fio.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    fio.observe(fill);
  }

  /* ── Video placeholder: il play porta al form finché non c'è il video ── */
  var play = app.querySelector('.play');
  if (play) {
    play.addEventListener('click', function () {
      var v = app.querySelector('.video-frame video');
      if (v) { v.play(); } else {
        var t = document.getElementById('richiedi');
        if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 76, behavior: 'smooth' });
      }
    });
  }
})();
