const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularKm);

function calcularKm(){
    let km = 0;
    let kmMay = 0;
    let kmMen = 0;

    let kmCon1 = Number(prompt('Ingrese en que kilometro se encuentra el conductor 1'));
    let kmCon2 = Number(prompt('Ingrese en que kilometro se encuentra el conductor 2'));

    if(kmCon1 > kmCon2){
        kmMay = kmCon1;
        kmMen = kmCon2;
    }
    else{
        kmMay = kmCon2
        kmMen = kmCon1
    }
    
    for(let i=0;i<kmMay;i++){
        kmMay --;
        kmMen ++;
        if(kmMay == kmMen){
            km = kmMay;
        }
    }

    const resultContainer = document.getElementById("resultado");
    resultContainer.innerText = 'El kilometro donde se encontraran es en el: Km '+km;
}
