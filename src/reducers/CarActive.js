//находит в событие нужный  type и возвращает payload
export default function (params = null, action) { 
	switch (action.type) {
		case 'CAR_SELECTED':
		return action.payload;
	default:
		return params;		
	}
}