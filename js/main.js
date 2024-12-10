//Funciones
function renderizarTurno(){
    const tableBody = document.getElementById("tableBody")
    tableBody.innerHTML = "";
    for(const turno of turnos){
        tableBody.innerHTML = tableBody.innerHTML + `<tr>
        <td class="style--cells2">${turno.nombre}</td>
        <td class="style--cells2">${turno.edad}</td>
        <td class="style--cells2">${turno.urgencia}</td>
    </tr>`
    }
}

function obtenerDeLs() {
    const turnosJSON = localStorage.getItem("turnos"); // Obtener datos de localStorage
    if (turnosJSON) {
        return JSON.parse(turnosJSON); // Si existen, retorna el array parseado
    }
    return []; // Si no hay datos, retorna un array vacío
}

function guardarenLS() {
    localStorage.setItem("turnos", JSON.stringify(turnos)); // Guarda el array en formato JSON
}


function regristrarTurnos(){
    const formulario = document.getElementById("form")
    const nombre = document.getElementById("input__nombre")
    const edad = document.getElementById("input__edad")
    const urgencia = document.getElementById("input__urgencia")

    formulario.addEventListener("submit", (e) =>{
        e.preventDefault()

        turnos.push(
            {
                    nombre: nombre.value,
                    edad: edad.value,
                    urgencia: urgencia.value,
            }
        )
        console.log("turno guardado")
        console.log(turnos)
        nombre.value = ""
        edad.value =""
        urgencia.value = ""

        renderizarTurno()

        ordenarAlfa()

        ordenarEdad()

        guardarenLS()
    })
}
function eliminarTurnos(){
    const form2 = document.getElementById("form2")
    const input__eliminar = document.getElementById("input__eliminar")

    form2.addEventListener("submit", (e)=>{
        e.preventDefault()
        for(let i = 0; i < turnos.length; i++){
            if(input__eliminar.value.toLowerCase() == turnos[i].nombre.toLowerCase() ){
                turnos.splice(i ,1)
                console.log("turno eliminado")
                console.log(turnos)
                input__eliminar.value = ""
                renderizarTurno()
                guardarenLS()
            }
        }
    })
    }
    function ordenarAlfa(){
        const alfabeto = document.getElementById("button--alfabeticamente")
        alfabeto.addEventListener("click", () =>{
            
            turnos.sort( (a, b) =>{
            if(a.nombre.toLowerCase() > b.nombre.toLowerCase()){
                return 1;
            }else if(a.nombre.toLowerCase() < b.nombre.toLowerCase()){
                return -1;
            }
            return 0;
            })
            console.log("Ordenado Alfabeticamente")
            console.log(turnos)
            renderizarTurno()
            guardarenLS()
        })
    }
function ordenarEdad(){
    const buttonEdad = document.getElementById("button--porEdad")
    buttonEdad.addEventListener("click", () =>{
        turnos.sort( (a,b) =>{
            if(a.edad > b.edad){
                return 1;
            }else if(a.edad < b.edad){
                return -1;
            }else{
                return 0;
            }
        })
        console.log("Ordenando Por edad")
        console.log(turnos)
        renderizarTurno()
        guardarenLS()
    } )

}
// //Inicio Programa
let turnos = obtenerDeLs()
let opcion;


    renderizarTurno()

    regristrarTurnos()

    eliminarTurnos()


    

console.log("Saliendo del Programa...")





