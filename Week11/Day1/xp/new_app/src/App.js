import logo from './logo.svg';
import React from 'react';
import './App.css';
// import UserFavoriteColors from './UserFavoriteColors';
import Exercise4 from './Exercise4';

// function App(){
//   return <h1>Hello world!</h1>
// }

// const myelement = <h1>I Love JSX!</h1>
// function App(){
//   return <>{myelement}</>
// }


// const sum = 5+5
// function App(){
//   return <h1>React is {sum} times better with JSX</h1>
// }



// function App() {
//   const user = {
//     firstName: 'Bob',
//     lastName: 'Dylan',
//     favAnimals : ['Horse','Turtle','Elephant','Monkey']
//   };
//   return (
//     <div>
//       <div className="App">
//         <h3> {user.firstName}</h3>
//         <h3> {user.lastName}</h3>
//       </div>
     
//         <UserFavoriteColors animals={user.favAnimals} />
      
//     </div>
//   );
// }

function App() {
  return (
    <div>
      
        <Exercise4/>
    
    </div>
  );
}

export default App;
