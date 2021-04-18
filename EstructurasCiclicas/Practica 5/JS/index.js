const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", CalcularNumero);

function CalcularNumero(){
    let continuar = true;
    let numeroMayor = 0;
    let numeroMenor = 0;

    while(continuar == true){
        let numero =prompt('Ingrese el numero a evaluar');
        if(isNaN(numero) == true){
            alert('Es necesario que ingrese solo numeros');
        }
        else if(numero == null){
            continuar = false;
        }
        else{
            numero = Number(numero);
            if(numero >= 500){
                numeroMayor ++;
            }
            else{
                numeroMenor ++;
            }
        }
    }

    const resultContainer = document.getElementById("resultado");

    resultContainer.innerHTML = `<span>Ingreso ${numeroMayor} numeros mayor o igual a 500 <br>Ingreso ${numeroMenor} numeros menor o igual a 500</span>`
}
