const btnCalCalif = document.getElementById("btnCalCalif");
btnCalCalif.addEventListener("click", CalcularCalif);

function CalcularCalif(){
    const Calif1 = Number(document.getElementById("inpNum1").value);
    const Calif2 = Number(document.getElementById("inpNum2").value);
    const Calif3 = Number(document.getElementById("inpNum3").value);
    let resultado = "";
    
    var promedio = (Calif1 + Calif2 + Calif3) / 3

    if(promedio >= 9){
        resultado = "Aprobado"
    }
    else if(promedio >= 6 && promedio < 9){
        resultado = "Regular"
    }
    else if(promedio < 6){
        resultado = "Reprobado"
    }
 
    const containerResult = document.getElementById("resultado");
    containerResult.innerText = resultado;
}
