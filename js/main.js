import { tiposError, mensajes } from "./validacion.js";

const camposDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    guardarDatosEnLocalStorage();
    window.location.href = "index.html";
});

camposDeFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo));
    campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampo(campo) {
    let mensaje = "";
    campo.setCustomValidity("");

    tiposError.forEach((error) => {
        if (campo.validity[error]) {
            mensaje = mensajes[campo.name][error];
            console.log(mensaje);
        }
    });

    const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    const validarInputCheck = campo.checkValidity();
    if (!validarInputCheck) {
        mensajeError.textContent = mensaje;
    } else {
        mensajeError.textContent = "";
    }
}

function guardarDatosEnLocalStorage() {
    const nombre = formulario.querySelector("[name='nombre']").value;
    const email = formulario.querySelector("[name='email']").value;
    const asunto = formulario.querySelector("[name='asunto']").value;
    const mensaje = formulario.querySelector("[name='mensaje']").value;

    const datosFormulario = {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
    };

    localStorage.setItem("datosFormulario", JSON.stringify(datosFormulario));
    console.log("Datos guardados en localStorage");
}
