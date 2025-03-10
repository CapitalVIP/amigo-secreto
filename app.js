// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    //Captura el valor del campo de entrada
    let nombreAmigo = document.getElementById("amigo").value;

    //Validar la entrada
    if (nombreAmigo.trim() === "") {
        alert("Por favor inserte un nombre.");
        return; //Detener la ejecución si el campo está vacío
    }

    //Actualizar el array de amigos
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
    mostrarAmigos(); //Llamar a la función para actualizar la lista

    console.log(amigos);
}

function mostrarAmigos() {
    //Obtener el elemento de la lista
    let listaAmigos = document.getElementById("listaAmigos");

    //Limpiar la lista existente
    listaAmigos.innerHTML = "";

    //Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        //Agregar elementos a la lista
        let amigoItem = document.createElement("li");
        amigoItem.textContent = amigos[i];
        listaAmigos.appendChild(amigoItem);
    }
}