export const INCREASE_COUNT = (value) => {
    return {
        type:'plus',
        // payload: value+1
    }
}
export const DECREASE_COUNT = (value) => {
    return {
        type:'minus',
        // payload: value-1
    }
}