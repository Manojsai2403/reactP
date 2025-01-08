import "./App.css";
import App1 from "./App1.js";
import App2 from "./App2.js";
import App3 from "./App3.js";
import Har from "./Har.js";
function App(props) {
  const flg=props.flg
  console.log(props.flg)
  if(flg) {
  // return (<App2/>)  
    //return (<App2 name='Mike' age='70'/>)
    //return (<App3 name="manoj"/>)
    return (<Har/>)
  } else {
  return (<App1/>)
  }
}

export default App;
