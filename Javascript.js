
 function ValidarJuego (opcion){
    var aleatorio = Math.floor(Math.random()*3); //Me va generar numeros entre el 0 y el 2
    if (aleatorio == opcion){
        console.log("¡Es un empate! "+"Computadora: "+aleatorio+" "+"Tú: "+opcion);
    }else if (opcion == 2 && aleatorio == 0){
        console.log("¡Perdiste! "+"Computadora: "+aleatorio+" "+"Tú: "+opcion);
    }else if(opcion == 0 && aleatorio == 2){
        console.log("¡Ganaste! "+"Computadora: "+aleatorio+" "+"Tú: "+opcion);
    }else if (opcion == 1 && aleatorio == 0){
        console.log("¡Ganaste! "+"Computadora: "+aleatorio+" "+"Tú: "+opcion);
    }else if(opcion == 0 && aleatorio == 1){
        console.log("¡Perdiste! "+"Computadora: "+aleatorio+" "+"Tú: "+opcion);
    }else if(opcion == 2 && aleatorio == 1){
        console.log("¡Ganaste! "+"Computadora: "+aleatorio+" "+"Tú: "+opcion);
    }else if(opcion == 1 && aleatorio == 2){
        console.log("¡Perdiste! "+"Computadora: "+aleatorio+" "+"Tú: "+opcion);
    }else{
        console.log("Error, ingrese una opcion valida entre 0 y 2");
    }
 }
 var opcion = prompt("Elija la opción que va jugar: \n 0. Papel \n 1. Tijera \n 2. Piedra");
 ValidarJuego(opcion);

 ///////////////////////////////////////////////////////////////////////////////

 //Arreglo
 var libros = [
     {nombre: "Cosmos", Autor: "Carl Sagan"},
     {nombre: "Dragones del Eden", Autor: "Carl Sagan"},
     {nombre: "Bosson De Higgs", Autor: "Javier Santaolalla"},
     {nombre: "El sentido de la vida", Autor: "Terry Engleton"},
     {nombre: "Boulevard", Autor: "Flor Salvador"},
 ];

 libros.forEach(function(libros){
    console.log(libros.nombre+""+libros.Autor);
 });