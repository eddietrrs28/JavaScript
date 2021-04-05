const btnEvNum = document.getElementById("btnEvNum");

btnEvNum.addEventListener('click', evaluarNumeros)

function evaluarNumeros(){
    const inpNumero1 = Number(document.getElementById('inpNumero1').value);
    const inpNumero2 = Number(document.getElementById('inpNumero1').value);

    let numeroMayor = 0;
    const alertaResultado = document.getElementById("resultado");

    if(inpNumero1 > inpNumero2){
        alertaResultado.innerHTML = 'El numero '+inpNumero1+' es mayor';
    }
    else{
        alertaResultado.innerHTML = 'El numero '+inpNumero2+' es menor';
    }
}