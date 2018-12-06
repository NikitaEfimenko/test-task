import React from 'react'
import { Button, Container } from 'reactstrap'

const IncDecButtons = ({incrementCb, decrementCb, ...props}) => 
	<Container {...props}>
    <Button color='success' onClick={incrementCb}>
    	+
    </Button>
    <Button color='danger' onClick={decrementCb}>
        -
    </Button>
  </Container>


export {
	IncDecButtons
}
