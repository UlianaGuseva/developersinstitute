import logo from './logo.svg';
import './App.css';
import React from 'react'
// import Language from './Language';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      languages : [
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
    ]}
  }

    incremCount = (name) =>{

    const lanToUpdate = this.state.languages.find((lang) => lang.name===name)
    const newCount = { ...lanToUpdate, votes:lanToUpdate.votes++}
    this.setState(newCount)
  }

    render(){
          return(
        <>
        {this.state.languages.map((lang, i) => 
        <div>
      <span>{lang.votes}  {lang.name}   </span>
      <span onClick={() => this.incremCount(lang.name)}>Click here</span>
      {/* <span> {this.state.languages[0].name}</span>   
      <button onClick={this.incremCount()}>Vote</button> */}
      </div>)}
        </>
      ) 
    }
}

export default App;
