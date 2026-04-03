/* ===================================================
   MAPLE BABY — script.js
   Carter's Imports | São Paulo, SP
   =================================================== */

// ===== PRODUCT IMAGES =====
const PRODUCT_IMAGES = {
  1: 'images/prod1_bodysuits_stork.jpg',
  2: 'images/prod2_bodysuits_girl.jpg',
  3: 'images/prod3_set_tee_heart.jpg',
  4: 'images/prod4_jacket_snowflake.jpg',
  5: 'images/prod5_top_blouson.jpg',
  6: 'images/prod6_skirt_plaid.jpg',
  7: 'images/prod7_skirt_tulle.jpg',
  8: 'images/prod8_sweatshirt_sherpa.jpg',
  9: 'images/prod9_set_vest.jpg',
  10: 'images/prod10_bodysuits_short.jpg',
  11: 'images/prod11_pijama_pink.jpg',
  12: 'images/prod12_sleeper_navy.jpg'
};

// ===== PRODUCT DATA =====
const PRODUCTS = [
  {
    id: 1,
    name: "Kit 4 Bodies Manga Longa",
    subtitle: "Estampas Neutras — Stork",
    category: "bodies",
    sizes: ["12M"],
    price: 169,
    stock: 6,
    status: "disponivel",
    emoji: "👶",
    gradient: "linear-gradient(135deg, #FEE2E2 0%, #FECACA 50%, #FDE8D8 100%)",
    description: "Kit com 4 bodies manga longa Carter's com estampas de cegonha e padrões neutros. Tecido 100% algodão, macio e respirável. Ideal para o dia a dia do bebê.",
    details: ["4 bodies inclusos", "Algodão 100% macio", "Botões nas pernas para fácil troca", "Tamanho: 12M (9-12 meses)"]
  },
  {
    id: 2,
    name: "Kit 4 Bodies Manga Longa",
    subtitle: "Feminino Multi — Original",
    category: "bodies",
    sizes: ["18M"],
    price: 169,
    stock: 6,
    status: "disponivel",
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 50%, #FFF0F6 100%)",
    description: "Kit com 4 bodies manga longa linha 'Original' da Carter's. Diversas estampas para meninas: flores, listras, corações e animais.",
    details: ["4 bodies inclusos", "Estampas variadas para meninas", "Algodão 100%", "Tamanho: 18M (12-18 meses)"]
  },
  {
    id: 3,
    name: "Conjunto 2 Peças",
    subtitle: "Tee + Calça Coração — Vermelho",
    category: "conjuntos",
    sizes: ["24M"],
    price: 139,
    stock: 4,
    status: "disponivel",
    emoji: "💕",
    gradient: "linear-gradient(135deg, #FEE2E2 0%, #FECACA 50%, #FEF3F2 100%)",
    description: "Conjunto 2 peças: blusa manga longa vermelha com saia franzida e calça com estampa de coração. Perfeito para o outono/inverno.",
    details: ["2 peças incluídas", "Blusa manga longa + Calça", "Algodão macio e confortável", "Tamanho: 24M (2 anos)"]
  },
  {
    id: 4,
    name: "Jaqueta Microfleece Flocos de Neve",
    subtitle: "Zip Completo — Azul",
    category: "casacos",
    sizes: ["5T"],
    price: 99,
    stock: 3,
    status: "disponivel",
    emoji: "❄️",
    gradient: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #EDE9FE 100%)",
    description: "Jaqueta microfleece com estampa exclusiva de flocos de neve, zíper completo e protetor de queixo. Quentinha e estilosa para o inverno.",
    details: ["Microfleece quentinho", "Zíper completo com protetor de queixo", "Bolsos laterais", "Tamanho: 5T (4-5 anos)"]
  },
  {
    id: 5,
    name: "Blusa Manga Longa Bufante",
    subtitle: "Punho Franzido — Blush",
    category: "pecas",
    sizes: ["5T"],
    price: 72,
    stock: 4,
    status: "pre-venda",
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #FDF2F8 0%, #FBCFE8 50%, #FFF0F4 100%)",
    description: "Blusa manga longa com estilo bufante e punho franzido em tom blush rosado. Delicada, versátil e muito na moda para crianças.",
    details: ["Manga bufante estilosa", "Punho franzido", "Tecido leve e macio", "Tamanho: 5T (4-5 anos)"]
  },
  {
    id: 6,
    name: "Saia Bolha Xadrez",
    subtitle: "Plaid Collection — Tan",
    category: "pecas",
    sizes: ["5T"],
    price: 68,
    stock: 4,
    status: "disponivel",
    emoji: "🎀",
    gradient: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 50%, #FEF9E7 100%)",
    description: "Saia modelo bolha em xadrez plaid na cor tan (caramelo). Elástico confortável na cintura. Fácil de combinar com blusas e bodies.",
    details: ["Estampa xadrez plaid", "Elástico confortável na cintura", "Modelo bolha moderno", "Tamanho: 5T (4-5 anos)"]
  },
  {
    id: 7,
    name: "Saia Tulle Corações",
    subtitle: "Heart Collection — Rosa",
    category: "pecas",
    sizes: ["3T"],
    price: 65,
    stock: 3,
    status: "disponivel",
    emoji: "💗",
    gradient: "linear-gradient(135deg, #FDF2F8 0%, #FBCFE8 50%, #FFF0F6 100%)",
    description: "Saia de tule rosa com estampa delicada de corações. Várias camadas, muito fofa e perfeita para festas, aniversários ou dias especiais.",
    details: ["Tule multicamadas", "Elástico confortável", "Estampa de corações", "Tamanho: 3T (2-3 anos)"]
  },
  {
    id: 8,
    name: "Moletom Sherpa Quarter-Zip",
    subtitle: "DayDream Fleece — Branco",
    category: "casacos",
    sizes: ["4T"],
    price: 109,
    stock: 4,
    status: "disponivel",
    emoji: "🤍",
    gradient: "linear-gradient(135deg, #F9FAFB 0%, #F0FDF4 50%, #FAFAFA 100%)",
    description: "Moletom de pelúcia sherpa com zíper frontal parcial (quarter-zip). Extremamente macio, elegante e muito adorado pelas crianças no inverno.",
    details: ["Pelúcia sherpa por fora", "Quarter-zip frontal", "Macio por dentro", "Tamanho: 4T (3-4 anos)"]
  },
  {
    id: 9,
    name: "Conjunto 3 Peças Colete Acolchoado",
    subtitle: "Heart Quilted Vest — Vermelho",
    category: "conjuntos",
    sizes: ["6M"],
    price: 155,
    stock: 5,
    status: "disponivel",
    emoji: "🧥",
    gradient: "linear-gradient(135deg, #FEE2E2 0%, #FCA5A5 50%, #FEF2F2 100%)",
    description: "Conjunto completo 3 peças: colete acolchoado com corações + body manga longa + calça azul. Presente perfeito para bebês e maternidades!",
    details: ["3 peças incluídas", "Colete + Body + Calça", "Colete acolchoado quentinho", "Tamanho: 6M (3-6 meses)"]
  },
  {
    id: 10,
    name: "Kit 4 Bodies Manga Curta",
    subtitle: "Estampas Femininas — Multi",
    category: "bodies",
    sizes: ["NB", "3M", "6M"],
    price: 159,
    stock: 8,
    status: "pre-venda",
    emoji: "🌈",
    gradient: "linear-gradient(135deg, #FDF4FF 0%, #FAE8FF 50%, #FFF0F6 100%)",
    description: "Kit com 4 bodies manga curta com estampas coloridas e alegres para meninas. Ideal para o verão brasileiro! Algodão suave e fresco.",
    details: ["4 bodies inclusos", "Estampas coloridas variadas", "Algodão fresco para o verão", "Tamanhos: NB, 3M, 6M"]
  },
  {
    id: 11,
    name: "Pijama 2 Peças",
    subtitle: "Manga Longa Estampado — Rosa",
    category: "pijamas",
    sizes: ["12M", "18M"],
    price: 129,
    stock: 5,
    status: "pre-venda",
    emoji: "🌙",
    gradient: "linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 50%, #F5F3FF 100%)",
    description: "Pijama 2 peças (calça + manga longa) em algodão felpudo com estampa divertida. Para uma noite de sono cheia de conforto e fofura!",
    details: ["2 peças incluídas", "Top manga longa + Calça", "Algodão felpudo macio", "Tamanhos: 12M, 18M"]
  },
  {
    id: 12,
    name: "Macacão Sleeper com Pé",
    subtitle: "Manga Longa — Azul Marinho",
    category: "conjuntos",
    sizes: ["3M", "6M", "9M"],
    price: 99,
    stock: 6,
    status: "pre-venda",
    emoji: "🐻",
    gradient: "linear-gradient(135deg, #EFF6FF 0%, #BFDBFE 50%, #F0F9FF 100%)",
    description: "Macacão sleeper de algodão ultra macio manga longa com pé embutido e zíper completo. Perfeito para bebês dormirem quentinhos e confortáveis!",
    details: ["Macacão completo", "Pé embutido quentinho", "Zíper completo para facilitar troca", "Tamanhos: 3M, 6M, 9M"]
  }
];

