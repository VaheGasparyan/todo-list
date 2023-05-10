import {ITodo} from "interfaces/todoState";
import {actionsTypes} from "actions";
import {filterState} from "utils/filterState";
import { changeIsEdit } from 'utils/changeIsEdit';
import { changeText } from 'utils/changeText';

export const todosReducer = (prevState: ITodo[], action: any) => {
    switch (action.type) {
        case actionsTypes.add:
            return [{...action.payload}, ...prevState];
        case actionsTypes.delete:
            return filterState(prevState, action.payload.id);
        case actionsTypes.edit:
            if(!action.payload.inputValue) {
                return changeIsEdit(prevState, action.payload.id);
            } else {
                return changeText(prevState, action.payload.id, action.payload.inputValue);
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