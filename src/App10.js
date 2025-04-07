import React from 'react'

export default function App10() {
    const [Email,setEmail] =React.useState();
    const [pass,setpass] =React.useState();
    const [result,setresult]=React.useState();
    const validate=()=>{
         if(Email==="manoj@gmail.com" && pass==="1234"){
              setresult("welcome");
         }else {
            setresult("Access Denied");
         }
    }
  return (
    <div>
        <h2>Login from</h2>
      <p>
        <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
      </p>
      <p>
        <input type='Password' placeholder='password'onChange={(e)=>setpass(e.target.value)}></input>
      </p>
      <p><button onClick={validate}>Login</button></p>
      {result}
    </div>
  )
}
