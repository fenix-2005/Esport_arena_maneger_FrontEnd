document.addEventListener("DOMContentLoaded", () => {
    const formFiltros = document.getElementById("form-filtros");
    const errorFechas = document.getElementById("error-fechas");
    const contenedorTorneos = document.getElementById("contenedor-torneos");
    const estadoVacio = document.getElementById("estado-vacio");

    if (formFiltros) {
        formFiltros.addEventListener("submit", (evento) => {
            evento.preventDefault(); 

  
            const buscarInput = document.getElementById("buscar");
            const juegoInput = document.getElementById("filtro-juego");
            const estadoInput = document.getElementById("filtro-estado");
            const fechaInicioInput = document.getElementById("fecha-inicio");
            const fechaFinInput = document.getElementById("fecha-fin");

            const buscar = buscarInput.value.trim().toLowerCase();
            const juego = juegoInput.value;
            const estado = estadoInput.value;
            const fechaInicio = fechaInicioInput.value; 
            const fechaFin = fechaFinInput.value;

            let validacionExitosa = true;


            document.querySelectorAll(".error-dinamico").forEach(e => e.remove());
            errorFechas.classList.add("d-none"); 

            if (buscar === "" && juego === "" && estado === "" && fechaInicio === "" && fechaFin === "") {
                const errorGeneral = document.createElement("div");
                errorGeneral.className = "text-danger small mt-2 fw-bold error-dinamico";
                errorGeneral.textContent = "⚠ Debes ingresar al menos un parámetro de búsqueda.";
                

                formFiltros.appendChild(errorGeneral); 
                validacionExitosa = false;
            }


            if (fechaInicio !== "" && fechaFin !== "") {
                if (new Date(fechaInicio) > new Date(fechaFin)) {
                    errorFechas.classList.remove("d-none");
                    validacionExitosa = false;
                }
            }


            if (validacionExitosa) {
                

                const formatearFecha = (fechaHTML) => {
                    if (!fechaHTML) return "Sin límite";
                    const partes = fechaHTML.split("-"); 
                    return `${partes[2]}/${partes[1]}/${partes[0]}`; 
                };


                console.log(`Buscando desde: ${formatearFecha(fechaInicio)} hasta: ${formatearFecha(fechaFin)}`);

            }
        });
    }
});