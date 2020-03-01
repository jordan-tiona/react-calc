import React, { Component } from 'react';
import './App.css';
import Panel from './Panel';
import Display from './Display';
import calculate from '../helper/calculate';

class App extends Component {
    state = {
        total: null,
        operand: null,
        operation: null
    };

    handleClick = (name) => {
        this.setState(calculate(this.state, name));
    }

    render() { 
        return (
            <div className="app">
                <Display value={this.state.operand || this.state.total || '0'}/>
                <Panel clickHandler={this.handleClick}/>
            </div>
        );
    }
}
 
export default App;