/* ===============================
   VARIABLES
================================ */
let products = [];
let users = [];
let orders = [];


/* ===============================
   TABS
================================ */
document.querySelectorAll(".tab-btn").forEach(btn=>{
btn.addEventListener("click",()=>{

document.querySelectorAll(".tab-btn")
.forEach(b=>b.classList.remove("active"));

document.querySelectorAll(".tab-panel")
.forEach(p=>p.classList.remove("active"));

btn.classList.add("active");

document.getElementById(btn.dataset.tab)
.classList.add("active");

});
});


/* ===============================
   MODAL PRODUCTOS
================================ */
const itemModal = document.getElementById("item-modal");

document.getElementById("add-item-btn").onclick=()=>{
itemModal.style.display="flex";
};

document.getElementById("close-modal").onclick=()=>{
itemModal.style.display="none";
};

document.getElementById("cancel-btn").onclick=()=>{
itemModal.style.display="none";
};


/* ===============================
   GUARDAR PRODUCTO
================================ */
document.getElementById("item-form")
.addEventListener("submit",e=>{

e.preventDefault();

const product={
id:Date.now(),
type:document.getElementById("item-type").value,
name:document.getElementById("item-name").value,
status:document.getElementById("item-status").value
};

products.push(product);

renderProducts();
updateStats();

itemModal.style.display="none";
e.target.reset();

});


/* ===============================
   RENDER PRODUCTOS
================================ */
function renderProducts(){

const container=document.getElementById("item-list");
container.innerHTML="";

if(products.length===0){
document.getElementById("empty-state").style.display="block";
return;
}

document.getElementById("empty-state").style.display="none";

products.forEach(product=>{

container.innerHTML+=`
<div class="item-card">

<h3>${product.name}</h3>
<p>${product.type}</p>

<p>
Estado:
<b style="color:${product.status==="active"?"#22c55e":"#ef4444"}">
${product.status==="active"?"Disponible":"No disponible"}
</b>
</p>

<div class="item-actions">

<button class="btn btn-success btn-small"
onclick="createOrder(${product.id})"
${product.status==="inactive"?"disabled":""}>
🛒 Pedir
</button>

<button class="btn btn-warning btn-small"
onclick="toggleStatus(${product.id})">
🔄 Cambiar
</button>

<button class="btn btn-danger btn-small"
onclick="deleteProduct(${product.id})">
🗑 Eliminar
</button>

</div>

</div>
`;
});

}


/* ===============================
   CAMBIAR ESTADO
================================ */
function toggleStatus(id){

const product=products.find(p=>p.id===id);

product.status=
product.status==="active"?"inactive":"active";

renderProducts();
updateStats();

}


/* ===============================
   ELIMINAR
================================ */
function deleteProduct(id){

products=products.filter(p=>p.id!==id);

renderProducts();
updateStats();

}


/* ===============================
   MODAL USUARIOS
================================ */
const userModal=document.getElementById("user-modal");

document.getElementById("add-user-btn").onclick=()=>{
userModal.style.display="flex";
};

document.getElementById("close-user-modal").onclick=()=>{
userModal.style.display="none";
};

document.getElementById("cancel-user-btn").onclick=()=>{
userModal.style.display="none";
};


/* ===============================
   GUARDAR USUARIO
================================ */
document.getElementById("user-form")
.addEventListener("submit",e=>{

e.preventDefault();

const user={
id:Date.now(),
name:document.getElementById("user-name").value,
email:document.getElementById("user-email").value,
role:document.getElementById("user-role").value
};

users.push(user);

renderUsers();
updateStats();

userModal.style.display="none";
e.target.reset();

});


/* ===============================
   RENDER USUARIOS (SIN LOGO)
================================ */
function renderUsers(){

const container=document.getElementById("user-list");
container.innerHTML="";

users.forEach(user=>{

container.innerHTML+=`
<div class="member-card">

<h3>${user.name}</h3>
<p>${user.email}</p>
<p>${user.role}</p>

<button class="btn btn-success btn-small"
onclick="orderForUser('${user.name}')">
🛒 Hacer pedido
</button>

</div>
`;
});

}


/* ===============================
   PEDIDO DESDE PRODUCTO
================================ */
function createOrder(productId){

const product=products.find(p=>p.id===productId);

if(users.length===0){
alert("Primero crea un usuario");
return;
}

const order={
id:Date.now(),
user:users[0].name,
product:product.name,
date:new Date().toLocaleDateString()
};

orders.push(order);

renderOrders();

}


/* ===============================
   PEDIDO DESDE USUARIO
================================ */
function orderForUser(userName){

const available=products.filter(p=>p.status==="active");

if(available.length===0){
alert("No hay productos disponibles");
return;
}

const product=available[0];

const order={
id:Date.now(),
user:userName,
product:product.name,
date:new Date().toLocaleDateString()
};

orders.push(order);

renderOrders();

}


/* ===============================
   RENDER PEDIDOS
================================ */
function renderOrders(){

const container=document.getElementById("orders-list");
container.innerHTML="";

orders.forEach(order=>{

container.innerHTML+=`
<div class="item-card">
<h3>${order.product}</h3>
<p>Usuario: ${order.user}</p>
<p>Fecha: ${order.date}</p>
</div>
`;
});

}


/* ===============================
   ESTADISTICAS
================================ */
function updateStats(){

document.getElementById("stat-total").innerText=products.length;

const active=
products.filter(p=>p.status==="active").length;

const inactive=
products.filter(p=>p.status==="inactive").length;

document.getElementById("stat-active").innerText=active;
document.getElementById("stat-inactive").innerText=inactive;
document.getElementById("stat-users").innerText=users.length;

}