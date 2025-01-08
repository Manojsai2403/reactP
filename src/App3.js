import React from 'react'

export default function App3(props) {
    const greet= () =>{
        alert("hello World");
    }
    const greet1= (value) =>{
        alert(value);
    }
    const greet2= (value) =>{
      alert(value);
    }
    const greet3= (value) =>{
      //const str="Hello"
      alert(`Hello ${value}`);
    }
  return (
    <div>
      <button onClick={greet}><h2>Greet</h2></button>
      <hr></hr>
      <button onClick={() =>greet1(`hello ${props.name}`)}><h2>Greet2</h2></button>
      name={props.name}
      <input type='text' onChange ={(e)=>greet2(e.target.value)}></input>
      <input type='text' onChange ={(e)=>greet3(e.target.value)}></input>
    </div>
  )
}
