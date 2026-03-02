let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function renderUsuarios(){

userList.innerHTML="";

usuarios.forEach((u,index)=>{

userList.innerHTML+=`
<div class="card">

<h3>${u.nombre}</h3>
<p>${u.email}</p>
<p>${u.rol}</p>

<button class="btn-danger" onclick="eliminarUsuario(${index})">
Eliminar
</button>

</div>
`;

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

if(confirm("Eliminar usuario")){
usuarios.splice(index,1);
renderUsuarios();
}
}

function guardarUsuarios(){
localStorage.setItem("usuarios",JSON.stringify(usuarios));
}

renderUsuarios();