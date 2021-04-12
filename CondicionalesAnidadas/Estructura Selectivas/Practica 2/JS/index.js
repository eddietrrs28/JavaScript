const btnCalTar = document.getElementById("btnCalTar");

btnCalTar.addEventListener("click", CalcularTarifa);

function CalcularTarifa(){
    let tipoAutobus = document.getElementById("slcTipAut").value;
    let kilometros = Number(document.getElementById("inpKm").value);
    let resultadoF = "";
    let precioPers = 0;
    let precioTot = 0;
    if(kilometros == "" || kilometros == 0){
        alert(`Es necesario ingresar los Kilometros del viaje`);
        return;
    }

    if(tipoAutobus == 'a'){
        precioPers = kilometros * 1.5;
        precioTot = precioPers * 20;
    }
    else if(tipoTarjeta == 'tipo2'){
        aumentoTotal = creditoActual * 1.35;
    }
    else if(tipoTarjeta == 'tipo3'){
        aumentoTotal = creditoActual * 1.4;
    }
    else{
        aumentoTotal = creditoActual * 1.5;
    }

    resultadoF = 'El precio total del viaje es de: $'+precioTot+'.<br>El precio por persona es de: $'+precioPers;

    let resultContainer = document.getElementById("resultado");
    resultContainer.innerHTML = `<div class = "alert alert-success">${resultadoF}</div>`
}