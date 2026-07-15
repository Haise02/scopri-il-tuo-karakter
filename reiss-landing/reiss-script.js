/* =========================================================
   KARAKTER · Landing Test Reiss — reiss-script.js · DESIGN v2
   Vanilla puro, zero dipendenze esterne. Tutto dentro #reiss-app.
   ========================================================= */
(function () {
  "use strict";

  function boot() {
    var app = document.getElementById("reiss-app");
    if (!app) return;
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---- smooth scroll su anchor interni ---- */
    app.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var t = document.querySelector(id);
        if (!t) return;
        e.preventDefault();
        var y = t.getBoundingClientRect().top + window.pageYOffset - 72;
        window.scrollTo({ top: y, behavior: reduced ? "auto" : "smooth" });
      });
    });

    /* ---- nav scrolled + progress bar ---- */
    var nav = app.querySelector(".nav");
    var bar = app.querySelector(".reiss-bar");
    var onScroll = function () {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (nav) nav.classList.toggle("scrolled", y > 30);
      if (bar) {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---- reveal (rise + clip) ---- */
    var revealEls = app.querySelectorAll("[data-rise],[data-clip]");
    if (("IntersectionObserver" in window) && !reduced) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
      revealEls.forEach(function (el) { io.observe(el); });

      /* gruppi con stagger: aggiunge .in al contenitore (per la linea "come funziona") */
      app.querySelectorAll("[data-stagger]").forEach(function (grid) {
        var gio = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) { en.target.classList.add("in"); gio.unobserve(en.target); }
          });
        }, { threshold: 0.12 });
        gio.observe(grid);
      });
    } else {
      revealEls.forEach(function (el) { el.classList.add("in"); });
      app.querySelectorAll("[data-stagger]").forEach(function (g) { g.classList.add("in"); });
    }

    /* COME FUNZIONA — step che si illuminano in sequenza 1 → 2 → 3 allo scroll */
    (function () {
      var how = app.querySelector(".how__grid");
      if (!how) return;
      var steps = Array.prototype.slice.call(how.querySelectorAll(".scard"));
      function fire() {
        how.classList.add("in");
        steps.forEach(function (s, i) { setTimeout(function () { s.classList.add("lit"); }, 400 + i * 700); });
      }
      if (("IntersectionObserver" in window) && !reduced) {
        var hio = new IntersectionObserver(function (es) {
          es.forEach(function (e) { if (e.isIntersecting) { fire(); hio.unobserve(e.target); } });
        }, { threshold: 0.4 });
        hio.observe(how);
      } else {
        how.classList.add("in");
        steps.forEach(function (s) { s.classList.add("lit"); });
      }
    })();

    /* ---- FACSIMILE PROFILO REISS: barre dal centro ---- */
    (function () {
      var fp = app.querySelector(".fp");
      if (!fp) return;
      var bars = Array.prototype.slice.call(fp.querySelectorAll(".frow__b"));
      function place(b, animate) {
        var v = Math.max(0, Math.min(1, parseFloat(b.getAttribute("data-v")) || 0));
        var side = b.getAttribute("data-side") || "p";
        var half = v * 50;
        var dot = b.parentNode.querySelector(".frow__dot");
        if (side === "n") {
          b.style.left = "auto"; b.style.right = "50%";
          if (dot) dot.style.left = (50 - half) + "%";
        } else {
          b.style.right = "auto"; b.style.left = "50%";
          if (dot) dot.style.left = (50 + half) + "%";
        }
        b.style.width = animate ? half + "%" : "0%";
      }
      bars.forEach(function (b) { place(b, false); });
      var play = function () {
        fp.classList.add("in");
        bars.forEach(function (b, i) { setTimeout(function () { place(b, true); }, 100 + i * 55); });
      };
      if (("IntersectionObserver" in window) && !reduced) {
        var pio = new IntersectionObserver(function (es) {
          es.forEach(function (e) { if (e.isIntersecting) { play(); pio.unobserve(e.target); } });
        }, { threshold: 0.3 });
        pio.observe(fp);
      } else {
        bars.forEach(function (b) { place(b, true); }); fp.classList.add("in");
      }
    })();

    /* ---- COUNT-UP ---- */
    app.querySelectorAll("[data-count]").forEach(function (el) {
      var end = parseFloat(el.dataset.count);
      var suffix = el.dataset.suffix || "";
      var run = function () {
        if (reduced) { el.textContent = end + suffix; return; }
        var start = null, dur = 1500;
        var step = function (ts) {
          if (!start) start = ts;
          var p = Math.min(1, (ts - start) / dur);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(end * eased) + suffix;
          if (p < 1) requestAnimationFrame(step); else el.textContent = end + suffix;
        };
        requestAnimationFrame(step);
      };
      if ("IntersectionObserver" in window) {
        var cio = new IntersectionObserver(function (es) {
          es.forEach(function (e) { if (e.isIntersecting) { run(); cio.unobserve(e.target); } });
        }, { threshold: 0.6 });
        cio.observe(el);
      } else { run(); }
    });

    /* ---- ACCORDION ---- */
    app.querySelectorAll("[data-accordion]").forEach(function (acc) {
      var items = acc.querySelectorAll(".acc");
      items.forEach(function (item) {
        var t = item.querySelector(".acc__t");
        var p = item.querySelector(".acc__p");
        if (!t || !p) return;
        t.addEventListener("click", function () {
          var open = item.classList.contains("open");
          items.forEach(function (o) {
            if (o !== item) { o.classList.remove("open"); var op = o.querySelector(".acc__p"); if (op) op.style.height = "0px"; }
          });
          if (open) { item.classList.remove("open"); p.style.height = "0px"; }
          else { item.classList.add("open"); p.style.height = p.scrollHeight + "px"; }
        });
      });
    });

    /* ---- FORM demo (placeholder — sostituire con Brevo) ---- */
    var form = app.querySelector("#reissForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }
        var msg = app.querySelector("#reissFormMsg");
        if (msg) msg.hidden = false;
        form.querySelectorAll("input").forEach(function (i) { i.value = ""; });
        var sel = form.querySelector("select"); if (sel) sel.selectedIndex = 0;
      });
    }

    /* ---- video CTA autoplay robusto ---- */
    (function () {
      var v = app.querySelector(".cta__vid");
      if (!v) return;
      v.muted = true; v.defaultMuted = true; v.setAttribute("muted", ""); v.playsInline = true;
      var tryPlay = function () { var p = v.play(); if (p && p.catch) p.catch(function () {}); };
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) tryPlay(); }); }, { threshold: .15 }).observe(v);
      }
      ["canplay", "loadeddata"].forEach(function (ev) { v.addEventListener(ev, tryPlay); });
      ["pointerdown", "scroll", "touchstart", "keydown"].forEach(function (ev) {
        window.addEventListener(ev, tryPlay, { once: true, passive: true });
      });
      tryPlay();
    })();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
