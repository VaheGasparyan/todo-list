import {ITodo} from "./todoState";
import {ChangeEvent} from "react";

export interface IDrawTodoPropsInterface {
    todo: ITodo[];
    handleDelete: (id: string) => void;
    handleEdit: (id: string, inputValue?: string) => void;
    handleClose: (id: string) => void;
    handleChecked: (event: ChangeEvent<HTMLInputElement>) => void;
}