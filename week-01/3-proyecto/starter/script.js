/* ============================================
   PROYECTO SEMANA 01 - E-COMMERCE TECH STORE
   Dominio: E-commerce de productos tecnológicos
   ============================================ */

// ============================================
// 1️⃣ Objeto principal del dominio
// ============================================

const entityData = {
  name: 'TechZone Store',
  description: 'Tienda online especializada en productos tecnológicos de última generación.',
  identifier: 'TECH-ECOM-001',

  contact: {
    email: 'techzoneplatform@gmail.com',
    phone: '+57 300 123 4567',
    location: 'Bogotá, Colombia'
  },

  products: [
    { name: 'Laptop Gamer', level: 90, category: 'Computadores' },
    { name: 'Smartphone 5G', level: 85, category: 'Celulares' },
    { name: 'Audífonos Bluetooth', level: 75, category: 'Accesorios' },
    { name: 'Teclado Mecánico RGB', level: 80, category: 'Periféricos' },
    { name: 'Monitor 144Hz', level: 88, category: 'Monitores' },
    { name: 'Tablet Pro', level: 70, category: 'Tablets' }
  ],

  links: [
    { platform: 'Instagram', url: 'https://www.instagram.com/techzone.sn?igsh=MXhkd3J6aGJuZGh4ZQ==', icon: '📸' },
    { platform: 'Facebook', url: 'https://facebook.com/techzone', icon: '📘' },
    { platform: 'WhatsApp', url: 'https://wa.me/573118515137', icon: '💬' }
  ],

  stats: {
    totalProducts: 120,
    available: 95,
    rating: 4.7,
    monthlySales: 340
  }
};

// ============================================
// 2️⃣ Referencias al DOM
// ============================================

const entityName = document.getElementById('entity-name');
const entityDescription = document.getElementById('entity-description');
const entityContact = document.getElementById('entity-contact');

const itemsList = document.getElementById('items-list');
const linksContainer = document.getElementById('links');
const statsContainer = document.getElementById('stats');

const themeToggle = document.getElementById('theme-toggle');
const copyBtn = document.getElementById('copy-btn');
const toggleItemsBtn = document.getElementById('toggle-items');

const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// ============================================
// 3️⃣ Renderizar información básica
// ============================================

const renderBasicInfo = () => {
  const {
    name,
    description,
    contact: { email, phone, location }
  } = entityData;

  entityName.textContent = name;
  entityDescription.innerHTML = `<p>${description}</p>`;
  entityContact.innerHTML = `
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>Ubicación:</strong> ${location}</p>
  `;
};

// ============================================
// 4️⃣ Renderizar productos
// ============================================

const renderItems = (showAll = false) => {
  const { products } = entityData;

  const itemsToShow = showAll ? products : products.slice(0, 4);

  const itemsHtml = itemsToShow.map(product => {
    const { name, level, category } = product;

    return `
      <div class="item">
        <div class="item-name">${name} (${category})</div>
        <div class="item-level">
          <span>${level}% popularidad</span>
          <div class="level-bar">
            <div class="level-fill" style="width: ${level}%"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  itemsList.innerHTML = itemsHtml;
};

// ============================================
// 5️⃣ Renderizar enlaces
// ============================================

const renderLinks = () => {
  const { links } = entityData;

  const linksHtml = links.map(link => {
    const { platform, url, icon } = link;

    return `
      <a href="${url}" target="_blank" class="social-link">
        ${icon} ${platform}
      </a>
    `;
  }).join('');

  linksContainer.innerHTML = linksHtml;
};

// ============================================
// 6️⃣ Renderizar estadísticas
// ============================================

const renderStats = () => {
  const { stats } = entityData;

  const statsArray = [
    { label: 'Productos Totales', value: stats.totalProducts },
    { label: 'Disponibles', value: stats.available },
    { label: 'Calificación', value: stats.rating },
    { label: 'Ventas Mensuales', value: stats.monthlySales }
  ];

  const statsHtml = statsArray.map(stat => `
    <div class="stat-item">
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');

  statsContainer.innerHTML = statsHtml;
};

// ============================================
// 7️⃣ Cambio de tema
// ============================================

const toggleTheme = () => {
  const currentTheme = document.documentElement.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = newTheme;
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';

  localStorage.setItem('theme', newTheme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme') ?? 'light';
  document.documentElement.dataset.theme = savedTheme;
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
};

// ============================================
// 8️⃣ Copiar información
// ============================================

const copyInfo = () => {
  const { name, description, contact } = entityData;

  const infoText = `
${name}
${description}
Contacto: ${contact.email}
Ubicación: ${contact.location}
  `.trim();

  navigator.clipboard.writeText(infoText);
  showToast('¡Información copiada al portapapeles!');
};

const showToast = message => {
  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
};

// ============================================
// 9️⃣ Mostrar / Ocultar productos
// ============================================

let showingAllItems = false;

const handleToggleItems = () => {
  showingAllItems = !showingAllItems;
  renderItems(showingAllItems);

  toggleItemsBtn.textContent =
    showingAllItems ? 'Mostrar menos productos' : 'Mostrar más productos';
};

// ============================================
// 🔟 Event Listeners
// ============================================

themeToggle.addEventListener('click', toggleTheme);
copyBtn.addEventListener('click', copyInfo);
toggleItemsBtn.addEventListener('click', handleToggleItems);

// ============================================
// 1️⃣1️⃣ Inicialización
// ============================================

const init = () => {
  loadTheme();
  renderBasicInfo();
  renderItems();
  renderLinks();
  renderStats();

  console.log('✅ E-commerce TechZone inicializado correctamente');
};

init();
