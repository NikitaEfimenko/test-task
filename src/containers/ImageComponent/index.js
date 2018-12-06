import React from 'react'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import { withGroupAnimation } from '../../libs/HOCAnimation'
import {
  Image,
  Counter,
  IncDecButtons,
  Loading
} from '../../components'
import {
  addImage,
  delImage
} from '../../actions'
import { countSelector } from '../../selectors'

const AnimatedImageList = withGroupAnimation(Image)

export const ImageComponent = ({image, ...props}) => {
	return (
		image ?
    	<Container className='d-grid justify-content-around align-content-center'>
    		<hr/>
    		<AnimatedImageList className='d-flex justify-content-around' image={image} childrensProps={[...Array(props.count).keys()]} /> 
     		<hr/>
     		<Counter count={props.count}/>
     		<hr/>
     		<IncDecButtons className='d-flex justify-content-around' incrementCb={props.push} decrementCb={props.pop}/>
   		</Container>
    :<Loading/>
    )
 }

const mapStateToProps = state => { 
	return { count: countSelector(state) }
}

const mapDispatchToProps = dispatch => {
	return {
		push: () => dispatch(addImage()),
		pop: () => dispatch(delImage())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageComponent)
