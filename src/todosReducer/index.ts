import {ITodo} from "interfaces/todoState";
import {actionsTypes} from "../actions";
import {filterState} from "../utils/filterState";

export const todosReducer = (prevState: ITodo[], action: any) => {
    switch (action.type) {
        case actionsTypes.add:
            return [{...action.payload}, ...prevState];
        case actionsTypes.delete:
            return filterState(prevState, action.payload.id);
        default: return prevState;
    }
}