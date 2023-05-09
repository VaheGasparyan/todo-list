import {ITodo} from "./todoState";

export interface IDrawTodoPropsInterface {
    todo: ITodo[];
    handleDelete: (id: string) => void
}