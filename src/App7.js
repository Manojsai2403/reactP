import React from 'react'

export default function Har() {
    const [count1, setCount] = React.useState(0);//hook
    const [count, set] = React.useState(0);//hook
  function onclickhandler() {
    setCount(count1+1);
  }
  return (
    <div>
    <div>
      <button id='btn' onClick={onclickhandler}> Counter {count1}</button>
    </div>
    <div>
        <button onClick={()=>set(count-1)}>-</button>
        {count}
        <button onClick={()=>set(count+1)}>+</button>
    </div>
    </div>
  )
}