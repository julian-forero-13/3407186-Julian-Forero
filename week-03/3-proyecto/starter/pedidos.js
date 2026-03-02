let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

function renderPedidos(){

pedidoList.innerHTML="";

pedidos.forEach((p,index)=>{

pedidoList.innerHTML+=`
<div class="card">

<h3>${p.producto}</h3>
<p>${p.usuario}</p>

<button class="btn-danger" onclick="eliminarPedido(${index})">
Eliminar
</button>

</div>
`;
});

guardarPedidos();
}

function hacerPedido(index){

if(usuarios.length==0){
alert("Primero agrega usuario");
return;
}

if(!productos[index].disponible){
alert("Producto no disponible");
return;
}

let nombre=prompt("Nombre usuario");

if(!nombre) return;

pedidos.push({
producto:productos[index].nombre,
usuario:nombre
});

renderPedidos();
}

function eliminarPedido(index){

if(confirm("Eliminar pedido")){
pedidos.splice(index,1);
renderPedidos();
}
}

function guardarPedidos(){
localStorage.setItem("pedidos",JSON.stringify(pedidos));
}

renderPedidos();