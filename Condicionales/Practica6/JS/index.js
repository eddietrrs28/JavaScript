const btnCalcularEdad = document.getElementById("btnCalcularEdad");

btnCalcularEdad.addEventListener("click", calcularEdad);
const alertResult = document.getElementById("resultado");

function calcularEdad(){
    const edad1 = document.getElementById("inpPrimered").value;
    const edad2 = Number(document.getElementById("inpSegundaed").value);

    if(edad1 > edad2){
        const diferencia = edad1 - edad2;
        alertResult.innerText = "La edad del hermano mayor es: "+edad1+ " años.\ny los años de diferencia son: "+diferencia+" años.";
    }
    else{
        const diferencia = edad2 - edad1;
        alertResult.innerText = "La edad del hermano mayor es: "+edad2+ " años.\ny los años de diferencia son: "+diferencia+" años.";
    }
}