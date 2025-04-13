import React from 'react'
//array as a property
export default function App14(props) {//here we can name any like 'a'
  let sum = props.marks.reduce((total,value)=>{
   return total + value;
  });
  return (
    <div>
      App14
      sum={sum}
    </div>
  )
}

