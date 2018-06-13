//вызывается при событии и записывает событие в базу, а car-active.js будет искать нужный type через  switch
const outNameCar = (car) =>{
	return{
		type: 'CAR_SELECTED', //любое название
		payload: car //передать объект
	}	
}
export default { outNameCar };