const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularNum);

function calcularNum(){
    let inicio = 0;
    let contador = 0;
    let resultAcum = "";

    let num = Number(prompt('Ingrese un numero'));
    for(let i=inicio;i<=num;i++){
        if(numPrimo(i) == true){
            contador ++;
            resultAcum += i+', ';
        }
    }

    const containerResult = document.getElementById("resultado")
    containerResult.innerText = 'Los numeros primos menores a '+num+' son: \n'+resultAcum+'\n\nEl total de numeros son: '+contador;
    
}

function numPrimo(numero){
    if(numero == 0 || numero == 1){
        return false;
    }
    else{
        for(let x=2;x<numero;x++){
            if(numero % x == 0){
                return false;
            }
        }
    return true;
    }
}




