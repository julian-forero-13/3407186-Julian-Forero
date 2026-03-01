let productos = JSON.parse(localStorage.getItem("productos")) || [];

function renderProductos(){

itemList.innerHTML="";

productos.forEach((p,index)=>{

const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<h3>${p.nombre}</h3>
<p>$${p.precio}</p>
<p>${p.disponible ? "Disponible":"No disponible"}</p>

<button class="btn btn-primary" onclick="hacerPedido(${index})">
Pedir producto
</button>

<button class="btn btn-warning" onclick="toggleDisponible(${index})">
Cambiar estado
</button>

<button class="btn btn-danger" onclick="eliminarProducto(${index})">
Eliminar
</button>
`;

itemList.appendChild(card);
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

if(confirm("Eliminar producto?")){
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