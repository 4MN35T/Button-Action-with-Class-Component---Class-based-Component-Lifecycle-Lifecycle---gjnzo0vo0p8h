import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};

    render() {
    	return(
    		<div id="main">
		{
    		(displayMessage === false)?(null):(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
    	}
		<button id="click" onClick={()=>setDisplayMessage(true)}>Click me</button>
    		</div>
    	);
    }
}


export default App;

