import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/main.css";
import App from './App.js';

import { Provider } from 'react-redux'; //провайдер связывает хранилище с компонентами
import { createStore } from 'redux'; //хранилище редакс
import allReducer from './reducers/contain_reduce'; //наши файлы хранилища

//хранилище с контейнерам и файлам в нем - contain_reduce.js помещаем внутрь
const store = createStore(allReducer);

ReactDOM.render(  //все компонентны в Provaider будут иметь доступ к хранилищу через store
<Provider store={store}>
	<App />
</Provider>, 
	
document.getElementById('root'));