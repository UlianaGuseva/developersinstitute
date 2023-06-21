import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementTimeout } from '../redux/actions'

const Counter = () => {

    const count = useSelector(store => store.count)
    const dispatch = useDispatch()
    const incrementIfOdd = (count) =>{
        if(!(count%2===0)){
            dispatch(increment())
        }
    }
    const incrementasync = () => {
        dispatch(incrementTimeout())
    }
    
    return (
        <>
        <p>Clicked {count} times</p>
        <button onClick={()=> dispatch(increment())}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
        <button onClick={()=>incrementIfOdd()}>incremet if Odd</button>
        <button onClick={()=>incrementasync()}>increment async</button>
        </>
    )
}

export default Counter