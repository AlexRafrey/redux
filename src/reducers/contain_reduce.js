//здесь лежал все файлы хранилища в combineReducers
import { combineReducers } from "redux"
import Car from "./Car"
import Music from "./Music"
import CarActive from "./CarActive"

const allReducer = combineReducers({
	Car: Car, //ключ - файл хранилища
	Music: Music, 
	CarActive: CarActive
})

export default allReducer