import React from 'react'

export default function App5(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  )
}

App5.defaultProps ={
  name:"Manoj"
}
