// import logo from './logo.svg';
import './App.css';
import Car from './components/Car';

const carinfo = {name: "Ford", model: "Mustang"}

function App() {
  return (
    <Car carinfo={carinfo}/>
  );
}

export default App;
