const btnCalCifr = document.getElementById("btnCalCifr");
btnCalCifr.addEventListener("click", CalcularDigitosL);

function CalcularCifras(){
    const Numero = Number(document.getElementById("inpNum1").value);
    let resultado = "";

    if(Numero <= 999){
        resultado = "El numero cuenta con 3 digitos"
        if(Numero <= 99){
            resultado = "El numero es de 2 digitos"
            if(Numero <= 9){
                resultado = "El numero es de 1 digito"
            }
        }
    }
    else{
        resultado = "El numero es mayor de 3 digitos"
    }

    const containerResult = document.getElementById("resultado");
    containerResult.innerText = resultado;
}

function CalcularDigitosL(){
    const Numero = Number(document.getElementById("inpNum1").value);
    let resultado = "";
    
    if(Numero > 99 && Numero <= 999){
        resultado = "El numero es de 3 digitos"
    }
    else if(Numero > 9 && Numero <= 99){
        resultado = "El numero es de 2 digitos"
    }
    else if(Numero > 0 && Numero <= 9){
        resultado = "El cuenta con 1 digito"
    }
    else{
        resultado = "El numero cuenta con mas de 3 digitos"
    }

    const containerResult = document.getElementById("resultado");
    containerResult.innerText = resultado;
}
