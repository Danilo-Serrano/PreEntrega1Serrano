//urgente - considerable - leve

alert("Bienvenido a la página web del Hospital Mendoza")
const opcion = prompt("1- Ver turnos 2- Crear turno 3- Modificar turnos 0- Salir")
class pacientes{
    constructor(nombre, edad, especialidad, urgencia ){
        this.nombre = nombre;
        this.edad = edad;
        this.especialidad = especialidad;
        this.urgencia = urgencia;
    }
}

switch (opcion) {
    case "1":
        const paciente1 = new pacientes("Aldo", 77, "traumatología", "leve") 
        const paciente2 = new pacientes("Carlos", 91, "cardiología","considerable") 
        const paciente3 = new pacientes("Ticiano", 35, "endoctrinología","urgente") 

        console.log("Pacientes del día de hoy: " + (new Date()))
        console.log(paciente1)
        console.log(paciente2)
        console.log(paciente3)
        break;

    case "2":
            function crearPaciente(){
                const nombre = prompt("Introduce Nombre del paciente")
                const edad = prompt("Introduce edad del paciente")
                const especialidad = prompt("Introduce especialidad del paciente")
                const urgencia = prompt("Introduce urgencia del paciente")
    
                return new pacientes(nombre, edad, especialidad, urgencia);
            }
            const paciente4 = crearPaciente()
    
            console.log(paciente4)
            break;
    case "3":
        alert("Historial de turnos pasados")
        const turnosPasados =[
            {
                nombre: "Pepe",
                edad: 47,
                urgencia: "urgente"
            },{
                nombre: "zandro",
                edad: 21,
                urgencia: "leve"
            },{
                nombre: "Armando",
                edad: 86,
                urgencia: "considerable"
            }
        ]
        console.log(turnosPasados)
        const opcion2 = prompt("¿Quieres ordenarlos alfabeticamente?")
        if (opcion2.toLowerCase() === "si") {
            // Crear un nuevo array con los turnos ordenados alfabéticamente
            const turnosOrdenados = [...turnosPasados].sort((a, b) => a.nombre.localeCompare(b.nombre));
    
            console.log("Turnos pasados ordenados alfabéticamente:");
            console.log(turnosOrdenados);
        }
        break;

    default:
        alert("Saliste del programa")
        break;
}
//herencia, para modificar