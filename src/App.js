import "./App.css";
import App1 from "./App1.js";
import App2 from "./App2.js";
import App14 from "./App14.js";
import Login from "./Login.js";
function App(props) {
  const flg=props.flg
  console.log(props.flg)
  if(flg) {
  // return (<App2/>)  
    //return (<App2 name='kalyan' age='70'/>)
    //return (<App3 name="manoj"/>)
    return (<App14/>)
  } else {
  return (<App1/>)
  }
}

export default App;
