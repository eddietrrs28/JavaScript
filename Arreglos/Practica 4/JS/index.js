const inpLongitud = document.getElementById("inpLongitud");
const btnMostVal = document.getElementById("btnMostVal");

inpLongitud.addEventListener("keyup", deterLong);
btnMostVal.addEventListener("click", mostResul);

let longitud = 0;
let suma = 0;
let lista = [];

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
}

function genNumAlea(min, max) {
    let random = Math.random();
    return Math.floor(random * (max - min) + min);
}

function almNum() {
    for (let i=0; i<longitud; i++) {
        lista.push(genNumAlea(0, 9));
    }
}

function sumar() {
    almNum();

    for(let i=0;i<longitud;i++){
        suma = suma + lista[i];
    }

    return suma;
}

function mostResul() {
    const lstaAlmacenados = document.getElementById("lstValAlm");
    const containerResult = document.getElementById("resultado");
    let msjResult = "";

    almNum();
    suma = 0;
    sumar();

    for(let i=0;i<longitud;i++){
        msjResult += `<div class = "list-group-item">El numero que se encuentra en la posicion ${i} es: ${lista[i]}</div>`;
    }

    lstaAlmacenados.innerHTML = msjResult;
    containerResult.innerText = 'La suma es: '+suma;
    numAlm = [];
    indice = 0;

}







