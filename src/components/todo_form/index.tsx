import {ChangeEvent, FC, FormEvent, useState} from "react";

import {IFormProps} from "interfaces/formPropsInterface";

import './todo_form.css';

const TodoForm: FC <IFormProps> = ({ handleSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const sendInputValue = (event: FormEvent<HTMLFormElement>) => {
        handleSubmit(event, inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={sendInputValue}>
            <div className="input">
                <input onChange={changeInputValue} value={inputValue} type="text" name='form_input' placeholder='Add task...'/>
            </div>
            <div className="btn">
                <button>Add +</button>
            </div>
        </form>
    );
};

export default TodoForm;