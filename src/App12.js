import React from 'react'

export default function App12() {
    const arr =["rice","sugar","wheat"]
  return (
    <ul>
        {arr.map((item)=>(
            <li>{item}</li>
        ))}
    </ul>
  )
}
