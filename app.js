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

    console.log(amigos);
}