// ===================================================
// VIRTUAL STOCK (localStorage)
// ===================================================
const STOCK_KEY = 'maplebaby_stock_v1';

function getDefaultStock() {
  return Object.fromEntries(PRODUCTS.map(p => [p.id, p.stock]));
}

function loadStock() {
  try {
    const saved = localStorage.getItem(STOCK_KEY);
    if (!saved) return getDefaultStock();
    const parsed = JSON.parse(saved);
    // Ensure all product IDs exist (in case new products were added)
    const defaults = getDefaultStock();
    return { ...defaults, ...parsed };
  } catch { return getDefaultStock(); }
}

function saveStock(stock) {
  try { localStorage.setItem(STOCK_KEY, JSON.stringify(stock)); } catch {}
}

function initStock() {
  if (!localStorage.getItem(STOCK_KEY)) saveStock(getDefaultStock());
}

function getStock(id) {
  return loadStock()[id] ?? 0;
}

function decrementStock(id) {
  const stock = loadStock();
  if ((stock[id] ?? 0) > 0) stock[id]--;
  saveStock(stock);
  return stock[id] ?? 0;
}

function setStockItem(id, qty) {
  const stock = loadStock();
  stock[id] = Math.max(0, parseInt(qty) || 0);
  saveStock(stock);
}

