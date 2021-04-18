const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularPagos);

function calcularPagos(){
    let pagoAcum = 10;
    let sumPago = pagoAcum;
    let resulAcum = "";

    for(let i=0;i<20;i++){
        resulAcum += `<li class="list-group-item">El monto a pagar el mes numero ${i+1} es de: $${pagoAcum}</li>`;
        pagoAcum = pagoAcum * 2;
        if(i<19){
            sumPago = sumPago + pagoAcum;
        }
    }

    const lista = document.getElementById("acumPag");
    lista.innerHTML = resulAcum;

    const resultContainer = document.getElementById("resultado");
    resultContainer.innerText = 'El total a pagar despues de los 20 meses es de: $ '+sumPago;
}
