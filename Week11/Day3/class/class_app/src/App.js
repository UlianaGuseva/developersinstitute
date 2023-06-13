import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
// import Parent from './components/Parent';
// import Child from './components/Child';
import Counter from './components/Counter';
import ErrorBoundary from './components/ErrorBoundary';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Parent username='admin'>
//         <Child/>
//         </Parent>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <Counter/>
//         <Counter/>
     
//       </header>
//     </div>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ErrorBoundary>
//           <Counter/> 
//           <Counter/>  
//         </ErrorBoundary>

//         <ErrorBoundary>
//           <Counter/>  
//         </ErrorBoundary>

//         <ErrorBoundary>
//           <Counter/>  
//         </ErrorBoundary>
        
//         <Counter/> 
     
//       </header>
//     </div>
//   );
// }

function App() {
  const [name, setName] = useState('John')
  
  const handleSubmit =(e) => {
    e.preventDefault()
    // const form = e.target
    // const formData = new FormData(form)
    // console.log('formdara: ',formData);
    // // you can pass formData
    // // fetch('/some-api', {method:form.method, body:formData})
    // fetch('/some-api',{method:form.method,
    //   body:{name: e.target.name.value}
    // } )

    // // or with plain Object
    // const formJson = Object.fromEntries(formData.entries())
    // console.log(formJson);
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit} method='POST'>
          name: <input type='text' name='name' value={name} 
          onChange={(e)=> setName(e.target.value)}/>
          <input type='submit' value='send'/>
        </form>
     {name}
      </header>
    </div>
  );
}

export default App;
