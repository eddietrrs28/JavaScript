const btnCalcularPromedio = document.getElementById("btnCalcularPromedio");

btnCalcularPromedio.addEventListener("click", CalcularPromedio);

function CalcularPromedio() {
    //const radio = document.getElementById("inpMatricula").value;
    //const valorPi = 3.1415;

    //let resultado =  valorPi*(radio * radio);

    //const containerResultado = document.getElementById("resultado")
    //template literals
    //containerResultado.innerText = `El area del circulo es: ${resultado}`;

    const matricula = document.getElementById("inpMatricula").value;
    var nota1 = Number(document.getElementById("inpNota1").value);
    var nota2 = Number(document.getElementById("inpNota2").value);
    var nota3 = Number(document.getElementById("inpNota3").value);
    var nota4 = Number(document.getElementById("inpNota4").value);
    var nota5 = Number(document.getElementById("inpNota5").value);

    let matriculaR =  matricula;
    let prom = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    const containerResultado = document.getElementById("resultado")
    containerResultado.innerText = 'La matricula del alumno es: '+ matriculaR +'\n El promedio es: '+ prom;
}