function resetStock() {
  saveStock(getDefaultStock());
  renderProducts();
  closeAdminPanel();
  showToast('✅ Estoque resetado com sucesso!');
}

// ===================================================
// TOAST NOTIFICATION
// ===================================================
function showToast(msg, duration = 3500) {
  let toast = document.getElementById('mb-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'mb-toast';
    toast.style.cssText = `
      position:fixed;bottom:88px;left:50%;transform:translateX(-50%) translateY(20px);
      background:rgba(30,20,40,0.93);color:#fff;padding:12px 22px;border-radius:40px;
      font-size:0.87rem;font-weight:500;letter-spacing:0.01em;z-index:9999;
      box-shadow:0 8px 32px rgba(0,0,0,0.25);opacity:0;
      transition:opacity 0.3s ease, transform 0.3s ease;pointer-events:none;
      max-width:88vw;text-align:center;`;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
  }, duration);
}

// ===================================================
// ADMIN PANEL
// ===================================================
function openAdminPanel() {
  let panel = document.getElementById('admin-panel');
  if (panel) { panel.style.display = 'flex'; return; }

  // Inject admin CSS
  if (!document.getElementById('admin-css')) {
    const style = document.createElement('style');
    style.id = 'admin-css';
    style.textContent = `
      #admin-panel {
        position:fixed;inset:0;z-index:10000;background:rgba(10,5,20,0.7);
        display:flex;align-items:center;justify-content:center;padding:16px;
        backdrop-filter:blur(6px);
      }
      .admin-box {
        background:#fff;border-radius:20px;padding:28px;max-width:480px;width:100%;
        max-height:85vh;overflow-y:auto;box-shadow:0 24px 64px rgba(0,0,0,0.3);
      }
      .admin-title { font-size:1.1rem;font-weight:700;margin-bottom:4px;color:#1a0a2e; }
      .admin-subtitle { font-size:0.78rem;color:#888;margin-bottom:20px; }
      .admin-row {
        display:flex;align-items:center;gap:10px;padding:10px 0;
        border-bottom:1px solid #f0eef5;
      }
      .admin-row:last-of-type { border-bottom:none; }
      .admin-product-name { flex:1;font-size:0.82rem;font-weight:500;color:#2d1a4e; }
      .admin-product-sub { font-size:0.72rem;color:#aaa;margin-top:1px; }
      .admin-qty-controls { display:flex;align-items:center;gap:6px; }
      .admin-qty-btn {
        width:28px;height:28px;border-radius:50%;border:1.5px solid #e0d8f0;
        background:#faf8ff;cursor:pointer;font-size:1rem;font-weight:600;
        color:#7c3aed;display:flex;align-items:center;justify-content:center;
        transition:background 0.15s;line-height:1;
      }
      .admin-qty-btn:hover { background:#ede9fe; }
      .admin-qty-value {
        min-width:32px;text-align:center;font-size:0.95rem;font-weight:700;
        color:#1a0a2e;
      }
      .admin-qty-value.zero { color:#e11d48; }
      .admin-qty-value.low  { color:#f97316; }
      .admin-actions { display:flex;gap:10px;margin-top:20px; }
      .admin-btn-reset {
        flex:1;padding:12px;border-radius:12px;border:none;cursor:pointer;
        font-weight:600;font-size:0.85rem;background:#fef2f2;color:#e11d48;
        transition:background 0.15s;
      }
      .admin-btn-reset:hover { background:#fee2e2; }
      .admin-btn-close {
        flex:1;padding:12px;border-radius:12px;border:none;cursor:pointer;
        font-weight:600;font-size:0.85rem;background:#f5f0ff;color:#7c3aed;
        transition:background 0.15s;
      }
      .admin-btn-close:hover { background:#ede9fe; }
      .status-esgotado { background:#9ca3af !important;color:#fff !important; }
      .card-esgotado { opacity:0.65; }
      .card-esgotado .product-img-area img { filter:grayscale(0.5);opacity:0.75; }
      .stock-badge {
        display:inline-block;margin:4px 0 6px;padding:3px 10px;border-radius:20px;
        font-size:0.72rem;font-weight:600;letter-spacing:0.01em;
      }
      .stock-low { background:#fff7ed;color:#c2410c;border:1px solid #fed7aa; }
      .stock-ok  { background:#f0fdf4;color:#166534;border:1px solid #bbf7d0; }
      .btn-esgotado {
        background:#e5e7eb !important;color:#9ca3af !important;
        cursor:not-allowed !important;border:none !important;
      }
      .modal-stock-badge {
        display:inline-flex;align-items:center;gap:5px;
        padding:5px 12px;border-radius:20px;font-size:0.78rem;font-weight:600;
        margin-bottom:12px;
      }
      .modal-stock-low  { background:#fff7ed;color:#c2410c;border:1px solid #fed7aa; }
      .modal-stock-ok   { background:#f0fdf4;color:#166534;border:1px solid #bbf7d0; }
      .modal-stock-out  { background:#f3f4f6;color:#6b7280;border:1px solid #e5e7eb; }
    `;
    document.head.appendChild(style);
  }

  panel = document.createElement('div');
  panel.id = 'admin-panel';
  panel.innerHTML = buildAdminHTML();
  document.body.appendChild(panel);
  panel.addEventListener('click', e => { if (e.target === panel) closeAdminPanel(); });
}

