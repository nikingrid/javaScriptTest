//Crear tabla a partir del Array

window.addEventListener("load", function load(){
                            
       //ARRAY
         
        var array_number = new Array(9); 
        array_number[0]= "4 2 7 3 5 1 9 8 6";
        array_number[1]= "9 8 3 7 6 2 5 1 4";
        array_number[2]= "1 5 6 8 9 4 7 2 3";
        array_number[3]= "2 3 9 1 8 5 4 6 7"; 
        array_number[4]= "7 4 1 6 3 9 2 5 8"; 
        array_number[5]= "5 6 8 2 4 7 1 3 9"; 
        array_number[6]= "8 7 2 9 1 3 6 4 5"; 
        array_number[7]= "3 9 5 4 2 6 8 7 1"; 
        array_number[8]= "6 1 4 5 7 8 3 9 6";
        
        //HTML como string 
        var html = "<table><tr>";
        
        //LOOP para la tabla
        for (var i=0; i< array_number.length; i++){
            html+=`<tr><td>${(array_number[i])}</tr></td>`;
            console.log(html);
        }
        
        html += "</tr></table>";
        
        //Meterlo en el contenedor de div 
        document.getElementById("tabla").innerHTML = html;
        
    })


//Validar tabla

document.getElementById("tabla");
var numeros = [0-9];

    function validar (){
        if(HTMLTableDataCellElement===numeros){
           return console.log(true);
           } else {
               return console.log(false);
           }
           
    }
