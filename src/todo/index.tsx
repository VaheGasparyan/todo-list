import TodoForm from "components/todo_form";
import Footer from "components/footer";

import './todo.css';
import {MaterialUISwitch} from "../components/switch";

const Todo = () => {
    return (
        <div className='todo'>
            <TodoForm />
            <Footer />
        </div>
    );
};

export default Todo;