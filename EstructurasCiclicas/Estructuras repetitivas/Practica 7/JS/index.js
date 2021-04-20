const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularNum);

function calcularNum(){
    let resultAcum = '';

    let num = prompt('Ingrese un numero:');
    if(isNaN(num) == true){
        alert('Es necesario que ingrese solo numeros');
    }
    else{
        resultAcum += `<li class="list-group-item">${num}</li>`;
        while(num != 1){
            if(num % 2 == 0){
                num = num / 2
                resultAcum += `<li class="list-group-item">${num}</li>`;
            }
            else{
                num = (num * 3) + 1;
                resultAcum += `<li class="list-group-item">${num}</li>`;
            }
        }
    }        
    
    const lista = document.getElementById("acumNum");
    lista.innerHTML = resultAcum;

}

