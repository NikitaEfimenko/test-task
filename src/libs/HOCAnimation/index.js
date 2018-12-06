import React from "react"
import posed, { PoseGroup } from "react-pose"
import {
  groupInit,
  fadeInit
} from "./configs"

const withGroupAnimation = (ItemComponent, config = groupInit) => {
  const Item = posed.li(config)
  return ({ childrensProps, className, ...props }) => {
    return (
      <ul className={className}>
        <PoseGroup>
          {childrensProps.map(el => (
            <Item key={el}>
              <ItemComponent {...props}  />
            </Item>
          ))}
        </PoseGroup>
      </ul>
    )
  }
}
const withFadeAnimation = (Component, config = fadeInit) => {
  const Wrapper = posed.div(config)
  return props => {
    console.log(props.is)
    const is = typeof props.is == "undefined" ? true : props.is
    return (
      <PoseGroup>
        {is && (
          <Wrapper key="single-component-animation">
            <Component {...props} />
          </Wrapper>
        )}
      </PoseGroup>
    )
  }
}

export {
  withGroupAnimation,
  withFadeAnimation
}
