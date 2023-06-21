

export const increment = () => {
    return {
        type:'INCREMENT',
        
    }
}

export const decrement = () => {
    return {
        type:'DECREMENT',
        
    }
}


export const incrementTimeout = () => dispatch => {
    setTimeout(()=>{
dispatch({type: 'TIMEOUT'})
    }, 1000)
}