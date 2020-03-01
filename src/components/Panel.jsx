import React, { Component } from 'react';
import Button from './Button';

class Panel extends Component {
    state = {  }

    handleClick = (name) => {
        this.props.clickHandler(name);
    }

    render() { 
        return (
            <div>
                <div className="panel-row">
                    <Button name="C" clickHandler={this.handleClick} />
                    <Button name="CE" clickHandler={this.handleClick} />
                    <Button name="+/-" clickHandler={this.handleClick} />
                    <Button name="Bk" clickHandler={this.handleClick} />
                </div>
                <div className="panel-row">
                    <Button name="7" clickHandler={this.handleClick} />
                    <Button name="8" clickHandler={this.handleClick} />
                    <Button name="9" clickHandler={this.handleClick} />
                    <Button name="÷" clickHandler={this.handleClick} />
                </div>
                <div className="panel-row">
                    <Button name="4" clickHandler={this.handleClick} />
                    <Button name="5" clickHandler={this.handleClick} />
                    <Button name="6" clickHandler={this.handleClick} />
                    <Button name="x" clickHandler={this.handleClick} />
                </div>
                <div className="panel-row">
                    <Button name="1" clickHandler={this.handleClick} />
                    <Button name="2" clickHandler={this.handleClick} />
                    <Button name="3" clickHandler={this.handleClick} />
                    <Button name="-" clickHandler={this.handleClick} />
                </div>
                <div className="panel-row">
                    <Button name="0" clickHandler={this.handleClick} />
                    <Button name="." clickHandler={this.handleClick} />
                    <Button name="=" clickHandler={this.handleClick} />
                    <Button name="+" clickHandler={this.handleClick} />
                </div>
            </div>
        );
    }
}
 
export default Panel;