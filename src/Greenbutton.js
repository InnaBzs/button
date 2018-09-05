import React, { Component } from "react";

class SetButtonStyleGreen extends Component {
    constructor(props) {
        super(props);}
    render(){
        return (<button className="green" onClick={props.onClick}>notActive</button>);
    }
}
export default  SetButtonStyleGreen;