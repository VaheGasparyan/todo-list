import {ITodo} from "./todoState";

export interface IDrawTodoPropsInterface {
    todo: ITodo[];
    handleDelete: (id: string) => void;
    handleEdit: (id: string, inputValue?: string) => void;
    handleClose: (id: string) => void;
}