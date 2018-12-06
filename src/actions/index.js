import {
	ADD_IMAGE,
	DEL_IMAGE,
	INIT_IMAGE
} from '../constants'

const addImage = () => {
	return { type: ADD_IMAGE }
}

const delImage = () => {
	return { type: DEL_IMAGE }
}

const initImage = (img) => {
	return { type: INIT_IMAGE, payload: img }
}

const loadImage = (url) =>  dispatch => {
	fetch(url)
    .then(res => res.blob())
    .then(blob => URL.createObjectURL(blob))
    .then(img => dispatch(initImage(img)))
    .catch(err => console.log(err))
}

export {
	addImage,
	delImage,
	loadImage
}