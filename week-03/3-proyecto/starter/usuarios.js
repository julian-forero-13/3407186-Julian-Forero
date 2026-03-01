let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function renderUsuarios(){

userList.innerHTML="";

usuarios.forEach((u,index)=>{

const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<h3>${u.nombre}</h3>
<p>${u.email}</p>
<p>${u.rol}</p>

<button class="btn btn-danger" onclick="eliminarUsuario(${index})">
Eliminar
</button>
`;

userList.appendChild(card);
});

guardarUsuarios();
actualizarEstadisticas();
}

function agregarUsuario(nombre,email,rol){

usuarios.push({
nombre,
email,
rol
});

renderUsuarios();
}

function eliminarUsuario(index){

if(confirm("Eliminar usuario?")){
usuarios.splice(index,1);
renderUsuarios();
}

}

function guardarUsuarios(){
localStorage.setItem("usuarios",JSON.stringify(usuarios));
}

renderUsuarios();