// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: E-commerce de productos tecnológicos
// ============================================

const DOMAIN_NAME = "E-commerce de productos tecnológicos";
const VALUE_LABEL = "productos";

// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "iPhone 13", price: 3200000, stock: 5, active: true, category: "smartphone", brand: "Apple" },
  { id: 2, name: "Laptop ASUS", price: 3500000, stock: 3, active: true, category: "laptop", brand: "ASUS" },
  { id: 3, name: "Audífonos Sony", price: 400000, stock: 10, active: true, category: "accessory", brand: "Sony" },
  { id: 4, name: "Mouse Logitech", price: 150000, stock: 0, active: false, category: "accessory", brand: "Logitech" },
  { id: 5, name: "Samsung Galaxy A54", price: 1800000, stock: 7, active: true, category: "smartphone", brand: "Samsung" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed?.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado por índice: ${removed[0]?.name}`);
};

const getActiveItems = () => {
  return items.filter(item => item.active === true);
};

const findByName = (name) => {
  return items.find(item => item.name === name);
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.brand} — ${item.category} — $${item.price} — Stock: ${item.stock}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// Agregar producto nuevo
addItem({ id: 6, name: "Teclado Redragon", price: 200000, stock: 8, active: true, category: "accessory", brand: "Redragon" });

// Agregar prioritario
addPriorityItem({ id: 0, name: "MacBook Pro", price: 6500000, stock: 2, active: true, category: "laptop", brand: "Apple" });

// Eliminar uno del medio
removeByIndex(2);

// Eliminar último
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// Buscar producto
const found = findByName("iPhone 13");
console.log("🔍 Búsqueda:", found ? formatItem(found) : "No encontrado");

// Filtrar activos
const activeItems = getActiveItems();
console.log(`✅ Activos: ${activeItems.length}`);

// Snapshot inmutable
const snapshot = [...items, { id: 99, name: "Producto Extra", price: 999999, stock: 1, active: true }];
console.log("📸 Snapshot creado con", snapshot.length, "productos");

console.log("\n--- Transformación con map ---\n");

// Solo nombres
const names = items.map(item => item.name);
console.log("Nombres:", names);

// Precios con descuento del 10%
const discounted = items.map(item => ({
  name: item.name,
  discountedPrice: Math.floor(item.price * 0.9)
}));
console.log("Precios con descuento:", discounted);

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);