const torneosDestacados = [
    { id: 1, nombre: "Copa Valorant 2026", juego: "Valorant", estado: "Abierto", color: "bg-success" }
];

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("torneos-destacados");
    
    if (contenedor) {
        contenedor.innerHTML = "";
        
        torneosDestacados.forEach(torneo => {
            const article = document.createElement("article");
            article.className = "col-md-4";
            article.innerHTML = `
                <div class="card tarjeta h-100 border-secondary">
                    <div class="card-body text-center d-flex flex-column">
                        <h5 class="card-title text-info mb-3">${torneo.nombre}</h5>
                        <p class="mb-1 text-secondary">${torneo.juego}</p>
                        <p class="mb-4"><span class="badge ${torneo.color} text-dark">${torneo.estado}</span></p>
                        <a href="torneos/detalle.html" class="btn boton-primario mt-auto w-100">Ver Detalle</a>
                    </div>
                </div>
            `;
            contenedor.appendChild(article);
        });
    }
});