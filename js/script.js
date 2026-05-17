const PROJECT_DETAILS = {
  rcruisine: {
    title: "R-Cruisine by Richa",
    category: "Restaurant Website",
    stack: "HTML, CSS, JavaScript",
    image: "images/r-cruisine-by-richa.webp",
    link: "https://deploystacker-sudo.github.io/r-cruisine-by-richa-/",
    description:
      "Premium food business website with elegant section storytelling, responsive menu highlights, and a polished brand presentation tailored for restaurant conversions.",
    impact: [
      "Luxury-first visual identity for food and hospitality audience.",
      "Mobile responsive sections for menu browsing and enquiries.",
      "Stronger trust through premium presentation and clarity.",
    ],
  },
  callista: {
    title: "Callista Salon Website",
    category: "Salon & Beauty Website",
    stack: "HTML, CSS, JavaScript",
    image: "images/callista-salon.webp",
    link: "https://vansh9676.github.io/salon-website-callista/",
    description:
      "Luxury beauty brand experience designed for services discovery and appointment intent, with smooth transitions and a premium salon aesthetic.",
    impact: [
      "Conversion-focused page flow for service inquiries.",
      "Modern beauty branding with polished animated UI.",
      "Clear service visibility and mobile-first user journey.",
    ],
  },
  neurali: {
    title: "Neurali",
    category: "AI Startup Website",
    stack: "React, Modern UI/UX",
    image: "images/neurali.webp",
    link: "https://neurali.free.nf/",
    description:
      "Futuristic AI product website featuring advanced visual language, startup positioning, and motion-driven storytelling for high-growth products.",
    impact: [
      "Startup-ready digital identity for AI category positioning.",
      "High-end interaction layer for product storytelling.",
      "Cohesive messaging and modern trust-building sections.",
    ],
  },
  calctools: {
    title: "CalcTools",
    category: "SEO & Web Tools Platform",
    stack: "JavaScript, SEO Optimization",
    image: "images/calctools.webp",
    link: "https://calctools.co.in/",
    description:
      "Performance-led tools platform built around utility, speed, and search visibility to attract recurring organic traffic.",
    impact: [
      "SEO-friendly technical setup and crawl-ready structure.",
      "Utility-focused interface supporting repeat sessions.",
      "Fast-loading layout optimized for broader discoverability.",
    ],
  },
  udharbook: {
    title: "UdharBook",
    category: "Finance Web Application",
    stack: "JavaScript, Responsive Web App",
    image: "images/udharbook.webp",
    link: "https://vansh9676.github.io/Udharbook/",
    description:
      "Practical digital credit and expense tracking experience tailored for small businesses and individual financial record workflows.",
    impact: [
      "Simple experience for everyday financial logging.",
      "Responsive app flow usable across mobile and desktop.",
      "Improved record clarity for local business operations.",
    ],
  },
  demo: {
    title: "Demo Business Website",
    category: "Business Website",
    stack: "HTML, CSS, JavaScript",
    image: "images/demo-business-website.webp",
    link: "https://vansh9676.github.io/demo_website/",
    description:
      "Clean conversion-first business website balancing visual polish with direct CTA pathways for lead generation.",
    impact: [
      "Sharper first impression for business credibility.",
      "Focused structure designed for lead capture.",
      "Mobile-first layout for wider regional accessibility.",
    ],
  },
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
const isMobileViewport = window.matchMedia("(max-width: 1023px)").matches;
const lowMotionMode = reduceMotion || isTouchDevice || isMobileViewport;

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function initLoader() {
  const loader = qs("[data-loader]");
  if (!loader) return;

  const done = () => {
    loader.classList.add("hide");
    setTimeout(() => loader.remove(), 650);
  };

  if (document.readyState === "complete") {
    setTimeout(done, 220);
  } else {
    window.addEventListener("load", () => setTimeout(done, 220), { once: true });
  }
}

function initHeader() {
  const header = qs(".site-header");
  const progress = qs(".page-top-progress");
  if (!header && !progress) return;

  const update = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 18);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? y / max : 0;
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    }
  };

  update();
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    },
    { passive: true }
  );
}

function initMobileNav() {
  const navToggle = qs("[data-nav-toggle]");
  const navMenu = qs("[data-nav-menu]");
  if (!navToggle || !navMenu) return;

  const close = () => {
    navMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });

  qsa("a", navMenu).forEach((link) => {
    link.addEventListener("click", close);
  });

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth >= 1024) close();
    },
    { passive: true }
  );
}

function initSmoothAnchors() {
  qsa('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = qs(targetId);
      if (!target) return;
      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    });
  });
}

function initMouseGlow() {
  const glow = qs(".mouse-glow");
  if (!glow || lowMotionMode || !hasFinePointer) return;

  let nextX = window.innerWidth / 2;
  let nextY = window.innerHeight / 2;
  let raf = 0;

  const updateGlow = () => {
    raf = 0;
    glow.style.transform = `translate3d(${nextX - 110}px, ${nextY - 110}px, 0)`;
  };

  window.addEventListener(
    "mousemove",
    (event) => {
      nextX = event.clientX;
      nextY = event.clientY;
      if (raf) return;
      raf = requestAnimationFrame(updateGlow);
    },
    { passive: true }
  );

  updateGlow();
}

