const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", imprimirNumeros);

function imprimirNumeros(){
    let resulAcum = ""

    for(let i=100;i>=1;i--){
        resulAcum += `<li class="list-group-item">${i}</li>`;
    }

    const resultContainer = document.getElementById("resultado");

    resultContainer.innerHTML = resulAcum;
}
