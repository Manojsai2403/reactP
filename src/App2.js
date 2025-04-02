import React from 'react'
import "./App2.css"
export default function App2(props) {
  let city=`hyd`
  let a=10
  let b=20
  return (
    <div className='App2'>
      <h3>enjoy learning {props.name} {props.a}</h3>
      <p className='txtstyle'>
        naveen was hijacked by his father 
         at home  to do homework 
        age: {props.age} 
        city: {city}
      </p>
    </div>
  )
}
