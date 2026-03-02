/**
 * MAIN - TechZone Inventory
 */

import { CATEGORIES } from './config.js';

import {
  inventory
} from './services/index.js';

import {
  initEvents,
  renderProducts,
  renderCategoryOptions,
  updateProductCount
} from './ui/index.js';

let tableBody;

/* ===============================
   INIT APP
================================ */
const init = () => {

  console.log("🚀 TechZone iniciado");

  tableBody = document.getElementById("products-body");

  /* cargar productos */
  inventory.init();

  /* render categorías */
  renderCategoryOptions(
    document.querySelectorAll(".category-select"),
    CATEGORIES
  );

  /* render tabla */
  renderProducts(
    inventory.getAll(),
    tableBody
  );

  updateProductCount(
    inventory.getAll().length
  );

  /* eventos */
  initEvents(tableBody);

};


/* ===============================
   REPORTES (lazy load)
================================ */
export const loadReports = async () => {

  const module = await import('./features/reports.js');

  const stats = module.generateStats(
    inventory.getAll()
  );

  console.log(stats);
};


/* ===============================
   EXPORT (lazy load)
================================ */
export const loadExport = async (format="json") => {

  const module = await import('./features/export.js');

  const data = inventory.getAll();

  if(format === "csv"){
    module.exportCSV(data);
  }else{
    module.exportJSON(data);
  }
};


document.addEventListener("DOMContentLoaded", init);