/**
 * Formatters Utility Module
 * Functions for formatting data
 */

/**
 * Format price as currency
 * @param {number} price
 * @param {string} currency - Currency code
 * @returns {string}
 */
export const formatPrice = (price, currency = 'USD') => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency,
  }).format(price);
};

/**
 * Format date
 * @param {Date|string} date
 * @returns {string}
 */
export const formatDate = date => {
  return new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(date));
};

/**
 * Format quantity with stock status
 * @param {number} quantity
 * @param {Object} options - { lowThreshold, criticalThreshold }
 * @returns {Object} - { text, className }
 */
export const formatStock = (
  quantity,
  { lowThreshold = 10, criticalThreshold = 5 } = {}
) => {
  let className = 'stock-ok';

  if (quantity === 0) {
    className = 'stock-out';
  } else if (quantity <= criticalThreshold) {
    className = 'stock-low';
  } else if (quantity <= lowThreshold) {
    className = 'stock-low';
  }

  return {
    text: `${quantity} unidades`,
    className,
  };
};

/**
 * Truncate text
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export const truncate = (text, maxLength = 50) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};