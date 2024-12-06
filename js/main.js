//Inicio del Programa
const pacientes = []

let opcion;
do {
    opcion =parseInt(prompt("1- Crear Turno, 2- Ver todos los turnos, 3- Eliminar turnos, 4- Ordenar turnos 0- Salir") )
    if(opcion == 1){
        pacientes.push(
            {
                nombre: prompt("Ingresa nombre del paciente"),
                apellido: prompt("Ingresa apellido del paciente"),
                edad: parseInt(prompt("Ingresa edad del paciente")),
                urgencia: prompt("Ingresa urgencia del paciente"),
            }
            
        )
        const bodyT = document.getElementById("bodyTabla")
        bodyT.innerHTML = "";

        function ordenarTablaAlfabetico(){
            for(const paciente of pacientes){
                bodyT.innerHTML = bodyT.innerHTML + "<tr>" +
                "<td>"+paciente.nombre +"</td>" +
                "<td>"+paciente.apellido +"</td>" +
                "<td>"+paciente.edad +"</td>" +
                "<td>"+paciente.urgencia +"</td>" +
            "</tr>";
            }
            }
            ordenarTablaAlfabetico()

        console.log("Turno guardado")
        
    }
    let copiaPacientes = pacientes.slice(0, pacientes.length)
    if(opcion == 2){
        console.log("Lista de Pacientes")
        console.log(copiaPacientes)
        
    }

    if(opcion == 3){
        const pacienteAborrar = prompt("¿Qué turno quiere eliminar?, (Escriba el nombre del paciente)")
        for(i = 0; i < pacientes.length; i++){

            if(pacientes[i].nombre == pacienteAborrar){
                const final = pacientes.splice(i ,1)
                console.log("Turno Borrado")
            }else{
                console.log("Turno No encontrado")
            }
        }
    }
    if(opcion == 4){
        const ordenar = prompt("¿Cómo quieres ordenar los turnos? (Alfabeticamente, edad, urgencia)")
        if(ordenar.toLowerCase() == "alfabeticamente"){
            let segundaCopiaPacientes = pacientes.slice(0, pacientes.length)

            segundaCopiaPacientes.sort((a ,b) =>{
                if(a.nombre.toLowerCase() > b.nombre.toLowerCase()){
                    return 1;
                }else if(b.nombre.toLowerCase() > a.nombre.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            })
            console.log("Turnos ordenados alfabeticamente")
            console.log(segundaCopiaPacientes)

            const ordenar = document.getElementById("bodyTabla")
            ordenar.innerHTML = "";

            function ordenarTablaAlfabetico(){
                const ordenador = document.getElementById("ordenando")
                ordenador.innerText = ordenador.innerHTML + "Alfabeticamente"

                for(const pacientes1 of segundaCopiaPacientes){
                ordenar.innerHTML = ordenar.innerHTML + "<tr>" +
                    "<td>"+ pacientes1.nombre +"</td>" +
                    "<td>"+ pacientes1.apellido +"</td>" +
                    "<td>"+ pacientes1.edad +"</td>" +
                    "<td>"+ pacientes1.urgencia +"</td>" +
                "</tr>";
                }
                }

                ordenarTablaAlfabetico()
        }
        if(ordenar.toLowerCase() == "edad"){
            let terceraCopiaPacientes = pacientes.slice(0, pacientes.length)

            terceraCopiaPacientes.sort((a, b) =>{
                if(a.edad > b.edad){
                    return -1;
                }else if(b.edad > a.edad){
                    return 1;
                }else{
                    return 0;
                }
            })


            function ordenarTablaEdad(){
                const ordenador = document.getElementById("ordenando")
                ordenador.innerText = ordenador.innerHTML + "Por edad"
                ordenador.append()

                const ordenE = document.getElementById("bodyTabla")
                ordenE.innerHTML = ""
                for(const pacientes2 of terceraCopiaPacientes){
                    ordenE.innerHTML = ordenE.innerHTML + "<tr>" +
                    "<td>"+ pacientes2.nombre +"</td>" +
                    "<td>"+ pacientes2.apellido +"</td>" +
                    "<td>"+ pacientes2.edad +"</td>" +
                    "<td>"+ pacientes2.urgencia +"</td>" +
                "</tr>";
                }
            }
            ordenarTablaEdad()

            console.log("Turnos ordenados por edad (Mayor a Menor)")
            console.log(terceraCopiaPacientes)
        }
        //Arreglar poder escribir urgente en minus o mayus
        if(ordenar.toLowerCase() == "urgencia"){
            let cuartaCopiaPacientes = pacientes.slice(0, pacientes.length)
            cuartaCopiaPacientes.sort((a,b) =>{
                if(a.urgencia === "urgente" && b.urgencia !== "urgente"){
                    return -1;
                }else if (a.urgencia !== "urgente" && b.urgencia === "urgente"){
                    return 1;
                }else{
                    return 0;
                }
            });
            function ordenarTablaUrgencia(){
                const ordenador = document.getElementById("ordenando")
                ordenador.innerText = ordenador.innerHTML + "Por Urgencia"
                ordenador.append()

                const ordenU = document.getElementById("bodyTabla")
                ordenU.innerHTML = ""
                for(const pacientes3 of cuartaCopiaPacientes){
                    ordenU.innerHTML = ordenU.innerHTML + "<tr>" +
                    "<td>"+ pacientes3.nombre +"</td>" +
                    "<td>"+ pacientes3.apellido +"</td>" +
                    "<td>"+ pacientes3.edad +"</td>" +
                    "<td>"+ pacientes3.urgencia +"</td>" +
                "</tr>";
                }
            }
            ordenarTablaUrgencia()

            console.log("Pacientes con priodidad de urgencia", cuartaCopiaPacientes)

        }
    }
} while ((opcion !== 0 ))
console.log("Saliendo del Programa...");
