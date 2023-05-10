import {ChangeEvent, FormEvent, useEffect, useReducer, useState} from "react";

import {todosReducer} from "todosReducer";
import {ITodo} from "interfaces/todoState";
import {todos} from "todosInitailState";
import { v4 as uuid } from 'uuid';
import {filterCompletedTodos} from "utils/filterCompletedTodos";
import {createAddAction, createDeleteAction, createEditAction, createCloseAction, createCheckedAction} from "actions";

import TodoForm from "components/todo_form";
import Footer from "components/footer";
import DrawTodo from "components/drawTodo";

import './todo.css';


const Todo = () => {
    const [todo, dispatch] = useReducer(todosReducer, todos);

    const handleSubmit = (event: FormEvent<HTMLFormElement>, inputValue: string) => {
        event.preventDefault()
        dispatch(createAddAction(uuid(), false, inputValue, false, false));
    }

    const handleEdit = (id: string, inputValue?: string) => {
        if(!todo.find(item => item.isEdit)) {
            dispatch(createEditAction(id));
        } else if(inputValue) {
            dispatch(createEditAction(id, inputValue));
        }
    }

    const handleClose = (id: string) => {
        dispatch(createCloseAction(id));
    }

    const handleDelete = (id: string) => {
        dispatch(createDeleteAction(id));
    }

    const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(createCheckedAction(event.target.id));
    }

    return (
        <div className='todo'>
            <TodoForm handleSubmit={handleSubmit} />
            <DrawTodo todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleClose={handleClose} handleChecked={handleChecked} />
            <Footer todo={todo} />
        </div>
    );
};

export default Todo;