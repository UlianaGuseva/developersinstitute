export const searchRobotsFunc = (str) => {
    return {
        type:"SEARCH",
        payload: str
    }
}
export const getRobot = (data) => {

    return {type:'ROBOTS', payload: data}
}

export const getRobotsApi = () => {
    return(dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(data => {
        dispatch(getRobot(data))
        })
    }
}


