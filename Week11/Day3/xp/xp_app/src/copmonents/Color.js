import React from 'react'
import Child from './Child'

class Color extends React.Component {
    constructor(){
    super()
    this.state = {
        favoriteColor: "red",
        show: true
    }
    }

    changeShow = ()=> {
        this.setState({show:false})
    }
    componentDidMount = () => {
        setTimeout(()=>this.setState({favoriteColor:'yellow'}), 5000) 
    }

    changeColor = ()=> {
        this.setState({favoriteColor:'blue'})
    }
    
    shouldComponentUpdate(){
         return true
        // return false 
    }

    componentDidUpdate(){
        console.log(`component did update to ${this.state.favoriteColor}`);
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(`Before color was ${prevState.favoriteColor}`)
    }
   
    render(){
  
           return(
            <div>
                <h1>My favourite color is {this.state.favoriteColor}.</h1>
                <button onClick={(e)=> this.changeColor(e)}>Button</button>
                {this.state.show && <Child />}
                <button onClick={(e)=> this.changeShow(e)}>Delete Hello</button>
            </div>
          ) 
        
        
       }
}

export default Color