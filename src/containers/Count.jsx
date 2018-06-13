import React, {Component} from 'react';
import {bindActionCreators} from 'redux'; //для создания действия
import {connect} from 'react-redux';
import outNameCar from '../actions/act_outNameCar'; //вызывается при событии

class Count extends Component{
	state = {
	}
	showList = () =>{
		return this.props.cars.map((item, index)=>{
			return (
			<li key={index} onClick={() => this.props.outNameCar(item) }> 
				{item.name} 
			</li> //передаем в хранилище параметр item
			);
		});
	}//выводим в  render список
	render(){
		return(
		<ul>
			{this.showList() }
		</ul>
		)
	}
}

//берет данные из хранилища и дает доступ брать их в этом модуле через this.props.KEY
function mapStateToProps(params) { 
	return {
		cars: params.Car //произвольный ключ cars = Car.js из хранилища allReducer  
	}
}
function mapDispatchToProps(dispatch){ 
	return (
		bindActionCreators(outNameCar, dispatch) //приводит outNameCar к свойству
	)
}
//соединяем Count с хранилищем в функции mapStateToProps, matchDispatchToProps - передает событие в хранилище
export default connect(mapStateToProps,
	mapDispatchToProps)(Count); 