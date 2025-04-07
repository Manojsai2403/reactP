import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import Main1 from './Main1';
//import App3 from "./App3";
//import App5 from "./App5";
//import Login from "./Login"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App flg={true}/>);
//root.render(<Main1 flag={false} />)
//root.render(<App5 name="nani"/>);
//root.render(<Login/>);