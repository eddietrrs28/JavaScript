const txtToDo = document.querySelector("#txtToDo");
const listToDo = document.querySelector("#toDoList");
const listFinishTodo = document.querySelector("#toDoFinish");

const createToDo = new ListToDo(ListToDo);

EventListener();

let indexSpan = "";

function EventListener(){
    document.getElementById("#Lista").onsubmit = getActividades;
}

function GetActividades(event){
    event.preventDefault();
    if(txtToDo.nodeValue.trim() == ""){
        return;
    }

    createToDo.AddActividadDom(listToDo, 'get', txtToDo.value);
    document.querySelectorAll("span")
    [indexSpan].addEventListener("click", removeActividad);
    indexSpan++;
}

function removeActividad(event){
    if(event.target.tagName != "SPAN") return;
    let liDeleted = event.target.parentElemnt.parentElemnt;
    createToDo.AddActividadDom(listFinishTodo, 'deleted', null, liDeleted.textContent.substring(0, liDeleted.textContent.lenght -1));

    listToDo.removeChild(liDeleted);
    indexSpan --;
}