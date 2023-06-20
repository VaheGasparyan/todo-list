import {FC, FormEvent} from "react";
import {useInputValue} from "customHooks";

import {IFormProps} from "interfaces/formPropsInterface";
import { CONSTANTS } from "../../constants";

import './todo_form.css';



const TodoForm: FC <IFormProps> = ({ handleSubmit }) => {
    const {inputValue, onChange, clear} = useInputValue('');

    const sendInputValue = (event: FormEvent<HTMLFormElement>) => {
        handleSubmit(event, inputValue);
        clear('');
    }

    return (
        <form onSubmit={sendInputValue}>
            <div className="input">
                <input onChange={onChange} value={inputValue} type="text" name={CONSTANTS.formInput} placeholder='Add task...'/>
            </div>
            <div className="btn">
                <button type='submit'>Add +</button>
            </div>
        </form>
    );
};

export default TodoForm;