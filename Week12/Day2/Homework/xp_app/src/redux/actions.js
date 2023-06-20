export const DELETE = 'DELETE'
export const UPDATE = 'UPDATE'
export const INSERT = 'INSERT'
export const UPDATE_INDEX = 'UPDATE_INDEX'


export const deleteOne = (id) => {
    return {
        type:DELETE,
        payload: id
    }
}

export const update = (item) => {
    return {
        type:UPDATE,
        payload: item
    }
}

export const insert = (item) => {
    return {
        type:INSERT,
        payload: item
    }
}

export const updateIndex = (item) => {
    return {
        type:UPDATE_INDEX,
        payload: item
    }
}