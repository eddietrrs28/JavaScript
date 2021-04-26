const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularVentas);

function calcularVentas(){
    let i = 0;
    let continuar = true;
    let totTienda = 0;
    let totCiudad = 0;
    let resultAcum = "";
    let resultAcum2 = "";
    let resultAcum3 = "";

    while(continuar == true){
        let ciudad = prompt('Ingrese la ciudad donde se encuentra la tienda No. '+(i+1));
        if(ciudad == null){
            continuar = false;
        }
        else{
            let tiendas = Number(prompt('Ingrese el numero de tiendas en la ciudad '+ciudad));

            for(let i=0;i<tiendas;i++){
                let empl = Number(prompt('Ingrese el numero de empleados en la tienda No. '+(i+1)));
                for(let j=0;j<empl;j++){
                    let ventEmpl = Number(prompt('Ingrese el total de ventas del empleado No. '+(j+1)));
                    totTienda = totTienda + ventEmpl;
                    resultAcum += 'El total de ventas del empleado No. '+(j+1)+' de la tienda No. '+(i+1)+' de la ciudad '+ciudad+' es: $'+ventEmpl+'\n';
                }
            resultAcum2 += 'El total de ventas de la tienda No. '+(i+1)+' de la ciudad de '+ciudad+' es: $'+totTienda+'\n'; 
            totCiudad = totCiudad + totTienda;
            totTienda = 0;
            }
            
        resultAcum3 += 'El total de ventas de la ciudad '+ciudad+' es: $'+totCiudad+'\n'; 
        totCiudad = 0;
        } 
    i++;
    }

    const containerResult = document.getElementById("resultado");
    containerResult.innerText = resultAcum+'\n'+resultAcum2+'\n'+resultAcum3;
}