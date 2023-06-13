import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(){
        super()
        this.state = {
            hasError:false,
            error : null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo){
        console.log('error', error);
        console.log('errorInfo', errorInfo);
        this.setState({hasError:true, error:error, errorInfo:errorInfo})
        // write errors in a log file, send msg to support team
    }
    render(){
        if(this.state.hasError){
            return(
                <div>
                    smth went wrong. we are fixing the problem <br/>
                    {this.state.error.message}
                </div>
            )
        }
        return this.props.children
    }
}
export default ErrorBoundary