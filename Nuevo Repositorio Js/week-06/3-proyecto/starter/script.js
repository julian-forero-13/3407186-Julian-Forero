// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: E-commerce de productos tecnológicos
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const items = [
  { name: "iPhone 13", category: "smartphone", value: 3200000 },
  { name: "Laptop HP Pavilion", category: "laptop", value: 2800000 },
  { name: "Audífonos JBL", category: "accessory", value: 250000 },
  { name: "Mouse Logitech", category: "accessory", value: 120000 },
  { name: "Samsung Galaxy A54", category: "smartphone", value: 1800000 },
  { name: "Teclado Redragon", category: "accessory", value: 200000 }
];

const categories = ["smartphone", "laptop", "accessory"];

const valueLabel = "precio (COP)";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0;

for (const item of items) {
  lineNumber++;
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${item.value}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  for (const item of items) {
    if (item.category === category) count++;
  }

  console.log(`${category}: ${count} producto(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio
// ============================================
console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

for (const item of items) {
  totalValue += item.value;
}

const averageValue = items.length > 0 ? totalValue / items.length : 0;

console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(0)}`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");

let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;

if (items.length > 0) {
  for (const item of items) {
    if (item.value > maxItem.value) {
      maxItem = item;
    }
    if (item.value < minItem.value) {
      minItem = item;
    }
  }

  console.log(`Mayor ${valueLabel}: ${maxItem.name} (${maxItem.value})`);
  console.log(`Menor ${valueLabel}: ${minItem.name} (${minItem.value})`);
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte detallado
// ============================================
console.log("=== REPORTE DETALLADO ===");

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  const comparison = item.value >= averageValue
    ? "sobre el promedio 📈"
    : "bajo el promedio 📉";

  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");