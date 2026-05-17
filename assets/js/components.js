/**
 * DeployStacker — Shared Components
 * Injects Navbar, Mobile Nav, Footer, Preloader, Scroll-Top
 */

(function injectComponents() {

  /* ---- PRELOADER REMOVED ---- */
  const preloaderHTML = ``;

  /* ---- NAVBAR ---- */
  const navbarHTML = `
  <nav class="navbar">
    <div class="container">
      <div class="navbar-inner">
        <a href="index.html" class="navbar-logo">
          <img src="assets/images/logo.svg" alt="DeployStacker" height="44">
        </a>
        <ul class="navbar-menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li>
            <a href="services.html">Services <span class="nav-arrow">▾</span></a>
            <ul class="dropdown-menu">
              <li><a href="services.html#web-dev">Web Development</a></li>
              <li><a href="services.html#fullstack">Full Stack Development</a></li>
              <li><a href="services.html#ai">AI Automation</a></li>
              <li><a href="services.html#uiux">UI/UX Design</a></li>
              <li><a href="services.html#seo">SEO Optimization</a></li>
              <li><a href="services.html#saas">SaaS Development</a></li>
              <li><a href="services.html#ecommerce">E-Commerce</a></li>
            </ul>
          </li>
          <li>
            <a href="portfolio.html">Pages <span class="nav-arrow">▾</span></a>
            <ul class="dropdown-menu">
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="team.html">Our Team</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="testimonials.html">Testimonials</a></li>
              <li><a href="faq.html">FAQs</a></li>
            </ul>
          </li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <div class="navbar-actions">
          <a href="contact.html" class="btn btn-primary">
            Get Started
            <span class="btn-icon">→</span>
          </a>
          <button class="hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Mobile Nav Overlay -->
  <div class="mobile-nav-overlay"></div>

  <!-- Mobile Nav -->
  <div class="mobile-nav">
    <button class="mobile-nav-close" aria-label="Close">✕</button>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
      <li><a href="team.html">Our Team</a></li>
      <li><a href="pricing.html">Pricing</a></li>
      <li><a href="testimonials.html">Testimonials</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="faq.html">FAQs</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="mobile-nav-footer">
      <a href="contact.html" class="btn btn-primary w-100" style="justify-content:center;">Get Started →</a>
    </div>
  </div>`;

  /* ---- FOOTER ---- */
  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="footer-logo">
            <img src="assets/images/logo-white.svg" alt="DeployStacker" height="50">
          </a>
          <p>We are a premium web development and AI automation agency delivering modern, high-performing digital experiences for ambitious brands.</p>
          <div class="footer-social">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Dribbble">🏀</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Our Services</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="blog.html">Our Blog</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Our Services</h4>
          <ul class="footer-links">
            <li><a href="services.html#web-dev">Web Development</a></li>
            <li><a href="services.html#fullstack">Full Stack Development</a></li>
            <li><a href="services.html#ai">AI Automation</a></li>
            <li><a href="services.html#uiux">UI/UX Design</a></li>
            <li><a href="services.html#seo">SEO Optimization</a></li>
            <li><a href="services.html#ecommerce">E-Commerce Dev</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact Info</h4>
          <div class="footer-contact-item">
            <i>📞</i>
            <a href="tel:+919996005270">+91 99960 05270</a>
          </div>
          <div class="footer-contact-item">
            <i>📧</i>
            <a href="mailto:deploystacker@gmail.com">deploystacker@gmail.com</a>
          </div>
          <div class="footer-contact-item">
            <i>📍</i>
            <span>Panipat, Haryana, India</span>
          </div>
          <div class="footer-contact-item">
            <i>🕐</i>
            <span>Mon–Fri: 10:00 AM – 6:00 PM IST</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 DeployStacker. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scroll to Top -->
  <button class="scroll-top" aria-label="Scroll to top">↑</button>`;

  /* ---- INJECT ---- */
  // Navbar + preloader: inject immediately at top of body (script runs inline)
  document.body.insertAdjacentHTML('afterbegin', preloaderHTML + navbarHTML);

  // Footer: must wait for DOM to be fully parsed so it lands at the bottom
  function injectFooter() {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
  } else {
    // DOM already ready (shouldn't happen here, but safe fallback)
    injectFooter();
  }

})();
