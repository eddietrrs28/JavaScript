const btnCalAumento = document.getElementById("btnCalAumento");

btnCalAumento.addEventListener("click", CalcularAumento);

function CalcularAumento(){
    let tipoTarjeta = document.getElementById("slcTipTarjeta").value;
    let creditoActual = Number(document.getElementById("inpCredito").value);
    let resultadoF = "";
    let aumentoTotal = 0;
    if(creditoActual == "" || creditoActual == 0){
        alert(`Es necesario ingresar el credito actual`);
        return;
    }

    if(tipoTarjeta == 'tipo1'){
        aumentoTotal = creditoActual * 1.25;
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

    resultadoF = 'El total de credito que se le asigno es: $'+aumentoTotal;

    let resultContainer = document.getElementById("resultado");
    resultContainer.innerHTML = `<div class = "alert alert-success">${resultadoF}</div>`
}