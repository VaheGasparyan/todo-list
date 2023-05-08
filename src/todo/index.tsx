import {FormEvent, useReducer} from "react";

import {todosReducer} from "todosReducer";
import {ITodo} from "interfaces/todoState";
import {todos} from "todosInitailState";
import { v4 as uuid } from 'uuid';

import TodoForm from "components/todo_form";
import Footer from "components/footer";
import DrawTodo from "components/drawTodo";

import './todo.css';
import {createAddAction} from "../actions";


const Todo = () => {
    const [todo, dispatch] = useReducer(todosReducer, todos);

    const handleSubmit = (event: FormEvent<HTMLFormElement>, inputValue: string) => {
        event.preventDefault()

        dispatch(createAddAction(uuid(), false, inputValue));
    }

    return (
        <div className='todo'>
            <TodoForm handleSubmit={handleSubmit} />
            <DrawTodo todo={todo} />
            <Footer todo={todo} />
        </div>
    );
};

export default Todo;