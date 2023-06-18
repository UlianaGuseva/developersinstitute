import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(){
        super()
        this.state = {
            hasError : false,
            error : null
        }
    }

    componentDidCatch(error){
        this.setState({error:error, hasError:true})
    }
    render(){
        if(this.state.hasError){
            return(
                <div>
                    {this.state.error.message}
                </div>
            )
        }
        return this.props.children
    }
}
export default ErrorBoundary