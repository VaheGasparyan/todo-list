import {ITodo} from "interfaces/todoState";
import {actionsTypes} from "../actions";

export const todosReducer = (prevState: ITodo[], action: any) => {
    switch (action.type) {
        case actionsTypes.add:
            return [{...action.payload}, ...prevState]
        default: return prevState;
    }
}