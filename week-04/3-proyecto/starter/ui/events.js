import { inventory } from "../services/index.js";
import {
  renderProducts,
  updateProductCount,
  renderReports
} from "./render.js";

/* =========================
   INIT EVENTS
========================= */
export const initEvents = () => {

  /* FORM */
  document
    .getElementById("product-form")
    ?.addEventListener("submit", handleFormSubmit);

  /* BUSCAR */
  document
    .getElementById("search")
    ?.addEventListener("input", handleFilterChange);

  document
    .getElementById("filter-category")
    ?.addEventListener("change", handleFilterChange);

  document
    .getElementById("filter-stock")
    ?.addEventListener("change", handleFilterChange);

  /* REPORTES */
  document
    .getElementById("load-reports")
    ?.addEventListener("click", handleLoadReports);
};


/* =========================
   AGREGAR PRODUCTO
========================= */
export const handleFormSubmit = e => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = Object.fromEntries(formData.entries());

  data.price = Number(data.price);
  data.quantity = Number(data.quantity);

  inventory.add(data);

  refreshTable();

  e.target.reset();
};


/* =========================
   BUSCAR / FILTRAR
========================= */
export const handleFilterChange = () => {

  const search = document.getElementById("search").value;
  const category = document.getElementById("filter-category").value;
  const stockFilter = document.getElementById("filter-stock").value;

  const products = inventory.filter({
    search,
    category,
    stockFilter,
  });

  renderProducts(
    products,
    document.getElementById("products-body")
  );

  updateProductCount(products.length);
};


/* =========================
   REPORTES (Lazy Load)
========================= */
export const handleLoadReports = async () => {

  const container = document.getElementById("reports-container");
  container.innerHTML = "Cargando reportes...";

  try {

    const reports = await import("../features/reports.js");

    const products = inventory.getAll();

    const stats = reports.generateStats(products);

    renderReports(stats, container);

  } catch (error) {

    container.innerHTML = "Error cargando reportes";
    console.error(error);

  }
};


/* =========================
   REFRESH TABLA
========================= */
const refreshTable = () => {

  const products = inventory.getAll();

  renderProducts(
    products,
    document.getElementById("products-body")
  );

  updateProductCount(products.length);
};