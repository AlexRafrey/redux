import React, {Component} from 'react';

export default class Input extends Component{
	state = {
	}
	handlerClick = (event) => {
		return this.props.setYear(event.target.textContent)
	}
	render(){
		return(
			<div>
				<button onClick={this.handlerClick}>1975</button>
				<button onClick={this.handlerClick}>1999</button>
				<button onClick={this.handlerClick}>2018</button>
				<p>This year has been chosen - {this.props.year} </p>
			</div>
		);
	}	
}
