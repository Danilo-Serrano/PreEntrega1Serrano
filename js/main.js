//Funciones
function renderizarTurno(){
    const tableBody = document.getElementById("tableBody")
    tableBody.innerHTML = "";
    for(const turno of turnos){
        tableBody.innerHTML = tableBody.innerHTML + `<tr>
        <td class="style--cells2">${turno.nombre}</td>
        <td class="style--cells2">${turno.edad}</td>
        <td class="style--cells2">${turno.urgencia}</td>
        <td class="style--cells2">${turno.precio}</td>
    </tr>`
    }
}

function obtenerDeLs() {
    const turnosJSON = localStorage.getItem("turnos");
    if (turnosJSON) {
        return JSON.parse(turnosJSON); 
    }
    return [];
}

function guardarenLS() {
    localStorage.setItem("turnos", JSON.stringify(turnos)); 
}


function regristrarTurnos(){
    const formulario = document.getElementById("form")
    const nombre = document.getElementById("input__nombre")
    const edad = document.getElementById("input__edad")
    const urgencia = document.getElementById("input__urgencia")
    const precio = document.getElementById("input__precio") 

    formulario.addEventListener("submit", (e) =>{
        e.preventDefault()

        turnos.push(
            {
                    nombre: nombre.value,
                    edad: edad.value,
                    urgencia: urgencia.value,
                    precio: precio.value,
            }
        )

        console.log("turno guardado")
        console.log(turnos)
        nombre.value = ""
        edad.value =""
        urgencia.value = ""
        precio.value = ""
        Toastify({
            text: "Turno Agregado",
            className: "info",
            style: {
            background: "linear-gradient(to right,rgb(255, 166, 2),rgb(244, 229, 177))",
            }
        }).showToast();

        renderizarTurno()

        totalConsultas()
        
        guardarenLS()

    })
}
function totalConsultas(){
    const total = turnos.reduce((acc, el) => {
        let precio = parseFloat(el.precio);
        return acc + precio;
    }, 0);

    console.log(total);
    
    const totalPrecioConsultas = document.getElementById("totalACambiar")
    totalPrecioConsultas.innerHTML = + total

    localStorage.setItem("totalConsultas", JSON.stringify(total));
}
function mostrarTotalDesdeStorage() {
    const totalGuardado = JSON.parse(localStorage.getItem("totalConsultas"));

    if (totalGuardado !== null) {
        const totalPrecioConsultas = document.getElementById("totalACambiar");
        totalPrecioConsultas.innerHTML = totalGuardado;
    } else {
        console.log("No hay datos en localStorage.");
    }
}
document.addEventListener("DOMContentLoaded", mostrarTotalDesdeStorage);



function OrdenarPrecio(){
    const OrdenaPrecio = document.getElementById("button--ordenarPrecio")
    OrdenaPrecio.addEventListener("click", () =>{
        Toastify({
            text: "Ordenados Por Precio",
            className: "info",
            style: {
            background: "linear-gradient(to right,rgb(255, 166, 2),rgb(244, 229, 177))",
            }
        }).showToast();
        turnos.sort( (a, b) =>{
            const precioA = parseFloat(a.precio);
            const precioB = parseFloat(b.precio);
            if(precioA > precioB){
                return 1;
            }else if(precioA < precioB){
                return -1;
            }else{
                return 0;
            }}
        )
            console.log("Ordenado por precio")
            console.log(turnos)
            renderizarTurno()
            guardarenLS()
    })
}   

function eliminarTurnos(){
    const form2 = document.getElementById("form2")
    const input__eliminar = document.getElementById("input__eliminar")

    form2.addEventListener("submit", (e)=>{
        e.preventDefault()
        Swal.fire({
            title: "Eliminar Truno",
            text: "¿Deseas borrar el Turno?",
            icon: "question",
            confirmButtonText: "Si" ,
            showCancelButton: true,
            cancelButtonText: "No",
            }).then((result) =>{
                if(result.isConfirmed){
                    for(let i = 0; i < turnos.length; i++){
                        if(input__eliminar.value.toLowerCase() == turnos[i].nombre.toLowerCase() ){
                            turnos.splice(i ,1)
                            console.log("turno eliminado")
                            console.log(turnos)
                            input__eliminar.value = ""
                            Swal.fire({
                                title: "Correcto",
                                text: "Turno borrado",
                                icon: "success",
                                confirmButtonText: "Ok" ,
                                })
                            mostrarTotalDesdeStorage()
                            totalConsultas()
                            renderizarTurno()
                            guardarenLS()
                        }}
                }else{
                    Swal.fire({
                        title: "Error",
                        text: "Turno no borrado",
                        icon: "error",
                        confirmButtonText: "Ok" ,
                        })
                    console.log("Turno no borrado")
                }
            });


    })
    }
    function ordenarAlfa(){
        const alfabeto = document.getElementById("button--alfabeticamente")
        alfabeto.addEventListener("click", () =>{
            Toastify({
                text: "Ordenados Alfabeticamente",
                className: "info",
                style: {
                    background: "linear-gradient(to right,rgb(255, 166, 2),rgb(244, 229, 177))",
                }
            }).showToast();
            
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
        Toastify({
            text: "Ordenados Por Edad",
            className: "info",
            style: {
            background: "linear-gradient(to right,rgb(255, 166, 2),rgb(244, 229, 177))",
            }
        }).showToast();
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
function VaciarArray(){
const buttonVaciarArray = document.getElementById("button--vaciarArray")
buttonVaciarArray.addEventListener("click", () =>{
    turnos.splice(0, turnos.length)
    console.log("Turnos reseteados")
    localStorage.clear()
    totalConsultas()
    renderizarTurno()
    guardarenLS()
    Toastify({
        text: "Turnos eliminados",
        className: "info",
        style: {
        background: "linear-gradient(to right,rgb(255, 166, 2),rgb(244, 229, 177))",
        }
    }).showToast();
})
}
function mostrarFechaActual(){
    var DateTime = luxon.DateTime;
    const fechaActual = DateTime.now()
    console.log(fechaActual.toFormat("dd/LL/yyyy"))

    const fecha = document.getElementById("fechaActual")
    fecha.innerHTML = fechaActual.toFormat("dd/LL/yyyy")
}
// //Inicio Programa
let turnos = obtenerDeLs()
let opcion;


    renderizarTurno()

    regristrarTurnos()

    eliminarTurnos()

    VaciarArray()

    ordenarAlfa()

    ordenarEdad()

    OrdenarPrecio() 

    mostrarFechaActual()

fetch("./js/datos.json")

.then((response) =>{
    return response.json();
}).then( (json) =>{

    renderizarTrunosPasados(json)

;})
function renderizarTrunosPasados(rTP){
    for(const turnosPasados of rTP){
        const tableBody2 = document.getElementById("tableBody2")
        tableBody2.innerHTML += `<tr>
                                        <td class="style--cells2">${turnosPasados.nombre}</td>
                                        <td class="style--cells2">${turnosPasados.edad}</td>
                                        <td class="style--cells2">${turnosPasados.urgencia}</td>
                                        <td class="style--cells2">${turnosPasados.precioconsulta}</td>`
    }
}


