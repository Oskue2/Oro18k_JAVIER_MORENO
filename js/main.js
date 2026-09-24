/* =========================================================
   CONFIGURACIÓN DEL NEGOCIO
   Edita estos datos y se actualizan en todo el sitio.
   ========================================================= */
const CONFIG = {
  // Número en formato internacional, solo dígitos (código de país + número). Ej: 573001234567
  whatsapp: '573108550126',
  phoneDisplay: '+57 310 855 0126',
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  address: 'Dirección del local\nCiudad, País',
  hours: 'Lunes a Sábado: 9:00 a.m. – 7:00 p.m.\nDomingos y festivos: cerrado',
  // Texto que se busca en Google Maps (dirección exacta o nombre del negocio)
  mapQuery: 'Javier Moreno Compra y Venta de Oro'
};

/* =========================================================
   CATÁLOGO
   image: ruta opcional (ej. 'images/anillos_18k.jpeg'). Si se
   deja vacía se muestra un ícono dorado de la categoría.
   ========================================================= */
const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'diamantado', label: 'Oro diamantado' },
  { id: 'pulseras', label: 'Pulseras' },
  { id: 'cadenas', label: 'Cadenas y collares' },
  { id: 'dijes', label: 'Dijes' },
  { id: 'anillos', label: 'Anillos' },
  { id: 'aretes', label: 'Aretes' }
];

const PRODUCTS = [
  { name: 'Pulsera tejido diamantado', category: 'diamantado', icon: 'bracelet', tag: 'Destacado', desc: 'Corte diamantado de alto brillo, cierre de seguridad.' },
  { name: 'Cadena diamantada', category: 'diamantado', icon: 'chain', desc: 'Eslabones con acabado diamantado que reflejan la luz.' },
  { name: 'Pulsera cartier', category: 'pulseras', icon: 'bracelet', desc: 'Diseño clásico y elegante para uso diario.' },
  { name: 'Pulsera rígida', category: 'pulseras', icon: 'bangle', desc: 'Esclava en oro 18K con acabado pulido.' },
  { name: 'Cadena tejido lazo', category: 'cadenas', icon: 'chain', desc: 'Varios largos y calibres disponibles.' },
  { name: 'Collar con dije', category: 'cadenas', icon: 'necklace', desc: 'Conjunto de cadena fina y dije a elección.' },
  { name: 'Dije de cruz', category: 'dijes', icon: 'cross', desc: 'Símbolo de fe en oro 18K con detalle diamantado.' },
  { name: 'Dije de corazón', category: 'dijes', icon: 'heart', tag: 'Regalo ideal', desc: 'Un detalle perfecto para esa persona especial.' },
  { name: 'Anillo solitario', category: 'anillos', icon: 'ring', desc: 'Elegancia atemporal para ocasiones especiales.' },
  { name: 'Argollas de matrimonio', category: 'anillos', icon: 'rings', tag: 'Personalizable', desc: 'Pareja de argollas, grabado disponible.' },
  { name: 'Aretes topo', category: 'aretes', icon: 'earring', desc: 'Pequeños y delicados, con roscas de seguridad.' },
  { name: 'Candongas', category: 'aretes', icon: 'hoop', desc: 'Argollas clásicas en diferentes tamaños.' }
];

const ICONS = {
  bracelet: '<svg viewBox="0 0 64 64"><ellipse cx="32" cy="32" rx="22" ry="12"/><ellipse cx="32" cy="32" rx="17" ry="8"/><path d="M13 27l4 3M19 22l3 4M27 20l1 4M36 20l-1 4M45 22l-3 4M51 27l-4 3"/></svg>',
  bangle: '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="20"/><circle cx="32" cy="32" r="15"/><path d="M28 12l4-4 4 4-4 4z"/></svg>',
  chain: '<svg viewBox="0 0 64 64"><rect x="6" y="26" width="16" height="12" rx="6"/><rect x="18" y="26" width="16" height="12" rx="6" transform="rotate(0)"/><rect x="30" y="26" width="16" height="12" rx="6"/><rect x="42" y="26" width="16" height="12" rx="6"/></svg>',
  necklace: '<svg viewBox="0 0 64 64"><path d="M10 10c0 18 10 30 22 30s22-12 22-30"/><path d="M32 40v4"/><path d="M26 44h12l-6 12z"/></svg>',
  cross: '<svg viewBox="0 0 64 64"><circle cx="32" cy="8" r="3"/><path d="M28 12h8v10h10v8H36v24h-8V30H18v-8h10z"/></svg>',
  heart: '<svg viewBox="0 0 64 64"><circle cx="32" cy="8" r="3"/><path d="M32 54S10 40 10 25a11 11 0 0 1 22-3 11 11 0 0 1 22 3c0 15-22 29-22 29z"/></svg>',
  ring: '<svg viewBox="0 0 64 64"><circle cx="32" cy="40" r="17"/><circle cx="32" cy="40" r="12"/><path d="M24 18l4-8h8l4 8-8 6z"/><path d="M24 18h16"/></svg>',
  rings: '<svg viewBox="0 0 64 64"><circle cx="24" cy="34" r="14"/><circle cx="24" cy="34" r="10"/><circle cx="40" cy="34" r="14"/><circle cx="40" cy="34" r="10"/></svg>',
  earring: '<svg viewBox="0 0 64 64"><path d="M16 22l6-8h8l6 8-10 12z"/><path d="M16 22h20"/><path d="M26 34v10"/><rect x="21" y="44" width="10" height="6" rx="2"/><path d="M40 30l4-5h6l4 5-7 8z"/><path d="M40 30h14"/></svg>',
  hoop: '<svg viewBox="0 0 64 64"><circle cx="22" cy="36" r="14"/><circle cx="22" cy="36" r="11"/><circle cx="44" cy="36" r="14"/><circle cx="44" cy="36" r="11"/></svg>'
};

