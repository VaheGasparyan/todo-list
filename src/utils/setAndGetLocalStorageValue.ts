import {ITodo} from "interfaces/todoState";

const getLocalStorageValue = () => {
    const theme = localStorage.getItem('theme')
    if(theme) {
        return theme;
    }

    return 'dark'
}

const setLocalStorageValue = (theme: string) => {
    localStorage.setItem('theme', theme);
}

const setLocalStorageTodosValue = (todo: ITodo[]) => {
    localStorage.setItem('todos', JSON.stringify(todo));
}

const getLocalStorageTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos') as string);

    return todos ? todos : [];
}

export { getLocalStorageValue, setLocalStorageValue, setLocalStorageTodosValue, getLocalStorageTodos };