function buildAdminHTML() {
  const stock = loadStock();
  const rows = PRODUCTS.map(p => {
    const qty = stock[p.id] ?? 0;
    const qtyClass = qty === 0 ? 'zero' : qty <= 2 ? 'low' : '';
    return `
      <div class="admin-row" id="admin-row-${p.id}">
        <div style="flex:1">
          <div class="admin-product-name">${p.name}</div>
          <div class="admin-product-sub">${p.subtitle} · ${p.sizes.join(', ')}</div>
        </div>
        <div class="admin-qty-controls">
          <button class="admin-qty-btn" onclick="adminAdjust(${p.id}, -1)">−</button>
          <div class="admin-qty-value ${qtyClass}" id="admin-qty-${p.id}">${qty}</div>
          <button class="admin-qty-btn" onclick="adminAdjust(${p.id}, +1)">+</button>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="admin-box">
      <div class="admin-title">🍁 Painel de Estoque — Maple Baby</div>
      <div class="admin-subtitle">Ajuste as quantidades. As alterações são salvas automaticamente.</div>
      ${rows}
      <div class="admin-actions">
        <button class="admin-btn-reset" onclick="resetStock()">🔄 Resetar tudo</button>
        <button class="admin-btn-close" onclick="closeAdminPanel()">✓ Fechar</button>
      </div>
    </div>`;
}

function adminAdjust(id, delta) {
  const current = getStock(id);
  const newVal = Math.max(0, current + delta);
  setStockItem(id, newVal);
  // Update display without full re-render
  const el = document.getElementById(`admin-qty-${id}`);
  if (el) {
    el.textContent = newVal;
    el.className = 'admin-qty-value' + (newVal === 0 ? ' zero' : newVal <= 2 ? ' low' : '');
  }
  renderProducts();
}

function closeAdminPanel() {
  const panel = document.getElementById('admin-panel');
  if (panel) panel.style.display = 'none';
}

// Keyboard shortcut: Ctrl + Shift + A
document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.shiftKey && e.key === 'A') {
    e.preventDefault();
    openAdminPanel();
  }
  if (e.key === 'Escape') { closeModal(); closeAdminPanel(); }
});

