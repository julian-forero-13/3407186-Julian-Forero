// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Dominio: E-COMMERCE_TECH_PRODUCTS
// ============================================

// ============================================
// SECCIÓN 1: Configuración
// ============================================

const DOMAIN_NAME = "E-COMMERCE_TECH_PRODUCTS";
const VALUE_LABEL = "productos";
const MAX_ITEMS = 1_000;

// ============================================
// SECCIÓN 2: Datos
// ============================================

const items = [
  { id: 1, name: "iPhone 13", price: 3200000, active: true, category: "smartphone", brand: "Apple" },
  { id: 2, name: "Laptop ASUS", price: 3500000, active: true, category: "laptop", brand: "ASUS", discount: 10 },
  { id: 3, name: "Audífonos Sony", price: 400000, active: true, category: "accessory", brand: "Sony" },
  { id: 4, name: "Mouse Logitech", price: 150000, active: false, category: "accessory", brand: "Logitech" },
  { id: 5, name: "Samsung A54", price: 1800000, active: true, category: "smartphone", brand: "Samsung" },
  { id: 6, name: "Teclado Redragon", price: 200000, active: true, category: "accessory", brand: "Redragon" }
];

// ============================================
// SECCIÓN 3: CRUD
// ============================================

const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log("❌ Límite alcanzado");
    return;
  }
  items.push(item);
  console.log(`✅ Agregado: ${item.name}`);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const getActive = () => {
  return items.filter(item => item.active);
};

const filterByField = (field, value) => {
  return items.filter(item => item[field] === value);
};

// ============================================
// SECCIÓN 4: ANÁLISIS
// ============================================

const updateItem = (id, changes) => {
  return items.map(item =>
    item.id === id ? { ...item, ...changes } : item
  );
};

const calculateStats = (field) => {
  const values = items.map(i => i[field]);

  const total = values.reduce((a, b) => a + b, 0);
  const avg = total / values.length;
  const min = Math.min(...values);
  const max = Math.max(...values);

  return { min, max, avg, total };
};

// ============================================
// SECCIÓN 5: DISPLAY
// ============================================

const formatItem = (item) => {
  return `[${item.id}] ${item.name.padEnd(20)} | ${item.category.padEnd(10)} | $${item.price} | ${item.active ? "Activo" : "Inactivo"} | ${item.brand ?? "N/A"}`;
};

const buildReport = () => {
  console.log(`\n📦 REPORTE — ${DOMAIN_NAME}`);
  console.log("=".repeat(50));

  // listado
  items.forEach(item => console.log(formatItem(item)));

  // activos
  const active = getActive();
  console.log(`\nActivos: ${active.length} / ${items.length}`);

  // estadísticas
  const stats = calculateStats("price");
  console.log(`\n💰 Estadísticas precio:`);
  console.log(`Min: ${stats.min}`);
  console.log(`Max: ${stats.max}`);
  console.log(`Promedio: ${stats.avg.toFixed(0)}`);

  // propiedades del primero
  console.log("\n🔍 Propiedades del primer producto:");
  Object.entries(items[0]).forEach(([k, v]) => {
    console.log(`${k}: ${v}`);
  });

  console.log(`\nTotal: ${items.length} ${VALUE_LABEL}`);
  console.log("=".repeat(50));
};

// ============================================
// SECCIÓN 6: EJECUCIÓN
// ============================================

console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME}`);
console.log("=".repeat(40));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}\n`);

// Buscar
const found = findById(1);
console.log("Encontrado:", found?.name ?? "No encontrado");

// Activos
const active = getActive();
console.log(`\nActivos: ${active.length}`);

// Filtro
const filtered = filterByField("category", "smartphone");
console.log(`\nSmartphones: ${filtered.length}`);

// Update
const updated = updateItem(1, { price: 3000000 });
console.log(`\nNuevo precio ID 1: ${updated.find(i => i.id === 1).price}`);

// Stats
const stats = calculateStats("price");
console.log(`\nPromedio precio: ${stats.avg.toFixed(0)}`);

// Reporte
buildReport();

// Agregar producto
addItem({ id: 7, name: "Monitor LG", price: 900000, active: true, category: "accessory", brand: "LG" });