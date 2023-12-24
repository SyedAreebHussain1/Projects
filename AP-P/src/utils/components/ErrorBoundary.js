import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo,
        })
        // You can also log the error to an error reporting service
        // or perform any other necessary actions.
    }

    render() {
        if (this.state.hasError) {
            // You can customize the error UI as per your requirements
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <p>{this.state.error.toString()}</p>
                    <p>{this.state.errorInfo.componentStack}</p>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
