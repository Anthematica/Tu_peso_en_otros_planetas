//Gravedades
const gravedadMercurio = 3.7;
const gravedadVenus = 8.9;
const gravedadTierra = 9.8;
const gravedadMarte = 3.7;
const gravedadJupiter = 24.8;
const gravedadSaturno = 10.4;
const gravedadNeptuno = 11.2;
const gravedadUrano = 8.9;
const gravedadPluton = 0.62;

//Funcion que calcule los pesos
function pesoPlanetas() {
   //Nombre del usuario 
   var inputNombre = document.getElementById("nombre");
   var valueNombre = inputNombre.value; 
  //Peso en la Tierra
  var elementoPeso = document.getElementById("peso");
  var pesoTierra = elementoPeso.value;

  //Planeta seleccionado
  var planetaSeleccionado = document.getElementById("Planetas");
  var planetaValue = planetaSeleccionado.value;
  //Parrafo para mostrar resultado
  var inputP = document.getElementById("Resultado");

  var pesoFinal; //Peso final una vez hecho las operaciones dependiendo del planeta

  //Condicion
  if (planetaValue === "Mercurio") {
    pesoFinal = pesoMercurio(pesoTierra);
  }

  if (planetaValue == "Venus") {
    pesoFinal = pesoVenus(pesoTierra);
  }

  if (planetaValue === "Marte") {
    pesoFinal = pesoMarte(pesoTierra);
  }

  if (planetaValue === "Jupiter") {
    pesoFinal = pesoJupiter(pesoTierra);
  }

  if (planetaValue === "Saturno") {
    pesoFinal = pesoSaturno(pesoTierra);
  }

  if (planetaValue === "Neptuno") {
    pesoFinal = pesoNeptuno(pesoTierra);
  }

  if (planetaValue === "Urano") {
    pesoFinal = pesoUrano(pesoTierra);
  }

  var bandera = 0;
  if (planetaValue === "Pluton"){
      pesoFinal = pesoPluton(pesoTierra);
      bandera = 1;
  }

  //Impresión del resultado 
  if (bandera == 1){
      inputP.innerHTML = 
      "Pluton desde 2006 fue reducido a categoria de planeta enano. <br> Anyways, "+valueNombre+ ", Tu peso en "+planetaValue+" es: "+pesoFinal.toFixed(2)+"lb";
  }
  else {
    inputP.innerText =
    valueNombre+ ", Tu peso en " + planetaValue + " es: " + pesoFinal.toFixed(2)+"lb";
  }
  
}

//Peso en Mercurio
function pesoMercurio(pesoTierra) {
  return (pesoTierra * gravedadMercurio) / gravedadTierra;
}
//Peso en Venus
function pesoVenus(pesoTierra) {
  return (pesoTierra * gravedadVenus) / gravedadTierra;
}
//Peso en Marte
function pesoMarte(pesoTierra) {
  return (pesoTierra * gravedadMarte) / gravedadTierra;
}
//Peso en Jupiter
function pesoJupiter(pesoTierra) {
  return (pesoTierra * gravedadJupiter) / gravedadTierra;
}
//Peso en Saturno
function pesoSaturno(pesoTierra) {
  return (pesoTierra * gravedadSaturno) / gravedadTierra;
}
//Peso en Neptuno
function pesoNeptuno(pesoTierra) {
  return (pesoTierra * gravedadNeptuno) / gravedadTierra;
}
//Peso en Urano
function pesoUrano(pesoTierra) {
  return (pesoTierra * gravedadUrano) / gravedadTierra;
}

//Peso en Pluton
function pesoPluton(pesoTierra){
    return (pesoTierra * gravedadPluton)/gravedadTierra;
}
