import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';


function App() {
  return (
    <div>  
        <MovieList/>
        <hr/>
        <MovieDetails/>
    </div>
  );
}

export default App;