function initRevealAnimations() {
  const revealEls = qsa(".reveal");
  const revealTextEls = qsa(".reveal-text");
  const all = [...revealEls, ...revealTextEls];
  if (!all.length) return;

  all.forEach((el) => {
    if (el.closest(".hero, .inner-hero")) {
      el.classList.add("revealed");
    }
  });

  if (lowMotionMode) {
    all.forEach((el) => el.classList.add("revealed"));
    return;
  }

  revealTextEls.forEach((el) => {
    if (el.dataset.splitDone) return;
    if (el.children.length > 0) {
      el.dataset.splitDone = "true";
      return;
    }

    const words = el.textContent.trim().split(/\s+/);
    el.textContent = "";
    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.textContent = word;
      span.style.transitionDelay = `${index * 38}ms`;
      el.appendChild(span);
      if (index !== words.length - 1) {
        el.appendChild(document.createTextNode(" "));
      }
    });
    el.dataset.splitDone = "true";
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
  );

  all.forEach((el) => {
    if (!el.classList.contains("revealed")) observer.observe(el);
  });
}

function initParallax() {
  if (lowMotionMode) return;
  const nodes = qsa("[data-parallax-target]").slice(0, 2);
  if (!nodes.length) return;

  let scrollY = window.scrollY;
  let ticking = false;

  const update = () => {
    nodes.forEach((node) => {
      const speed = Number(node.dataset.parallax || "0.015") * 0.3;
      node.style.transform = `translate3d(0, ${(scrollY * speed).toFixed(2)}px, 0)`;
    });
  };

  update();
  window.addEventListener(
    "scroll",
    () => {
      scrollY = window.scrollY;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    },
    { passive: true }
  );
}

function initCounters() {
  const counters = qsa(".counter");
  if (!counters.length) return;

  const animateCounter = (counter) => {
    const target = Number(counter.dataset.target || "0");
    const suffix = counter.dataset.suffix || "";
    const duration = lowMotionMode ? 800 : 1100;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const value = Math.floor(progress * target);
      counter.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.45 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initParticles() {
  const canvas = qs(".particle-canvas");
  if (!canvas || lowMotionMode) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  let w = 0;
  let h = 0;
  let particles = [];
  let lastFrame = 0;
  const frameInterval = 1000 / 24;

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;

    if (w < 1400) {
      canvas.style.display = "none";
      particles = [];
      return;
    }

    canvas.style.display = "block";
    canvas.width = w;
    canvas.height = h;

    const count = Math.max(6, Math.min(12, Math.floor(w / 180)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.16,
      r: Math.random() * 1.2 + 0.4,
    }));
  }

  function draw(now = 0) {
    if (!particles.length) {
      requestAnimationFrame(draw);
      return;
    }

    if (now - lastFrame < frameInterval) {
      requestAnimationFrame(draw);
      return;
    }
    lastFrame = now;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(162, 217, 255, 0.23)";

    for (let i = 0; i < particles.length; i += 1) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize, { passive: true });
  resize();
  draw();
}

