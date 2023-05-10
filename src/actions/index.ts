const actionsTypes = {
    add: 'add_todos',
    delete: 'delete',
    edit: 'edit',
    close: 'close',
    checked: 'checked'
}

const createAddAction = (id: string, completed: boolean, text: string, isEdit: boolean,  checked: boolean) => {
    return {
        type: actionsTypes.add,
        payload: {
            id,
            completed,
            text,
            isEdit,
            checked
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

const createCheckedAction = (id: string) => {
    return {
        type: actionsTypes.checked,
        payload: {
            id
        }
    }
}

export {actionsTypes, createAddAction, createDeleteAction, createEditAction, createCloseAction, createCheckedAction};