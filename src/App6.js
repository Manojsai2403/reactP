import React from 'react'
import './App6.css' 
export default function App6() {
  const mystyle={
      backgroundColor:"red"
  }
  return (
    <div>
      <h1 style={{backgroundColor:'yellow'}}>hello Manoj</h1>
      <h1 style={mystyle}>hello rosie</h1>
      <h1 className='style1'>hello chintu</h1>
    </div>
  )
}
