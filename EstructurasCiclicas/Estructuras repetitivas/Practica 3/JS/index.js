const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularHoras);

function calcularHoras(){
    let horasAcum = 0;
    let resultAcum = "";
    let pagoFin = 0;

    let pago = Number(prompt('Ingrese la cantidad a pagar por hora'));

    for(let i=0;i<7;i++){
        let horas = Number(prompt('Ingrese las horas trabajadas en la semana '+(i+1)));
        horasAcum = horasAcum + horas;
        resultAcum += `<li class="list-group-item">Las horas trabajadas en la semana ${i+1} son: ${horasAcum}`;
    }

    pagoFin = horasAcum * pago;

    const lista = document.getElementById("acumSem");
    lista.innerHTML = resultAcum;

    const resultContainer = document.getElementById("resultado");
    resultContainer.innerText = 'El total de horas trabajadas es: '+horasAcum+'\nEl total a pagar es: $'+pagoFin;
}
