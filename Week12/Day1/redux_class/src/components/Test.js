import { connect } from "react-redux"
import { changePropOne } from "../redux/actions";

const Test =(props) =>{
    return (
        <>
        <h1>{props.a}</h1>
        <h1>{props.a} {props.b}</h1>
        {/* <button onClick={()=> props.setTitle('Test Title')}>Change Title </button> */}
        
        <button onClick={props.change} >Change One</button>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      a: state.property_two,
      b: state.property_one
    }
  }
const mapDispatchToProps = (dispatch) => {
    return{
        change : () => {dispatch(changePropOne('hello from Test'))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test)