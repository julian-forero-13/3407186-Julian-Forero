/**
 * ==========================================
 * EXPORT MODULE - E-COMMERCE TECHZONE
 * Exportación de productos tecnológicos
 * ==========================================
 */

/**
 * Exportar productos a JSON
 * @param {Array} products
 * @returns {string}
 */
export const toJSON = (products) => {
  return JSON.stringify(products, null, 2);
};

/**
 * Exportar productos a CSV
 * Usa destructuring
 * @param {Array} products
 * @returns {string}
 */
export const toCSV = (products) => {

  // Encabezados según la tabla del HTML
  const headers = ['name', 'category', 'price', 'quantity', 'total'];
  const headerRow = headers.join(',');

  // Filas de datos
  const rows = products.map(({ name, category, price, quantity }) => {
    const total = price * quantity;
    return `${name},${category},${price},${quantity},${total}`;
  });

  return [headerRow, ...rows].join('\n');
};

/**
 * Descargar archivo
 * @param {string} content
 * @param {string} filename
 * @param {string} type
 */
export const downloadFile = (
  content,
  filename,
  type = 'application/json'
) => {

  const blob = new Blob([content], { type });

  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

/**
 * Exportar JSON
 * @param {Array} products
 */
export const exportJSON = (products) => {

  const content = toJSON(products);

  const filename = `techzone_products_${Date.now()}.json`;

  downloadFile(
    content,
    filename,
    'application/json'
  );
};

/**
 * Exportar CSV
 * @param {Array} products
 */
export const exportCSV = (products) => {

  const content = toCSV(products);

  const filename = `techzone_products_${Date.now()}.csv`;

  downloadFile(
    content,
    filename,
    'text/csv'
  );
};

export default {
  toJSON,
  toCSV,
  exportJSON,
  exportCSV,
  downloadFile,
};

console.log("📤 Export module TechZone cargado (Lazy Loading)");