import {FC, useEffect} from "react";
import {IDrawTodoPropsInterface} from "interfaces/drawTodoPropsInterface";

import EmptyTodos from "./components/emptyTodos";
import {Checkbox} from "@mui/material";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

import './drawTodo.css';

const DrawTodo: FC<IDrawTodoPropsInterface> = ({ todo, handleDelete }) => {
    useEffect(() => {
        console.log(todo);
    }, []);

    const onDelete= (event: any) => {
        handleDelete(event.target.parentNode.id);
    }

    return (
        <div className='todo_list'>
            {todo.length ? todo.map(item => {
                return(
                    <div className='elements' key={item.id}>
                        <div className="left">
                            <Checkbox />
                            <p>{item.text}</p>
                        </div>
                        <div className="right" onClick={onDelete} id={item.id}>
                            <DeleteSweepIcon fontSize='large' id={item.id} />
                        </div>
                    </div>
                )
            }) : <EmptyTodos />}
        </div>
    );
};

export default DrawTodo;