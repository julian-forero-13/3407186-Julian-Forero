function actualizarEstadisticas(){

statTotal.textContent=productos.length;

let disponibles=productos.filter(p=>p.disponible).length;
let noDisponibles=productos.filter(p=>!p.disponible).length;

statDisponible.textContent=disponibles;
statNo.textContent=noDisponibles;
statUsuarios.textContent=usuarios.length;

}