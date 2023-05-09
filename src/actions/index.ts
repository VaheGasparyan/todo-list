const actionsTypes = {
    add: 'add_todos',
    delete: 'delete',
    edit: 'edit',
    close: 'close'
}

const createAddAction = (id: string, completed: boolean, text: string, isEdit: boolean) => {
    return {
        type: actionsTypes.add,
        payload: {
            id,
            completed,
            text,
            isEdit
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

const createEditAction = (id: string, inputValue?: string) => {
    return {
        type: actionsTypes.edit,
        payload: {
            id,
            inputValue,
        }
    }
}

const createCloseAction = (id: string) => {
    return {
        type: actionsTypes.close,
        payload: {
            id,
        }
    }
}

export {actionsTypes, createAddAction, createDeleteAction, createEditAction, createCloseAction};