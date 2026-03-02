let productos = JSON.parse(localStorage.getItem("productos")) || [];

function renderProductos(){

itemList.innerHTML="";

productos.forEach((p,index)=>{

itemList.innerHTML+=`
<div class="card">

<h3>${p.nombre}</h3>
<p>$${p.precio}</p>
<p>${p.disponible?"Disponible":"No disponible"}</p>

<button class="btn-primary" onclick="hacerPedido(${index})">
Pedir
</button>

<button class="btn-warning" onclick="toggleDisponible(${index})">
Estado
</button>

<button class="btn-danger" onclick="eliminarProducto(${index})">
Eliminar
</button>

</div>
`;

});

guardarProductos();
actualizarEstadisticas();
}

function agregarProducto(nombre,precio){

productos.push({
nombre,
precio,
disponible:true
});

renderProductos();
}

function eliminarProducto(index){

if(confirm("Eliminar producto")){
productos.splice(index,1);
renderProductos();
}
}

function toggleDisponible(index){
productos[index].disponible=!productos[index].disponible;
renderProductos();
}

function guardarProductos(){
localStorage.setItem("productos",JSON.stringify(productos));
}

renderProductos();