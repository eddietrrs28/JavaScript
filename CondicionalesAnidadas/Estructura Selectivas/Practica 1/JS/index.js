const btnCalDesc = document.getElementById("btnCalDesc");

btnCalDesc.addEventListener("click", CalcularDescuento);

function CalcularDescuento(){
    let precio = Number(document.getElementById("inpPrecio").value);
    let resultadoF = "";
    let descuento = 0;
    if(precio == "" || precio == 0){
        alert(`Es necesario ingresar el precio de la prenda`);
        return;
    }

    if(precio > 3600){
        descuento = precio * .84;
        resultadoF = 'El total a pagar es: $'+descuento+'<br>Se le aplico un descuento del 16%';
    }
    else{
        descuento = precio * .93;
        resultadoF = 'El total a pagar es: $'+descuento+'<br>Se le aplico un descuento del 7%';
    }

    let resultContainer = document.getElementById("resultado");
    resultContainer.innerHTML = `<div class = "alert alert-success">${resultadoF}</div>`
}