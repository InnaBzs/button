import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };

        this.buttonOn = this.buttonOn.bind(this);
        this.buttonOff = this.buttonOff.bind(this);
    }

    buttonOn() {
        this.setState({active: true});
    }
        
    buttonOff() {
        this.setState({active: false});
    }

    render() { 
        const isActive = this.state.active;
        let button =null;
        if(isActive) {
            button = <SetButtonStyleRed onClick={this.buttonOff} /> 
        } else {
            button = <SetButtonStyleGreen onClick={this.buttonOn} /> 
        }
        return (
            <div>
             {button}
            </div>
        )
    }
}

function SetButtonStyleRed (props) {
        return (
            <div>
                <button className="red" onClick={props.onClick}>Active</button>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </div>
            );
}

function SetButtonStyleGreen (props) {
    return (<button className="green" onClick={props.onClick}>notActive</button>);
}
export default  Button;
     