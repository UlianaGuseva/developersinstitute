import React from 'react'
import {connect} from 'react-redux'
import './App.css';
import Test from './components/Test';
import Counter from './components/Counter';
import { changePropOne } from './redux/actions';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      property_one: 'text one'
    }
  } 
  render(){
    return (
        <div className="App">
          <header className="App-header">
            {/* <h2>Simple Redux Example</h2>
            <div>
              Change prop One: <input onChange={this.props.changeOne} />
            </div>
            <div>{this.props.a}</div>
            <Test title='test'/> */}

            <Counter/>
          </header>
        </div>
  )}
  
}
const mapStateToProps = (state) => {
    console.log('store=>', state);
    return {
      a: state.property_one
    }
  }

const mapDispatchToProps = (dispatch) => {
    
    return {
      changeOne: (e) => dispatch(changePropOne(e.target.value))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(App) ;


// import {useState} from 'react'
// import './App.css';
// import Test from './components/Test';


// function App() {
//   const [title, setTitle] = useState('My title')
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Test title={title} setTitle={setTitle}/>
//       </header>
//     </div>
//   );
// }

// export default App;
