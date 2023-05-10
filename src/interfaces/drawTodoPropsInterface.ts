import {ITodo} from "./todoState";
import {ChangeEvent} from "react";

export interface IDrawTodoPropsInterface {
    todo: ITodo[];
    handleDelete: (event: any) => void;
    handleEdit: (id: string, inputValue?: string) => void;
    handleClose: (event: any) => void;
    handleChecked: (event: ChangeEvent<HTMLInputElement>) => void;
}