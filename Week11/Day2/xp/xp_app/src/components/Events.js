import React from 'react'

class Events extends React.Component {
    constructor(){
    super()
    this.state = {
        isToggleOn : true,
        buttonLabel : 'ON'
    }
    }
    clickMe = () => {
        alert('I was clicked')
      }

    handleKeyDown = (e) => {
        if(e.key==='Enter'){
            alert(`The Enter was pressed, your input is: ${e.target.value}`)
        }
    }

    turnOnOff = () => {
        if(this.state.isToggleOn===true){
            this.setState({isToggleOn:false, buttonLabel:'OFF'})

        }
        else {
            this.setState({isToggleOn:true, buttonLabel:'ON'})
        }
        }
   render(){
    return(
        <div>
        <button onClick={(e) => this.clickMe(e)}>button</button><br/>
        <input onKeyDown={(e) => this.handleKeyDown(e)}/><br/>
        <button onClick={(e)=> this.turnOnOff(e)}>{this.state.buttonLabel}</button>
        </div>
      )
   }
}

export default Events