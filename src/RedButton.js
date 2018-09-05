import React, { Component } from "react";

class SetButtonStyleRed extends Component {
    constructor(props) {
        super(props);}
    render(){
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
}
export default  SetButtonStyleRed;

