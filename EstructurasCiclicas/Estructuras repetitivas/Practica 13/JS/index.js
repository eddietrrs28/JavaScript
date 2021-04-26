const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularNum);

function calcularNum(){
    let suma = 0;
    let resultAcum = "";
    let contador = 0;

    let num = prompt('Ingrese un numero');
    if(isNaN(num) == true){
        alert('Es necesario que ingrese solo numeros');
    }
    else if(num < 0){
        alert('Es necesario que ingrese numeros positivos');
    }
    else{
        for(let i=1;i<=num;i++){
            suma = 0;
            for(let j=1;j<i;j++){
                if(i % j == 0){
                    suma = suma + j;
                }
            }
            if(i == suma){
                resultAcum += i+', ';
                contador ++;
            }
        }
    }
    
    const containerResult = document.getElementById("resultado")
    containerResult.innerText = 'Los números perfectos menores a '+num+' son: \n'+resultAcum+'\n\nEl total de números son: '+contador;
    
}





