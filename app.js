//Crear un array para almacenar los nombres
let amigos = [];

//Implementa una función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada y eliminar espacios al inicio/final
    let nombre = document.getElementById("amigo").value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir si no hay valor
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

    // Actualizar la lista visible en la página
    mostrarListaAmigos();
}