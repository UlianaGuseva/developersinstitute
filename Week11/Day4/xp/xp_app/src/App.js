import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileScreen from './components/ProfileScreen';
import Homescreen from './components/Homescreen';
import ShopScreen from './components/ShopScreen';
import PostList from './components/PostList';

import ErrorBoundary from './components/ErrorBoundary';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

async function fetchData (data){
  try{
   const res = await fetch(`https://webhook.site/a0e5179e-76c8-473f-8753-af13d7677b86`, {
      
   method: 'POST',
    headers: {
        'Content-type':'application/json',
        'Access-Control-Allow-Origin': "*"
    },
    body:JSON.stringify({data})
   })
  
   const mydata = await res.json()
   console.log(mydata);
} catch(e){
   console.log(e);
}
} 


function App() {
  let data = {key1: 'myusername',
  email: 'mymail@gmail.com',
  name: 'Isaac',
  lastname: 'Doe',
  age: 27}
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to={'/'} aria-current="page" href="#"> Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/profile'}> Profile </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/shop'}> Shop </NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<div>
  <button onClick={(e) => fetchData(data)}>FETCH DATA</button>
</div>
<div className="App">
  <PostList/>
</div>
<div >
  <Example1/><hr/>

  <Example2/><hr/>

  <Example3/><hr/>
</div>
<div>

</div>


<Routes>

    <Route path='/' element={<ErrorBoundary><Homescreen/></ErrorBoundary>}/>

            

    <Route path='/profile' element={<ErrorBoundary><ProfileScreen/></ErrorBoundary>}/>

          


    <Route path='/shop' element={<ErrorBoundary><ShopScreen/></ErrorBoundary>}/>

        
</Routes>
    </div>
  );
}

export default App;
