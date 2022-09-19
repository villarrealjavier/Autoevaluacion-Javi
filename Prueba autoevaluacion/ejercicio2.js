function add(){
    let tabla = document.getElementById("tablaEmpleados");
    let numero=prompt("Introduce el numero: ");
    let dni=prompt("Introduce el DNI:");
    let nombre=prompt("Introduce el nombre:");
    let apellidos=prompt("Introduce los apellidos:");
    let igual=false;
   


    let textNumero = document.createTextNode(numero);
    let fila1= document.createElement("tr");
    fila1.appendChild(textNumero);
    let columna1 = document.createElement("td");
    columna1.appendChild(fila1);
    tabla.appendChild(columna1);

    let textdni = document.createTextNode(dni);
    let lista = document.getElementsByName("dnihtml");

        for(elementos of lista){      
            if(elementos.textContent==dni){
                igual=true;
                break;
            }
        }


    if(igual==false){
        let fila2= document.createElement("tr");
        fila2.appendChild(textdni);
        let columna2 = document.createElement("td");
        columna2.appendChild(fila2);
        tabla.appendChild(columna2);


        let textnombre = document.createTextNode(nombre);
        let fila3= document.createElement("tr");
        fila3.appendChild(textnombre);
        let columna3 = document.createElement("td");
        columna3.appendChild(fila3);
        tabla.appendChild(columna3);
    
        let textapellidos = document.createTextNode(apellidos);
        let fila4= document.createElement("tr");
        fila4.appendChild(textapellidos);
        let columna4 = document.createElement("td");
        columna4.appendChild(fila4);
        tabla.appendChild(columna4);

    }else{
        alert("Ese DNI ya existe");
    }



    let totalViejo = document.getElementById("total");
    let totalAumentado= document.getElementById("total");
    totalAumentado++;
    document.replaceChild(totalViejo,totalAumentado);
    
}