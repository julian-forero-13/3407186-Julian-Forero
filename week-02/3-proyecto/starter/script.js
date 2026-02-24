let items = [];
let editingId = null;
let searchText = "";

/* =====================
LOCAL STORAGE
===================== */

const loadItems = () =>
JSON.parse(localStorage.getItem("techProducts") ?? "[]");

const saveItems = () =>
localStorage.setItem("techProducts", JSON.stringify(items));


/* =====================
RENDER PRODUCTOS
===================== */

const renderItems = () => {

const list = document.getElementById("item-list");
const empty = document.getElementById("empty-state");

const filtered = items.filter(item =>
item.name.toLowerCase().includes(searchText)
);

if(filtered.length === 0){
list.innerHTML = "";
empty.style.display = "block";
return;
}

empty.style.display = "none";

list.innerHTML = filtered.map(item => `
<div class="item">

<h3>${item.name}</h3>
<p>${item.description ?? ""}</p>

<p>
Marca: ${item.brand ?? ""} |
Precio: $${item.price ?? 0} |
Stock: ${item.stock ?? 0}
</p>

<div class="item-actions">
<button onclick="editItem(${item.id})">Editar</button>
<button onclick="removeItem(${item.id})" class="delete">Eliminar</button>
</div>

</div>
`).join("");

};


/* =====================
ESTADISTICAS
===================== */

const updateStats = () => {

const total = items.length;
document.getElementById("stat-total").textContent = total;
document.getElementById("stat-active").textContent = total;
document.getElementById("stat-inactive").textContent = 0;

};


/* =====================
ESTADISTICAS DETALLE
===================== */

const renderDetailedStats = () => {

const byCategory = {};
const byPriority = {};

items.forEach(item => {
byCategory[item.category] = (byCategory[item.category] ?? 0) + 1;
byPriority[item.priority] = (byPriority[item.priority] ?? 0) + 1;
});

document.getElementById("stats-details").innerHTML = `

<h4>Por categoría</h4>
${Object.entries(byCategory)
.map(([k,v]) => `<p>${k}: ${v}</p>`)
.join("")}

<hr>

<h4>Por demanda</h4>
${Object.entries(byPriority)
.map(([k,v]) => `<p>${k}: ${v}</p>`)
.join("")}

`;

};


/* =====================
FORMULARIO
===================== */

document.getElementById("item-form").addEventListener("submit", e => {

e.preventDefault();

const data = {
name: document.getElementById("item-name").value,
description: document.getElementById("item-description").value,
category: document.getElementById("item-category").value,
priority: document.getElementById("item-priority").value,
brand: document.getElementById("item-brand").value,
price: Number(document.getElementById("item-price").value),
stock: Number(document.getElementById("item-stock").value)
};

if(editingId){

items = items.map(item =>
item.id === editingId ? {...item, ...data} : item
);

editingId = null;
document.getElementById("submit-btn").textContent = "Crear producto";

}else{

items.push({
id: Date.now(),
...data
});

}

saveItems();
renderItems();
updateStats();
renderDetailedStats();

e.target.reset();

});


/* =====================
EDITAR
===================== */

window.editItem = id => {

const item = items.find(i => i.id === id);

editingId = id;

document.getElementById("item-name").value = item.name;
document.getElementById("item-description").value = item.description;
document.getElementById("item-category").value = item.category;
document.getElementById("item-priority").value = item.priority;
document.getElementById("item-brand").value = item.brand;
document.getElementById("item-price").value = item.price;
document.getElementById("item-stock").value = item.stock;

document.getElementById("submit-btn").textContent = "Actualizar producto";

};


/* =====================
ELIMINAR
===================== */

window.removeItem = id => {

if(!confirm("Eliminar producto?")) return;

items = items.filter(item => item.id !== id);

saveItems();
renderItems();
updateStats();
renderDetailedStats();

};


/* =====================
BUSCADOR
===================== */

document.getElementById("search-input").addEventListener("input", e => {
searchText = e.target.value.toLowerCase();
renderItems();
});


/* =====================
MODO OSCURO
===================== */

const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark");
themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
themeBtn.textContent = "☀️";
}else{
localStorage.setItem("theme","light");
themeBtn.textContent = "🌙";
}

});


/* =====================
INICIALIZAR
===================== */

document.addEventListener("DOMContentLoaded", () => {

items = loadItems();
renderItems();
updateStats();
renderDetailedStats();

});