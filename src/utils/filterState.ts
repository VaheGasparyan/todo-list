import {ITodo} from "../interfaces/todoState";

export const filterState = (state: ITodo[], id: string) => {
    return state.filter(todo => {
        return todo.id !== id;
    })
}