// ===== STATE =====
let activeCat  = 'all';
let activeSize = 'all';
const CATEGORY_LABELS = {
  bodies: 'Bodies',
  conjuntos: 'Conjuntos',
  pijamas: 'Pijamas',
  pecas: 'Peças Avulsas',
  casacos: 'Casacos'
};

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  initStock();
  renderProducts();
  initFilters();
  initCountdown();
  initNavScroll();
  initScrollAnimations();
  initFaqKeyboard();
});

// ===================================================
// COUNTDOWN TIMER
// ===================================================
function initCountdown() {
  const target = new Date('2026-11-15T09:00:00-03:00').getTime();

  function update() {
    const now  = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      document.getElementById('c-days').textContent  = '00';
      document.getElementById('c-hours').textContent = '00';
      document.getElementById('c-mins').textContent  = '00';
      document.getElementById('c-secs').textContent  = '00';
      return;
    }

    const days  = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins  = Math.floor((diff % 3600000) / 60000);
    const secs  = Math.floor((diff % 60000) / 1000);

    document.getElementById('c-days').textContent  = String(days).padStart(3, '0');
    document.getElementById('c-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('c-mins').textContent  = String(mins).padStart(2, '0');
    document.getElementById('c-secs').textContent  = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ===================================================
// NAVBAR SCROLL
// ===================================================
function initNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ===================================================
// MOBILE MENU
// ===================================================
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const ham  = document.getElementById('hamburger');
  const open = menu.classList.toggle('open');
  ham.classList.toggle('open', open);
}
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// ===================================================
// PRODUCT RENDERING
// ===================================================
function renderProducts() {
  const grid    = document.getElementById('product-grid');
  const filtered = getFiltered();
  const countEl  = document.getElementById('count-num');
  if (countEl) countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="grid-column:1/-1;text-align:center;padding:64px 24px;">
        <div style="font-size:3rem;margin-bottom:16px">🔍</div>
        <h3 style="font-size:1.1rem;color:var(--text-mid);margin-bottom:8px">Nenhum produto encontrado</h3>
        <p style="color:var(--text-light);font-size:0.9rem">Tente outro tamanho ou categoria</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => buildCard(p, i)).join('');
}

function getFiltered() {
  return PRODUCTS.filter(p => {
    const catOk  = activeCat  === 'all' || p.category === activeCat;
    const sizeOk = activeSize === 'all' || p.sizes.includes(activeSize);
    return catOk && sizeOk;
  });
}