const WA_ICON = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.6c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.5 5.5 4.9 2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.7-.4z"/></svg>';

/* ========================================================= */

const waLink = (msg) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function applyConfig() {
  document.querySelectorAll('[data-wa]').forEach((el) => { el.href = waLink(el.dataset.wa); });
  document.querySelectorAll('[data-social]').forEach((el) => { el.href = CONFIG[el.dataset.social]; });
  document.querySelectorAll('[data-config]').forEach((el) => { el.textContent = CONFIG[el.dataset.config]; });

  const q = encodeURIComponent(CONFIG.mapQuery);
  document.getElementById('map').src = `https://www.google.com/maps?q=${q}&output=embed`;
  document.getElementById('mapLink').href = `https://www.google.com/maps/search/?api=1&query=${q}`;
  document.getElementById('year').textContent = new Date().getFullYear();
}

/* ---------- Tema claro / oscuro ---------- */
function initTheme() {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');

  const setLabel = () => {
    const dark = root.getAttribute('data-theme') === 'dark';
    btn.setAttribute('aria-label', dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    btn.title = dark ? 'Modo claro' : 'Modo oscuro';
  };

  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('jm-theme', next); } catch (e) { /* almacenamiento no disponible */ }
    setLabel();
  });
  setLabel();
}

/* ---------- Catálogo ---------- */
function renderFilters() {
  const wrap = document.getElementById('filters');
  wrap.innerHTML = CATEGORIES.map((c, i) =>
    `<button class="filter${i === 0 ? ' is-active' : ''}" role="tab" aria-selected="${i === 0}" data-filter="${c.id}">${escapeHTML(c.label)}</button>`
  ).join('');

  wrap.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    wrap.querySelectorAll('.filter').forEach((b) => {
      const active = b === btn;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-selected', active);
    });
    renderProducts(btn.dataset.filter);
  });
}

function renderProducts(filter = 'todos') {
  const list = filter === 'todos' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
  const catLabel = (id) => (CATEGORIES.find((c) => c.id === id) || {}).label || '';

  document.getElementById('products').innerHTML = list.map((p, i) => {
    const media = p.image
      ? `<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" loading="lazy">`
      : (ICONS[p.icon] || ICONS.ring);
    const msg = `Hola, me interesa: ${p.name} (oro 18K). ¿Me pueden dar precio y disponibilidad?`;
    return `
      <article class="product" style="animation-delay:${i * 60}ms">
        <div class="product__media">
          ${p.tag ? `<span class="product__tag">${escapeHTML(p.tag)}</span>` : ''}
          ${media}
        </div>
        <div class="product__body">
          <p class="product__cat">${escapeHTML(catLabel(p.category))}</p>
          <h3 class="product__name">${escapeHTML(p.name)}</h3>
          <p class="product__desc">${escapeHTML(p.desc)}</p>
          <a class="product__cta" href="${waLink(msg)}" target="_blank" rel="noopener">${WA_ICON} Consultar</a>
        </div>
      </article>`;
  }).join('');
}

/* ---------- Navegación ---------- */
function initNav() {
  const header = document.getElementById('header');
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = [...document.querySelectorAll('.nav__link')];

  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
  };

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  links.forEach((l) => l.addEventListener('click', closeMenu));

  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Resalta la sección visible en el menú
  const sections = links.map((l) => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => spy.observe(s));
}

/* ---------- Animaciones de aparición y contadores ---------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      entry.target.querySelectorAll('[data-count]').forEach(countUp);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
}

function countUp(el) {
  const target = +el.dataset.count;
  const start = performance.now();
  const dur = 1400;
  const tick = (now) => {
    const t = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  initTheme();
  renderFilters();
  renderProducts();
  initNav();
  initReveal();
});
