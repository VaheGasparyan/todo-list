import {FC, useState, ChangeEvent} from "react";
import {IDrawTodoPropsInterface} from "interfaces/drawTodoPropsInterface";

import EmptyTodos from "./components/emptyTodos";
import {Checkbox} from "@mui/material";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EditIcon from '@mui/icons-material/Edit';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import CancelIcon from '@mui/icons-material/Cancel';

import './drawTodo.css';

const DrawTodo: FC<IDrawTodoPropsInterface> = ({ todo, handleDelete, handleEdit, handleClose }) => {
    const [inputValue, setInputValue] = useState('');
    const onDelete= (event: any) => {
        handleDelete(event.target.parentNode.id);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onEdit = (event: any) => {
        handleEdit(event.target.parentNode.id, inputValue);
        setInputValue('');
    }

    const onClose = (event: any) => {
        handleClose(event.target.parentNode.id);
    }

    return (
        <div className='todo_list'>
            {todo.length ? todo.map(item => {
                return(
                    <div className='elements' key={item.id}>
                        <div className="left">
                            <Checkbox />
                            {item.isEdit ? <input placeholder='Edit text...' type="text" onChange={handleChange} value={inputValue} /> : <p>{item.text}</p>}
                        </div>
                        <div className="right">
                            <div className="edit" id={item.id}>
                                {item.isEdit ? <FileDownloadDoneIcon onClick={onEdit} fontSize='large' id={item.id} /> : <EditIcon onClick={onEdit} fontSize='large' id={item.id} />}
                            </div>
                            <div className="delete" id={item.id}>
                                {item.isEdit ? <CancelIcon onClick={onClose} fontSize='large' id={item.id} /> : <DeleteSweepIcon onClick={onDelete} id={item.id} fontSize='large'/>}
                            </div>
                        </div>
                    </div>
                )
            }) : <EmptyTodos />}
        </div>
    );
};

export default DrawTodo;