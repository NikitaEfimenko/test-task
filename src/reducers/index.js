import {
	ADD_IMAGE,
	DEL_IMAGE,
	INIT_IMAGE
} from '../constants'

const initState = {
	count: 0,
	image: null
}

export const reducer = (state = initState, action ) => {
	switch(action.type){
		case ADD_IMAGE:
			return {
				...state,
				count: state.count + 1
			}
		case DEL_IMAGE:
			return {
				...state,
				count: state.count ? state.count - 1 : state.count
			}
		case INIT_IMAGE:
			return {
				...state,
				image: action.payload
			}
		default:
			return state
	}
}