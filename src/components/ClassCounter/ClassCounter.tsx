import React from 'react';

class ClassCounter extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        this.setState({count: this.state.count + 1})
    }

    decrement(){
        this.setState({count: this.state.count - 1})
    }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>INCREMENT</button>
                <button onClick={this.decrement}>DECREMENT</button>
            </div>
        )
    }
}

export default ClassCounter;