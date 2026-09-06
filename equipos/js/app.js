const equiposExistentes = ["spring booters", "los titanes", "sql masters"];

document.addEventListener("DOMContentLoaded", () => {
    const formEquipo = document.getElementById("form-equipo");

    if (formEquipo) {
        formEquipo.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const inputNombre = document.getElementById("nombre-equipo");
            const selectJuego = document.getElementById("juego-principal");
            const nombreValor = inputNombre.value.trim();
            
            document.querySelectorAll(".error-dinamico").forEach(e => e.remove());

            let formularioValido = true;

            const mostrarError = (elemento, mensaje) => {
                const error = document.createElement("div");
                error.className = "text-danger small mt-1 error-dinamico";
                error.textContent = mensaje;
                elemento.parentNode.appendChild(error);
                formularioValido = false;
            };

            if (nombreValor === "") {
                mostrarError(inputNombre, "El nombre del equipo es obligatorio.");
            } else if (equiposExistentes.includes(nombreValor.toLowerCase())) {
                mostrarError(inputNombre, "Este nombre de equipo ya está registrado.");
            }

            if (selectJuego.value === "") {
                mostrarError(selectJuego, "Debes seleccionar un juego principal.");
            }

            if (formularioValido) {
                alert(`El equipo "${nombreValor}" ha sido creado con éxito.`);
                equiposExistentes.push(nombreValor.toLowerCase());
                formEquipo.reset();
            }
        });
    }
});