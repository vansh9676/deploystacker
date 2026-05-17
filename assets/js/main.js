/**
 * DeployStacker — Main JavaScript
 * Premium Web Agency
 */

'use strict';

/* Preloader removed */

/* ============================================================
   NAVBAR — scroll behaviour + mobile toggle
   ============================================================ */
(function initNavbar() {
  const navbar  = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay   = document.querySelector('.mobile-nav-overlay');
  const closeBtn  = document.querySelector('.mobile-nav-close');

  // Scroll
  const onScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile open
  const openMobile = () => {
    hamburger?.classList.add('open');
    mobileNav?.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeMobile = () => {
    hamburger?.classList.remove('open');
    mobileNav?.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  };

  hamburger?.addEventListener('click', openMobile);
  closeBtn?.addEventListener('click', closeMobile);
  overlay?.addEventListener('click', closeMobile);

  // Close on nav link click
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', closeMobile);
  });

  // Active link highlight
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-menu a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === currentPath || href.includes(currentPath))) {
      a.classList.add('active');
    }
  });
})();

/* ============================================================
   SCROLL-TO-TOP BUTTON
   ============================================================ */
(function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ============================================================
   INTERSECTION OBSERVER — fade-up / fade-in / scale-in
   ============================================================ */
(function initAnimations() {
  const els = document.querySelectorAll('.fade-up, .fade-in, .scale-in');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target   = parseInt(el.dataset.count, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1800;
    const step     = 16;
    const increment = target / (duration / step);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
(function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      items.forEach(i => i.classList.remove('open'));
      // Toggle current
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ============================================================
   PORTFOLIO FILTER
   ============================================================ */
(function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.portfolio-card[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.opacity    = show ? '1' : '0.3';
        card.style.transform  = show ? 'scale(1)' : 'scale(0.95)';
        card.style.pointerEvents = show ? '' : 'none';
      });
    });
  });
})();

/* ============================================================
   TESTIMONIALS AUTO-SCROLL (duplicate track for seamless loop)
   ============================================================ */
(function initTestimonialsTrack() {
  const track = document.querySelector('.testimonials-track');
  if (!track) return;
  // Clone children for seamless loop
  const items = Array.from(track.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });
})();

/* ============================================================
   TICKER DUPLICATE
   ============================================================ */
(function initTicker() {
  const track = document.querySelector('.ticker-track');
  if (!track) return;
  const items = Array.from(track.children);
  items.forEach(item => track.appendChild(item.cloneNode(true)));
})();

/* ============================================================
   CONTACT FORM — basic validation + submit
   ============================================================ */
(function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const originalText = btn.innerHTML;

    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#ef4444';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });
    if (!valid) return;

    const endpoint = form.dataset.ajaxAction || form.getAttribute('action');
    if (!endpoint) return;

    btn.innerHTML = '<span>Sending…</span>';
    btn.disabled = true;

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (!res.ok) throw new Error('Form submit failed');

      btn.innerHTML = '<span>✓ Message Sent!</span>';
      btn.style.background = '#22c55e';
      form.reset();
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    } catch (err) {
      console.error(err);
      btn.innerHTML = '<span>Try Again</span>';
      btn.style.background = '#ef4444';
      btn.disabled = false;
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
      }, 2500);
    }
  });
})();

/* ============================================================
   SMOOTH ANCHOR SCROLL
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ============================================================
   LAZY LOAD IMAGES
   ============================================================ */
(function initLazyLoad() {
  const imgs = document.querySelectorAll('img[data-src]');
  if (!imgs.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });
  imgs.forEach(img => observer.observe(img));
})();

/* ============================================================
   HERO TEXT SPLIT ANIMATION (letter-by-letter)
   ============================================================ */
(function initHeroText() {
  const heroTitle = document.querySelector('.hero-title-animated');
  if (!heroTitle) return;

  const text = heroTitle.textContent;
  heroTitle.innerHTML = '';
  text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.cssText = `
      display: inline-block;
      opacity: 0;
      transform: translateY(20px);
      animation: letterIn 0.5s ease forwards;
      animation-delay: ${0.05 * i + 0.3}s;
    `;
    heroTitle.appendChild(span);
  });

  // Inject keyframe if not present
  if (!document.getElementById('letter-anim-style')) {
    const style = document.createElement('style');
    style.id = 'letter-anim-style';
    style.textContent = `
      @keyframes letterIn {
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }
})();
