const initState = {
    count : 0
}

export const reducer = (state = initState, action={}) => {
    switch (action.type) {
        case 'plus':
            return {...state, count: state.count+1}
        case 'minus':
            return {...state, count: state.count-1}
        
        default:
            return {...state};
    }

}