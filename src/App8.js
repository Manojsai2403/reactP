import React from 'react'

export default function App8() {
    const [value, setvalue]=React.useState(0);
    const [result, setresult]=React.useState();
    function calc() {
      setresult(value*value)
    }
   return (
    <div>
      <input type='text'onChange={(e)=>setvalue(e.target.value)}></input>
      <button onClick={calc}>submit</button>
      <hr></hr>
      you entered {value}the result is {result}
    </div>
  )
}
