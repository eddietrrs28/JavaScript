const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", CalcularPromedio);

function CalcularPromedio(){
    let estaturas = 0;
    let i = 0;
    let continuar = true;

    while(continuar == true){
        let est = prompt('Digite la estatura de usuario No. '+(i+1));

        if(est == null){
            continuar = false;
        }
        else{
            estaturas = estaturas + Number(est);
            i++;
        }
    }

    let promedio = estaturas / i;

    const resultContainer = document.getElementById("resultado");

    resultContainer.innerText = "El promedio de las estaturas es: "+promedio;
}