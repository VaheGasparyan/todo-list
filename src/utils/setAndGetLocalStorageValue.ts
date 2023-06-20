import {ITodo} from "interfaces/todoState";
import {CONSTANTS} from "../constants";

const getLocalStorageValue = () => {
    const theme = localStorage.getItem(CONSTANTS.theme)
    if(theme) {
        return theme;
    }

    return CONSTANTS.dark
}

const setLocalStorageValue = (theme: string) => {
    localStorage.setItem(CONSTANTS.theme, theme);
}

const setLocalStorageTodosValue = (todo: ITodo[]) => {
    localStorage.setItem('todos', JSON.stringify(todo));
}

const getLocalStorageTodos = () => {
    const todos = JSON.parse(localStorage.getItem(CONSTANTS.todos) as string);

    return todos ? todos : [];
}

export { getLocalStorageValue, setLocalStorageValue, setLocalStorageTodosValue, getLocalStorageTodos };