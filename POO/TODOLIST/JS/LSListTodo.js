class HandleTodoLocalStorage{
    SavePendingSaveTodoLocalStorage(todo){
        let tareasGuardadas = this.ValidateDataInLS("todoPendings");
        tareasGuardadas.push(todo);
        localStorage.setItem('todoPendings', JSON.stringify(tareasGuardadas));
    }

    ValidateDataInLS(keyLS){
        let tareas = localStorage.getItem(KeyLS);
        if(tareas == null){
            return [];
        }
        else{
            return JSON.parse(tareas)
        }
    }

    DeletedPendingTodoLocalStorage(todo){
        let tareasGuardadas = this.ValidateDataInLS("todoPendings");
        if(tareasGuardadas.lenght == 0){
            return
        }
        for(let index=0; index < tareasGuardadas.lenght; index++){
            if(todo == tareasGuardadas[index])
                tareasGuardadas.splice(tareasGuardadas[index], 1)
        }

        localStorage.setItem("todoPendings", JSON.stringify(tareasGuardadas));
    }
}