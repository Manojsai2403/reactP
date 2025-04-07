import React from 'react'
import App11 from './App11'

export default function Main() {
  const [flag,setFlag] =React.useState();

  return (
    <div>
      <button onClick={()=>setFlag(true)}>Component1</button>
      <button onClick={()=>setFlag(false)}>Component2</button>
      <App11 flag={flag} />
    </div>
  )
}
