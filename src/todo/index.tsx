import {useReducer} from "react";

import TodoForm from "components/todo_form";
import Footer from "components/footer";

import './todo.css';
import {todosReducer} from "todosReducer";
import {ITodo} from "interfaces/todoState";
import {todos} from "todos";

const Todo = () => {
    const [todo, dispatch] = useReducer(todosReducer, todos);

    return (
        <div className='todo'>
            <TodoForm />
            <Footer />
        </div>
    );
};

export default Todo;