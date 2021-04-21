const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularNum);

function calcularNum(){
    let resultAcum = '';
    let num1 = 0;
    let num2 = 1;
    let suma = 0;
    let contador = 2;

    let num = prompt('Ingrese un numero:');
    if(isNaN(num) == true){
        alert('Es necesario que ingrese solo numeros');
    }
    else if(num < 0){
        alert('Es necesario que ingrese numeros positivos');
    }
    else if(num == null){
        return;
    }
    else{
        resultAcum += `<li class="list-group-item">${num1}</li>`;
        resultAcum += `<li class="list-group-item">${num2}</li>`;
        while(suma <= num){
            suma = num1 + num2;
            if(suma > num){
                
            }
            else{
            resultAcum += `<li class="list-group-item">${suma}</li>`;
            num1 = num2;
            num2 = suma;
            contador ++;
            }
        }
    }        
    
    const lista = document.getElementById("acumNum");
    lista.innerHTML = resultAcum;

    const containerResultado = document.getElementById("resultado");
    if(num != num2){
        containerResultado.innerText = 'El numero '+num+' no esta dentro de la serie FIBONACCI.';
    }
    else{
        containerResultado.innerText = 'La posición del numero '+num+' en la serie FIBONACCI es: '+contador+'.';
    }

}

