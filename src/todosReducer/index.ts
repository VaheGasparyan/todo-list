import {ITodo} from "interfaces/todoState";
import {actionsTypes} from "actions";
import {filterState} from "utils/filterState";
import { changeIsEdit } from 'utils/changeIsEdit';
import { changeText } from 'utils/changeText';
import {setLocalStorageTodosValue} from "utils/setAndGetLocalStorageValue";

export const todosReducer = (prevState: ITodo[], action: any) => {
    switch (action.type) {
        case actionsTypes.add:
            const newTodos = [{...action.payload}, ...prevState];
            setLocalStorageTodosValue(newTodos);
            return newTodos;
        case actionsTypes.delete:
            const filteredTodos = filterState(prevState, action.payload.id);
            setLocalStorageTodosValue(filteredTodos);
            return filteredTodos;
        case actionsTypes.edit:
            if(!action.payload.inputValue) {
                const newTodos = changeIsEdit(prevState, action.payload.id);
                setLocalStorageTodosValue(newTodos);
                return newTodos
            } else {
                const newTodos = changeText(prevState, action.payload.id, action.payload.inputValue);
                setLocalStorageTodosValue(newTodos);
                return newTodos;
            }
        case actionsTypes.close:
            return prevState.map(todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        isEdit: false
                    }
                }

                return todo
            });
        case actionsTypes.checked:
            return prevState.map(todo => {
                if(action.payload.id === todo.id) {
                    return {
                        ...todo,
                        checked: !todo.checked
                    }
                }
                return todo
            })
        default: return prevState;
    }
}