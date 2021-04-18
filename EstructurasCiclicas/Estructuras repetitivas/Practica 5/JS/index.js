const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularHoras);

function calcularHoras(){
    let VentAcum1 = 0;
    let VentAcum2 = 0;
    let VentAcum3 = 0;
    let total = 0;
    let continuar = true;
    let i = 0;
    let ven1000 = 0;
    let venMay500 = 0;
    let venMen500 = 0;


    while(continuar == true){
        let venta = prompt('Ingrese el valor de la venta numero '+(i+1));
        if(isNaN(venta) == true){
            alert('Es necesario que ingrese solo numeros');
        }
        else if(venta == null){
            continuar = false;
        }
        else{
            if(venta > 1000){
                ven1000 ++;
                VentAcum1 = VentAcum1 + Number(venta);
            }
            else if(venta > 500 && venta <= 1000){
                venMay500 ++;
                VentAcum2 = VentAcum2 + Number(venta);
            }
            else if(venta <= 500){
                venMen500 ++;
                VentAcum3 = VentAcum3 + Number(venta);
            }
            i++;
        }
    }

    total = VentAcum1 + VentAcum2 + VentAcum3;

    const resultContainer = document.getElementById("resultado");
    resultContainer.innerText = 'El numero de ventas en la categoria 1 son: '+ven1000+
    '\nEl numero de ventas en la categoria 2 son: '+venMay500+
    '\nEl numero de ventas en la categoria 3 son: '+venMen500+
    '\n\nEl total en las ventas en la categoria 1 es de $'+VentAcum1+
    '\nEl total en las ventas en la categoria 2 es de $'+VentAcum2+
    '\nEl total en las ventas en la categoria 3 es de $'+VentAcum3+
    '\n\nEl monto total de las ventas es de $'+total;
}
