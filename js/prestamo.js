document.querySelector('.aggPrestamo').addEventListener('click', agregarFila);
document.querySelector('.eliminar').addEventListener('click', eliminarFila);

function agregarFila() {
    var cuerpoTabla = document.querySelector('tbody');
    var fila = cuerpoTabla.firstElementChild.cloneNode(true);
    cuerpoTabla.appendChild(fila); 
    for (let boton of document.querySelectorAll('.eliminar')) {
        boton.addEventListener('click', eliminarFila);
    }   
}

function eliminarFila() {
    if(document.querySelectorAll('tr').length > 2) {
        var filaEliminar = this.parentNode.parentNode;
        var cuerpoTabla = document.querySelector('tbody');
        cuerpoTabla.removeChild(filaEliminar);
    } else {
        alert('Debe tener al menos un insumo para realizar un préstamo');
    }
}
