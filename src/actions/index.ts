const actionsTypes = {
    add: 'add_todos',
    delete: 'delete'
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

const createDeleteAction = (id: string) => {
    return {
        type: actionsTypes.delete,
        payload: {
            id
        }
    }
}

export {actionsTypes, createAddAction, createDeleteAction};