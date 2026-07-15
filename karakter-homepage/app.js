/* ═══════════════════════════════════════════════════
   KARAKTER · Homepage v1 — Interactions
   GSAP + ScrollTrigger + SplitType + Lenis
   ═══════════════════════════════════════════════════ */

(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  /* ─────────────────────────────────────────────────
     LOADER (counter + drawK)
     ───────────────────────────────────────────────── */
  function runLoader() {
    const loader = document.getElementById('loader');
    const num = document.getElementById('loaderNum');
    if (!loader || !num) return Promise.resolve();

    return new Promise(resolve => {
      let v = 0;
      const target = 500;
      const dur = 1400;
      const start = performance.now();

      function tick(t) {
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        v = Math.round(eased * target);
        num.textContent = v;
        if (p < 1) requestAnimationFrame(tick);
        else {
          setTimeout(() => {
            loader.classList.add('is-done');
            setTimeout(resolve, 600);
          }, 150);
        }
      }
      requestAnimationFrame(tick);
    });
  }

  /* ─────────────────────────────────────────────────
     CUSTOM CURSOR (magnetic + hover scale)
     ───────────────────────────────────────────────── */
  function initCursor() {
    if (isTouch) return;
    const cursor = document.getElementById('cursor');
    const label = document.getElementById('cursorLabel');
    if (!cursor) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my;

    window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    function loop() {
      cx += (mx - cx) * 0.22;
      cy += (my - cy) * 0.22;
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(loop);
    }
    loop();

    // hover state per elementi marcati
    document.querySelectorAll('[data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('is-hover');
        const tag = el.getAttribute('data-cursor-label');
        if (tag && label) {
          label.textContent = tag;
          cursor.classList.add('has-label');
        }
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-hover');
        cursor.classList.remove('has-label');
      });
    });

    // hide su window leave
    document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
    document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
  }

  /* ─────────────────────────────────────────────────
     MAGNETIC BUTTONS
     ───────────────────────────────────────────────── */
  function initMagnetic() {
    if (isTouch || reduced) return;
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      const strength = parseFloat(el.getAttribute('data-magnetic-strength') || 0.4);
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * strength;
        const y = (e.clientY - rect.top - rect.height / 2) * strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* ─────────────────────────────────────────────────
     LENIS SMOOTH SCROLL
     ───────────────────────────────────────────────── */
  function initLenis() {
    if (typeof Lenis === 'undefined' || reduced) return null;
    const lenis = new Lenis({
      duration: 1.15,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id === '#' || id.length <= 1) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -60, duration: 1.6 });
      });
    });

    // sync ScrollTrigger
    if (window.ScrollTrigger) {
      lenis.on('scroll', () => ScrollTrigger.update());
      gsap.ticker.add(time => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    return lenis;
  }

  /* ─────────────────────────────────────────────────
     SPLIT TEXT REVEAL (hero headline)
     ───────────────────────────────────────────────── */
  function initSplitReveal() {
    if (typeof SplitType === 'undefined') return;
    const title = document.querySelector('[data-split]');
    if (!title) return;

    const split = new SplitType(title, { types: 'lines,words,chars', tagName: 'span' });

    gsap.set(split.chars, { yPercent: 110, opacity: 0 });
    gsap.to(split.chars, {
      yPercent: 0,
      opacity: 1,
      duration: 1.1,
      ease: 'expo.out',
      stagger: 0.014,
      delay: 0.1,
    });
  }

  /* ─────────────────────────────────────────────────
     REVEAL ON SCROLL
     ───────────────────────────────────────────────── */
  function initReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseFloat(entry.target.getAttribute('data-reveal-delay') || 0);
          setTimeout(() => entry.target.classList.add('is-in'), delay * 1000);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    els.forEach(el => obs.observe(el));
  }

  /* ─────────────────────────────────────────────────
     STATS COUNTER (number animation)
     ───────────────────────────────────────────────── */
  function initCounters() {
    const stats = document.querySelectorAll('[data-count]');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const dur = 1800;
        const start = performance.now();
        function tick(t) {
          const p = Math.min((t - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.4 });
    stats.forEach(s => obs.observe(s));
  }

  /* ─────────────────────────────────────────────────
     NAV scroll state
     ───────────────────────────────────────────────── */
  function initNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    function onScroll() {
      if (window.scrollY > 40) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─────────────────────────────────────────────────
     METHOD STICKY STORYTELLING (3 step pinned)
     ───────────────────────────────────────────────── */
  function initMethod() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('.method');
    const steps = gsap.utils.toArray('.step');
    const progressFill = document.getElementById('methodProgress');
    const labels = document.querySelectorAll('[data-step-label]');
    if (!section || !steps.length) return;

    function setActive(idx) {
      steps.forEach((s, i) => s.classList.toggle('is-active', i === idx));
      labels.forEach((l, i) => l.classList.toggle('is-active', i === idx));
      section.setAttribute('data-active', idx + 1);
      if (progressFill) {
        progressFill.style.width = `${((idx + 1) / steps.length) * 100}%`;
      }
    }

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: self => {
        const p = self.progress;
        const idx = Math.min(steps.length - 1, Math.floor(p * steps.length));
        setActive(idx);
      },
    });

    setActive(0);
  }

  /* ─────────────────────────────────────────────────
     12 TRAITS (popolazione + tilt 3D + click expand)
     ───────────────────────────────────────────────── */
  const TRAITS = [
    { name: 'Bussola',  hint: 'Guida con chiarezza, anche nell\'incertezza.',
      icon: '<path d="M12 2 L12 5 M12 19 L12 22 M2 12 L5 12 M19 12 L22 12 M5 5 L7 7 M17 17 L19 19 M5 19 L7 17 M17 7 L19 5 M12 8 L14 12 L12 16 L10 12 Z"/>' },
    { name: 'Fuoco',    hint: 'Accende, mantiene viva l\'energia.',
      icon: '<path d="M12 22 C7 22 4 18 4 14 C4 10 8 7 10 4 C10 8 14 8 15 11 C18 8 20 12 20 15 C20 19 16 22 12 22 Z M12 22 C10 22 9 20 9 18 C9 16 11 14 12 13 C13 14 15 16 15 18 C15 20 14 22 12 22 Z"/>' },
    { name: 'Mappa',    hint: 'Vede le strade, non solo i passi.',
      icon: '<path d="M3 6 L9 4 L15 6 L21 4 L21 18 L15 20 L9 18 L3 20 Z M9 4 L9 18 M15 6 L15 20"/>' },
    { name: 'Filo',     hint: 'Tiene insieme le storie senza forzarle.',
      icon: '<path d="M3 12 C6 12 6 6 9 6 C12 6 12 18 15 18 C18 18 18 12 21 12"/>' },
    { name: 'Radice',   hint: 'Solida nel valore, libera nella forma.',
      icon: '<path d="M12 2 L12 12 M12 12 L8 16 L6 22 M12 12 L16 16 L18 22 M12 12 L10 20 M12 12 L14 20"/>' },
    { name: 'Onda',     hint: 'Fluida, abbraccia il cambiamento.',
      icon: '<path d="M3 12 Q6 8 9 12 T15 12 T21 12 M3 16 Q6 12 9 16 T15 16 T21 16"/>' },
    { name: 'Scudo',    hint: 'Protegge lo spazio sicuro della relazione.',
      icon: '<path d="M12 2 L20 6 L20 12 C20 17 16 21 12 22 C8 21 4 17 4 12 L4 6 Z M9 12 L11 14 L15 10"/>' },
    { name: 'Palco',    hint: 'Tira fuori la voce, accende la presenza.',
      icon: '<path d="M3 18 L21 18 L19 8 L5 8 Z M8 18 L8 22 M16 18 L16 22 M10 8 L10 4 M14 8 L14 4 M12 4 L12 8"/>' },
    { name: 'Ponte',    hint: 'Connette mondi che non si parlavano.',
      icon: '<path d="M2 18 L22 18 M5 18 L5 10 L9 10 L9 18 M15 18 L15 10 L19 10 L19 18 M9 12 L15 12 M11 18 L11 22 M13 18 L13 22"/>' },
    { name: 'Ritmo',    hint: 'Sa quando incalzare, quando rallentare.',
      icon: '<path d="M3 12 L7 12 L9 6 L13 18 L15 9 L17 13 L21 13"/>' },
    { name: 'Lente',    hint: 'Mette a fuoco ciò che gli altri sfiorano.',
      icon: '<circle cx="10" cy="10" r="6"/><path d="M14.5 14.5 L20 20"/>' },
    { name: 'Vento',    hint: 'Spinge senza spingere, libera senza imporre.',
      icon: '<path d="M3 8 L13 8 C15 8 17 7 17 5 C17 3 15 2 14 3 M3 12 L18 12 C20 12 22 13 22 15 C22 17 20 18 19 17 M3 16 L11 16 C13 16 14 17 14 18 C14 19 13 20 12 20"/>' },
  ];

  function initTraits() {
    const grid = document.getElementById('traitsGrid');
    if (!grid) return;

    TRAITS.forEach((t, i) => {
      const num = String(i + 1).padStart(2, '0');
      const el = document.createElement('article');
      el.className = 'trait';
      el.setAttribute('data-cursor', 'hover');
      el.setAttribute('data-trait', t.name);
      el.innerHTML = `
        <span class="trait__num">${num}</span>
        <div class="trait__icon">
          <svg viewBox="0 0 24 24">${t.icon}</svg>
        </div>
        <div class="trait__body">
          <h3 class="trait__name">${t.name}</h3>
          <p class="trait__hint">${t.hint}</p>
        </div>
        <div class="trait__bottom">
          <span style="font-size:11px;letter-spacing:.1em;color:var(--text-dim);text-transform:uppercase">Tratto ${num}</span>
          <span class="trait__arrow">
            <svg viewBox="0 0 16 16" fill="none"><path d="M3 13 L13 3 M13 3 H7 M13 3 V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </div>
      `;
      grid.appendChild(el);
    });

    // tilt 3D su hover (desktop)
    if (!isTouch && !reduced) {
      document.querySelectorAll('.trait').forEach(card => {
        card.addEventListener('mousemove', e => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateZ(8px)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    }

    // entrata staggered on scroll
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.from('.trait', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'expo.out',
        stagger: { amount: 0.5, from: 'start' },
        scrollTrigger: {
          trigger: '.traits__grid',
          start: 'top 80%',
        },
      });
    }
  }

  /* ─────────────────────────────────────────────────
     BOOT
     ───────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', async () => {
    initNav();
    initCursor();
    initMagnetic();
    initReveal();
    initCounters();
    initTraits();
    initMethod();

    await runLoader();

    initLenis();
    initSplitReveal();
  });

})();