function buildCard(p, idx) {
  const qty    = getStock(p.id);
  const isOut  = qty === 0;
  const isLow  = qty > 0 && qty <= 2;

  const statusLabel = isOut ? 'Esgotado' : (p.status === 'disponivel' ? 'Disponível' : 'Pré-Venda');
  const statusClass = isOut ? 'status-esgotado' : (p.status === 'disponivel' ? 'status-disponivel' : 'status-pre-venda');
  const catLabel    = CATEGORY_LABELS[p.category] || p.category;

  const sizeTags  = p.sizes.map(s => `<span class="size-tag">${s}</span>`).join('');
  const priceNote = p.status === 'pre-venda'
    ? '<span>50% de sinal via PIX</span>'
    : '<span>À vista ou 3× s/ juros</span>';

  const imgSrc = PRODUCT_IMAGES[p.id];
  const imgContent = imgSrc
    ? `<img src="${imgSrc}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;object-position:center;${isOut ? 'filter:grayscale(0.55);opacity:0.72;' : ''}" loading="lazy">`
    : `<span style="font-size:4.5rem;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.12))">${p.emoji}</span>`;

  const stockBadge = isOut
    ? ''
    : isLow
      ? `<span class="stock-badge stock-low">🔥 Só ${qty} restante${qty > 1 ? 's' : ''}!</span>`
      : `<span class="stock-badge stock-ok">✓ ${qty} em estoque</span>`;

  const reserveBtn = isOut
    ? `<button class="btn-reserve btn-esgotado" disabled>Esgotado</button>`
    : `<button class="btn-reserve" onclick="event.stopPropagation();reserveProduct(${p.id})" id="reserve-${p.id}">🍁 Reservar</button>`;

  return `
    <div class="product-card fade-in${isOut ? ' card-esgotado' : ''}" style="animation-delay:${idx * 0.06}s"
      onclick="${isOut ? '' : `openModal(${p.id})`}" role="button" tabindex="${isOut ? -1 : 0}"
      onkeydown="${isOut ? '' : `if(event.key==='Enter')openModal(${p.id})`}">
      <div class="product-img-area" style="background:${p.gradient};overflow:hidden;padding:0;">
        ${imgContent}
        <span class="product-status-badge ${statusClass}">${statusLabel}</span>
      </div>
      <div class="product-info">
        <div class="product-category-tag">${catLabel}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-subtitle">${p.subtitle}</div>
        <div class="product-sizes">${sizeTags}</div>
        ${stockBadge}
        <div class="product-footer">
          <div class="product-price">
            R$ ${p.price.toFixed(2).replace('.', ',')}
            ${priceNote}
          </div>
          ${reserveBtn}
        </div>
      </div>
    </div>`;
}

// ===================================================
// FILTERS
// ===================================================
function initFilters() {
  document.getElementById('cat-filter').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    activeCat = chip.dataset.cat;
    document.querySelectorAll('#cat-filter .chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderProducts();
    triggerCardAnimations();
  });

  document.getElementById('size-filter').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    activeSize = chip.dataset.size;
    document.querySelectorAll('#size-filter .chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderProducts();
    triggerCardAnimations();
  });
}

function triggerCardAnimations() {
  setTimeout(() => {
    document.querySelectorAll('.product-card.fade-in').forEach(el => {
      el.classList.remove('visible');
      void el.offsetWidth;
      el.classList.add('visible');
    });
  }, 50);
}

