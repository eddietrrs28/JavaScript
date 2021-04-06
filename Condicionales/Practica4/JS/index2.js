const btnCalcularDesc = document.getElementById("btnCalcularDesc");

btnCalcularDesc.addEventListener("click", calcularDesc);
const alertResult = document.getElementById("resultado");

function calcularDesc(){
    const articulo = document.getElementById("inpArti").value;
    const clave = Number(document.getElementById("inpClave").value);
    const precioOrig = Number(document.getElementById("inpPrecio").value);
    let descuento = 0;

    if(clave == 01){
        descuento = precioOrig * .9;
        alertResult.innerText = "El costo total de la compra es: $"+descuento;
    }
    else if(clave == 02){
        descuento = precioOrig * .80;
        alertResult.innerText = "El costo total de la compra es: $"+descuento;
    }
    else{
        alertResult.innerText = "La clave es invalida, ingrese una clave correcta";
    }
}