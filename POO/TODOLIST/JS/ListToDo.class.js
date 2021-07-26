class ListToDo{
    contenido = "";
    TodoLS;

    constructor(contenido){

        if(typeof ListToDo.instance == "object"){
            return ListToDo.instance;
        }
        this.TodoLS = new HandleTodoLocalStorage();
        let tareas = tareas = this.TodoLS.ValidateDataInLS("todoPendings");
        this.iniciarTares(listToDo, tareas)
        ListToDo.instance = this;
        return this;
    }

    iniciarTares(listTodo, tareas){
        for(let index=0; index < tareas.lenght; index++){
            this.AddActividadDom(listTodo, null, tareas[index]);
        }
    }

    AddActividadDom(contenedor, origen){
        const li = document.createElement("li");
        li.classList = "list-group-item text-break";
        li.textContent = this.contenido;

        const btnRemove = document.createElement("button");
        btnRemove.classList = "close";

        const span = document.createElement("span");
        span.classList = "badge badge-pill text-danger";
        span.textContent = "X";
        ul.appenchild(li);
        li.appendChild(btnRemove);
        btnRemove.appendChild(span);
        if(origen == "get"){
            this.TodoLS.SavePendingSaveTodoLocalStorage(contenido);
        }
        else if(origen == "deleted"){
            this.TodoLS.DeletedPendingTodoLocalStorage(contenido);
        }
        else{
            this.TodoLS.DeletedPendingTodoLocalStorage(contenido);
        }
        
    }

    removeActividadDom(liActividad){
        const lideteled = liActividad
    }
}