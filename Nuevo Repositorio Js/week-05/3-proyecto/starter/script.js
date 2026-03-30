// ============================================
// PROYECTO SEMANA 05: Clasificador
// Dominio: E-commerce de productos tecnológicos
// ============================================

// ============================================
// SECCIÓN 1: Datos del producto
// ============================================

const elementName = "Laptop ASUS ROG";   // nombre del producto
const elementStatus = "active";          // estado: active / inactive
const elementValue = 3500000;            // precio en COP
const elementType = "laptop";            // tipo de producto
const elementInfo = {                    // información adicional
  brand: "ASUS",
  stock: 12,
  warranty: "1 año"
};

// ============================================
// SECCIÓN 2: Clasificación por precio
// ============================================

let classification;

if (elementValue >= 3000000) {
  classification = "Producto Premium 💎";
} else if (elementValue >= 1000000) {
  classification = "Producto Gama Media ⚖️";
} else {
  classification = "Producto Económico 💰";
}

// ============================================
// SECCIÓN 3: Estado binario con ternario
// ============================================

const statusLabel = elementStatus === "active"
  ? "Disponible ✅"
  : "No disponible ❌";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;

switch (elementType) {
  case "laptop":
    typeLabel = "Computador Portátil 💻";
    break;
  case "smartphone":
    typeLabel = "Teléfono Inteligente 📱";
    break;
  case "accessory":
    typeLabel = "Accesorio Tecnológico 🎧";
    break;
  default:
    typeLabel = "Tipo desconocido ❓";
}

// ============================================
// SECCIÓN 5: Valores por defecto con ??
// ============================================

const displayName = elementName ?? "Producto sin nombre";
const infoDetail = elementInfo?.brand ?? "Sin información de marca";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.stock ?? "Stock no disponible";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE PRODUCTO TECNOLÓGICO");
console.log("=".repeat(40));
console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Marca: ${infoDetail}`);
console.log(`Stock disponible: ${safeProperty}`);
console.log("=".repeat(40));