export const changePropOne = (value) => {
    return {
        type:'PROP_ONE',
        payload: value
    }
}

export const changePropTwo = (value) => {
    return {
        type:'PROP_TWO',
        payload: value
    }
}

export const plusOne = (value) => {
    return {
        type:'plus',
        // payload: value+1
    }
}
export const minusOne = (value) => {
    return {
        type:'minus',
        // payload: value-1
    }
}