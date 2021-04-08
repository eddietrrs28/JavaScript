const btnCalTar = document.getElementById("btnCalTar");
btnCalTar.addEventListener("click", CalcularTarifa);

function CalcularTarifa(){
    const clientes = Number(document.getElementById("inpClient").value);
    const containerResult = document.getElementById("resultadoF");

    if(clientes <= 200){
        containerResult.innerHTML = `<div class="alert alert-danger"> El costo del platillo es de $95.00 </div>`;
    }
    else if(clientes > 200 && clientes <= 300){
        containerResult.innerHTML = `<div class="alert alert-warning"> El costo del platillo es de $85.00 </div>`;
    }
    else if(clientes > 300){
        containerResult.innerHTML = `<div class="alert alert-success"> El costo del platillo es de $75.00 </div>`;
    }

    
}
