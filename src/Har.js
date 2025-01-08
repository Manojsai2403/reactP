import React from 'react'

export default function Har() {
    const [count, setCount] = React.useState(0);//hook
  function onclickhandler() {
    setCount(count+1);
  }
  return (
    <div>
      <button id='btn' onClick={onclickhandler}> Counter {count}</button>
    </div>
  )
}
