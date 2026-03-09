// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================
//
// Dominio: E-commerce de productos tecnológicos
// Este script muestra una ficha de datos de un producto
// usando variables, tipos de datos y conversiones.
// ============================================


// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// Nombre del dominio
const DOMAIN_NAME = "E-commerce de productos tecnológicos";

// Producto del catálogo
const itemName = "Smartphone Samsung Galaxy S23";

// Categoría del producto
const itemCategory = "Celular - Gama alta";

// Cantidad disponible en inventario
const itemQuantity = 35;

// Boolean indicando si el producto está disponible
const isItemAvailable = true;

// Valor aún no asignado (por ejemplo proveedor pendiente)
const supplierAssigned = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================

console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Producto:   ${itemName}`);
console.log(`Categoría:  ${itemCategory}`);
console.log(`Stock:      ${itemQuantity}`);
console.log(`Disponible: ${isItemAvailable}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================

console.log("--- Tipos de datos ---");

console.log("typeof itemName:        ", typeof itemName);
console.log("typeof itemQuantity:    ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================

console.log("--- Conversiones ---");

// Convertir el número de stock a texto
const quantityAsText = String(itemQuantity);

console.log("Stock como texto:", quantityAsText);
console.log("typeof (convertido):", typeof quantityAsText);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================

console.log("--- Valor nulo ---");

console.log("Proveedor asignado:", supplierAssigned);
console.log("typeof supplierAssigned:", typeof supplierAssigned);
console.log("¿Es null?:", supplierAssigned === null);

console.log("");


// ============================================
// CIERRE
// ============================================

console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");