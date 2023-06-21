import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import { onAgeDown, onAgeUp } from './redux/actions';

function App(props) {

  const logAction = (store) => (next) => (action) => {
    // Our middleware
    console.log("---IN THE MIDDLEWARE---")
    console.log(`Redux Log:`, action)
    // call the next function
    next(action);
}
  return (
    <div className="App">
      <span>{props.age}</span>
      <button onClick={props.onAgeUp}>Age Up</button>
      <button onClick={props.onAgeDown}>Age Down</button>
    </div>
  );

}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      age: state.age,
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp : ()=> {dispatch(onAgeUp())},
        onAgeDown: ()=> {dispatch(onAgeDown())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App) 
