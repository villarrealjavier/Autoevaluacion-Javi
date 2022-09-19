function inicializa(){
    arrayNombre= [];
    arrayNombresCompletos=[];
    let nombre;
    let igual=false;
    for(let i=0;i<5;i++){
        nombre = prompt("Introduzca nombre: ");
        for(names of arrayNombresCompletos){
            if(names==nombre){
                igual=true;
            }
        }
        if(igual==false){
            arrayNombresCompletos.push(nombre);
            arrayNombre.push(nombre.charAt(0).toUpperCase());
        }else{
            alert("Ya existe, debes introducir otro nombre");
        }
        igual=false;
    }
    console.log(arrayNombre.sort());
  



}