function initProjectModal() {
  const modal = qs("#projectModal");
  if (!modal) return;

  const titleEl = qs("[data-modal-title]", modal);
  const metaEl = qs("[data-modal-meta]", modal);
  const imageEl = qs("[data-modal-image]", modal);
  const descEl = qs("[data-modal-desc]", modal);
  const impactEl = qs("[data-modal-impact]", modal);
  const linkEl = qs("[data-modal-link]", modal);

  const open = (projectKey) => {
    const data = PROJECT_DETAILS[projectKey];
    if (!data) return;

    titleEl.textContent = data.title;
    metaEl.textContent = `${data.category} • ${data.stack}`;
    imageEl.src = data.image;
    imageEl.alt = `${data.title} live project preview`;
    descEl.textContent = data.description;
    impactEl.innerHTML = data.impact.map((item) => `<li>${item}</li>`).join("");
    linkEl.href = data.link;

    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  };

  qsa(".open-project-modal").forEach((button) => {
    button.addEventListener("click", () => open(button.dataset.project));
  });

  qsa("[data-close-modal]", modal).forEach((el) => {
    el.addEventListener("click", close);
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

function setupOptionChips(containerSelector, hiddenInputSelector) {
  const container = qs(containerSelector);
  const hidden = qs(hiddenInputSelector);
  if (!container || !hidden) return;

  const activeChip = qs(".option-chip.active", container);
  if (activeChip) {
    hidden.value = activeChip.dataset.value || activeChip.textContent.trim();
  } else {
    const firstChip = qs(".option-chip", container);
    if (firstChip) hidden.value = firstChip.dataset.value || firstChip.textContent.trim();
  }

  qsa(".option-chip", container).forEach((chip) => {
    chip.addEventListener("click", () => {
      qsa(".option-chip", container).forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
      hidden.value = chip.dataset.value || chip.textContent.trim();
    });
  });
}

function initBookingForm() {
  const form = qs("#bookingForm");
  if (!form) return;

  const steps = qsa(".form-step", form);
  const pills = qsa(".step-pill span", form);
  const successPopup = qs("#bookingSuccessPopup");
  const sendWhatsappBtn = qs("#sendWhatsappLead");

  let currentStep = 0;

  setupOptionChips("#budgetOptions", "#budgetHidden");
  setupOptionChips("#projectTypeOptions", "#projectTypeHidden");

  const updateSteps = () => {
    steps.forEach((step, index) => step.classList.toggle("active", index === currentStep));
    pills.forEach((pill, index) => {
      pill.style.width = index <= currentStep ? "100%" : "0";
    });
  };

  const validateStep = () => {
    const current = steps[currentStep];
    if (!current) return true;
    const requiredFields = qsa("[required]", current);
    return requiredFields.every((field) => {
      if (field.value.trim()) return true;
      field.reportValidity();
      return false;
    });
  };

  qsa("[data-next-step]", form).forEach((button) => {
    button.addEventListener("click", () => {
      if (!validateStep()) return;
      currentStep = Math.min(currentStep + 1, steps.length - 1);
      updateSteps();
    });
  });

  qsa("[data-prev-step]", form).forEach((button) => {
    button.addEventListener("click", () => {
      currentStep = Math.max(currentStep - 1, 0);
      updateSteps();
    });
  });

  const closeSuccess = () => {
    if (!successPopup) return;
    successPopup.classList.remove("show");
    document.body.style.overflow = "";
  };

  qs("#closeBookingPopup")?.addEventListener("click", closeSuccess);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!validateStep()) return;

    const data = new FormData(form);
    const endpoint = form.dataset.ajaxAction || form.getAttribute("action");
    const fallbackEndpoint = form.dataset.fallbackAction || "";
    const submitBtn = qs('[type="submit"]', form);
    const originalSubmitLabel = submitBtn ? submitBtn.innerHTML : "";

    if (!endpoint) return;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";
    }

    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const businessType = data.get("businessType") || "";
    const budget = data.get("budget") || "";
    const timeline = data.get("timeline") || "";
    const projectType = data.get("projectType") || "";
    const details = data.get("details") || "";

    const message = [
      "New inquiry from DeployStacker website:",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Business Type: ${businessType}`,
      `Project Type: ${projectType}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      `Project Details: ${details}`,
    ].join("\n");

    const waUrl = `https://wa.me/919996005270?text=${encodeURIComponent(message)}`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Form submit failed");

      if (sendWhatsappBtn) {
        sendWhatsappBtn.dataset.url = waUrl;
      }

      if (successPopup) {
        successPopup.classList.add("show");
        document.body.style.overflow = "hidden";
      }

      form.reset();
      qsa(".option-chip", form).forEach((chip) => chip.classList.remove("active"));
      currentStep = 0;
      updateSteps();
    } catch (error) {
      console.error(error);

      if (fallbackEndpoint) {
        try {
          const fallbackResponse = await fetch(fallbackEndpoint, {
            method: "POST",
            body: new FormData(form),
            headers: {
              Accept: "application/json",
            },
          });

          if (!fallbackResponse.ok) throw new Error("Fallback submit failed");

          if (sendWhatsappBtn) {
            sendWhatsappBtn.dataset.url = waUrl;
          }

          if (successPopup) {
            successPopup.classList.add("show");
            document.body.style.overflow = "hidden";
          }

          form.reset();
          qsa(".option-chip", form).forEach((chip) => chip.classList.remove("active"));
          currentStep = 0;
          updateSteps();
          return;
        } catch (fallbackError) {
          console.error(fallbackError);
        }
      }

      window.alert("Could not submit your inquiry. Please try again.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalSubmitLabel;
      }
    }
  });

  sendWhatsappBtn?.addEventListener("click", () => {
    const url = sendWhatsappBtn.dataset.url;
    if (url) window.open(url, "_blank", "noopener");
  });

  updateSteps();
}

function initGenericForms() {
  setupOptionChips("#contactServiceOptions", "#contactServiceHidden");

  qsa("form[data-form='mailto']").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get("name") || "";
      const email = data.get("email") || "";
      const phone = data.get("phone") || "";
      const message = data.get("message") || "";
      const details = data.get("details") || "";
      const subject = data.get("subject") || "New inquiry from DeployStacker website";

      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service Interest: ${message}`,
        `Details: ${details}`,
      ].join("\n");

      window.location.href = `mailto:deploystacker@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
}

function initYear() {
  qsa("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initHeader();
  initMobileNav();
  initSmoothAnchors();
  initMouseGlow();
  initRevealAnimations();
  initParallax();
  initCounters();
  initParticles();
  initProjectModal();
  initBookingForm();
  initGenericForms();
  initYear();
});