// ===================================================
// MODAL
// ===================================================
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const qty      = getStock(p.id);
  const isOut    = qty === 0;
  const isLow    = qty > 0 && qty <= 2;

  const statusLabel = isOut ? '⛔ Esgotado' : (p.status === 'disponivel' ? '✅ Disponível' : '🎯 Pré-Venda');

  const stockBadgeModal = isOut
    ? `<div class="modal-stock-badge modal-stock-out">⛔ Produto esgotado</div>`
    : isLow
      ? `<div class="modal-stock-badge modal-stock-low">🔥 Só ${qty} restante${qty > 1 ? 's' : ''}! Corre!</div>`
      : `<div class="modal-stock-badge modal-stock-ok">✓ ${qty} unidades disponíveis</div>`;

  const waText = encodeURIComponent(
    `Olá! Vim pelo site Maple Baby e quero reservar:\n\n*${p.name}* — ${p.subtitle}\nTamanho(s): ${p.sizes.join(', ')}\nPreço: R$ ${p.price.toFixed(2).replace('.', ',')}\n\nPor favor, confirme disponibilidade!`
  );

  const detailItems = p.details.map(d => `<div class="modal-detail-item">${d}</div>`).join('');
  const sizeTags    = p.sizes.map(s => `<span class="modal-size-tag">${s}</span>`).join('');

  const imgSrc = PRODUCT_IMAGES[p.id];
  const modalImgContent = imgSrc
    ? `<img src="${imgSrc}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;object-position:center;border-radius:var(--r-xl) var(--r-xl) 0 0;${isOut ? 'filter:grayscale(0.45);' : ''}" loading="lazy">`
    : `<span style="font-size:5.5rem;filter:drop-shadow(0 6px 16px rgba(0,0,0,0.12))">${p.emoji}</span>`;

  const actionBtn = isOut
    ? `<button class="modal-btn-wa" disabled style="background:#e5e7eb;color:#9ca3af;cursor:not-allowed;">Produto Esgotado</button>`
    : `<a href="https://wa.me/5511999999999?text=${waText}" class="modal-btn-wa" target="_blank"
        onclick="handleModalReserve(${p.id})" id="modal-wa-btn-${p.id}">
        💬 Reservar no WhatsApp
       </a>`;

  document.getElementById('modal-body').innerHTML = `
    <div class="modal-img-area" style="background:${p.gradient};overflow:hidden;padding:0;">
      ${modalImgContent}
    </div>
    <div class="modal-content-inner">
      <div class="modal-tag">${CATEGORY_LABELS[p.category]} &nbsp;•&nbsp; ${statusLabel}</div>
      <div class="modal-title">${p.name}</div>
      <div class="modal-subtitle">${p.subtitle}</div>
      ${stockBadgeModal}
      <div class="modal-desc">${p.description}</div>
      <div class="modal-details">${detailItems}</div>
      <div class="modal-sizes-title">Tamanhos disponíveis:</div>
      <div class="modal-sizes">${sizeTags}</div>
      <div class="modal-footer">
        <div class="modal-price">
          <span class="modal-price-label">Preço</span>
          <span class="modal-price-value">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
        </div>
        ${actionBtn}
      </div>
    </div>`;

  document.getElementById('modal-overlay').classList.remove('modal-hidden');
  document.body.style.overflow = 'hidden';
}

function handleModalReserve(id) {
  decrementStock(id);
  showToast('🍁 Reserva enviada! Aguarde confirmação no WhatsApp.');
  setTimeout(() => { renderProducts(); }, 600);
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('modal-hidden');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

// ===================================================
// RESERVE PRODUCT (card button — direct WhatsApp)
// ===================================================
function reserveProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const qty = getStock(id);
  if (qty === 0) {
    showToast('⚠️ Este produto acabou de esgotar!');
    renderProducts();
    return;
  }

  decrementStock(id);
  const waText = encodeURIComponent(
    `Olá! Vim pelo site Maple Baby 🍁 e quero reservar:\n\n*${p.name}* — ${p.subtitle}\nTamanho(s): ${p.sizes.join(', ')}\nPreço: R$ ${p.price.toFixed(2).replace('.', ',')}\n\nPor favor, confirme disponibilidade!`
  );
  window.open(`https://wa.me/5511999999999?text=${waText}`, '_blank');
  showToast('🍁 Reserva enviada! Aguarde confirmação no WhatsApp.');
  renderProducts();
}

// ===================================================
// FAQ ACCORDION
// ===================================================
function toggleFaq(btn) {
  const item   = btn.closest('.faq-item');
  const answer = item.querySelector('.faq-a');
  const isOpen = item.classList.contains('open');

  document.querySelectorAll('.faq-item.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-a').classList.remove('open');
  });

  if (!isOpen) {
    item.classList.add('open');
    answer.classList.add('open');
  }
}

function initFaqKeyboard() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFaq(btn);
      }
    });
  });
}

// ===================================================
// SCROLL ANIMATIONS (Intersection Observer)
// ===================================================
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function observeNewCards() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.product-card.fade-in:not(.visible)').forEach(el => observer.observe(el));
}

// Patch renderProducts to re-observe new cards
const _orig = renderProducts;
window.renderProducts = function () {
  _orig();
  requestAnimationFrame(() => {
    observeNewCards();
    initScrollAnimations();
  });
};
renderProducts();

// ===================================================
// SMOOTH SCROLL
// ===================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
      closeMenu();
    }
  });
});

// ===================================================
// ACTIVE NAV LINK ON SCROLL
// ===================================================
(function () {
  const sections = ['hero', 'catalogo', 'como-comprar', 'sobre', 'faq'];
  const links    = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) current = id;
    });
    links.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active-nav', href === current);
    });
  }, { passive: true });
})();
