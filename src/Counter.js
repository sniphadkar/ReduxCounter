import React, { Component } from 'react';
import { connect } from 'react-redux';


const container = {
    display: 'flex'
}
const button = {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px',
    margin: '50px'
}
class Counter extends Component {
    
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT_COUNTER' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT_COUNTER' });
    }

    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <h1>{this.props.count}</h1>
                    <div style={container}>
                        <button onClick={this.increment} type="button" style={button}>+</button>
                        <button onClick={this.decrement} type="button" style={button}>-</button>
                    </div>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);