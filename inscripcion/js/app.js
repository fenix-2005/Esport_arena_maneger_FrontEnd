document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form-registro");
    const mensajeError = document.getElementById("mensaje-error");

    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault(); 
            
            // Captura de valores según los IDs de tu HTML
            const apodo = document.getElementById("apodo").value.trim();
            const run = document.getElementById("run").value.trim();
            const nombre = document.getElementById("nombre").value.trim();
            const apellidos = document.getElementById("apellidos").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const contrasena = document.getElementById("contrasena").value.trim();

            if (mensajeError) {
                mensajeError.classList.add("d-none");
                mensajeError.innerHTML = "";
            }

            if (!apodo || !run || !nombre || !apellidos || !correo || !contrasena) {
                mostrarError("Todos los campos con asterisco (*) son obligatorios.");
                return;
            }

            if (!validarRun(run)) {
                mostrarError("El RUN ingresado no es válido. Debe tener entre 7 y 9 caracteres, sin puntos ni guion.");
                return;
            }


            if (!validarCorreo(correo)) {
                mostrarError("El correo debe pertenecer a @duoc.cl, @profesor.duoc.cl o @gmail.com.");
                return;
            }


            if (contrasena.length < 4 || contrasena.length > 10) {
                mostrarError("La contraseña debe tener estrictamente entre 4 y 10 caracteres.");
                return;
            }


            alert("¡Inscripción validada correctamente!");
            formulario.reset();
        });
    }


    function mostrarError(mensaje) {
        if (mensajeError) {
            mensajeError.innerHTML = `<strong>Error:</strong> ${mensaje}`;
            mensajeError.classList.remove("d-none");
        }
    }

    function validarCorreo(email) {
        if (email.length > 100) return false;
        const mailLowerCase = email.toLowerCase();
        const dominios = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
        return dominios.some(dominio => mailLowerCase.endsWith(dominio));
    }

    function validarRun(rut) {
        if (rut.length < 7 || rut.length > 9) return false;
        const formatoValido = /^[0-9]+[0-9kK]$/;
        if (!formatoValido.test(rut)) return false;

        const cuerpo = rut.slice(0, -1);
        const dv = rut.slice(-1).toUpperCase();
        
        let suma = 0;
        let multiplo = 2;
        
        for (let i = 1; i <= cuerpo.length; i++) {
            let index = multiplo * rut.charAt(cuerpo.length - i);
            suma = suma + index;
            if (multiplo < 7) {
                multiplo = multiplo + 1;
            } else {
                multiplo = 2;
            }
        }
        
        const dvEsperado = 11 - (suma % 11);
        let dvCalculado = dvEsperado.toString();
        if (dvEsperado === 11) dvCalculado = '0';
        if (dvEsperado === 10) dvCalculado = 'K';
        
        return dvCalculado === dv;
    }
});