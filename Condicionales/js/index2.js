const btnCalcularCalif = document.getElementById("btnCalcularCalif");

btnCalcularCalif.addEventListener("click", evaluarCalif)

function evaluarCalif(){
    const inpCalif = Number(document.getElementById("inpCalif").value);

    const alertaResultado = document.getElementById("resultado")

    if(inpCalif > 6){
        alertaResultado.innerText = "Aprobado";
    }
    else{
        alertaResultado.innerText = "Reprobado";
    }
}


