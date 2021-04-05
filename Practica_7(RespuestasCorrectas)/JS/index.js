const btnCalcularPuntaje = document.getElementById("btnCalcularPuntaje");

btnCalcularPuntaje.addEventListener("click", CalcularPuntaje);

function CalcularPuntaje() {

    var respCorrcta = Number(document.getElementById("inpResCorr").value);
    var respInorrcta = Number(document.getElementById("inpResIncorr").value);
    var respCero = Number(document.getElementById("inpResBlan").value);

    let punt = (respCorrcta * 4) - respInorrcta + (respCero * 0);

    const containerResultado = document.getElementById("resultado")
    containerResultado.innerText = 'El puntaje final es: '+punt+' puntos';
}