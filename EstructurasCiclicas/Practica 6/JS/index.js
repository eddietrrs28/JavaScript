const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", imprimirNumeros);

function imprimirNumeros(){
    let resulAcum = ""

    for(let i=1;i<=100;i++){
        if(i%2 == 0){
            resulAcum += `<li class="list-group-item">El numero ${i} es par</li>`;
        }
    }

    const resultContainer = document.getElementById("resultado");

    resultContainer.innerHTML = resulAcum;
}
