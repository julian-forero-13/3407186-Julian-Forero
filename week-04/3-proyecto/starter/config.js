/**
 * ============================================
 * MÓDULO DE CONFIGURACIÓN
 * Sistema de Inventario / E-commerce
 * ============================================
 */

/* ============================================
   CONFIGURACIÓN GENERAL DE LA APP
============================================ */

export const APP_CONFIG = {
  name: 'TechZone Inventory',
  version: '1.0.0',
  storageKey: 'techzone_products',
};

/* ============================================
   UMBRALES DE STOCK
============================================ */

export const STOCK_THRESHOLDS = {
  low: 10,        // Stock bajo
  critical: 5,    // Stock crítico
};

/* (Alias para compatibilidad si algún archivo usa THRESHOLDS) */
export const THRESHOLDS = STOCK_THRESHOLDS;

/* ============================================
   CATEGORÍAS DE PRODUCTOS
============================================ */

export const CATEGORIES = [
  { id: 'computador', name: 'Computadores', icon: '💻' },
  { id: 'celular', name: 'Celulares', icon: '📱' },
  { id: 'tablet', name: 'Tablets', icon: '📲' },
  { id: 'accesorio', name: 'Accesorios', icon: '🎧' },
  { id: 'periferico', name: 'Periféricos', icon: '🖱️' },
  { id: 'otro', name: 'Otros', icon: '📦' },
];

/* ============================================
   ESTADOS GENERALES
============================================ */

export const STATES = {
  ACTIVE: { id: 'active', name: 'Activo', color: '#22c55e' },
  INACTIVE: { id: 'inactive', name: 'Inactivo', color: '#ef4444' },
};

/* ============================================
   EXPORT GENERAL
============================================ */

export default {
  APP_CONFIG,
  STOCK_THRESHOLDS,
  THRESHOLDS,
  CATEGORIES,
  STATES,
};