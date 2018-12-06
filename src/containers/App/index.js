import React, { Component } from 'react';
import { Container } from 'reactstrap'
import ImageComponent  from '../ImageComponent'
import './App.css'
import {
  imageSelector
} from '../../selectors'
import {
  loadImage
} from '../../actions'
import { connect } from 'react-redux'

const backendAPI = `https://picsum.photos/100/100/?random` 

class App extends Component{
  static defaultProps = {
    loadImage: (x) => x ,
    image: {}
  }
  componentDidMount(){
    this.props.loadImage(backendAPI)
  }
  render(){
    return (
      <Container className='d-flex w-100 h-100 justify-content-center align-items-center'>
        <ImageComponent image={this.props.image}/>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    image: imageSelector(state)
  }
}
const mapDispatchToProps = dispatch => {
    return {
      loadImage: (url) => dispatch(loadImage(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
