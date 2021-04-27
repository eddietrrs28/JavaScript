const inpLongitud = document.getElementById("inpLongitud");
const inpNumeros = document.getElementById("inpNumeros");
const btnMostVal = document.getElementById("btnMostVal");

inpNumeros.disabled = true;
btnMostVal.disabled = true;

inpLongitud.addEventListener("keyup", deterLong);
inpNumeros.addEventListener("keyup", almVal);
btnMostVal.addEventListener("click", mostVal);

let longitud = 0;
let indice = 0;
let numAlm = [];

function deterLong(event){
    let valLong = inpLongitud.value;
    if(valLong == ""){
        alert("Favor de ingresar un valor");
        return;
    }
    if(event.key != "Enter"){
        return;
    }
    longitud = Number(inpLongitud.value);
    inpLongitud.disabled = true;
    inpNumeros.disabled = false;
    btnMostVal.disabled = false;
}

function almVal (event){
    if(event.key != "Enter"){
        return
    }
    if(indice >= longitud){
        alert('Se llego al limite de almacenamiento')
        inpNumeros.value = "";
        return;
    }
    let valIng = inpNumeros.value;
    if(valIng == ""){
        alert("Favor de ingresar un valor");
        inpNumeros.value = "";
        return;
    }
    if(isNaN(valIng)){
        alert("Favor de ingresar un valor numerico");
        inpNumeros.value = "";
        return;
    }
    
    
    for(let i=0;i<=numAlm.length;i++){
        if(valIng == numAlm[i]){
            alert("Valor repetido, favor de ingresar otro número");
            inpNumeros.value = "";
            return
        }
    }
    numAlm[indice] = Number(valIng);
    indice ++;
    inpNumeros.value = "";
}

function mostVal(){
    const lstaAlmacenados = document.getElementById("lstValAlm");
    let msjResult = "";

    for(let i=0;i<numAlm.length;i++){
        msjResult += `<div class = "list-group-item">El numero que se encuentra en la posicion ${i} es: ${numAlm[i]}</div>`;
    }

    lstaAlmacenados.innerHTML = msjResult;
    numAlm = [];
    indice = 0;
}

    
