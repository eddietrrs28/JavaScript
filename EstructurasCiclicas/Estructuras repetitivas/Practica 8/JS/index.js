const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularNum);

function calcularNum(){
    let resultAcum = '';
    let num1 = 0;
    let num2 = 1;
    let suma = 0;

    let num = prompt('Ingrese un numero:');
    if(isNaN(num) == true){
        alert('Es necesario que ingrese solo numeros');
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
            }
        }
    }        
    
    const lista = document.getElementById("acumNum");
    lista.innerHTML = resultAcum;

}

