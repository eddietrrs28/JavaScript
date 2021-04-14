const btnCalHor = document.getElementById("btnCalHor");

btnCalHor.addEventListener("click", CalcularTarifa);

function CalcularTarifa(){
    let horas = Number(document.getElementById("inpHor").value);
    let hor3 = "";
    let hor5 = "";
    let hor10 = "";
    let precioTot = "";
    let resultadoF = "";

    if(horas == "" || horas == 0){
        alert(`Es necesario ingresar la cantidad de horas`);
        return;
    }

    /*if(horas > 10){
        if(horas <= 10 && horas > 5){
            if(horas <= 5 && horas > 2){
                if(horas < 3){
                    precioTot = horas * 5.00;
                }
            hor3 = horas - 2;
            let hor3F = precioTot;
            precioTot = (hor3 * 4.00) + hor3F;
            }
        hor5 = horas - 5;
        let hor5F = precioTot;
        precioTot = (hor5 * 3.00) + hor5F;
        }
    hor10 = horas - 10;  
    let hor10F = precioTot;
    precioTot = (hor10 * 2.00) + hor10F;
    }*/

    if(horas < 3){
        precioTot = horas * 5.00;
    }
    else if(horas <= 5 && horas > 2){
        hor3 = horas - 2;
        precioTot = (hor3 * 4.00) + 10;
    }
    else if(horas <= 10 && horas > 5){
        hor5 = horas - 5;
        precioTot = (hor5 * 3.00) + 22;
    }
    else if(horas > 10){
        hor10 = horas - 10;
        precioTot = (hor10 * 2.00) + 37;
    }

    resultadoF = 'El precio total de las horas a pagar es de: $'+precioTot+' c/u.';

    let resultContainer = document.getElementById("resultado");
    resultContainer.innerHTML = `<div class = "alert alert-success">${resultadoF}</div>`
}