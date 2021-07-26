let listNumPrim = [];
//const inpLong = document.getElementById("inpLong");
//inpLong.addEventListener("keypress", almNumPrim)

function almNumPrim(){
    //let longitud = inpLong.value;
    let longitud = 7;

    if(isNaN(longitud)==true){
        alert('Es necesario que ingrese un valor numerico');
        return;
    }
    if(Number(longitud) <= 0){
        alert('Ingrese una longitud valida');
        return;
    }
    if(longitud==''){
        alert('Es necesario ingresar un valor');
        return;
    }

    for(let i=0;i<longitud;i++){
        let numero = Math.floor(Math.random() * (100-2+2) +2);
        let isPrimo = valNumPrim(numero);
        if(isPrimo == true){
            listNumPrim[i] = numero;
            console.log(listNumPrim);
        }
        else{
            i--;
        }
    }
}

function valNumPrim(numero){
    for(let i=2;i<numero;i++){
        if(numero % 1 == 0){
            return false;
        }
    }
    return true;
}

almNumPrim();