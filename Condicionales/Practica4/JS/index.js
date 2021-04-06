const btnCalcularCompra = document.getElementById("btnCalcularCompra");

btnCalcularCompra.addEventListener("click", calcularDesc);

function calcularDesc(){
    const precioCompra = Number(document.getElementById("inpCosto").value);
    let descuento = 0;

    if(precioCompra > 100){
        descuento = precioCompra * .80;
    }
    else{
        descuento = precioCompra;
    }

    const alertResult = document.getElementById("resultado");
    alertResult.innerText = "El costo total de la compra es: "+descuento;
}