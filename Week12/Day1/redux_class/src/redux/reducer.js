const initState = {
    property_one:'Hello from Store',
    property_two: 'Blalala',
    count: 0
}

export const reducer = (state = initState, action={}) => {
    switch (action.type) {
        case 'PROP_ONE':
            return {...state, property_one:action.payload}
        // case 'PROP_TWO':
            
        //     break;
        case 'plus':
            return {...state, count: state.count+1}
        case 'minus':
            return {...state, count: state.count-1}
        
        default:
            return {...state};
    }

}