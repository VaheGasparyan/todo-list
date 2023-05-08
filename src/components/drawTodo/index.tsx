import {FC, useEffect} from "react";
import {IDrawTodoPropsInterface} from "interfaces/drawTodoPropsInterface";

import EmptyTodos from "./components/emptyTodos";
import {Checkbox} from "@mui/material";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

import './drawTodo.css';

const DrawTodo: FC<IDrawTodoPropsInterface> = ({ todo }) => {
    useEffect(() => {
        console.log(todo);
    }, []);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className='todo_list'>
            {todo.length ? todo.map(item => {
                return(
                    <div className='elements' key={item.id}>
                        <div className="left">
                            <Checkbox />
                            <p>{item.text}</p>
                        </div>
                        <div className="right">
                            <DeleteSweepIcon fontSize='large' />
                        </div>
                    </div>
                )
            }) : <EmptyTodos />}
        </div>
    );
};

export default DrawTodo;