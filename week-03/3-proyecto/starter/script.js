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


formProducto.addEventListener("submit", e=>{
e.preventDefault();

agregarProducto(
productoNombre.value,
productoPrecio.value
);

formProducto.reset();
cerrarModalProducto();
});


formUsuario.addEventListener("submit", e=>{
e.preventDefault();

agregarUsuario(
usuarioNombre.value,
usuarioEmail.value,
usuarioRol.value
);

formUsuario.reset();
cerrarModalUsuario();
});