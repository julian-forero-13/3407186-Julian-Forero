/**
 * ==========================================
 * STORAGE SERVICE - E-COMMERCE TECHZONE
 * Manejo de localStorage
 * ==========================================
 */

/**
 * Guardar datos en localStorage
 * @param {string} key
 * @param {*} data
 */
export const save = (key, data) => {

  try {

    const json = JSON.stringify(data);

    localStorage.setItem(key, json);

  } catch (error) {

    console.error("Error guardando en localStorage:", error);

  }

};


/**
 * Cargar datos desde localStorage
 * @param {string} key
 * @param {*} defaultValue
 * @returns {*}
 */
export const load = (key, defaultValue = null) => {

  try {

    const data = localStorage.getItem(key);

    if (!data) return defaultValue;

    return JSON.parse(data);

  } catch (error) {

    console.error("Error leyendo localStorage:", error);

    return defaultValue;

  }

};


/**
 * Eliminar dato específico
 * @param {string} key
 */
export const remove = (key) => {

  try {

    localStorage.removeItem(key);

  } catch (error) {

    console.error("Error eliminando localStorage:", error);

  }

};


/**
 * Limpiar datos de la app
 * (Solo limpia las claves del proyecto)
 */
export const clear = () => {

  try {

    const keys = [
      "techzone_products"
    ];

    keys.forEach(key =>
      localStorage.removeItem(key)
    );

  } catch (error) {

    console.error("Error limpiando localStorage:", error);

  }

};


export default {
  save,
  load,
  remove,
  clear,
};