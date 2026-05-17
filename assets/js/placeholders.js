/**
 * DeployStacker — Placeholder Image Generator
 * Replaces broken/missing images with beautiful SVG gradient placeholders
 */
(function() {
  const placeholders = {
    'about-main.jpg':     { label: 'Our Team at Work',       grad: ['#1a1a2e','#16213e'], icon: '💻' },
    'team-1.jpg':         { label: 'Arjun Sharma',           grad: ['#2d1b69','#11998e'], icon: '👨‍💻' },
    'team-2.jpg':         { label: 'Priya Nair',             grad: ['#c94b4b','#4b134f'], icon: '👩‍🎨' },
    'team-3.jpg':         { label: 'Rohan Verma',            grad: ['#134e5e','#71b280'], icon: '🤖' },
    'team-4.jpg':         { label: 'Sneha Kapoor',           grad: ['#373b44','#4286f4'], icon: '📈' },
    'portfolio-1.jpg':    { label: 'TechNova Solutions',     grad: ['#0f0c29','#302b63'], icon: '🌐' },
    'portfolio-2.jpg':    { label: 'CloudFlow Platform',     grad: ['#1a1a2e','#e94560'], icon: '☁️' },
    'portfolio-3.jpg':    { label: 'LuxeStore',              grad: ['#2c3e50','#fd746c'], icon: '🛒' },
    'portfolio-4.jpg':    { label: 'SmartOps AI',            grad: ['#0f2027','#203a43'], icon: '🤖' },
    'portfolio-5.jpg':    { label: 'Vertex Agency',          grad: ['#373b44','#4286f4'], icon: '🏢' },
    'portfolio-6.jpg':    { label: 'DataPulse Analytics',    grad: ['#134e5e','#71b280'], icon: '📊' },
    'blog-1.jpg':         { label: 'Web Dev Trends 2026',    grad: ['#1a1a2e','#EF4823'], icon: '📝' },
    'blog-2.jpg':         { label: 'AI Automation Guide',    grad: ['#0f2027','#2c5364'], icon: '🤖' },
    'blog-3.jpg':         { label: 'SEO Guide 2026',         grad: ['#134e5e','#71b280'], icon: '🔍' },
    'service-web.jpg':    { label: 'Web Development',        grad: ['#1a1a2e','#302b63'], icon: '🌐' },
    'service-ai.jpg':     { label: 'AI Automation',          grad: ['#0f2027','#203a43'], icon: '🤖' },
    'service-ecommerce.jpg': { label: 'E-Commerce',          grad: ['#2c3e50','#fd746c'], icon: '🛒' },
  };

  function makeSVGDataURL(label, grad, icon) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${grad[0]}"/>
          <stop offset="100%" stop-color="${grad[1]}"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <text x="400" y="260" font-size="80" text-anchor="middle" dominant-baseline="middle">${icon}</text>
      <text x="400" y="340" font-family="Inter,sans-serif" font-size="22" fill="rgba(255,255,255,0.7)" text-anchor="middle">${label}</text>
      <text x="400" y="375" font-family="Inter,sans-serif" font-size="14" fill="rgba(255,255,255,0.35)" text-anchor="middle">DeployStacker</text>
    </svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  function applyPlaceholders() {
    document.querySelectorAll('img').forEach(img => {
      const src = img.getAttribute('src') || '';
      const filename = src.split('/').pop();
      const ph = placeholders[filename];

      if (ph) {
        // Pre-set the placeholder immediately
        img.src = makeSVGDataURL(ph.label, ph.grad, ph.icon);
      }

      // Also handle any that fail to load
      img.addEventListener('error', function() {
        const fn = (this.getAttribute('src') || '').split('/').pop();
        const p = placeholders[fn] || { label: fn, grad: ['#1a1a2e','#333'], icon: '🖼️' };
        this.src = makeSVGDataURL(p.label, p.grad, p.icon);
        this.onerror = null;
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyPlaceholders);
  } else {
    applyPlaceholders();
  }
})();
