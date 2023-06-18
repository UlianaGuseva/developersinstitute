import {useState} from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { plusOne, minusOne } from "../redux/actions";

// const Counter = (props) => {
//     // const [count, setCount] = useState(0)
//     return (
//         // const count = useSelector((state) => state.count)
//         // const dispatch = useDispatch()
//         <>
//         <button onClick={props.handlePlusOne}>+</button>
//         {props.count}
//         <button onClick={props.handleMinusOne}>-</button>
//         </>
//     )
// }
// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//       count: state.count,
//     }
//   }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlusOne : ()=> {dispatch(plusOne())},
//         handleMinusOne: ()=> {dispatch(minusOne())}
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter) 


const Counter = (props) => {
    // const [count, setCount] = useState(0)
    const count = useSelector((state) => state.count)
        const dispatch = useDispatch()
    return (
        
        <>
        <button onClick={()=>dispatch(plusOne())}>+</button>
        {count}
        <button onClick={()=>dispatch(minusOne())}>-</button>
        </>
    )
}

export default Counter