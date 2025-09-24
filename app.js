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

//Implementa una función para actualizar la lista de amigos
function mostrarListaAmigos() {
    // Obtener el elemento <ul> donde se mostrarán los nombres
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Recorrer el array y agregar cada amigo como <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//Implementa una función para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, agrega al menos dos.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre correspondiente
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el <ul id="resultado">
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}