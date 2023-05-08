const actionsTypes = {
    add: 'add_todos',
}

const createAddAction = (id: string, completed: boolean, text: string) => {
    return {
        type: actionsTypes.add,
        payload: {
            id,
            completed,
            text
        }
    }
}

export {actionsTypes, createAddAction};