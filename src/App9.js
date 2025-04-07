import React from 'react'

export default function App9() {
    const [length,setlength]=React.useState(0);
    const [Breadth,setBreadth]=React.useState(0);
    const [area,setarea] =React.useState(0);
    const calc =()=>{
        setarea(length*Breadth)
    }
  return (
    <div>
      <p><input type='text'onChange={(e)=>setlength(e.target.value)}/></p>
      <p><input type='text'onChange={(e)=>setBreadth(e.target.value)}/></p>
      <p><button onClick={calc}>Find Area</button></p>
      {area}
    </div>
  )
}
