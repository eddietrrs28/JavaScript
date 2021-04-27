const inpNumeros = document.getElementById("inpNumeros");
const btnNumAlmac = document.getElementById("btnNumAlmac");

inpNumeros.addEventListener("keyup", almacenarVal);
btnNumAlmac.addEventListener("click", mostrarVal);
let listaNum = [];
let indice = 0

function almacenarVal(event){
    if(event.key != 'Enter'){
        return;
    }
    if(inpNumeros.value == ''){
        alert('Es necesario ingresar el valor.');
        return;
    }
    if(isNaN(inpNumeros.value)){
        alert('Debe ingresar un valor numerico.');
        return;
    }
    if(indice <= 9){
        listaNum[indice] = Number(inpNumeros.value);
        indice++;
        inpNumeros.value = "";
    }
    else{
        alert('Alcanzo el limite de guardado.');
        inpNumeros.value = "";
    }
}

function mostrarVal(){
    const lstaAlmacenados = document.getElementById("lstValAlm");
    const ContainerResult = document.getElementById("resultado");
    let suma = 0;
    let media = 0;
    let msjResult = "";

    for(let i=0;i<listaNum.length;i++){
        msjResult += `<div class = "list-group-item">El numero que se encuentra en la posicion ${i} es: ${listaNum[i]}</div>`;
        suma = suma + listaNum[i];
    }

    media = suma/listaNum.length;

    lstaAlmacenados.innerHTML = msjResult;
    ContainerResult.innerText = 'La media de los números almacenados es: '+media;
    listaNum = [];
    indice = 0;
}