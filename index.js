
let todolist = {
    tasks: [],

    addTask: function () {
        let newTask = prompt("Введите новую задачу")
        if (newTask) {
            this.tasks.push(newTask)
            this.displayTasks()
        } else {
            alert("Задача не была введена")
        }
    },

    displayTasks: function () {
      if (this.tasks.length === 0) {
        alert("Список дел пуст")
      } else {
        let TasksListString = "Список дел:\n"
        for (i = 0; i < this.tasks.length; i++) {
            TasksListString += (i + 1) + ". " + this.tasks[i] + "\n"
        }
        alert(TasksListString)
        }  
    },

    deleteTask: function() {
        let taskNumber = parseInt(prompt("Введите номер задачи для удаления:"))
        if (isNaN(taskNumber)) {
            alert("Пожалуйста, введите номер задачи (число).")
            return;
        }        
        if (taskNumber >= 1 && taskNumber <= this.tasks.length) {
        this.tasks.splice(taskNumber - 1, 1) 
        this.displayTasks()
        } else {
            alert("Задача с таким номером не найдена.")
        }
    }
};

while(true) {
    let action = prompt("Выберите действие:\n1. Добавить задачу\n2. Показать список\n3. Удалить задачу\n4. Выход");
    if (action === "1") {
    todolist.addTask()
    } else if (action === "2") {
    todolist.displayTasks()
    } else if (action === "3") {
    todolist.deleteTask()
    } else if (action === "4") {
    alert("До свидания!");
    break;
    } else {
        alert("Некорректное действие. Пожалуйста, выберите из предложенных.")
    }
}