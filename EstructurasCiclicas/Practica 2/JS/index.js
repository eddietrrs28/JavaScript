const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", CalcularPromedio);

function CalcularPromedio(){
    let califs = 0;
    let i = 0;
    let continuar = true;

    while(continuar == true){
        let calif = prompt('Digite la calificacion'+(i+1));

        if(calif == null){
            continuar = false;
        }
        else{
            califs = califs + Number(calif);
            i++;
        }
    }

    let promedio = califs / i;

    const resultContainer = document.getElementById("resultado");

    resultContainer.innerText = "El promedio de las calificaciones es: "+promedio;
}