const btnCalcularIncen = document.getElementById("btnCalcularIncen");

btnCalcularIncen.addEventListener("click", calcularIncentivos);
const alertResult = document.getElementById("resultado");

function calcularIncentivos(){
    var Unidades = Number(document.getElementById("inpUnidades").value);

    if(Unidades >= 100){
        alertResult.innerText = "El operario recibira incentivos.";
    }
    else{
        alertResult.innerText = "Lo sentimos el operario no alcanzo la cuota de producción.";
    }
}