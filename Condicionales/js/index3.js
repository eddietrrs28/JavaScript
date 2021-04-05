const btnCalcularEdad = document.getElementById("btnCalcularEdad");

btnCalcularEdad.addEventListener("click", evaluarEdad)

function evaluarEdad(){
    const inpNombre1 = document.getElementById("inpNombre1").value;
    const inpEdad1 = Number(document.getElementById("inpEdad1").value);

    const inpNombre2 = document.getElementById("inpNombre2").value;
    const inpEdad2 = Number(document.getElementById("inpEdad2").value);

    const alertaResultado = document.getElementById("resultado")

    if(inpEdad1 > inpEdad2){
        alertaResultado.innerText = "El usuario mayor es: "+inpNombre1;
    }
    else{
        alertaResultado.innerText = "El usuario mayor es: "+inpNombre2;
    }
}


