/**
 * Creative Net — Scroll Effects (Palantir-inspired)
 * Lightweight IntersectionObserver-based scroll-reveal + hero parallax fallback.
 * Respects prefers-reduced-motion. No external dependencies.
 */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Scroll Reveal ──────────────────────────────────────────────────────────
  var revealElements = document.querySelectorAll('.scroll-reveal');

  if (prefersReducedMotion) {
    // Immediately show everything — no animation
    revealElements.forEach(function (el) {
      el.classList.add('scroll-reveal--visible');
    });
  } else if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal--visible');
            revealObserver.unobserve(entry.target); // one-shot
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: just show everything
    revealElements.forEach(function (el) {
      el.classList.add('scroll-reveal--visible');
    });
  }

  // ── Data-Parallax Engine ───────────────────────────────────────────────────
  if (!prefersReducedMotion) {
    var parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length > 0) {
      var ticking = false;

      window.addEventListener('scroll', function () {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            var scrollY = window.pageYOffset;
            var windowHeight = window.innerHeight;

            parallaxElements.forEach(function (el) {
              var rect = el.getBoundingClientRect();

              // Only apply transform if element is somewhat near or in the viewport
              if (rect.top <= windowHeight + 200 && rect.bottom >= -200) {
                var speed = parseFloat(el.getAttribute('data-parallax')) || 0;
                var yPos = scrollY * speed;
                el.style.transform = 'translate3d(0, ' + yPos + 'px, 0)';
              }
            });

            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }
  }
})();
