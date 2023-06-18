import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
           <Counter  />
        </Provider>
       
      </header>
    </div>
  );
}

export default App;
