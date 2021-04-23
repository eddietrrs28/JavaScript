const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularProd);

function calcularProd(){
    let i = 0;
    let continuar = true;
    let totalAnu = 0;
    let resultAcum = "";
    let resultAcum2 = "";
    var lista = [];
    var lista2 = [];
    let julio = false;
    const containerResult = document.getElementById("resultado");

    while(continuar == true){
        let clv = prompt('Ingrese la clave de la fábrica No. '+(i+1));
        if(isNaN(clv) == true){
            alert('Es necesario que ingrese solo numeros');
        }
        else if(clv == null){
            continuar = false;
        }
        else{
            for(let i=0;i<12;i++){
                let prd = Number(prompt('Ingrese la producción de la fábrica con clave "'+clv+'" en el mes '+(i+1)));
                totalAnu = totalAnu + prd;

                if(i == 6){
                    if(prd > 3000000){
                        julio = true;
                        resultAcum2 += '\nLas fabricas que en el mes de Julio su producción sobrepaso los $3,000,000. fueron: "'+clv+'"';
                    }
                }
            }
            lista.push(totalAnu);
            lista2.push(clv);
            
            resultAcum += 'El total anual de producción de la fábrica con codigo "'+clv+'" fue de: $'+totalAnu+'\n';
            totalAnu = 0;
        }
        i++;
    }

    let totalMayor = lista[0];
    let claveMayor = lista2[0];

        for(let i=1;i<lista.length;i++){
            if(lista[i] > totalMayor){
                totalMayor = lista[i];
                claveMayor = lista2[i];
            }
        }

        if(julio == false){
            resultAcum2 = '\nNo hay producciones superiores a $3,000,000. en los meses de Julio';
        }
        
    containerResult.innerText = resultAcum+'\n'+'La clave de la fábrica que mas produjo en el año fue: "'+claveMayor+'"\n con un total de $'+totalMayor+'.\n'+resultAcum2;

}




