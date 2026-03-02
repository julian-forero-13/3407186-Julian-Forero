import { formatPrice } from '../utils/index.js';

let tableBodyGlobal;

/* ===============================
   RENDER TABLA
================================ */
export const renderProducts = (products, container) => {

  tableBodyGlobal = container;

  container.innerHTML = "";

  if(products.length === 0){
    container.innerHTML = `
      <tr>
        <td colspan="6" class="empty-state">
          No hay productos registrados
        </td>
      </tr>
    `;
    return;
  }

  for(const product of products){
    container.innerHTML += createProductRow(product);
  }

};


/* ===============================
   FILA
================================ */
export const createProductRow = ({
  id,
  name,
  category,
  price,
  quantity
}) => {

  const total = price * quantity;

  return `
    <tr>

      <td>${name}</td>
      <td>${category}</td>
      <td>${formatPrice(price,"USD")}</td>
      <td>${quantity}</td>
      <td>${formatPrice(total,"USD")}</td>

      <td>
        <button class="btn-edit" data-id="${id}">
          Editar
        </button>

        <button class="btn-delete" data-id="${id}">
          Eliminar
        </button>
      </td>

    </tr>
  `;
};


/* ===============================
   CATEGORIAS
================================ */
export const renderCategoryOptions = (selects, categories) => {

  selects.forEach(select => {

    select.innerHTML += categories.map(c => `
      <option value="${c.id}">
        ${c.icon} ${c.name}
      </option>
    `).join("");

  });

};


/* ===============================
   CONTADOR
================================ */
export const updateProductCount = count => {

  const badge = document.getElementById("product-count");

  if(badge){
    badge.textContent = `${count} productos`;
  }

};


/* ===============================
   NOTIFICACION SIMPLE
================================ */
export const showNotification = (msg) => {
  alert(msg);
};

export const renderReports = (stats, container) => {

  const {
    totalProducts,
    totalValue,
    totalItems,
    lowStockProducts,
    outOfStockProducts,
  } = stats;

  container.innerHTML = `
    <div class="report-card">
      <h3>Total productos</h3>
      <p>${totalProducts}</p>
    </div>

    <div class="report-card">
      <h3>Valor inventario</h3>
      <p>$${totalValue.toLocaleString()}</p>
    </div>

    <div class="report-card">
      <h3>Total unidades</h3>
      <p>${totalItems}</p>
    </div>

    <div class="report-card">
      <h3>Stock bajo</h3>
      <p>${lowStockProducts}</p>
    </div>

    <div class="report-card">
      <h3>Sin stock</h3>
      <p>${outOfStockProducts}</p>
    </div>
  `;
};