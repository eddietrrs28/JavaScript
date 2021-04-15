const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", CalcularSumatoria);

function CalcularSumatoria(){
    let resultado = 0

    for(let i=0;i<=9;i++){
        let numero = Number(prompt('Ingrese el numero '+(i+1)));

        resultado = resultado + numero;
    }

    const containerResult = document.getElementById("resultado");

    containerResult.innerHTML=`<span>La suma de los 10 numeros es: ${resultado}</span>`;
}