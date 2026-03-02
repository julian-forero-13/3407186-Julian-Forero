/**
 * ==========================================
 * INVENTORY SERVICE - E-COMMERCE TECHZONE
 * Lógica principal del inventario
 * ==========================================
 */

import { Product } from "../models/Product.js";

/**
 * Configuración básica
 */
const APP_CONFIG = {
  storageKey: "techzone_products"
};

/**
 * Storage simple usando localStorage
 */
const storage = {
  load(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error leyendo localStorage:", error);
      return [];
    }
  },

  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};


// Array en memoria
let products = [];


/**
 * Inicializar inventario desde localStorage
 */
export const init = () => {
  const savedProducts = storage.load(APP_CONFIG.storageKey);

  products = savedProducts.map(product =>
    Product.fromJSON(product)
  );

  return products;
};


/**
 * Obtener todos los productos
 */
export const getAll = () => {
  return [...products];
};


/**
 * Obtener producto por ID
 */
export const getById = (id) => {
  return products.find(p => p.id === id);
};


/**
 * Agregar producto
 */
export const add = ({ name, category, price, quantity }) => {

  const product = new Product({
    name,
    category,
    price: Number(price),
    quantity: Number(quantity)
  });

  products.push(product);

  persist();

  return product;
};


/**
 * Actualizar producto
 */
export const update = (id, updates) => {

  const product = getById(id);

  if (!product) return null;

  product.update(updates);

  persist();

  return product;
};


/**
 * Eliminar producto
 */
export const remove = (id) => {

  const index = products.findIndex(p => p.id === id);

  if (index === -1) return false;

  products.splice(index, 1);

  persist();

  return true;
};


/**
 * Filtrar productos
 */
export const filter = ({
  search = "",
  category = "",
  stockFilter = "",
} = {}) => {

  let result = [...products];

  // Buscar por nombre
  if (search) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Filtrar por categoría
  if (category) {
    result = result.filter(p => p.category === category);
  }

  // Filtrar por stock
  if (stockFilter === "low") {
    result = result.filter(p => p.quantity <= 5 && p.quantity > 0);
  }

  if (stockFilter === "out") {
    result = result.filter(p => p.quantity === 0);
  }

  if (stockFilter === "available") {
    result = result.filter(p => p.quantity > 0);
  }

  return result;
};


/**
 * Obtener productos por categoría
 */
export const getByCategory = (categoryId) => {
  return products.filter(
    p => p.category === categoryId
  );
};


/**
 * Guardar en localStorage
 */
const persist = () => {

  const plainProducts = products.map(
    p => p.toJSON()
  );

  storage.save(
    APP_CONFIG.storageKey,
    plainProducts
  );
};


export default {
  init,
  getAll,
  getById,
  add,
  update,
  remove,
  filter,
  getByCategory,
};