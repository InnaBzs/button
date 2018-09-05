import React, { Component } from "react";
import Header from './header';
import Button from './Button';
import Footer from './Footer';
 
class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Button/>
                <Footer/>
            </div>
        )
    }
}
export default  App;