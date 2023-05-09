import { ITodo } from 'interfaces/todoState';

const changeIsEdit = (state: ITodo[], id: string) => {
    return state.map(todo => {
        if(todo.id === id) {
            return {
                ...todo,
                isEdit: true
            }
        }
        return todo;
    })
}

export {changeIsEdit}