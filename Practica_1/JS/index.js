let paragraph = document.getElementById('mainParagraph');
let btnNumeric = document.getElementById('numeric')
let btnText = document.getElementById('text')
let btnBool = document.getElementById('bool')

btnNumeric.addEventListener('click',WriteNumericValue);
btnText.addEventListener('click',WriteTextValue);
btnBool.addEventListener('click',WriteBoolValue);

function WriteNumericValue(){
    let numericValue = 2+2;
    paragraph.textContent = numericValue;
}

function WriteTextValue(){
    let textValue = "Hola Mundo";
    paragraph.textContent = textValue;
}

function WriteBoolValue(){
    let boolValue = true;
    paragraph.textContent = boolValue;
}
