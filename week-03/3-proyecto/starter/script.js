const modalProducto = document.getElementById("modalProducto");
const modalUsuario = document.getElementById("modalUsuario");

const formProducto = document.getElementById("formProducto");
const formUsuario = document.getElementById("formUsuario");

const productoNombre = document.getElementById("productoNombre");
const productoPrecio = document.getElementById("productoPrecio");

const usuarioNombre = document.getElementById("usuarioNombre");
const usuarioEmail = document.getElementById("usuarioEmail");
const usuarioRol = document.getElementById("usuarioRol");

const itemList = document.getElementById("itemList");
const userList = document.getElementById("userList");
const pedidoList = document.getElementById("pedidoList");

const statTotal = document.getElementById("statTotal");
const statDisponible = document.getElementById("statDisponible");
const statNo = document.getElementById("statNo");
const statUsuarios = document.getElementById("statUsuarios");

function abrirModalProducto(){
modalProducto.style.display="flex";
}

function cerrarModalProducto(){
modalProducto.style.display="none";
}

function abrirModalUsuario(){
modalUsuario.style.display="flex";
}

function cerrarModalUsuario(){
modalUsuario.style.display="none";
}

formProducto.addEventListener("submit",e=>{
e.preventDefault();

agregarProducto(
productoNombre.value,
productoPrecio.value
);

formProducto.reset();
cerrarModalProducto();
});

formUsuario.addEventListener("submit",e=>{
e.preventDefault();

agregarUsuario(
usuarioNombre.value,
usuarioEmail.value,
usuarioRol.value
);

formUsuario.reset();
cerrarModalUsuario();
});

/* ===============================
   CAMBIO DE TEMA
================================ */

const themeToggle = document.getElementById("themeToggle");

/* Cargar tema guardado */
if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark");
}

/* Evento botón */
themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

});