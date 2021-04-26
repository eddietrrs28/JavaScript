const inpNumeros = document.getElementById("inpNumeros");
const btnNumAlmac = document.getElementById("btnNumAlmac");

inpNumeros.addEventListener("keyup", almacenarVal);
btnNumAlmac.addEventListener("click", mostrarVal);
let numAlm = [];
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
    if(indice <= 4){
        numAlm[indice] = Number(inpNumeros.value);
        indice++;
        inpNumeros.value = "";
        console.log(numAlm);
    }
    else{
        alert('Alcanzo el limite de guardado.');
        inpNumeros.value = "";
    }
}

function mostrarVal(){
    const lstaAlmacenados = document.getElementById("lstValAlm");
    let msjResult = "";

    for(let i=0;i<numAlm.length;i++){
        msjResult += `<div class = "list-group-item">El numero que se encuentra en la posicion ${i} es: ${numAlm[i]}</div>`;
    }

    lstaAlmacenados.innerHTML = msjResult;
    numAlm = [];
    indice = 0;
}