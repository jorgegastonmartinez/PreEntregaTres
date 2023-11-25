let datosCompras = JSON.parse(localStorage.getItem("datos-compras")) || [];
const contenedorHistorial = document.getElementById("contenedor-historial");

datosCompras.forEach(compra => {
    const div = document.createElement("div");
    div.classList.add("div-contenedor");
    div.innerHTML = `
        <div class="compras">
            <div class="nombre-historial">
                <h4>Nombre</h4>
                <h5>${compra.nombre}</h5>
            </div>
            <div class="apellido-historial">
                <h4>Apellido</h4>
                <h5>${compra.apellido}</h5>
            </div>
            <div class="email-historial">
                <h4>Email</h4>
                <h5>${compra.email}</h5>
            </div>
            <div class="precio-historial">
                <h4>Monto</h4>
                <h5>$${compra.precio}</h5>
            </div>
        </div>
    `;

    contenedorHistorial.appendChild(div);
});