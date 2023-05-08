import {useReducer} from "react";

import {todosReducer} from "todosReducer";
import {ITodo} from "interfaces/todoState";
import {todos} from "todosInitailState";

import TodoForm from "components/todo_form";
import Footer from "components/footer";
import DrawTodo from "components/drawTodo";

import './todo.css';


const Todo = () => {
    const [todo, dispatch] = useReducer(todosReducer, todos);

    return (
        <div className='todo'>
            <TodoForm />
            <DrawTodo todo={todo} />
            <Footer />
        </div>
    );
};

export default Todo;