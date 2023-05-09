import { ITodo } from 'interfaces/todoState';

const changeText = (state: ITodo[], id: string, inputValue: string) => {
    return state.map(todo => {
        if(todo.id === id) {
            return {
                ...todo,
                text: inputValue,
                isEdit: false
            }
        }
        return todo;
    })
}

export {changeText};