import logo from './logo.svg';
import './App.css';
import BuggyCounter from './copmonents/BuggyCounter';
import ErrorBoundary from './copmonents/ErrorBoundary';
import Color from './copmonents/Color';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ErrorBoundary>
//         <BuggyCounter/>
//         <BuggyCounter/>
//         </ErrorBoundary>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ErrorBoundary>
//         <BuggyCounter/>
//         </ErrorBoundary>

//         <ErrorBoundary>
//         <BuggyCounter/>
//         </ErrorBoundary>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
      
//         <BuggyCounter/>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Color/>
      </header>
    </div>
  );
}

export default App;
