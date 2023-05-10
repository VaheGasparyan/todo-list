import {ChangeEvent, FormEvent, useReducer, useContext} from "react";

import {todosReducer} from "todosReducer";
import { v4 as uuid } from 'uuid';
import {getLocalStorageTodos} from "utils/setAndGetLocalStorageValue";
import {createAddAction, createDeleteAction, createEditAction, createCloseAction, createCheckedAction} from "actions";
import { ThemeContext } from "App";

import TodoForm from "components/todo_form";
import Footer from "components/footer";
import DrawTodo from "components/drawTodo";

import './todo.css';


const Todo = () => {
    const [todo, dispatch] = useReducer(todosReducer, getLocalStorageTodos());
    const {theme} = useContext(ThemeContext);

    const handleSubmit = (event: FormEvent<HTMLFormElement>, inputValue: string) => {
        event.preventDefault();
        dispatch(createAddAction(uuid(), false, inputValue, false, false));
    }

    const handleEdit = (id: string, inputValue?: string) => {
        if(!todo.find(item => item.isEdit)) {
            dispatch(createEditAction(id));
        } else if(inputValue) {
            dispatch(createEditAction(id, inputValue));
        }
    }

    const handleClose = (event: any) => {
        dispatch(createCloseAction(event.target.parentNode.id));
    }

    const handleDelete = (event: any) => {
        dispatch(createDeleteAction(event.target.parentNode.id));
    }

    const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(createCheckedAction(event.target.id));
    }

    return (
        <div className={theme === 'light' ? 'todo light' : 'todo dark'}>
            <TodoForm handleSubmit={handleSubmit} />
            <DrawTodo todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleClose={handleClose} handleChecked={handleChecked} />
            <Footer todo={todo} />
        </div>
    );
};

export default Todo;