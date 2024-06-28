export const tiposError = [
    "valueMissing",
    "typeMissmatch",
    "patternMissmatch",
    "tooShort",
    "customError"
];

export const mensajes = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un nombre válido.",
        tooShort: "Por favor, ingrese un nombre válido.",
    },
    email: {
        valueMissing: "El campo email no puede estar vacío.",
        typeMismatch: "Por favor, ingrese un email válido.",
        tooShort: "Por favor, ingrese un e-mail válido.",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un asunto válido.",
        tooShort: "El campo no tiene caracteres suficientes.",
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un mensaje en el campo de texto.",
        tooShort: "El campo no tiene caracteres suficientes.",
        tooLong: "El campo excede los caracteres permitidos.",
    },
};