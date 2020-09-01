(function(){
    // Variables
    const song = document.getElementById("table-song"),
        tareaInput = document.getElementById(""),
        btnNewSong = document.getElementById("btn-addSong");



// Funciones
const addSong = () => {
    const tarea = tareaInput.nodeValue,
    nuevaTarea = document.createElement("TabelRow"),
    contenido = document.createElement("TabelCell");

    if (tarea === song) {
        nuevaTarea.appendChild(contenido);
    }

};
const comprobarInput = () => {};


// Eventos
// Agregar song
btnNewSong.addEventListener("click", addSong())


// Comprobar Input
tareaInput.addEventListener("click", comprobarInput);


}());