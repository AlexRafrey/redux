import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component{
	state = {
	}
	render(){
		if (!this.props.one_car) {
			return (<p>Choose a car</p>);
		}
		return(
		<div>
			<h2>{this.props.one_car.name}</h2>
			<img src={this.props.one_car.img} alt=""/> <br/>
			<p>speed: {this.props.one_car.speed}</p>
		</div>
		)
	}
}
//берет данные из активной базы, отсортированное событие
function mapStateToProps(params) {
	console.log(params.CarActive);
	return {
		one_car: params.CarActive 
	}
}

export default connect(mapStateToProps) (Details); 