import React, { Component } from 'react'

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    increment() {
        this.setState(state => ({
            count: state.count + 1
        }))
    }
    
    
    decrement() {
        this.setState(state => ({
            count: state.count - 1
        }))
    }


    reset() {
        this.setState({
            count: 0
        })
    }
    // handleClick() {
    //     this.setState(state =>({visibility: !state.visibility}));
    // }


    render() {
        return(
            <div>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
                <h1>Current: {this.state.count}</h1>
            </div>
        )
    }
    

    // render() {
    //     if (this.state.visibility){
    //         return (
    //             <div>
    //                 <h1>Now Visibility </h1>
    //                 <button onClick={this.handleClick}>Click</button>
    //             </div>
    //     )
    //     } else {
    //         return (
    //             <div>
    //                  <button onClick={this.handleClick}>Click</button>
    //             </div>
    //         )
    //     }
    // }
// }
}


Ccomponent.defaultProps = { name: 'John'}