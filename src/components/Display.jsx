import React, { Component } from 'react';

class Display extends Component {
    state = {  }
    render() { 
        return (
            <div className="display">
                <div>{this.props.value}</div>
            </div>
        );
    }
}
 
export default Display;