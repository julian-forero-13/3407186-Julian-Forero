// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// Dominio: E-commerce de productos tecnológicos
// ============================================


// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Constantes base del e-commerce

const PRECIO_LAPTOP = 3500000;
const PRECIO_MOUSE = 80000;
const PRECIO_TECLADO = 150000;
const COSTO_ENVIO = 20000;
const DESCUENTO_TECNO = 0.10; // 10%

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// Cantidad de productos comprados
const laptopsVendidas = 2;
const mouseVendidos = 3;
const tecladosVendidos = 1;

// Cálculo de subtotales
const subtotalLaptop = PRECIO_LAPTOP * laptopsVendidas;
console.log("Subtotal laptops:", subtotalLaptop);

const subtotalMouse = PRECIO_MOUSE * mouseVendidos;
console.log("Subtotal mouse:", subtotalMouse);

const subtotalTeclado = PRECIO_TECLADO * tecladosVendidos;
console.log("Subtotal teclados:", subtotalTeclado);

// Total antes del envío
const totalProductos = subtotalLaptop + subtotalMouse + subtotalTeclado;
console.log("Total productos:", totalProductos);

// Total final con envío
const totalCompra = totalProductos + COSTO_ENVIO;
console.log("Total con envío:", totalCompra);

// Promedio de precio por producto
const totalItems = laptopsVendidas + mouseVendidos + tecladosVendidos;
const promedioProducto = totalProductos / totalItems;
console.log("Precio promedio por producto:", promedioProducto);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

let carrito = 0;

carrito += PRECIO_MOUSE;
console.log("Después de agregar mouse:", carrito);

carrito += PRECIO_TECLADO;
console.log("Después de agregar teclado:", carrito);

carrito += COSTO_ENVIO;
console.log("Después de agregar envío:", carrito);

carrito *= 0.90; // aplicar 10% descuento
console.log("Total con descuento aplicado:", carrito);

console.log("");


// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

const stockLaptop = 5;
const pedidoLaptop = 2;

const hayStock = stockLaptop >= pedidoLaptop;
console.log("¿Hay stock suficiente?", hayStock);

const envioGratis = COSTO_ENVIO === 0;
console.log("¿El envío es gratis?", envioGratis);

const compraGrande = totalProductos > 2000000;
console.log("¿La compra supera 2 millones?", compraGrande);

console.log("");


// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

const esClientePremium = true;
const montoCompra = totalProductos;

// descuento si es premium Y compra más de 500 mil
const aplicaDescuento = esClientePremium && montoCompra >= 500000;
console.log("¿Aplica descuento premium?", aplicaDescuento);

// envío gratis si compra más de 3 millones O es premium
const aplicaEnvioGratis = montoCompra >= 3000000 || esClientePremium;
console.log("¿Aplica envío gratis?", aplicaEnvioGratis);

// negar condición
const carritoVacio = !(montoCompra > 0);
console.log("¿El carrito está vacío?", carritoVacio);

console.log("");


// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log("Total de productos comprados:", totalItems);
console.log("Valor total de productos:", totalProductos);
console.log("Costo de envío:", COSTO_ENVIO);
console.log("Total final de la compra:", totalCompra);