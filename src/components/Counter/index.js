import React from 'react'
import { Container } from 'reactstrap'
import './Counter.css'

const Counter = ({count}) => 
<Container className=' text-center counter-background'>
	<p className='counter'> { count } </p>
 </Container>


export {
 Counter
}