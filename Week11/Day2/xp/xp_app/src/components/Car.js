import React from 'react'
import Garage from './Garage'

class Car extends React.Component {
    constructor(props){
        super(props)
        this.state = {color: 'red'}
    }
    render(){
        return(
            <>
            <h1>This car is {this.state.color} {this.props.carinfo.model} </h1>
            <Garage size='small'/>
            </>
            
        )
    }
}
export default Car