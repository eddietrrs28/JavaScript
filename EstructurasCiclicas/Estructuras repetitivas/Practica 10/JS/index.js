const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularNum);

function calcularNum(){
    let resultAcum = '';
    let voto;
    let votoPorc1 = 0;
    let votoPorc2 = 0;
    let votoPorc3 = 0;
    let votoPorc4 = 0;
    let suma;
    let contadorVotos1 = 0;
    let contadorVotos2 = 0;
    let contadorVotos3 = 0;
    let contadorVotos4 = 0;

    while(voto != 0){
        voto = Number(prompt('Ingrese el numero del candidato por quien quiere votar:\n'
        + '1. Candidato\n'
        + '2. Candidato\n'
        + '3. Candidato\n'
        + '4. Candidato\n'
        + '0. Salir'));

        if(isNaN(voto) == true){
            alert('Es necesario que ingrese solo numeros');
        }
        else{
            switch(voto){
                case 1: 
                    contadorVotos1 ++;
                    break;
                case 2: 
                    contadorVotos2 ++;
                    break;
                case 3: 
                    contadorVotos3 ++;
                    break;
                case 4: 
                    contadorVotos4 ++;
                    break;
                case 0:
                    alert('Adios'); 
                    break;
                default:
                    alert('Error en comando, digite una opción valida');  
            }
        }    
    }
    
    suma = contadorVotos1 + contadorVotos2 + contadorVotos3 + contadorVotos4;
    votoPorc1 = (contadorVotos1 * 100) / suma;
    votoPorc2 = (contadorVotos2 * 100) / suma;
    votoPorc3 = (contadorVotos3 * 100) / suma;
    votoPorc4 = (contadorVotos4 * 100) / suma;

    resultAcum += `<li class="list-group-item">El total de votos del candidato 1 fueron: ${contadorVotos1}.<br> El porcentaje obtenido fue: ${votoPorc1.toFixed(2)}%</li>`;
    resultAcum += `<li class="list-group-item">El total de votos del candidato 2 fueron: ${contadorVotos2}.<br> El porcentaje obtenido fue: ${votoPorc2.toFixed(2)}%</li>`;
    resultAcum += `<li class="list-group-item">El total de votos del candidato 3 fueron: ${contadorVotos3}.<br> El porcentaje obtenido fue: ${votoPorc3.toFixed(2)}%</li>`;
    resultAcum += `<li class="list-group-item">El total de votos del candidato 4 fueron: ${contadorVotos4}.<br> El porcentaje obtenido fue: ${votoPorc4.toFixed(2)}%</li>`;
    
    const lista = document.getElementById("acumVot");
    lista.innerHTML = resultAcum;

}

