const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", CalcularAhorro);

function CalcularAhorro(){
    let ahorros = 0;
    let resultAcum = "";
    
    for(let i=0;i<12;i++){
        let ahorroMen = Number(prompt('Ingrese el ahorro del mes '+(i+1)));
        ahorros = ahorros + ahorroMen;
        resultAcum += `<li class="list-group-item">El ahorro acumulado en el mes${i+1} es: ${ahorros}`;
    }
    const lista = document.getElementById("acumMens");
    lista.innerHTML = resultAcum;

    const resultContainer = document.getElementById("resultado");

    resultContainer.innerText = "El ahorro que se acumulo en el año es de: "+ahorros;
}