const btnCalcularLon = document.getElementById("btnCalcularLon");

btnCalcularLon.addEventListener("click", btnCalcularLongitud);
const alertResult = document.getElementById("resultado");

function btnCalcularLongitud(){
    const longitud1 = Number(document.getElementById("inpLon1").value);
    const longitud2 = Number(document.getElementById("inpLon2").value);
    const longitud3 = Number(document.getElementById("inpLon3").value);

    if(longitud1 == longitud2 && longitud1 == longitud3){
        alertResult.innerText = "Es un triangulo equilatero.";
    }
    else if(longitud1 == longitud2 && longitud1 != longitud3){
        const Lmenor = longitud1 + longitud2;
        if(longitud3 < Lmenor){
            alertResult.innerText = "Es un triangulo isósceles.";
        }
        else{
            alertResult.innerText = "No se trata de un triangulo.";
        }
    }    
    else if(longitud2 == longitud3 && longitud2 != longitud1){
        const Lmenor = longitud2 + longitud3;
        if(longitud1 < Lmenor){
            alertResult.innerText = "Es un triangulo isósceles.";
        }
        else{
            alertResult.innerText = "No se trata de un triangulo.";
        }
    }
    else if(longitud1 != longitud2 && longitud2 != longitud3){
        alertResult.innerText = "Es un triangulo escaleno.";
    }
}