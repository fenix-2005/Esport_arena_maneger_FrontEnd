document.addEventListener("DOMContentLoaded", () => {
    const selectorRol = document.getElementById("rol-plataforma");
    const textoRolActual = document.getElementById("rol-actual-texto");
    
    const tarjetaStats = document.getElementById("tarjeta-stats");
    const tarjetaHistorial = document.getElementById("tarjeta-historial");
    const tarjetaSanciones = document.getElementById("tarjeta-sanciones");
    const seccionActualizar = document.getElementById("seccion-actualizar");

    if (selectorRol) {
        selectorRol.addEventListener("change", (evento) => {
            const rolSeleccionado = evento.target.value;
            textoRolActual.textContent = selectorRol.options[selectorRol.selectedIndex].text;

            tarjetaStats.classList.remove("d-none");
            tarjetaHistorial.classList.remove("d-none");
            tarjetaSanciones.classList.remove("d-none");
            seccionActualizar.classList.remove("d-none");

            if (rolSeleccionado === "visitante") {
                tarjetaStats.classList.add("d-none");
                tarjetaSanciones.classList.add("d-none");
                seccionActualizar.classList.add("d-none");
            } else if (rolSeleccionado === "administrador" || rolSeleccionado === "organizador") {
                seccionActualizar.classList.add("d-none");
            }
        });
    }

    const formPerfil = document.getElementById("form-perfil");
    if (formPerfil) {
        formPerfil.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const apodoInput = document.getElementById("apodo");
            const errorApodo = document.getElementById("error-apodo");
            const apodoValor = apodoInput.value.trim();
            
            let formularioValido = true;
            errorApodo.textContent = "";

            if (apodoValor === "") {
                errorApodo.textContent = "El apodo es obligatorio.";
                formularioValido = false;
            } else if (/\s/.test(apodoValor)) {
                errorApodo.textContent = "El apodo no admite espacios.";
                formularioValido = false;
            } else if (apodoValor.length > 12) {
                errorApodo.textContent = "El apodo no puede superar los 12 caracteres.";
                formularioValido = false;
            }

            if (formularioValido) {
                document.getElementById("apodo-despliegue").textContent = apodoValor;
                alert("Apodo actualizado correctamente.");
                formPerfil.reset();
            }
        });
    }
});