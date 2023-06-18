import { connect } from 'react-redux'
import { INCREASE_COUNT, DECREASE_COUNT } from "../actions";

const Counter = (props) => {
    return (
        <>
        <button onClick={props.handlePlusOne}>+</button>
        {props.count}
        <button onClick={props.handleMinusOne}>-</button>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
      count: state.count,
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        handlePlusOne : ()=> {dispatch(INCREASE_COUNT())},
        handleMinusOne: ()=> {dispatch(DECREASE_COUNT())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter) 

