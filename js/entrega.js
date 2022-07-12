let edad = parseInt(prompt("Ingrese su edad: (si sos mayor de 18 vas a poder seguir)"));

if (edad > 18){

    for (i=10;i > 0; i--){ 
        alert("te falta " + i + " para salir del prompt")
    }
  }  
    else{
        alert("No podes estar aca")
    }

