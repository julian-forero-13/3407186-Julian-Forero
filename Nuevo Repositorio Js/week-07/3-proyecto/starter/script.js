// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: E-commerce de productos tecnológicos
// ============================================

"use strict";

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "E-commerce de Productos Tecnológicos";
const VALUE_LABEL = "precio";
const TAX_RATE = 0.19;
const CURRENCY = "COP";

const items = [
  { id: 1, name: "iPhone 13", category: "smartphone", value: 3200000, active: true, stock: 5 },
  { id: 2, name: "Laptop ASUS", category: "laptop", value: 3500000, active: true, stock: 3 },
  { id: 3, name: "Audífonos Sony", category: "accessory", value: 400000, active: true, stock: 10 },
  { id: 4, name: "Mouse Logitech", category: "accessory", value: 150000, active: false, stock: 0 },
  { id: 5, name: "Samsung Galaxy A54", category: "smartphone", value: 1800000, active: true, stock: 7 }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (product) => 
  `📦 ${product.name} [${product.category}] — ${CURRENCY} ${product.value} — Stock: ${product.stock}`;

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Calcula precio con impuesto
const calculateValue = (price, tax = TAX_RATE) => 
  +(price * (1 + tax)).toFixed(0);

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Producto válido si está activo y tiene stock
const isValid = (product) => 
  product.active === true && product.stock > 0;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, currency = CURRENCY) => 
  `${label}: ${currency} ${value}`;

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\n⚠️  No hay productos registrados.");
} else {
  // --- Listado ---
  console.log("\n📋 Catálogo:");
  let lineNumber = 1;
  for (const product of items) {
    console.log(`  ${lineNumber}. ${formatItem(product)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;
  for (const product of items) {
    if (isValid(product)) {
      validCount++;
    }
  }
  console.log(`\n✅ Productos disponibles: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;
  for (const product of items) {
    totalValue += calculateValue(product.value);
  }

  console.log(formatWithDefault(totalValue, "Total con IVA"));
}

console.log(`\n${"═".repeat(45)}\n`);