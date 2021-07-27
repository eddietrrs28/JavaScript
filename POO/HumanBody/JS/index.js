console.log("sirve")

document.addEventListener("click", validateHitbox);

function validateHitbox(event){
    const language = document.getElementById('lenguaje').value;
    const etiqueta = document.getElementById("resp");
    console.log(`x=${event.x} Y=${event.y}`);
    let msjResult = "";
    
        if (event.x >= 300 && event.x <= 450 && event.y >= 8 && event.y <= 65)

            if(language == 1){
                //console.log("cabeza");
                etiqueta.innerHTML = (`<label> Cabeza</label>`);
            }
            else{
                //console.log("head")
                etiqueta.innerHTML = (`<label> Head</label>`);
            }
        else if(event.x >= 370 && event.x <= 420 && event.y >= 73 && event.y <= 81)
            
            if(language == 1){
            //console.log("cuello");
            etiqueta.innerHTML = (`<label>Cuello</label>`);
            }
            else{
            //console.log("neck")
            etiqueta.innerHTML = (`<label>Neck</label>`);
            }
        else if(event.x >= 400 && event.x <= 415 && event.y >= 105 && event.y <= 140)
            
            if(language == 1){
            //console.log("Pecho");
            etiqueta.innerHTML = (`<label>Pecho</label>`);
            }
            else{
            //console.log("Chest")
            etiqueta.innerHTML = (`<label>Chest</label>`);
            }
        else if(event.x >= 500 && event.x <= 540 && event.y >= 198 && event.y <= 270)
            
            if(language == 1){
            //console.log("Mano Izquierda");
            etiqueta.innerHTML = (`<label>Mano Izquierda</label>`);
            }
            else{
            //console.log("Left Hand")
            etiqueta.innerHTML = (`<label>Left Hand</label>`);
            }
        else if(event.x >= 260 && event.x <= 295 && event.y >= 208 && event.y <= 229)
            
            if(language == 1){
            //console.log("Mano Derecha");
            etiqueta.innerHTML = (`<label>Mano Derecha</label>`);
            }
            else{
            //console.log("Right Hand")
            etiqueta.innerHTML = (`<label>Right Hand</label>`);
            }
        else if(event.x >= 430 && event.x <= 465 && event.y >= 270 && event.y <= 292)
            
            if(language == 1){
            //console.log("Mano Derecha");
            etiqueta.innerHTML = (`<label>Rodilla Izquierda</label>`);
            }
            else{
            //console.log("Right Hand")
            etiqueta.innerHTML = (`<label>Left Knee</label>`);
            }
        else if(event.x >= 340 && event.x <= 470 && event.y >= 275 && event.y <= 290)
            
            if(language == 1){
            //console.log("Rodilla Izquierda");
            etiqueta.innerHTML = (`<label>Rodilla Derecha</label>`);
            }
            else{
            //console.log("Right Knee")
            etiqueta.innerHTML = (`<label>Right Knee</label>`);
            }
        else if(event.x >= 330 && event.x <= 369 && event.y >= 350 && event.y <= 373)
            
            if(language == 1){
            //console.log("Pie Derecho");
            etiqueta.innerHTML = (`<label>Pie Derecho</label>`);
            }
            else{
            //console.log("Right Foot")
            etiqueta.innerHTML = (`<label>Right Foot</label>`);
            }
        else if(event.x >= 430 && event.x <= 600 && event.y >= 338 && event.y <= 370)
            
            if(language == 1){
            //console.log("Pie Derecho");
            etiqueta.innerHTML = (`<label>Pie Izquierdo</label>`);
            }
            else{
            //console.log("Right Foot")
            etiqueta.innerHTML = (`<label>Left Foot</label>`);
            }
}