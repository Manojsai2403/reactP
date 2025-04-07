import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
export default function Main1(props) {
  const flag=props.flag;
  return (
    <>{flag? <Component1/> :<Component2/>}</>
  )
}
