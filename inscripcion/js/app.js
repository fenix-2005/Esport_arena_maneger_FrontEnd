document.addEventListener("DOMContentLoaded", () => {
    const formInscripcion = document.getElementById("form-inscripcion");
    const selectTorneo = document.getElementById("torneo-seleccion");
    const resumenRequisitos = document.getElementById("resumen-requisitos");


    if (selectTorneo && resumenRequisitos) {
        selectTorneo.addEventListener("change", (evento) => {
            const torneoElegido = evento.target.value;
            
            if (torneoElegido === "valorant") {
                resumenRequisitos.innerHTML = "<strong class='text-info'>Requisitos Valorant:</strong> Equipo de 5 jugadores, cuentas nivel 20+, sin baneos recientes en Vanguard.";
            } else if (torneoElegido === "cs2") {
                resumenRequisitos.innerHTML = "<strong class='text-info'>Requisitos CS2:</strong> Equipo de 5 jugadores, cuenta Prime activa obligatoria.";
            } else {
                resumenRequisitos.innerHTML = "Selecciona un torneo para ver sus reglas, cupos y restricciones.";
            }
        });
    }


    if (formInscripcion) {
        formInscripcion.addEventListener("submit", (evento) => {
            evento.preventDefault(); // Evita recargar la página


            document.querySelectorAll(".error-dinamico").forEach(e => e.remove());
            let formularioValido = true;


            const tipoParticipante = document.getElementById("tipo-participante");
            const correoContacto = document.getElementById("correo-contacto");
            

            const mostrarError = (elemento, mensaje) => {
                const error = document.createElement("div");
                error.className = "text-danger small mt-1 error-dinamico";
                error.textContent = mensaje;
                elemento.parentNode.appendChild(error);
                formularioValido = false;
            };


            if (tipoParticipante && tipoParticipante.value === "") {
                mostrarError(tipoParticipante, "Debes seleccionar si participas individualmente o en equipo.");
            }


            const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (correoContacto) {
                const valorCorreo = correoContacto.value.trim();
                if (valorCorreo === "") {
                    mostrarError(correoContacto, "El correo electrónico es obligatorio.");
                } else if (!regexCorreo.test(valorCorreo)) {
                    mostrarError(correoContacto, "Ingresa un formato de correo electrónico válido (ejemplo@correo.com).");
                }
            }


            if (selectTorneo && selectTorneo.value === "") {
                mostrarError(selectTorneo, "Debes seleccionar un torneo para inscribirte.");
            }


            if (formularioValido) {
                alert("Inscripción validada y enviada con éxito.");
                formInscripcion.reset();
                if (resumenRequisitos) {
                    resumenRequisitos.innerHTML = "Selecciona un torneo para ver sus reglas, cupos y restricciones.";
                }
            }
        });
    }
});