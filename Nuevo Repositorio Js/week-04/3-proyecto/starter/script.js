// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// Dominio: E-commerce de productos tecnológicos
// ============================================


// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Nombre del dominio
const DOMAIN_NAME = "E-commerce de productos tecnológicos";

// Entidad principal (producto)
const rawEntityName = "  Laptop Gamer ASUS ROG  ";

// Categoría del producto
const entityCategory = "Computadores Portátiles";

// Código del producto
const entityCode = "TEC-001";

// Descripción del producto
const entityDescription = "Laptop gamer de alto rendimiento con procesador moderno y tarjeta gráfica dedicada ideal para tecnología avanzada.";

// Precio del producto
const mainValue = 5200000;

// Estado del producto
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// limpiar espacios
const entityName = rawEntityName.trim();

// nombre en mayúsculas
const entityNameUpper = entityName.toUpperCase();

// nombre en minúsculas
const entityNameLower = entityName.toLowerCase();

// prefijo del código
const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// validar prefijo
const hasValidPrefix = entityCode.startsWith("TEC");

// verificar palabra clave en descripción
const descriptionIsRelevant = entityDescription.includes("tecnología");

// validar sufijo del código
const hasValidSuffix = entityCode.endsWith("001");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE PRODUCTO
${separator}
Nombre:      ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCode}
Prefijo:     ${codePrefix}
Precio:      $${mainValue}
Estado:      ${isActive ? "Disponible" : "Agotado"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");

console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'tecnología'?: ${descriptionIsRelevant}`);
console.log(`¿Código termina con '001'?: ${hasValidSuffix}`);

console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

const notification = `📢 Nuevo producto disponible: ${entityName} (${entityCode}) en la tienda tecnológica`;

console.log(notification);
console.log("");