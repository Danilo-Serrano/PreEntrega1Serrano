//Turnos Hospital//

//nombre paciente, edad, tipo de consulta//
let turnos = parseInt(prompt("¿Cuántos turnos quieres ingresar?"))
for(let i = 0; i < turnos; i++){
console.log("Turno " + i)
let nombre =prompt("Ingresa nombre del paciente: ")
if (nombre == ""){
    console.log("Nombre Incorrecto")
    break;
}
console.log(nombre);
let edad =parseInt(prompt("Ingresa edad del paciente: "))
if(edad >= 18){
    console.log("Mayor de edad " + "(" + edad + ")")
}else if( isNaN(edad) || edad == ""){
    console.log("Edad Incorrecta")
    break;
}
else{
    console.log("Menor de edad " + "(" + edad + ")")
}
let consulta =prompt("Ingresa tipo de consulta del paciente: ")

switch (consulta) {
    case "urgente":
        console.log("Tipo de consulta " + consulta)
        console.log("Tendrá Prioridad en los turnos " + nombre)
        break;
    
    case "regular":
    case "control":
        console.log("Tipo de consulta " + consulta)
        break;

    default:
        console.log("No existe ese tipo de consulta")
        break;
}
}