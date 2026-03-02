/**
 * Validators Utility Module
 * Functions for validating data
 */

/**
 * Validate product data
 * @param {Object} productData
 * @returns {Object} - { isValid, errors }
 */
export const validateProduct = ({ name, category, price, quantity } = {}) => {
  const errors = [];

  // Validar nombre
  if (!name || name.trim().length < 2) {
    errors.push('El nombre debe tener al menos 2 caracteres');
  }

  // Validar categoría
  if (!category || category.trim() === '') {
    errors.push('La categoría es obligatoria');
  }

  // Validar precio
  if (price === undefined || price === null || price === '') {
    errors.push('El precio es obligatorio');
  } else if (!isValidPrice(price)) {
    errors.push('El precio debe ser un número mayor o igual a 0');
  }

  // Validar cantidad
  if (quantity === undefined || quantity === null || quantity === '') {
    errors.push('La cantidad es obligatoria');
  } else if (!isValidQuantity(quantity)) {
    errors.push('La cantidad debe ser un número entero mayor o igual a 0');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate price
 * @param {*} value
 * @returns {boolean}
 */
export const isValidPrice = value => {
  const num = Number(value);
  return !isNaN(num) && num >= 0;
};

/**
 * Validate quantity
 * @param {*} value
 * @returns {boolean}
 */
export const isValidQuantity = value => {
  const num = Number(value);
  return Number.isInteger(num) && num >= 0;
};

/**
 * Sanitize string input
 * @param {string} input
 * @returns {string}
 */
export const sanitize = input => {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};