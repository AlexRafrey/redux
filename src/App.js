import React, {Component} from 'react';
import Count from "./containers/Count";
import Details from "./containers/Details";
//модули роутер-ссылок и история для всех устройств + css-components
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import styled from 'styled-components';
// import { connect } from 'react-redux';

class App extends Component{
	state = {
	}
	start = (par) =>{
	}
	
	render(){
		return(
			<div className="app" >
				<div>
					<h2>Cars:</h2>
						<Count />
					<hr/>
					<h3>Details: </h3>
						<Details />
				</div>
				
			</div>
		);
	}
}

export default App;