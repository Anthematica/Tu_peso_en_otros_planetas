//Gravedades 
const gravedadMercurio = 3.7;
const gravedadVenus = 8.9;
const gravedadTierra = 9.8;
const gravedadMarte = 3.7;
const gravedadJupiter = 24.8;
const gravedadSaturno = 10.4;
const gravedadNeptuno = 11.2;
const gravedadUrano = 8.9;

//Peso en Mercurio
function pesoMercurio(pesoTierra){
    return (pesoTierra*gravedadMercurio)/gravedadTierra;
}
//Peso en Venus
function pesoVenus(pesoTierra){
    return (pesoTierra*gravedadVenus)/gravedadTierra;
}
//Peso en Marte
function pesoMarte(pesoTierra){
    return (pesoTierra*gravedadMarte)/gravedadTierra;
}
//Peso en Jupiter
function pesoJupiter(pesoTierra){
    return (pesoTierra*gravedadJupiter)/gravedadTierra;
}
//Peso en Saturno
function pesoSaturno(pesoTierra){
    return (pesoTierra*gravedadSaturno)/gravedadTierra;
}
//Peso en Neptuno
function pesoNeptuno(pesoTierra){
    return (pesoTierra*gravedadNeptuno)/gravedadTierra;
}
//Peso en Urano
function pesoUrano(pesoTierra){
    return (pesoTierra*gravedadUrano)/gravedadTierra;
}