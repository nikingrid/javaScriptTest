
function crearTabla(){ 
    let filas = parseInt(prompt('numero filas'));
    let columnas = parseInt(prompt('numero columnas'));
    
    for (let i=0; i< filas; i++){
        let filaActual = document.getElementById('tablaArray').insertRow(i);
    }
    
    for (let j=0; j< columnas; j++){
        let celda = filaActual.insertCell(j);
        
        celda.innerHTML = `Fila: ${i} Columna: ${j} `;
    }
}

