// ============================================
// PROYECTO SEMANA 09: Catálogo de Productos
// Dominio: E-commerce de productos tecnológicos
// ============================================

const DOMAIN_NAME = "E-commerce de productos tecnológicos";
const VALUE_LABEL = "productos";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

const items = [
  { id: 1, name: "iPhone 13", price: 3200000, active: true, category: "smartphone", brand: "Apple", discount: 10 },
  { id: 2, name: "Laptop ASUS", price: 3500000, active: true, category: "laptop", brand: "ASUS" },
  { id: 3, name: "Audífonos Sony", price: 400000, active: true, category: "accessory", brand: "Sony", discount: 5 },
  { id: 4, name: "Mouse Logitech", price: 150000, active: false, category: "accessory", brand: "Logitech" },
  { id: 5, name: "Samsung Galaxy A54", price: 1800000, active: true, category: "smartphone", brand: "Samsung" },
  { id: 6, name: "Teclado Redragon", price: 200000, active: true, category: "accessory", brand: "Redragon" }
];

// ============================================
// INSPECCIÓN
// ============================================

const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(15)}: ${value}`);
  });
};

const calculateStats = (numericKey) => {
  const values = items.map(item => item[numericKey]).filter(v => typeof v === "number");

  const total = values.reduce((acc, val) => acc + val, 0);
  const avg = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log(`\n📊 Estadísticas de ${numericKey}:`);
  console.log(`Total: ${total}`);
  console.log(`Promedio: ${avg.toFixed(0)}`);
  console.log(`Máximo: ${max}`);
  console.log(`Mínimo: ${min}`);
};

// ============================================
// OPCIONALES
// ============================================

const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log(`Precio: $${item.price}`);
  console.log(`Activo: ${item.active}`);

  if (Object.hasOwn(item, "discount")) {
    console.log(`Descuento: ${item.discount}%`);
  }
};

// ============================================
// ITERACIÓN
// ============================================

const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);
  for (const key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(`${key}: ${item[key]}`);
    }
  }
};

// ============================================
// SPREAD
// ============================================

const updateItem = (item, changes) => {
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES
// ============================================

const getAvailable = () => {
  return items.filter(item => item.active);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const addCalculatedProp = () => {
  return items.map(item => ({
    ...item,
    priceWithTax: Math.floor(item.price * 1.19)
  }));
};

const sortByNumericProp = (ascending = true) => {
  return [...items].sort((a, b) => 
    ascending ? a.price - b.price : b.price - a.price
  );
};

// ============================================
// REPORTE FINAL
// ============================================

const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  console.log(`Total productos: ${items.length}`);

  const active = getAvailable().length;
  console.log(`Activos: ${active}`);

  calculateStats("price");

  console.log("\n📋 Productos ordenados:");
  sortByNumericProp().forEach(item => {
    console.log(`${item.name} — $${item.price}`);
  });

  const sorted = sortByNumericProp();
  console.log(`\n💰 Más caro: ${sorted[sorted.length - 1].name}`);
  console.log(`💸 Más barato: ${sorted[0].name}`);

  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`Total de ${VALUE_LABEL}: ${items.length}`);

inspectItem(items[0]);
calculateStats("price");
items.forEach(showWithOptionals);
printAllProperties(items[0]);

const updated = updateItem(items[0], { price: 3000000 });
console.log("\n✏️ Producto actualizado:", updated);

console.log("\n✅ Disponibles:", getAvailable());

console.log("\n🔍 Buscar ID 2:", findById(2));
console.log("🔍 Buscar ID 99:", findById(99));

console.log("\n➕ Con impuesto:", addCalculatedProp());

console.log("\n📊 Ordenados:", sortByNumericProp());

buildReport();