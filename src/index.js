import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App15 from "./App15";
import App16 from "./App16";
import App17 from "./App17";
const sqfunction =(n)=>{
    return n*n;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App flg={true}/>);
//root.render(<App14 marks={[25,35,45]}/>);
//root.render(<App15 result={{'manoj':30,'nani':20}}/>)//to send object
//root.render(<Main1 flag={false} />)
//root.render(<App5 name="nani"/>);
root.render(
     <>
     <App16 val={5} fn={sqfunction}/>
     <App17 val={7} fn={sqfunction}/>
     </>
     );//fragment creation 