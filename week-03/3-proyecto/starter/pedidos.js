let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

/* Renderizar pedidos */
function renderPedidos() {

  pedidoList.innerHTML = "";

  pedidos.forEach((p, index) => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${p.producto}</h3>
      <p>Usuario: ${p.usuario}</p>

      <button class="btn btn-danger" onclick="eliminarPedido(${index})">
        Eliminar pedido
      </button>
    `;

    pedidoList.appendChild(card);
  });

  guardarPedidos();
}

/* Crear pedido */
function hacerPedido(index) {

  if (usuarios.length === 0) {
    alert("Primero agrega un usuario");
    return;
  }

  if (!productos[index].disponible) {
    alert("Producto no disponible");
    return;
  }

  let nombres = usuarios.map(u => u.nombre).join("\n");

  let usuario = prompt("Escribe el nombre del usuario:\n" + nombres);

  if (!usuario) return;

  pedidos.push({
    producto: productos[index].nombre,
    usuario: usuario
  });

  renderPedidos();
}

/* Eliminar pedido */
function eliminarPedido(index) {

  if (!confirm("¿Eliminar este pedido?")) return;

  pedidos.splice(index, 1);

  renderPedidos();
}

/* Guardar en sistema */
function guardarPedidos() {
  localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

renderPedidos();