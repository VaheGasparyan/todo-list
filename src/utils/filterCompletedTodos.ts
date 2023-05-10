import {ITodo} from "interfaces/todoState";

export const filterCompletedTodos = (todos: ITodo[]) => {
    return todos.filter(todo => {
        return todo.checked;
    }).length
}