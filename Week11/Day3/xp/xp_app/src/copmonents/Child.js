import React from 'react'

class Child extends React.Component {
    constructor(props){
    super(props)
    }
    componentWillUnmount(){
        alert('component is about to deleted');
    }
   
  
    render(){
        return(
           <>
           <h1>Hello world</h1>
           
           </> 
          )
       }
}

export default Child